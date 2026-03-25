import Anthropic from "@anthropic-ai/sdk";
import { questions } from "@/data/questions";
import fs from "fs";
import path from "path";

const client = new Anthropic();

interface JobPosting {
  id: string;
  title: string;
  category: string;
  company: string;
  industry: string;
  location: { city: string; state: string; country: string; remote: string };
  salary: { min: number; max: number; currency: string; period: string };
  description: string;
  responsibilities: string[];
  requirements: {
    education: string;
    experience_years: string;
    skills: string[];
    certifications: string[];
  };
  benefits: string[];
  employment_type: string;
  posted_date: string;
}

function loadJobPostings(): JobPosting[] {
  const jobDataDir = path.join(process.cwd(), "job_data");
  const files = fs.readdirSync(jobDataDir).filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const content = fs.readFileSync(path.join(jobDataDir, f), "utf-8");
    return JSON.parse(content) as JobPosting;
  });
}

function formatJobPosting(job: JobPosting): string {
  const salary = `$${(job.salary.min / 1000).toFixed(0)}K–$${(job.salary.max / 1000).toFixed(0)}K/year`;
  const remote = job.location.remote === "remote" ? "Remote" : job.location.remote === "hybrid" ? "Hybrid" : "On-site";
  return `**${job.title}** at ${job.company} (${job.industry})
  Location: ${job.location.city}, ${job.location.state} (${remote})
  Salary: ${salary}
  Requirements: ${job.requirements.education} | ${job.requirements.experience_years} years exp
  Key skills: ${job.requirements.skills.join(", ")}
  ${job.requirements.certifications.length > 0 ? `Certifications: ${job.requirements.certifications.join(", ")}` : ""}
  Description: ${job.description}
  Responsibilities: ${job.responsibilities.slice(0, 3).join("; ")}
  Benefits: ${job.benefits.slice(0, 3).join("; ")}`;
}

const SYSTEM_PROMPT = `You are Pathfinder's final advisor — a warm, brilliant career strategist who has just watched a young person reveal their true preferences through 22 carefully designed questions.

You have access to:
1. Their raw answers (including open-text confessions)
2. Their 9-dimensional preference vector (computed from their choices)
3. The AI reflections that surfaced contradictions and hidden patterns
4. Their top career matches with similarity scores
5. REAL JOB POSTINGS from actual companies that are currently hiring for roles relevant to their matches

YOUR JOB: Write a personalized, 4-5 paragraph final synthesis that feels like a letter from a mentor who truly gets them. This is the moment everything clicks — and you can point them to REAL opportunities.

STRUCTURE:
- **Paragraph 1 — "Here's who you actually are"**: Synthesize their preference vector into a vivid human portrait. Don't list dimensions — paint a picture of how they approach work, risk, meaning, and people. Reference specific answers that revealed this.
- **Paragraph 2 — "Here's what surprised us"**: Pull from the reflections. What contradictions or hidden patterns emerged? What do they think they want vs. what they actually revealed? Be direct but kind.
- **Paragraph 3 — "Here's where to look"**: Connect their profile to their top career matches. Explain WHY these careers fit — not just that they scored high, but what about this person's revealed nature makes each career a genuine fit. Name the top 2-3 careers specifically.
- **Paragraph 4 — "Here are real jobs you could apply to"**: Reference SPECIFIC job postings from the data provided. Name the company, the role, the location, and the salary. Explain why each posting is a good fit based on what you know about this person. Be concrete — "There's a Software Engineer I role at Stripe in Austin paying $85K-$110K that matches your preference for autonomy and technical problem-solving" is better than vague advice. Mention 2-3 specific postings.
- **Paragraph 5 — "Here's what to do this week"**: One concrete micro-experiment they can try in the next 7 days. Pick the most relevant one from their top match. End with something that sticks — a reframe, a challenge, a question to sit with.

CRITICAL RULES FOR JOB RECOMMENDATIONS:
- Only recommend jobs from the REAL JOB POSTINGS provided. Do not invent companies or positions.
- Include the company name, job title, city/state, and salary range for each recommendation.
- Explain the connection between the person's revealed preferences and why each specific posting fits them.
- If no job postings closely match their profile, be honest about it and suggest what kinds of roles to search for.

TONE: You're a brilliant friend who happens to know a lot about careers and behavioral science. Warm, direct, slightly irreverent. You can be funny. You can be uncomfortable. Never corporate, never preachy, never "Great job completing this assessment!"

Write in second person ("you"). Use their actual answers and open-text responses when possible — quoting them back to themselves is powerful.

Return ONLY the synthesis text. No JSON, no markdown headers, no formatting marks. Just flowing paragraphs.`;

