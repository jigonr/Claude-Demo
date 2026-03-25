import { Career } from "@/lib/types";

export const careers: Career[] = [
  {
    id: "ux-researcher",
    title: "UX Researcher",
    description:
      "You study how people actually behave — not how they say they behave — then use that data to design better products. Part psychologist, part detective, part translator between users and engineers.",
    dayInLife:
      "Morning: review session recordings from yesterday's usability tests. Midday: run a moderated interview with a user who can't find the checkout button. Afternoon: synthesize findings into a report that will change how the team builds the next feature.",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.4,
      socialDensity: 0.6,
      riskTolerance: -0.2,
      cognitiveStyle: 0.5,
      incomeWeight: 0.5,
      statusWeight: 0.3,
      meaningWeight: 0.7,
      geographicFlex: 0.4,
    },
    surpriseFactor:
      "Most people think UX is about making things pretty. It's actually about catching the moment a user's face falls — and figuring out why.",
    learningPath: [
      {
        title: "Learn research methods",
        description:
          "Take a course on qualitative and quantitative research methods. Google's UX Design Certificate on Coursera is a solid start.",
        timeframe: "2-3 months",
        resources: ["Coursera: Google UX Design Certificate", "Book: Just Enough Research by Erika Hall"],
      },
      {
        title: "Run your own study",
        description:
          "Pick any app you use daily. Recruit 5 friends. Watch them try to complete a task. Take notes. You just did UX research.",
        timeframe: "1-2 weeks",
      },
      {
        title: "Build a portfolio",
        description:
          "Document 2-3 research projects with clear problem statements, methods, findings, and recommendations.",
        timeframe: "1-2 months",
      },
    ],
    microExperiment:
      "This week: Watch someone over 60 try to use an app you love. Don't help them. Just observe and take notes. That discomfort you feel? That's the job.",
    optionValue: [
      "Can pivot to product management, design strategy, or data science",
      "Research skills transfer to consulting, academia, or market research",
    ],
    incomeTrajectory: [
      { year: 1, amount: 65000 },
      { year: 3, amount: 85000 },
      { year: 5, amount: 110000 },
      { year: 10, amount: 145000 },
    ],
    stories: [
      {
        name: "Maya",
        background: "Studied sociology, worked at a coffee shop for two years after graduating",
        journey: "Took a bootcamp, got an internship at a health-tech startup, now leads research at Spotify",
        currentRole: "Senior UX Researcher at Spotify",
      },
    ],
    tags: ["tech", "research", "people", "creative"],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description:
      "You turn messy spreadsheets and databases into stories that change decisions. The people who actually understand what the numbers mean — and can explain it to people who don't.",
    dayInLife:
      "Morning: pull sales data and notice a weird drop in the Midwest. Midday: dig into the data, find a pricing bug that's been costing the company $200K/month. Afternoon: present findings to the VP who had no idea.",
    dimensions: {
      autonomy: 0.1,
      timeHorizon: -0.2,
      socialDensity: -0.1,
      riskTolerance: -0.4,
      cognitiveStyle: -0.7,
      incomeWeight: 0.6,
      statusWeight: 0.4,
      meaningWeight: 0.3,
      geographicFlex: 0.5,
    },
    surpriseFactor:
      "The best analysts aren't math wizards — they're storytellers who happen to speak SQL. The skill gap isn't technical; it's communication.",
    learningPath: [
      {
        title: "Learn SQL + Excel",
        description: "SQL is the lingua franca. Excel is the Swiss Army knife. Master both before anything else.",
        timeframe: "1-2 months",
        resources: ["Mode Analytics SQL Tutorial", "Excel for Data Analysis (LinkedIn Learning)"],
      },
      {
        title: "Pick up Python or R",
        description: "For when spreadsheets aren't enough. Python (pandas) is the safer bet for job market demand.",
        timeframe: "2-3 months",
      },
      {
        title: "Do a real project",
        description:
          "Find a public dataset (Kaggle, government data), answer a question nobody asked, write it up as a blog post.",
        timeframe: "2-4 weeks",
      },
    ],
    microExperiment:
      "This week: Download your own Spotify or Netflix data (they let you export it). Find something surprising about your own behavior. If you enjoy the detective work, you'll enjoy this career.",
    optionValue: [
      "Natural stepping stone to data science, business intelligence, or product analytics",
      "Every industry needs analysts — healthcare, finance, tech, government, nonprofits",
    ],
    incomeTrajectory: [
      { year: 1, amount: 55000 },
      { year: 3, amount: 72000 },
      { year: 5, amount: 95000 },
      { year: 10, amount: 130000 },
    ],
    stories: [
      {
        name: "Carlos",
        background: "Economics degree, spent a year doing data entry at a logistics company",
        journey: "Automated his own job with SQL, got promoted, now does analytics at a Fortune 500",
        currentRole: "Senior Data Analyst at Target",
      },
    ],
    tags: ["tech", "analytical", "business", "numbers"],
  },
  {
    id: "clinical-research-coordinator",
    title: "Clinical Research Coordinator",
    description:
      "You're the person who makes medical breakthroughs actually happen. You manage clinical trials, recruit patients, ensure protocols are followed, and bridge the gap between scientists and the real humans in the study.",
    dayInLife:
      "Morning: screen a potential participant for a cancer drug trial, explaining risks with empathy and precision. Midday: coordinate with the PI on protocol amendments. Afternoon: enter data, chase down a missing consent form, calm a nervous participant.",
    dimensions: {
      autonomy: -0.3,
      timeHorizon: 0.7,
      socialDensity: 0.5,
      riskTolerance: -0.3,
      cognitiveStyle: -0.2,
      incomeWeight: 0.3,
      statusWeight: 0.2,
      meaningWeight: 0.9,
      geographicFlex: -0.2,
    },
    surpriseFactor:
      "You don't need a medical degree. Many CRCs have bachelor's degrees in biology, psychology, or even English. The real requirement is being obsessively organized and genuinely good with people under stress.",
    learningPath: [
      {
        title: "Get certified",
        description: "The SOCRA or ACRP certification is the industry standard. Many employers will pay for it.",
        timeframe: "3-6 months",
        resources: ["ACRP Certification", "SOCRA CCRP Exam Prep"],
      },
      {
        title: "Volunteer in a lab",
        description: "Any research experience counts — even as an undergraduate research assistant.",
        timeframe: "1 semester",
      },
      {
        title: "Apply to academic medical centers",
        description: "Hospitals and universities run the most trials. Start there.",
        timeframe: "Ongoing",
      },
    ],
    microExperiment:
      "This week: Read a clinical trial listing on ClinicalTrials.gov. Pick one that interests you and read the full protocol summary. If you find yourself caring about whether the treatment works, this might be your thing.",
    optionValue: [
      "Can advance to clinical project manager, regulatory affairs, or medical science liaison",
      "Direct path into pharma, biotech, or academic medicine",
    ],
    incomeTrajectory: [
      { year: 1, amount: 48000 },
      { year: 3, amount: 58000 },
      { year: 5, amount: 72000 },
      { year: 10, amount: 95000 },
    ],
    stories: [
      {
        name: "Priya",
        background: "Psychology major who thought she wanted to be a therapist",
        journey: "Took a CRC job 'temporarily' at a university hospital, fell in love with the patient interaction and the mission",
        currentRole: "Senior CRC at Johns Hopkins, managing three oncology trials",
      },
    ],
    tags: ["healthcare", "research", "people", "structured"],
  },
  {
    id: "management-consultant",
    title: "Management Consultant",
    description:
      "Companies pay you a lot of money to tell them what's wrong with their business. You fly in, analyze operations, build recommendations, and present to executives who may or may not listen. It's intellectually intense, socially demanding, and pays very well.",
    dayInLife:
      "Morning: team standup at the client's office (you flew in Sunday night). Midday: interview middle managers about why the supply chain is broken. Afternoon: build a slide deck that will either save or kill a $50M initiative. Evening: hotel room, laptop, repeat.",
    dimensions: {
      autonomy: 0.2,
      timeHorizon: -0.4,
      socialDensity: 0.7,
      riskTolerance: 0.3,
      cognitiveStyle: -0.3,
      incomeWeight: 0.8,
      statusWeight: 0.9,
      meaningWeight: 0.2,
      geographicFlex: 0.8,
    },
    surpriseFactor:
      "The dirty secret: most consulting work isn't strategic genius. It's giving executives permission to do what they already know they should do, backed by data and a prestigious brand name.",
    learningPath: [
      {
        title: "Master case interviews",
        description:
          "The hiring process IS the job preview. Practice market sizing, profitability cases, and structured problem solving.",
        timeframe: "2-3 months",
        resources: ["Case in Point by Marc Cosentino", "PrepLounge.com"],
      },
      {
        title: "Build analytical chops",
        description: "Excel modeling, basic financial analysis, and data visualization (Tableau or PowerBI).",
        timeframe: "1-2 months",
      },
      {
        title: "Network strategically",
        description:
          "Attend info sessions. Reach out to consultants on LinkedIn. The industry runs on referrals.",
        timeframe: "Ongoing",
      },
    ],
    microExperiment:
      "This week: Pick a local business (restaurant, shop, gym). Spend 30 minutes observing their operations. Then write a one-page memo: What's their biggest problem? What would you recommend? If structuring that felt fun, consulting might be for you.",
    optionValue: [
      "Two-year stint opens doors to corporate strategy, private equity, startups, or MBA programs",
      "You'll build a network that pays dividends for decades",
    ],
    incomeTrajectory: [
      { year: 1, amount: 85000 },
      { year: 3, amount: 120000 },
      { year: 5, amount: 170000 },
      { year: 10, amount: 250000 },
    ],
    stories: [
      {
        name: "Jordan",
        background: "Political science major, no business background whatsoever",
        journey: "Got into consulting through a diversity pipeline, discovered they loved the problem-solving, stayed 4 years, then joined a climate tech startup as COO",
        currentRole: "COO at a Series B climate tech company",
      },
    ],
    tags: ["business", "analytical", "prestige", "travel"],
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    description:
      "You study how human activity affects natural systems — then figure out what to do about it. Part fieldwork, part lab work, part policy advocacy. The problems are massive, the progress is slow, and the work matters.",
    dayInLife:
      "Morning: collect water samples from a river downstream of an industrial site. Midday: run tests in the lab, log results in the database. Afternoon: write a section of the environmental impact assessment that will determine whether a construction project gets approved.",
    dimensions: {
      autonomy: 0.5,
      timeHorizon: 0.8,
      socialDensity: -0.2,
      riskTolerance: 0.1,
      cognitiveStyle: 0.2,
      incomeWeight: 0.2,
      statusWeight: 0.1,
      meaningWeight: 0.95,
      geographicFlex: 0.3,
    },
    surpriseFactor:
      "You'll spend more time writing reports and navigating regulations than saving forests. The impact is real but indirect — measured in permits denied and policies changed, not dramatic rescue missions.",
    learningPath: [
      {
        title: "Get a relevant degree",
        description:
          "Environmental science, ecology, geology, or chemistry. A master's helps but isn't always required.",
        timeframe: "4 years (bachelor's)",
      },
      {
        title: "Get field experience",
        description: "Internships with the EPA, state agencies, or environmental consulting firms.",
        timeframe: "1-2 summers",
        resources: ["EPA internship programs", "Student Conservation Association"],
      },
      {
        title: "Learn GIS",
        description: "Geographic Information Systems (ArcGIS or QGIS) is the most marketable technical skill in this field.",
        timeframe: "1 semester",
      },
    ],
    microExperiment:
      "This week: Find the EPA's Toxics Release Inventory (it's public). Look up what chemicals are being released near your home. If that rabbit hole pulls you in, you've got the instinct.",
    optionValue: [
      "Growing demand driven by climate regulation and ESG requirements",
      "Can pivot to sustainability consulting, policy work, or environmental law",
    ],
    incomeTrajectory: [
      { year: 1, amount: 45000 },
      { year: 3, amount: 55000 },
      { year: 5, amount: 68000 },
      { year: 10, amount: 88000 },
    ],
    stories: [
      {
        name: "Tomás",
        background: "Chemistry major who hated working in a sterile lab all day",
        journey: "Switched to environmental consulting, now splits time between field sites and writing impact assessments",
        currentRole: "Environmental Scientist at an engineering consulting firm",
      },
    ],
    tags: ["science", "outdoors", "purpose", "analytical"],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description:
      "You decide what gets built and why. You don't write code or design interfaces, but you're responsible for making sure the right thing gets shipped. It's a role that runs on influence, not authority.",
    dayInLife:
      "Morning: review user feedback and usage metrics, spot a feature that nobody's using. Midday: meet with engineering to discuss the next sprint's priorities — negotiate trade-offs between speed and quality. Afternoon: write a product spec for a feature that doesn't exist yet, based on user research and business goals.",
    dimensions: {
      autonomy: 0.6,
      timeHorizon: 0.3,
      socialDensity: 0.8,
      riskTolerance: 0.4,
      cognitiveStyle: 0.1,
      incomeWeight: 0.7,
      statusWeight: 0.6,
      meaningWeight: 0.5,
      geographicFlex: 0.5,
    },
    surpriseFactor:
      "PMs have no direct reports and no formal power. Your entire job is convincing engineers, designers, and executives to build what you think matters. If you can't influence without authority, you'll struggle.",
    learningPath: [
      {
        title: "Learn the fundamentals",
        description: "Read 'Inspired' by Marty Cagan. Understand user stories, roadmaps, and prioritization frameworks.",
        timeframe: "1 month",
        resources: ["Book: Inspired by Marty Cagan", "Lenny's Newsletter"],
      },
      {
        title: "Ship something",
        description: "Build a side project, contribute to open source, or volunteer to PM a student organization's app.",
        timeframe: "2-3 months",
      },
      {
        title: "Get an APM role",
        description: "Associate Product Manager programs at Google, Meta, or startups are the standard entry point.",
        timeframe: "Application cycles vary",
      },
    ],
    microExperiment:
      "This week: Pick an app you use daily. Write a one-page document: What's the #1 problem users have? What would you build to fix it? How would you measure success? That document is basically what PMs do.",
    optionValue: [
      "One of the most versatile tech roles — leads to VP Product, founder, or general management",
      "Skills transfer across industries: fintech, healthtech, edtech, enterprise SaaS",
    ],
    incomeTrajectory: [
      { year: 1, amount: 80000 },
      { year: 3, amount: 115000 },
      { year: 5, amount: 150000 },
      { year: 10, amount: 200000 },
    ],
    stories: [
      {
        name: "Aisha",
        background: "Studied anthropology, worked in nonprofit fundraising",
        journey: "Realized she was already doing PM work (understanding users, prioritizing resources), applied to an APM program at a startup",
        currentRole: "Product Manager at Notion",
      },
    ],
    tags: ["tech", "leadership", "strategy", "people"],
  },
  {
    id: "occupational-therapist",
    title: "Occupational Therapist",
    description:
      "You help people do the things they need and want to do — from recovering stroke patients learning to button a shirt again, to kids with autism navigating a school day. It's healthcare that focuses on function, not just fixing what's broken.",
    dayInLife:
      "Morning: work with a 7-year-old on sensory processing exercises that make handwriting possible. Midday: help an elderly patient practice kitchen tasks so they can go home from the hospital. Afternoon: document progress notes, adjust treatment plans, consult with families.",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.2,
      socialDensity: 0.7,
      riskTolerance: -0.5,
      cognitiveStyle: 0.3,
      incomeWeight: 0.4,
      statusWeight: 0.2,
      meaningWeight: 0.9,
      geographicFlex: -0.1,
    },
    surpriseFactor:
      "OTs have some of the highest job satisfaction in healthcare. The reason: you see tangible progress. A patient who couldn't feed themselves last month can now eat independently. That's your Tuesday.",
    learningPath: [
      {
        title: "Complete prerequisite courses",
        description: "Anatomy, physiology, psychology, and statistics. Many OT programs require these before applying.",
        timeframe: "1-2 years",
      },
      {
        title: "Get observation hours",
        description: "Most programs require 40+ hours shadowing a licensed OT. Call local clinics and hospitals.",
        timeframe: "1-2 months",
      },
      {
        title: "Earn your OTD or MOT",
        description: "A doctoral or master's in occupational therapy. Programs are typically 2-3 years.",
        timeframe: "2-3 years",
        resources: ["AOTA program directory", "GRE prep if required"],
      },
    ],
    microExperiment:
      "This week: Try to button a shirt with your non-dominant hand while wearing thick gloves. That frustration? That's what your future patients feel every day. If your instinct is to figure out a workaround rather than give up, OT might be your path.",
    optionValue: [
      "Can specialize in pediatrics, geriatrics, mental health, hand therapy, or neurorehabilitation",
      "Demand is growing fast — Bureau of Labor Statistics projects 12% growth through 2033",
    ],
    incomeTrajectory: [
      { year: 1, amount: 70000 },
      { year: 3, amount: 80000 },
      { year: 5, amount: 88000 },
      { year: 10, amount: 100000 },
    ],
    stories: [
      {
        name: "Elise",
        background: "Kinesiology major who thought she wanted to be a physical therapist",
        journey: "Shadowed an OT working with kids and realized she cared more about daily life skills than athletic recovery",
        currentRole: "Pediatric OT at a children's hospital in Denver",
      },
    ],
    tags: ["healthcare", "people", "hands-on", "purpose"],
  },
  {
    id: "policy-analyst",
    title: "Policy Analyst",
    description:
      "You research how government decisions affect real people, then write the memos that shape those decisions. It's where data meets democracy — and where your ability to synthesize complex information actually changes outcomes.",
    dayInLife:
      "Morning: read through newly proposed legislation on housing affordability. Midday: crunch census data to model how the policy would affect different income brackets. Afternoon: draft a policy brief for a legislative aide who has 10 minutes to read it before a committee vote.",
    dimensions: {
      autonomy: 0.1,
      timeHorizon: 0.6,
      socialDensity: 0.2,
      riskTolerance: -0.4,
      cognitiveStyle: -0.1,
      incomeWeight: 0.3,
      statusWeight: 0.5,
      meaningWeight: 0.8,
      geographicFlex: -0.3,
    },
    surpriseFactor:
      "The best policy work happens in boring offices with fluorescent lighting. The impact is invisible to most people — but when a policy you researched becomes law, you've changed millions of lives.",
    learningPath: [
      {
        title: "Build your analytical foundation",
        description: "Statistics, economics, or political science coursework. Learn to read and critique empirical studies.",
        timeframe: "During undergrad or 1-2 post-grad courses",
      },
      {
        title: "Get a policy internship",
        description: "Think tanks (Brookings, Urban Institute), congressional offices, or state legislature research offices.",
        timeframe: "1 summer",
        resources: ["USAJOBS.gov", "Idealist.org"],
      },
      {
        title: "Learn data tools",
        description: "Stata, R, or Python for data analysis. Policy shops increasingly want quantitative skills.",
        timeframe: "2-3 months",
      },
    ],
    microExperiment:
      "This week: Pick a local policy issue (rent control, transit funding, school zoning). Find one study for and one against. Write a 500-word summary that's fair to both sides. If you enjoyed the synthesis more than picking a side, policy analysis suits you.",
    optionValue: [
      "Leads to roles in government, think tanks, international organizations, or lobbying",
      "An MPP or MPA opens doors to senior advisory roles",
    ],
    incomeTrajectory: [
      { year: 1, amount: 50000 },
      { year: 3, amount: 62000 },
      { year: 5, amount: 78000 },
      { year: 10, amount: 105000 },
    ],
    stories: [
      {
        name: "Daniel",
        background: "History major who got frustrated that nobody learned from the past",
        journey: "Interned at a state legislature research office, got hired full-time, now writes fiscal impact analyses for proposed legislation",
        currentRole: "Policy Analyst at the Congressional Budget Office",
      },
    ],
    tags: ["government", "research", "writing", "purpose"],
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description:
      "You build the models that tell companies whether an investment is worth making. Spreadsheets are your canvas, assumptions are your paint, and a well-built DCF model is your masterpiece. It's structured, competitive, and very well compensated.",
    dayInLife:
      "Morning: update the quarterly financial model with last night's earnings data. Midday: build a scenario analysis for a potential acquisition — what happens if revenue grows 5% vs. 15%? Afternoon: present findings to the CFO and defend your assumptions when they push back.",
    dimensions: {
      autonomy: -0.3,
      timeHorizon: 0.5,
      socialDensity: 0.1,
      riskTolerance: 0.2,
      cognitiveStyle: -0.8,
      incomeWeight: 0.9,
      statusWeight: 0.7,
      meaningWeight: 0.1,
      geographicFlex: 0.6,
    },
    surpriseFactor:
      "Financial modeling is closer to puzzle-solving than number-crunching. The hard part isn't the math — it's deciding which assumptions matter and defending them to people who get paid more than you.",
    learningPath: [
      {
        title: "Master Excel and financial modeling",
        description: "Wall Street Prep or Breaking Into Wall Street courses are the gold standard.",
        timeframe: "2-3 months",
        resources: ["Wall Street Prep", "Breaking Into Wall Street (BIWS)"],
      },
      {
        title: "Learn accounting fundamentals",
        description: "You need to read financial statements fluently. Take an intro accounting course.",
        timeframe: "1 semester",
      },
      {
        title: "Get a finance internship",
        description: "Corporate finance, investment banking, or equity research. The internship-to-full-time pipeline is everything.",
        timeframe: "1 summer",
      },
    ],
    microExperiment:
      "This week: Pick a public company you care about. Download their latest annual report (10-K). Read the income statement. Can you tell if they're making money? If you want to dig deeper, that's a good sign.",
    optionValue: [
      "Gateway to investment banking, private equity, venture capital, or corporate strategy",
      "CFA or MBA accelerates career progression significantly",
    ],
    incomeTrajectory: [
      { year: 1, amount: 70000 },
      { year: 3, amount: 95000 },
      { year: 5, amount: 130000 },
      { year: 10, amount: 180000 },
    ],
    stories: [
      {
        name: "Sanjay",
        background: "Math major who didn't want to go to grad school",
        journey: "Started in FP&A at a mid-size company, learned modeling on the job, moved to an investment bank after 2 years",
        currentRole: "Associate at Goldman Sachs in their TMT group",
      },
    ],
    tags: ["business", "analytical", "finance", "competitive"],
  },
  {
    id: "content-strategist",
    title: "Content Strategist",
    description:
      "You figure out what a brand should say, where, when, and why. Not a copywriter (though you can write) — you're the person who designs the entire communication architecture. Part editor, part analyst, part brand therapist.",
    dayInLife:
      "Morning: audit a client's website content — 400 pages, half of them outdated, none of them saying what users actually need to hear. Midday: present a content framework to the marketing team that reorganizes everything around user intent. Afternoon: write editorial guidelines that will shape how 20 writers produce content for the next year.",
    dimensions: {
      autonomy: 0.6,
      timeHorizon: 0.2,
      socialDensity: 0.3,
      riskTolerance: 0.1,
      cognitiveStyle: 0.7,
      incomeWeight: 0.5,
      statusWeight: 0.3,
      meaningWeight: 0.4,
      geographicFlex: 0.7,
    },
    surpriseFactor:
      "This is one of the most in-demand roles in tech that nobody's heard of. Every company with a website needs one, few companies know it yet, and the supply of good content strategists is tiny.",
    learningPath: [
      {
        title: "Start writing publicly",
        description: "Blog, newsletter, or social media. The medium doesn't matter — the habit does.",
        timeframe: "Start now, keep going",
      },
      {
        title: "Learn content strategy frameworks",
        description: "Read 'Content Strategy for the Web' by Kristina Halvorson. Understand content audits, user journeys, and editorial calendars.",
        timeframe: "1 month",
        resources: ["Book: Content Strategy for the Web", "A List Apart articles on content strategy"],
      },
      {
        title: "Build a case study",
        description: "Pick a nonprofit or small business. Audit their content. Propose a strategy. Implement part of it. Document results.",
        timeframe: "1-2 months",
      },
    ],
    microExperiment:
      "This week: Visit three company websites in the same industry. Compare their About pages. Which one makes you trust them? Why? Write down the patterns. You just did a mini content audit.",
    optionValue: [
      "Can grow into Head of Content, VP Marketing, or start a consultancy",
      "Fully remote-friendly — one of the most location-independent careers in tech",
    ],
    incomeTrajectory: [
      { year: 1, amount: 55000 },
      { year: 3, amount: 78000 },
      { year: 5, amount: 100000 },
      { year: 10, amount: 140000 },
    ],
    stories: [
      {
        name: "Lena",
        background: "English lit major who thought her only option was teaching",
        journey: "Started freelance writing, noticed she was better at organizing content than creating it, pivoted to strategy",
        currentRole: "Senior Content Strategist at Shopify, fully remote from Portugal",
      },
    ],
    tags: ["creative", "writing", "tech", "remote"],
  },
];
