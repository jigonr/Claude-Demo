export const businessJobs05 = [
  {
    // 0244 - HR Coordinator @ Costco, Sacramento CA, hybrid
    id: "0244",
    title: "HR Coordinator",
    category: "business",
    company: "Costco",
    industry: "Retail",
    location: { city: "Sacramento", state: "CA", country: "US", remote: "hybrid" },
    salary: { min: 47000, max: 60000, currency: "USD", period: "yearly" },
    description:
      "Costco, known for treating employees exceptionally well, seeks an HR Coordinator for our Sacramento facility. Working hybrid, you'll support recruitment, onboarding, employee relations, and HR operations. Join an organization that values its employees and offers clear advancement opportunities.",
    responsibilities: [
      "Support recruiting efforts including job postings and candidate screening",
      "Coordinate new employee onboarding and orientation programs",
      "Maintain personnel records and ensure HRIS system accuracy",
      "Process employee paperwork including benefits and payroll updates",
      "Assist with employee relations matters and conflict resolution",
      "Support compliance with employment laws and company policies",
    ],
    requirements: {
      education: "High school diploma or GED; Associate degree in HR or related field preferred",
      experience_years: "1-3",
      skills: [
        "Human resources fundamentals and employment law",
        "Organizational and administrative skills",
        "Customer service and interpersonal communication",
        "HRIS and Microsoft Office proficiency",
        "Attention to detail and confidentiality",
        "Problem-solving and multitasking ability",
      ],
      certifications: [],
    },
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Employee discount on Costco merchandise",
      "Paid time off and shift flexibility",
      "Advancement opportunities within HR",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-03",
    dimensions: {
      autonomy: -0.3,        // HR coordinator: structured, process-driven role
      timeHorizon: -0.2,     // Onboarding and employee relations are near-term tasks
      socialDensity: 0.6,    // High people interaction: recruiting, onboarding, ER
      riskTolerance: -0.3,   // Compliance-heavy, stability-focused
      cognitiveStyle: -0.1,  // People-focused, practical over theoretical
      incomeWeight: 0.35,    // Retail HR, modest salary band
      statusWeight: 0.3,     // Coordinator-level, limited prestige
      meaningWeight: 0.5,    // Employee wellbeing and relations carry meaning
      geographicFlex: 0.3,   // Hybrid
    },
    tags: ["business", "hr-coordinator", "retail", "human-resources", "recruiting"],
  },
  {
    // 0245 - Financial Analyst @ Procter & Gamble, Milwaukee WI, onsite
    id: "0245",
    title: "Financial Analyst",
    category: "business",
    company: "Procter & Gamble",
    industry: "Consumer Goods",
    location: { city: "Milwaukee", state: "WI", country: "US", remote: "onsite" },
    salary: { min: 55000, max: 72000, currency: "USD", period: "yearly" },
    description:
      "P&G is the world's largest consumer goods company, touching 5 billion lives daily with trusted brands. As a Financial Analyst, you'll drive financial planning and analysis across our portfolio.",
    responsibilities: [
      "Support financial planning and analysis activities",
      "Create variance reports comparing actuals to forecasts",
      "Analyze business unit financial performance",
      "Support investment evaluation and ROI analysis",
      "Prepare financial presentations for management",
      "Maintain financial models and tracking spreadsheets",
    ],
    requirements: {
      education: "Bachelor's degree in Finance, Accounting, or Business Administration",
      experience_years: "1-3 years of financial analysis or accounting experience",
      skills: [
        "Financial modeling",
        "Variance analysis",
        "Excel",
        "Business analysis",
        "Presentation skills",
      ],
      certifications: ["CFA (pursuing preferred)", "Financial analysis certification"],
    },
    benefits: [
      "Comprehensive health and wellness benefits",
      "401(k) retirement savings plan with matching",
      "Paid vacation, holidays, and personal days",
      "Career advancement and training opportunities",
      "Employee recognition and incentive programs",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-15",
    dimensions: {
      autonomy: 0.1,         // Analyst level: moderate independence in modeling work
      timeHorizon: 0.3,      // FP&A spans quarterly and annual cycles
      socialDensity: -0.1,   // Primarily desk/model work with some presentations
      riskTolerance: 0.0,    // Balanced: variance analysis is stable, ROI decisions involve some risk
      cognitiveStyle: 0.4,   // Quantitative financial modeling, analytical
      incomeWeight: 0.65,    // P&G, finance-focused, competitive salary
      statusWeight: 0.5,     // P&G brand carries prestige
      meaningWeight: 0.25,   // Consumer goods, standard corporate meaning
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "financial-analyst", "consumer-goods", "financial-modeling", "fpa"],
  },
  {
    // 0246 - Commercial Appraiser @ Raytheon, Bethesda MD, hybrid
    id: "0246",
    title: "Commercial Appraiser",
    category: "business",
    company: "Raytheon",
    industry: "Defense",
    location: { city: "Bethesda", state: "MD", country: "US", remote: "hybrid" },
    salary: { min: 57000, max: 74000, currency: "USD", period: "yearly" },
    description:
      "Raytheon's Real Estate and Facilities team is seeking a Commercial Appraiser to assess, value, and manage our extensive commercial real estate portfolio. This role offers the opportunity to work on strategically important properties while developing expertise in commercial valuation methodologies. You'll report to our Director of Asset Management and collaborate with finance, operations, and external partners.",
    responsibilities: [
      "Conduct comprehensive appraisals of commercial properties, preparing detailed valuation reports using USPAP standards",
      "Perform market analysis and comparable property research to support valuation conclusions",
      "Maintain detailed property documentation and databases; ensure compliance with internal and regulatory standards",
      "Coordinate with external appraisers and third-party vendors for specialized valuation work",
      "Support real estate transaction and portfolio management decisions through timely and accurate valuations",
    ],
    requirements: {
      education: "Bachelor's degree in Real Estate, Finance, or related field",
      experience_years: "3-5",
      skills: [
        "Commercial real estate appraisal experience",
        "Knowledge of USPAP and appraisal standards",
        "Proficiency with appraisal software and valuation databases",
        "Strong written and verbal communication",
        "Ability to manage multiple properties and deadlines",
      ],
      certifications: ["State-certified commercial appraiser license required"],
    },
    benefits: [
      "Comprehensive health, dental, and vision plan",
      "401(k) with 4% company match",
      "Professional memberships (APPRAISAL Institute, NAA)",
      "Continuing education support for license maintenance",
      "Hybrid flexibility with home office option",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-19",
    dimensions: {
      autonomy: 0.4,         // Independent site visits, self-directed valuation work
      timeHorizon: 0.3,      // Portfolio-level view, property cycles
      socialDensity: 0.2,    // Some coordination with vendors and teams, mostly solo work
      riskTolerance: 0.2,    // Defense industry stability, but valuation judgments carry risk
      cognitiveStyle: 0.2,   // Methodical analysis with USPAP frameworks
      incomeWeight: 0.5,     // Solid salary, defense sector premium
      statusWeight: 0.4,     // Licensed professional, Raytheon brand
      meaningWeight: 0.25,   // Defense mission, indirect meaning
      geographicFlex: 0.3,   // Hybrid
    },
    tags: ["business", "commercial-appraiser", "defense", "real-estate", "valuation"],
  },
  {
    // 0247 - Sales Operations Analyst @ Under Armour, Washington DC, remote
    id: "0247",
    title: "Sales Operations Analyst",
    category: "business",
    company: "Under Armour",
    industry: "Apparel",
    location: { city: "Washington", state: "DC", country: "US", remote: "remote" },
    salary: { min: 62000, max: 81000, currency: "USD", period: "yearly" },
    description:
      "We're hiring a Sales Operations Analyst at Under Armour. This is an exciting opportunity to join our fast-paced, ambitious, data-driven team and make a direct impact on our mission. If you have 2-4 years years of experience and are passionate about Apparel, we'd love to hear from you.",
    responsibilities: [
      "Contribute to team projects and strategic initiatives",
      "Collaborate with cross-functional teams on deliverables",
      "Support management with analysis and reporting",
      "Identify process improvements and efficiency opportunities",
      "Maintain accurate documentation and records",
      "Participate in professional development and training activities",
    ],
    requirements: {
      education: "Bachelor's degree in Finance, Business, Economics, or related field",
      experience_years: "2-4 years",
      skills: ["Sales analytics", "Excel", "CRM systems", "Data analysis", "Communication"],
      certifications: [],
    },
    benefits: [
      "Comprehensive health insurance (medical, dental, vision)",
      "401(k) retirement plan with company match",
      "Paid time off (PTO) and holidays",
      "Professional development and training budget",
      "Flexible work schedule",
      "Career development opportunities",
      "Employee recognition programs",
      "Community involvement opportunities",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-08",
    dimensions: {
      autonomy: -0.1,        // Cross-functional support role, works within team structures
      timeHorizon: 0.0,      // Mix of short reporting cycles and strategic initiatives
      socialDensity: 0.3,    // Collaborative across teams, but analyst-heavy work
      riskTolerance: -0.1,   // Apparel industry, stable ops role
      cognitiveStyle: 0.2,   // Data analysis and CRM, moderately quantitative
      incomeWeight: 0.45,    // Good salary for ops role, Under Armour brand
      statusWeight: 0.3,     // Analyst-level, sports brand appeal
      meaningWeight: 0.25,   // Standard corporate meaning
      geographicFlex: 0.7,   // Fully remote
    },
    tags: ["business", "sales-operations-analyst", "apparel", "sales-analytics", "crm"],
  },
  {
    // 0248 - Budget Analyst @ Aon, Sacramento CA, hybrid
    id: "0248",
    title: "Budget Analyst",
    category: "business",
    company: "Aon",
    industry: "Insurance Brokerage",
    location: { city: "Sacramento", state: "CA", country: "US", remote: "hybrid" },
    salary: { min: 57000, max: 73000, currency: "USD", period: "yearly" },
    description:
      "Aon is seeking a Budget Analyst to support financial planning and analysis initiatives. You'll develop annual budgets, forecast expenses, and monitor spending variance across departments. Work hybrid in Sacramento for a global leader in professional services, risk management, and insurance solutions.",
    responsibilities: [
      "Develop and maintain annual operating budgets with departmental input",
      "Prepare quarterly forecasts and variance analysis against actual spending",
      "Support financial planning processes and provide spending guidance",
      "Investigate budget variances and recommend corrective actions",
      "Prepare budget reports and presentations for leadership review",
    ],
    requirements: {
      education: "Bachelor's degree in Finance, Accounting, or Business",
      experience_years: "1-2",
      skills: [
        "Budget development and financial planning",
        "Advanced Excel modeling",
        "Financial analysis and variance reporting",
        "Attention to detail and organizational skills",
        "Communication across organizational levels",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary",
      "Comprehensive health, dental, and vision coverage",
      "401(k) with company match",
      "Flexible hybrid schedule with Sacramento office",
      "Professional development opportunities",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-20",
    dimensions: {
      autonomy: 0.0,         // Follows budget cycles and guidelines, moderate independence
      timeHorizon: 0.3,      // Annual budget cycles, quarterly forecasts
      socialDensity: 0.1,    // Some departmental interaction, mostly desk work
      riskTolerance: -0.2,   // Budget control role, risk-averse by nature
      cognitiveStyle: 0.4,   // Quantitative: Excel modeling, variance analysis
      incomeWeight: 0.5,     // Aon, professional services premium
      statusWeight: 0.35,    // Budget analyst, functional role
      meaningWeight: 0.25,   // Insurance brokerage, standard meaning
      geographicFlex: 0.3,   // Hybrid
    },
    tags: ["business", "budget-analyst", "insurance-brokerage", "financial-planning", "forecasting"],
  },
  {
    // 0251 - Social Media Coordinator @ Charles Schwab, Chicago IL, onsite
    id: "0251",
    title: "Social Media Coordinator",
    category: "business",
    company: "Charles Schwab",
    industry: "Brokerage",
    location: { city: "Chicago", state: "IL", country: "US", remote: "onsite" },
    salary: { min: 44000, max: 57000, currency: "USD", period: "yearly" },
    description:
      "Charles Schwab is seeking a Social Media Coordinator for our Chicago office to manage our social media presence and engage with our financial services audience. You'll create content, monitor social channels, and support our brand voice in financial services. Working onsite, you'll be part of our marketing team.",
    responsibilities: [
      "Create and schedule social media content across LinkedIn, Twitter, Facebook, and Instagram",
      "Monitor social media channels; respond to comments and messages professionally",
      "Track social media metrics and prepare performance reports",
      "Collaborate with marketing teams on content calendars and campaigns",
      "Research social media trends and best practices in financial services",
    ],
    requirements: {
      education: "Bachelor's degree in Marketing, Communications, or related field",
      experience_years: "1-2",
      skills: [
        "Proficiency with social media platforms and scheduling tools",
        "Strong written communication and content creation abilities",
        "Basic graphic design or video editing skills",
        "Analytical skills for tracking metrics",
        "Understanding of financial services or fintech industries (preferred)",
      ],
      certifications: [],
    },
    benefits: [
      "Health, dental, and vision coverage",
      "401(k) with company match",
      "Paid time off and paid holidays",
      "Professional development and marketing training",
      "Onsite workplace environment",
    ],
    employment_type: "full-time",
    posted_date: "2026-03-08",
    dimensions: {
      autonomy: 0.2,         // Creative latitude in content creation within brand guidelines
      timeHorizon: -0.3,     // Fast social media cycles, daily/weekly output
      socialDensity: 0.4,    // Team collaboration and audience engagement
      riskTolerance: 0.1,    // Financial services requires care, but social is dynamic
      cognitiveStyle: 0.1,   // Mix of creative and analytical (metrics)
      incomeWeight: 0.35,    // Coordinator-level in financial services
      statusWeight: 0.3,     // Schwab brand, but coordinator title
      meaningWeight: 0.35,   // Content/brand work, moderate creative meaning
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "social-media-coordinator", "brokerage", "content-creation", "marketing"],
  },
  {
    // 0252 - Actuarial Analyst @ Allstate, St. Louis MO, hybrid
    id: "0252",
    title: "Actuarial Analyst",
    category: "business",
    company: "Allstate",
    industry: "Insurance",
    location: { city: "St. Louis", state: "MO", country: "US", remote: "hybrid" },
    salary: { min: 57000, max: 72000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-22",
    description:
      "Allstate is seeking an Actuarial Analyst to support pricing, reserving, and risk analysis functions. You will build models to analyze claims data, assess financial risk, and develop rate recommendations. This role offers the opportunity to work on complex problems impacting millions of customers and support actuarial career development.",
    responsibilities: [
      "Build and maintain actuarial models for pricing and reserving",
      "Analyze claims data to identify trends and develop assumptions",
      "Perform loss analysis and financial projections",
      "Develop rate recommendations with supporting documentation",
      "Conduct data quality reviews and manage databases",
      "Support regulatory filings with actuarial exhibits and certifications",
    ],
    requirements: {
      education: "Bachelor's degree in Actuarial Science, Mathematics, or related field",
      experience_years: "1-3",
      skills: [
        "Actuarial modeling and analysis",
        "SQL and database querying",
        "Statistical analysis and trend analysis",
        "Excel and financial modeling",
        "Understanding of insurance products and risk",
      ],
      certifications: [
        "Passed at least one actuarial exam (P/FM) preferred",
        "ASA or FSA candidate status preferred",
      ],
    },
    benefits: [
      "Competitive salary and performance bonus",
      "Comprehensive health, dental, vision, and life insurance",
      "Actuarial exam study support and fee reimbursement",
      "Hybrid work schedule and professional development",
    ],
    dimensions: {
      autonomy: 0.2,         // Model-building with self-directed analysis
      timeHorizon: 0.6,      // Long-range risk projections, reserving, multi-year exam journey
      socialDensity: -0.3,   // Predominantly solo quantitative work
      riskTolerance: 0.1,    // Studies risk professionally, personally stable career
      cognitiveStyle: 0.7,   // Highly abstract: statistical modeling, probability theory
      incomeWeight: 0.7,     // Actuarial is among highest-paying business tracks
      statusWeight: 0.55,    // FSA/ASA credentials carry significant professional status
      meaningWeight: 0.25,   // Risk management for millions, indirect meaning
      geographicFlex: 0.3,   // Hybrid
    },
    tags: ["business", "actuarial-analyst", "insurance", "statistical-modeling", "risk-analysis"],
  },
  {
    // 0253 - Program Associate @ State Farm, Rochester MN, remote
    id: "0253",
    title: "Program Associate",
    category: "business",
    company: "State Farm",
    industry: "Insurance",
    location: { city: "Rochester", state: "MN", country: "US", remote: "remote" },
    salary: { min: 45000, max: 58000, currency: "USD", period: "yearly" },
    description:
      "State Farm is seeking a Program Associate to support operational initiatives across our organization. You'll coordinate program activities, manage stakeholder communications, and ensure successful execution of key business initiatives. Work remotely for one of America's largest insurance companies committed to being a good neighbor.",
    responsibilities: [
      "Coordinate program activities and track progress against timelines",
      "Support project teams with scheduling, documentation, and reporting",
      "Communicate with stakeholders to gather requirements and provide updates",
      "Maintain program records and develop tracking tools",
      "Identify process improvements and recommend optimization opportunities",
    ],
    requirements: {
      education: "Bachelor's degree in Business, Project Management, or related field",
      experience_years: "0-2",
      skills: [
        "Project coordination and organization",
        "Strong written and verbal communication",
        "Excel and data tracking",
        "Ability to juggle multiple priorities",
        "Attention to detail",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary",
      "Comprehensive health, dental, and vision coverage",
      "401(k) with company match",
      "Professional development programs",
      "Remote-first culture with flexible scheduling",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-24",
    dimensions: {
      autonomy: -0.2,        // Support role, follows program structure
      timeHorizon: -0.1,     // Mix of near-term milestones and program timelines
      socialDensity: 0.5,    // Stakeholder communication is central
      riskTolerance: -0.2,   // Large stable insurance company, low-risk environment
      cognitiveStyle: 0.0,   // Balanced: coordination tasks, not deeply analytical
      incomeWeight: 0.35,    // Entry-level coordinator salary
      statusWeight: 0.25,    // Associate title, functional role
      meaningWeight: 0.4,    // State Farm "good neighbor" mission resonates
      geographicFlex: 0.7,   // Fully remote
    },
    tags: ["business", "program-associate", "insurance", "project-coordination", "operations"],
  },
  {
    // 0254 - Recruiting Coordinator @ JLL, Washington DC, hybrid
    id: "0254",
    title: "Recruiting Coordinator",
    category: "business",
    company: "JLL",
    industry: "Real Estate Services",
    location: { city: "Washington", state: "DC", country: "US", remote: "hybrid" },
    salary: { min: 54000, max: 72000, currency: "USD", period: "yearly" },
    description:
      "Support JLL's talent acquisition team as a Recruiting Coordinator, helping us attract and hire top talent.",
    responsibilities: [
      "Screen resumes and coordinate candidate interviews",
      "Manage recruiting workflows and candidate pipelines",
      "Prepare offer letters and coordinate onboarding",
      "Maintain recruiting database and analytics",
      "Source candidates and manage job postings",
      "Support recruiters with scheduling and administrative tasks",
    ],
    requirements: {
      education: "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "1-3",
      skills: [
        "Recruiting",
        "Applicant tracking systems",
        "Communication",
        "Organization",
        "Attention to detail",
      ],
      certifications: [],
    },
    benefits: [
      "Comprehensive compensation package",
      "Health, dental, and vision coverage",
      "401(k) or retirement benefits",
      "Flexible time off and work arrangements",
      "Professional development opportunities",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-20",
    dimensions: {
      autonomy: -0.2,        // Support role within talent acquisition team
      timeHorizon: -0.3,     // Fast hiring cycles, immediate results-focused
      socialDensity: 0.7,    // Constant candidate and stakeholder interaction
      riskTolerance: -0.2,   // Real estate services, stable industry
      cognitiveStyle: -0.2,  // People-oriented, relational over analytical
      incomeWeight: 0.35,    // Coordinator-level, mid salary band
      statusWeight: 0.3,     // JLL brand, coordinator title
      meaningWeight: 0.4,    // Connecting people to careers carries purpose
      geographicFlex: 0.3,   // Hybrid
    },
    tags: ["business", "recruiting-coordinator", "real-estate-services", "talent-acquisition", "hr"],
  },
  {
    // 0255 - Revenue Analyst @ Morgan Stanley, Research Triangle Park NC, hybrid
    id: "0255",
    title: "Revenue Analyst",
    category: "business",
    company: "Morgan Stanley",
    industry: "Investment Banking",
    location: { city: "Research Triangle Park", state: "NC", country: "US", remote: "hybrid" },
    salary: { min: 55000, max: 71000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-07",
    description:
      "Morgan Stanley seeks a Revenue Analyst for our Research Triangle Park office to support revenue forecasting, client billing analysis, and profitability reporting across our wealth management division. You will partner with finance and operations teams to ensure accurate revenue recognition, analyze client revenue trends, and develop reporting frameworks that guide strategic decision-making.",
    responsibilities: [
      "Maintain revenue forecasting models and update projections based on market conditions and client activity",
      "Analyze client billing data and reconcile revenue recognized to actual client contracts",
      "Prepare monthly and quarterly revenue reports for management review",
      "Investigate revenue variances and provide explanations to finance leadership",
      "Support audit preparation by organizing revenue documentation and supporting schedules",
      "Develop dashboards to track key revenue metrics and client profitability trends",
    ],
    requirements: {
      education: "Bachelor's degree in Finance, Accounting, Economics, or related field",
      experience_years: "1-3",
      skills: [
        "Financial analysis and revenue forecasting",
        "Advanced Excel and data modeling",
        "Understanding of ASC 606 revenue recognition standards",
        "Client profitability analysis",
        "Financial reporting and presentation",
      ],
      certifications: ["CPA or CFA candidate status preferred"],
    },
    benefits: [
      "Competitive salary and annual bonus structure",
      "Comprehensive health, dental, vision, and life insurance",
      "Morgan Stanley 401(k) plan with company match",
      "Professional development and continuing education support",
    ],
    dimensions: {
      autonomy: 0.1,         // Analyst with self-directed modeling work
      timeHorizon: 0.2,      // Monthly/quarterly cycles, forward-looking forecasting
      socialDensity: 0.1,    // Partnership with finance/ops teams, primarily desk work
      riskTolerance: 0.0,    // Finance, stable reporting function
      cognitiveStyle: 0.3,   // Quantitative: ASC 606, data modeling, dashboards
      incomeWeight: 0.55,    // Morgan Stanley, investment banking premium + bonus
      statusWeight: 0.4,     // Morgan Stanley brand carries prestige
      meaningWeight: 0.25,   // Financial analysis, standard corporate meaning
      geographicFlex: 0.3,   // Hybrid
    },
    tags: ["business", "revenue-analyst", "investment-banking", "financial-reporting", "forecasting"],
  },
  {
    // 0256 - Training Coordinator @ Accenture, Salt Lake City UT, onsite
    id: "0256",
    title: "Training Coordinator",
    category: "business",
    company: "Accenture",
    industry: "Consulting",
    location: { city: "Salt Lake City", state: "UT", country: "US", remote: "onsite" },
    salary: { min: 45000, max: 58000, currency: "USD", period: "yearly" },
    description:
      "Accenture is seeking a Training Coordinator to develop and deliver learning programs for our Salt Lake City location. You'll support professional development, onboarding, and skills training. This onsite role offers the chance to impact employee growth across our growing consulting organization.",
    responsibilities: [
      "Develop training materials, including presentations, manuals, and digital learning content",
      "Coordinate and deliver training sessions for employee onboarding and professional development programs",
      "Assess training effectiveness through feedback and metrics; adjust content based on results",
      "Manage training schedules, logistics, and participant registration",
      "Collaborate with team leads and HR to identify training needs and design relevant programs",
    ],
    requirements: {
      education: "Bachelor's degree in Education, Business, Human Resources, or related field",
      experience_years: "0-2",
      skills: [
        "Training and instructional design",
        "Presentation and communication",
        "Learning management systems",
        "Project coordination",
        "Microsoft Office Suite",
      ],
      certifications: [],
    },
    benefits: [
      "Health, dental, and vision coverage",
      "401(k) with company match",
      "Paid time off (15 days)",
      "Professional development budget",
      "Mentorship program",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-22",
    dimensions: {
      autonomy: -0.2,        // Works within HR and team lead direction
      timeHorizon: -0.1,     // Program cycles, short-to-medium training initiatives
      socialDensity: 0.7,    // Facilitation, delivery, coordination — high people contact
      riskTolerance: -0.3,   // Accenture consulting, structured environment
      cognitiveStyle: -0.1,  // Instructional design, practical over theoretical
      incomeWeight: 0.35,    // Coordinator salary, entry-level consulting
      statusWeight: 0.25,    // Coordinator title, Accenture brand helps
      meaningWeight: 0.5,    // Teaching and developing people is inherently meaningful
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "training-coordinator", "consulting", "instructional-design", "learning-development"],
  },
  {
    // 0257 - Program Associate @ JLL, Charlotte NC, onsite
    id: "0257",
    title: "Program Associate",
    category: "business",
    company: "JLL",
    industry: "Real Estate Services",
    location: { city: "Charlotte", state: "NC", country: "US", remote: "onsite" },
    salary: { min: 45000, max: 58000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-13",
    description:
      "JLL (Jones Lang LaSalle) is seeking a Program Associate to support our Charlotte commercial real estate operations and client programs. You will manage project timelines, coordinate stakeholder communications, track deliverables, and ensure projects stay on schedule and within budget. This role requires precision, strong organizational skills, and the ability to manage multiple concurrent initiatives.",
    responsibilities: [
      "Maintain project schedules and monitor progress against key milestones",
      "Coordinate communication between clients, contractors, and internal teams",
      "Track project expenditures and maintain budget documentation",
      "Prepare status reports and presentations for stakeholder review",
      "Document project decisions and maintain comprehensive project files",
      "Assist with RFP preparation and vendor coordination for facility services",
    ],
    requirements: {
      education: "Bachelor's degree in Business Administration, Real Estate, Project Management, or related field",
      experience_years: "0-2",
      skills: [
        "Project management and scheduling",
        "Stakeholder coordination and communication",
        "Budget tracking and financial documentation",
        "Microsoft Office proficiency (Excel, Word, Project)",
        "Attention to detail and organizational skills",
      ],
      certifications: ["None required; CPM or CAPM in-progress preferred"],
    },
    benefits: [
      "Competitive base salary with performance bonus potential",
      "Health, dental, vision, and 401(k) benefits",
      "Professional development and tuition reimbursement",
      "Commuter benefits and wellness programs",
    ],
    dimensions: {
      autonomy: -0.2,        // Coordinates within client and team structures
      timeHorizon: -0.1,     // Project milestones, near-term deliverable focus
      socialDensity: 0.5,    // Client, contractor, and internal team coordination
      riskTolerance: -0.2,   // Real estate services, project compliance focus
      cognitiveStyle: 0.0,   // Balanced: scheduling, budget tracking, documentation
      incomeWeight: 0.35,    // Entry-level associate, JLL competitive range
      statusWeight: 0.25,    // Associate title, JLL brand recognition
      meaningWeight: 0.4,    // Real estate operations, client service focus
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "program-associate", "real-estate-services", "project-coordination", "facilities"],
  },
  {
    // 0258 - Tax Associate @ PNC Financial, St. Louis MO, onsite
    id: "0258",
    title: "Tax Associate",
    category: "business",
    company: "PNC Financial",
    industry: "Banking",
    location: { city: "St. Louis", state: "MO", country: "US", remote: "onsite" },
    salary: { min: 46000, max: 57000, currency: "USD", period: "yearly" },
    description:
      "PNC Financial, one of America's largest banks, seeks a Tax Associate for our St. Louis office. You'll support corporate tax compliance, prepare tax returns, and contribute to tax planning strategies for PNC's diverse business operations. Work onsite in a structured environment with mentorship from experienced tax professionals.",
    responsibilities: [
      "Prepare federal and state corporate income tax returns",
      "Research tax regulations and their application to PNC operations",
      "Support tax planning initiatives and optimization strategies",
      "Maintain tax documentation and workpapers",
      "Coordinate with external tax advisors and auditors",
      "Assist with tax risk assessment and compliance reviews",
    ],
    requirements: {
      education: "Bachelor's degree in Accounting, Finance, or related field",
      experience_years: "0-2",
      skills: [
        "Tax knowledge and accounting principles",
        "Attention to detail and accuracy",
        "Excel and tax preparation software",
        "Research and analytical skills",
        "Written and verbal communication",
        "Basic understanding of banking and financial services",
      ],
      certifications: [],
    },
    benefits: [
      "Health, dental, vision, and life insurance",
      "401(k) with company match",
      "Tuition reimbursement for continuing education",
      "Structured mentorship program",
      "Career advancement opportunities",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-22",
    dimensions: {
      autonomy: -0.1,        // Compliance-driven role with defined procedures
      timeHorizon: 0.3,      // Annual tax cycles, multi-year planning horizon
      socialDensity: -0.2,   // Mostly solo research and return preparation
      riskTolerance: -0.3,   // Banking/compliance sector, highly risk-averse
      cognitiveStyle: 0.3,   // Tax research, analytical, rule-application
      incomeWeight: 0.5,     // Banking industry, tax specialty premium potential
      statusWeight: 0.35,    // PNC brand, professional tax track
      meaningWeight: 0.25,   // Corporate tax compliance, standard meaning
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "tax-associate", "banking", "tax-compliance", "accounting"],
  },
  {
    // 0259 - Insurance Underwriter @ CBRE, Ann Arbor MI, onsite
    id: "0259",
    title: "Insurance Underwriter",
    category: "business",
    company: "CBRE",
    industry: "Commercial Real Estate",
    location: { city: "Ann Arbor", state: "MI", country: "US", remote: "onsite" },
    salary: { min: 47000, max: 61000, currency: "USD", period: "yearly" },
    description:
      "CBRE is the world's largest real estate services firm, managing trillions in commercial property. You'll be part of a global team managing complex transactions and operations.",
    responsibilities: [
      "Evaluate insurance applications and assess risk",
      "Determine coverage, terms, and pricing",
      "Develop underwriting guidelines supporting business objectives",
      "Manage claims and investigate coverage issues",
      "Build relationships with agents and brokers",
      "Support compliance with insurance regulations",
    ],
    requirements: {
      education: "Bachelor's degree in Business, Finance, or related field",
      experience_years: "2-4 years of underwriting, risk assessment, or insurance experience",
      skills: [
        "Risk assessment",
        "Insurance products",
        "Policy analysis",
        "Communication",
        "Attention to detail",
      ],
      certifications: ["Associate in Risk Management (ARM)"],
    },
    benefits: [
      "Comprehensive health and wellness benefits",
      "401(k) retirement savings plan with matching",
      "Paid vacation, holidays, and personal days",
      "Career advancement and training opportunities",
      "Employee recognition and incentive programs",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-02",
    dimensions: {
      autonomy: 0.0,         // Judgment-based decisions within guidelines
      timeHorizon: 0.1,      // Policy periods and claim cycles, medium-term view
      socialDensity: 0.2,    // Broker/agent relationships, some client interaction
      riskTolerance: -0.2,   // Risk-averse by function: assessing and limiting risk
      cognitiveStyle: 0.1,   // Policy analysis and risk assessment, moderate analytical
      incomeWeight: 0.45,    // CBRE, professional services, ARM certification value
      statusWeight: 0.3,     // Underwriter title, CBRE brand
      meaningWeight: 0.25,   // Risk protection has indirect meaning
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "insurance-underwriter", "commercial-real-estate", "risk-assessment", "underwriting"],
  },
  {
    // 0260 - Bookkeeper @ Deloitte, Richmond VA, onsite
    id: "0260",
    title: "Bookkeeper",
    category: "business",
    company: "Deloitte",
    industry: "Professional Services",
    location: { city: "Richmond", state: "VA", country: "US", remote: "onsite" },
    salary: { min: 34000, max: 45000, currency: "USD", period: "yearly" },
    description:
      "Deloitte, a global consulting powerhouse, seeks a Bookkeeper for our Richmond office to support internal financial operations and client engagements. You'll process transactions, maintain general ledgers, and reconcile accounts. Work onsite while gaining experience in a world-class professional services firm.",
    responsibilities: [
      "Process accounts payable and accounts receivable transactions",
      "Maintain general ledger accounts and reconcile to supporting documentation",
      "Prepare bank reconciliations and cash management reports",
      "Assist with monthly close procedures and variance analysis",
      "Prepare financial reports and documentation for external auditors",
      "Support expense management and billing processes",
    ],
    requirements: {
      education: "High school diploma or GED; Associate degree in Accounting preferred",
      experience_years: "0-2",
      skills: [
        "Bookkeeping and accounting fundamentals",
        "Proficiency in Excel and accounting software",
        "Attention to detail and accuracy",
        "Organization and time management",
        "Bank reconciliation and transaction processing",
        "Basic understanding of GAAP principles",
      ],
      certifications: [],
    },
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Tuition reimbursement and professional development",
      "Onsite dining and fitness facilities",
      "Career development opportunities",
    ],
    employment_type: "full-time",
    posted_date: "2026-03-03",
    dimensions: {
      autonomy: -0.4,        // Highly process-driven, follows GAAP and procedures strictly
      timeHorizon: -0.3,     // Daily/weekly transaction processing, monthly close cycles
      socialDensity: -0.5,   // Primarily solo desk work, minimal interaction
      riskTolerance: -0.5,   // Accuracy-critical, zero tolerance for error
      cognitiveStyle: -0.4,  // Concrete, procedural: ledger entries, reconciliations
      incomeWeight: 0.3,     // Lower salary band, entry-level accounting
      statusWeight: 0.2,     // Bookkeeper title; Deloitte brand partially offsets
      meaningWeight: 0.25,   // Operational support role, standard meaning
      geographicFlex: -0.4,  // Onsite
    },
    tags: ["business", "bookkeeper", "professional-services", "accounting", "general-ledger"],
  },
];
