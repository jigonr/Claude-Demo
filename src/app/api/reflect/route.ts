import Anthropic from "@anthropic-ai/sdk";
import { questions } from "@/data/questions";
import { jobs } from "@/data/jobs";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are a behavioral scientist analyzing a young person's career preferences based on their answers to an adversarial questionnaire. Your job is to surface what they revealed — especially what they didn't intend to reveal.

You will receive their answers to 22 questions (12 adversarial, 10 redirecting) and their computed preference vector across 9 dimensions. Analyze the PATTERN across answers, not individual responses.

Return exactly 4 reflections as a JSON array. Each reflection must be one of these types:
- "contradiction": Where their answers conflict with each other — they said one thing but revealed another
- "assumption": An unexamined belief about work/careers that their answers expose
- "surprise": Something unexpected their answers reveal about what they actually value
- "reframe": A new way to think about their career direction based on the data. You have access to real job postings — for reframe reflections, reference specific jobs that might surprise the user.

You have access to real job postings from the labor market. Use them to ground your "reframe" reflections in concrete opportunities the user likely hasn't considered.

Format your response as a JSON array of objects with these fields:
- id: a short kebab-case identifier
- title: a punchy 4-8 word title (warm, slightly provocative)
- body: 2-3 sentences of insight (intellectually curious tone, never preachy)
- type: one of "contradiction" | "assumption" | "surprise" | "reframe"
- relatedAnswers: array of question IDs that inform this reflection

Return ONLY the JSON array. No markdown fences, no explanation.`;

export async function POST(request: Request) {
  const { answers, preferences } = await request.json();

  // Build a summary of the user's answers for Claude
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

  const jobSummary = jobs
    .slice(0, 30)
    .map((j) => `${j.title} at ${j.company} (${j.category}) — ${j.location.city}, ${j.location.state} — $${(j.salary.min/1000).toFixed(0)}K-$${(j.salary.max/1000).toFixed(0)}K`)
    .join("\n");

  const userMessage = `Here are the user's answers:

${answerSummary}

Computed preference vector:
- Autonomy: ${preferences.autonomy.toFixed(2)} (-1 = wants structure, 1 = wants independence)
- Time Horizon: ${preferences.timeHorizon.toFixed(2)} (-1 = quick wins, 1 = long-term patience)
- Social Density: ${preferences.socialDensity.toFixed(2)} (-1 = solo, 1 = team-oriented)
- Risk Tolerance: ${preferences.riskTolerance.toFixed(2)} (-1 = risk-averse, 1 = risk-seeking)
- Cognitive Style: ${preferences.cognitiveStyle.toFixed(2)} (-1 = analytical/builder, 1 = creative/explorer)
- Income Weight: ${preferences.incomeWeight.toFixed(2)} (0-1, how much salary matters)
- Status Weight: ${preferences.statusWeight.toFixed(2)} (0-1, how much prestige matters)
- Meaning Weight: ${preferences.meaningWeight.toFixed(2)} (0-1, how much purpose matters)
- Geographic Flexibility: ${preferences.geographicFlex.toFixed(2)} (-1 = stay put, 1 = will go anywhere)

Available job postings:
${jobSummary}

Analyze the pattern across ALL answers. Look for contradictions, unexamined assumptions, surprises, and reframes.`;

  const stream = await client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 2048,
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