export async function POST(request: Request) {
  const { answers, preferences, reflections, careerMatches } =
    await request.json();

  // Load all real job postings from job_data/
  const allJobs = loadJobPostings();

  // Build answer summary with question text
  const answerSummary = answers
    .map((a: { questionId: string; value: string | number | string[] }) => {
      const q = questions.find((q) => q.id === a.questionId);
      if (!q) return null;
      const optionLabel =
        q.options?.find((o) => o.id === a.value)?.label ?? a.value;
      return `Q: "${q.text}" → ${optionLabel}`;
    })
    .filter(Boolean)
    .join("\n");

  // Format reflections
  const reflectionSummary = reflections
    .map(
      (r: { type: string; title: string; body: string }) =>
        `[${r.type.toUpperCase()}] ${r.title}: ${r.body}`
    )
    .join("\n\n");

  // Format career matches
  const matchSummary = careerMatches
    .slice(0, 5)
    .map(
      (m: {
        career: {
          title: string;
          description: string;
          microExperiment: string;
          tags: string[];
        };
        score: number;
        matchExplanation: string;
      }) =>
        `${m.career.title} (${Math.round(m.score * 100)}% match): ${m.matchExplanation}\n  Tags: ${m.career.tags.join(", ")}\n  Description: ${m.career.description}\n  Micro-experiment: ${m.career.microExperiment}`
    )
    .join("\n\n");

  // Format all real job postings
  const jobPostingsSummary = allJobs.map(formatJobPosting).join("\n\n---\n\n");

  const userMessage = `Here is everything we know about this person:

=== THEIR ANSWERS ===
${answerSummary}

=== PREFERENCE VECTOR ===
- Autonomy: ${preferences.autonomy.toFixed(2)} (-1 = wants structure, 1 = wants independence)
- Time Horizon: ${preferences.timeHorizon.toFixed(2)} (-1 = quick wins, 1 = long-term patience)
- Social Density: ${preferences.socialDensity.toFixed(2)} (-1 = solo, 1 = team-oriented)
- Risk Tolerance: ${preferences.riskTolerance.toFixed(2)} (-1 = risk-averse, 1 = risk-seeking)
- Cognitive Style: ${preferences.cognitiveStyle.toFixed(2)} (-1 = analytical/builder, 1 = creative/explorer)
- Income Weight: ${preferences.incomeWeight.toFixed(2)} (0-1, how much salary matters)
- Status Weight: ${preferences.statusWeight.toFixed(2)} (0-1, how much prestige matters)
- Meaning Weight: ${preferences.meaningWeight.toFixed(2)} (0-1, how much purpose matters)
- Geographic Flexibility: ${preferences.geographicFlex.toFixed(2)} (-1 = stay put, 1 = will go anywhere)

=== AI REFLECTIONS (from earlier analysis) ===
${reflectionSummary}

=== TOP CAREER MATCHES ===
${matchSummary}

=== REAL JOB POSTINGS (currently hiring) ===
${jobPostingsSummary}

Write the final personalized synthesis for this person. You MUST reference specific job postings from the list above when recommending real opportunities.`;

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 3000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userMessage }],
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(event.delta.text)}\n\n`)
          );
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
