export const techJobs04 = [
  {
    // 0059 — SOC Analyst @ Figma (Design Tools, Phoenix AZ, hybrid)
    id: "0059",
    title: "SOC Analyst",
    category: "tech",
    company: "Figma",
    industry: "Design Tools",
    location: { city: "Phoenix", state: "AZ", country: "US", remote: "hybrid" },
    salary: { min: 52000, max: 67000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-08",
    description:
      "Join Figma's Security Operations Center to monitor and respond to security threats protecting our infrastructure and customers.",
    responsibilities: [
      "Monitor security alerts and indicators of compromise 24/7",
      "Investigate security incidents and conduct root cause analysis",
      "Document incidents and maintain comprehensive security logs",
      "Collaborate with incident response teams on threat remediation",
      "Update security detection rules and monitoring criteria",
      "Participate in security training and awareness initiatives",
    ],
    requirements: {
      education:
        "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "1-3",
      skills: [
        "Security monitoring",
        "Incident response",
        "Log analysis",
        "Threat detection",
        "Communication",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary with annual equity grants",
      "Health, dental, and vision coverage",
      "Equity grants",
      "Flexible time off and work arrangements",
      "Professional development opportunities",
    ],
    dimensions: {
      // Figma is a high-growth tech company — slight startup lean (+0.2 on risk)
      autonomy: -0.2,
      timeHorizon: -0.3,
      socialDensity: 0.1,
      riskTolerance: 0.1,   // Figma: growth-stage, not pure startup; neutral-ish
      cognitiveStyle: -0.2,
      incomeWeight: 0.4,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "soc-analyst", "cybersecurity", "security-monitoring", "incident-response"],
  },

  {
    // 0060 — Technical Writer @ Monday.com (Work Management, Washington DC, onsite)
    id: "0060",
    title: "Technical Writer",
    category: "tech",
    company: "Monday.com",
    industry: "Work Management",
    location: { city: "Washington", state: "DC", country: "US", remote: "onsite" },
    salary: { min: 66000, max: 86000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-21",
    description:
      "Monday.com is hiring a Technical Writer to craft clear, user-focused documentation for our work OS platform. You'll translate complex product features into accessible guides, help articles, and API documentation that empower users to build powerful workflows. Work onsite in our Washington, DC office, collaborating directly with product, engineering, and design teams to shape how users experience Monday.com.",
    responsibilities: [
      "Write and maintain user guides, tutorials, and how-to articles for Monday.com features",
      "Create API documentation and developer-facing technical references",
      "Collaborate with product managers and engineers to understand features and technical details",
      "Develop content strategy for help centers and knowledge bases",
      "Test product workflows and scenarios to ensure accuracy of documentation",
      "Gather user feedback and analytics to improve documentation effectiveness",
    ],
    requirements: {
      education:
        "Bachelor's degree in English, Communications, Technical Writing, or related field",
      experience_years: "2-4",
      skills: [
        "Technical writing and documentation",
        "Ability to explain complex concepts simply",
        "Familiarity with SaaS and web platforms",
        "Proficiency with documentation tools (Markdown, Figma, Google Suite)",
        "Basic understanding of APIs and developer workflows",
        "Project management and cross-team collaboration",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive health, dental, and vision insurance",
      "401(k) with employer match",
      "Unlimited paid time off",
      "Learning and development budget",
    ],
    dimensions: {
      // Monday.com: established SaaS enterprise — slight enterprise lean (-0.1)
      autonomy: 0.4,
      timeHorizon: 0.2,
      socialDensity: -0.1,
      riskTolerance: -0.1,  // enterprise SaaS
      cognitiveStyle: 0.2,
      incomeWeight: 0.4,
      statusWeight: 0.3,
      meaningWeight: 0.35,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "technical-writer", "documentation", "saas", "api-docs"],
  },

  {
    // 0062 — Junior Product Manager @ Atlassian (Collaboration, Miami FL, hybrid)
    id: "0062",
    title: "Junior Product Manager",
    category: "tech",
    company: "Atlassian",
    industry: "Collaboration",
    location: { city: "Miami", state: "FL", country: "US", remote: "hybrid" },
    salary: { min: 84000, max: 105000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-02",
    description:
      "Atlassian serves 2M+ customers with tools like Jira, Confluence, and Bitbucket. Our mission is to unleash the potential of every team. As a Junior Product Manager, you'll have the autonomy to drive strategy for features used by millions.",
    responsibilities: [
      "Define product requirements for assigned features and user stories",
      "Work with engineering to break down features into technical tasks",
      "Gather customer feedback through interviews and user testing",
      "Create product specifications and success metrics",
      "Prioritize roadmap items based on customer value and business impact",
      "Support go-to-market planning for new feature launches",
    ],
    requirements: {
      education:
        "Bachelor's degree in Business, Computer Science, Engineering, or related field",
      experience_years: "2-4 years of product, business, or program management experience",
      skills: [
        "Product strategy",
        "User research",
        "Data analysis",
        "Roadmap development",
        "Cross-functional collaboration",
      ],
      certifications: ["Product certification (optional)"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    dimensions: {
      // Atlassian: large, publicly traded — enterprise lean (-0.1)
      autonomy: 0.2,
      timeHorizon: 0.3,
      socialDensity: 0.7,
      riskTolerance: -0.1,  // enterprise
      cognitiveStyle: 0.3,
      incomeWeight: 0.55,
      statusWeight: 0.6,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "junior-product-manager", "collaboration", "roadmap", "saas"],
  },

  {
    // 0063 — UX Researcher @ Stripe (Fintech, Pittsburgh PA, hybrid)
    id: "0063",
    title: "UX Researcher",
    category: "tech",
    company: "Stripe",
    industry: "Fintech",
    location: { city: "Pittsburgh", state: "PA", country: "US", remote: "hybrid" },
    salary: { min: 58000, max: 76000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-15",
    description:
      "Stripe processes hundreds of billions in payments annually for the world's best companies. We're building the financial infrastructure for the internet.\n\nWe're seeking a UX Researcher to join our Fintech team in Pittsburgh. This role offers the opportunity to contribute meaningfully to our mission while developing your professional skills in a collaborative environment.",
    responsibilities: [
      "Design and conduct user research studies (interviews, surveys, usability tests) to inform product decisions",
      "Analyze qualitative and quantitative user data to identify patterns and insights",
      "Create user personas, journey maps, and research documentation",
      "Collaborate with product and design teams to translate findings into actionable recommendations",
      "Present research findings to cross-functional stakeholders",
      "Evaluate prototypes and new features through user testing methodologies",
    ],
    requirements: {
      education: "Bachelor's degree in Psychology, Human Factors, or related field",
      experience_years: "2-4 years in UX research, user experience, or product research",
      skills: [
        "Qualitative research methods",
        "Usability testing",
        "Data analysis",
        "Figma/design tools",
        "Communication and presentation",
      ],
      certifications: ["UX research certification preferred"],
    },
    benefits: [
      "Hybrid work schedule",
      "Professional development budget",
      "Stock options",
      "Comprehensive health coverage",
    ],
    dimensions: {
      // Stripe: high-growth fintech, startup culture (+0.2 risk)
      autonomy: 0.3,
      timeHorizon: 0.4,
      socialDensity: 0.5,
      riskTolerance: 0.2,   // Stripe: startup-ish culture
      cognitiveStyle: 0.4,
      incomeWeight: 0.5,
      statusWeight: 0.4,
      meaningWeight: 0.5,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "ux-researcher", "fintech", "user-research", "usability-testing"],
  },

  {
    // 0064 — SOC Analyst @ Amplitude (Product Analytics, Provo UT, remote)
    id: "0064",
    title: "SOC Analyst",
    category: "tech",
    company: "Amplitude",
    industry: "Product Analytics",
    location: { city: "Provo", state: "UT", country: "US", remote: "remote" },
    salary: { min: 49000, max: 63000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-22",
    description:
      "Amplitude is the Product Intelligence platform trusted by 5000+ customers including Spotify, Instacart, and DraftKings. We help product teams understand user behavior and ship winning features. You'll drive security and stability while our platform processes trillions of analytics events.",
    responsibilities: [
      "Monitor security alerts and investigate potential security incidents",
      "Analyze logs and network traffic for anomalous behavior",
      "Document incident details and escalate critical findings",
      "Support incident response and recovery procedures",
      "Maintain security baselines and detection rule libraries",
      "Contribute to security training and awareness programs",
    ],
    requirements: {
      education:
        "Bachelor's degree in Cybersecurity, Computer Science, or related field",
      experience_years: "1-2 years of security monitoring or incident response experience",
      skills: [
        "SIEM tools",
        "Log analysis",
        "Incident response",
        "Network protocols",
        "Security frameworks",
      ],
      certifications: ["Security+", "CompTIA A+"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    dimensions: {
      // Amplitude: growth-stage SaaS, startup feel (+0.2 risk)
      autonomy: -0.2,
      timeHorizon: -0.3,
      socialDensity: 0.1,
      riskTolerance: 0.2,   // startup culture
      cognitiveStyle: -0.2,
      incomeWeight: 0.4,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.7,  // remote
    },
    tags: ["tech", "soc-analyst", "cybersecurity", "incident-response", "siem"],
  },

  {
    // 0065 — Junior Product Manager @ Plaid (Fintech, Philadelphia PA, hybrid)
    id: "0065",
    title: "Junior Product Manager",
    category: "tech",
    company: "Plaid",
    industry: "Fintech",
    location: { city: "Philadelphia", state: "PA", country: "US", remote: "hybrid" },
    salary: { min: 80000, max: 100000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-07",
    description:
      "Plaid, the financial data infrastructure that powers millions of transactions globally, is seeking a Junior Product Manager to help shape how developers integrate with financial institutions. You'll work hybrid in Philadelphia, collaborating on products that simplify fintech connectivity. This role offers mentorship from experienced PMs and direct impact on a product used by the world's leading financial platforms.",
    responsibilities: [
      "Partner with engineers and designers to define product requirements and user stories",
      "Conduct user research and gather feedback from developer customers",
      "Analyze metrics and usage patterns to identify optimization opportunities",
      "Participate in product strategy discussions and roadmap planning",
      "Document specifications and maintain clear communication across teams",
      "Support go-to-market activities and coordinate with marketing on launches",
    ],
    requirements: {
      education: "Bachelor's degree in any field; MBA or technical background is a plus",
      experience_years: "0-2",
      skills: [
        "Analytical thinking and data-driven decision-making",
        "Communication and cross-functional collaboration",
        "Familiarity with fintech or financial APIs",
        "Basic SQL or analytics tools experience",
        "User empathy and research skills",
        "Product thinking and problem-solving",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with match",
      "Learning allowance and conference attendance",
      "Flexible work arrangements",
    ],
    dimensions: {
      // Plaid: high-growth fintech unicorn, startup culture (+0.3 risk)
      autonomy: 0.2,
      timeHorizon: 0.3,
      socialDensity: 0.7,
      riskTolerance: 0.3,   // startup
      cognitiveStyle: 0.3,
      incomeWeight: 0.55,
      statusWeight: 0.6,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "junior-product-manager", "fintech", "apis", "roadmap"],
  },

  {
    // 0066 — Infrastructure Engineer I @ Cloudflare (Cybersecurity, Omaha NE, hybrid)
    id: "0066",
    title: "Infrastructure Engineer I",
    category: "tech",
    company: "Cloudflare",
    industry: "Cybersecurity",
    location: { city: "Omaha", state: "NE", country: "US", remote: "hybrid" },
    salary: { min: 57000, max: 73000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-02",
    description:
      "Cloudflare is building the foundation of a faster, more secure internet. We're looking for an Infrastructure Engineer I to help design, deploy, and maintain the edge computing infrastructure that powers our global network. You'll work with cutting-edge technology and learn from senior engineers in a supportive environment.",
    responsibilities: [
      "Deploy and configure compute resources across Cloudflare's edge data centers",
      "Write automation scripts in Python or Go to streamline infrastructure operations",
      "Monitor system performance and troubleshoot infrastructure issues",
      "Participate in capacity planning and infrastructure scaling decisions",
      "Collaborate with security and networking teams on infrastructure hardening",
      "Document infrastructure architecture and create runbooks for operational procedures",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "1-2",
      skills: [
        "Linux/Unix system administration",
        "Networking fundamentals and TCP/IP",
        "Infrastructure automation and scripting",
        "Basic cloud platform knowledge",
        "Problem-solving and debugging skills",
      ],
      certifications: [
        "None required; certifications in Linux or cloud platforms are a plus",
      ],
    },
    benefits: [
      "Competitive salary and stock options",
      "Comprehensive health, dental, and vision coverage",
      "Generous time off policy with flexible schedule",
      "Home office setup stipend and equipment allowance",
    ],
    dimensions: {
      // Cloudflare: large public company, slight enterprise lean (-0.1)
      autonomy: 0.2,
      timeHorizon: 0.3,
      socialDensity: -0.2,
      riskTolerance: -0.1,  // enterprise
      cognitiveStyle: 0.1,
      incomeWeight: 0.55,
      statusWeight: 0.35,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "infrastructure-engineer", "cybersecurity", "cloud", "automation"],
  },

  {
    // 0067 — Developer Advocate @ Zoom (Communications, Detroit MI, onsite)
    id: "0067",
    title: "Developer Advocate",
    category: "tech",
    company: "Zoom",
    industry: "Communications",
    location: { city: "Detroit", state: "MI", country: "US", remote: "onsite" },
    salary: { min: 63000, max: 80000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-02",
    description:
      "Zoom is hiring a Developer Advocate to build relationships with developers and create engaging technical content around our video platform APIs and SDKs. You'll be the voice of the developer community back to our product teams and create resources that help developers build on Zoom. This is a hands-on role combining technical depth with a passion for developer enablement.",
    responsibilities: [
      "Create technical blog posts, tutorials, code samples, and documentation for Zoom platform APIs",
      "Engage with developer communities through forums, social media, and developer events",
      "Conduct technical workshops and webinars showcasing Zoom API capabilities",
      "Gather developer feedback and synthesize it into actionable product insights",
      "Collaborate with product and engineering teams to identify barriers to adoption",
      "Maintain and improve code samples and developer resources for various programming languages",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "2-4",
      skills: [
        "Strong programming knowledge in JavaScript, Python, or Java",
        "API design and integration understanding",
        "Technical communication and content creation",
        "Community engagement and public speaking",
        "Ability to learn new technologies quickly",
      ],
      certifications: ["None required"],
    },
    benefits: [
      "Competitive salary plus stock options",
      "Health, dental, vision, and life insurance",
      "Conference and travel budget for community events",
      "Unlimited PTO and flexible work arrangements",
    ],
    dimensions: {
      // Zoom: large public company, enterprise lean (-0.1)
      autonomy: 0.6,
      timeHorizon: 0.1,
      socialDensity: 0.7,
      riskTolerance: -0.1,  // enterprise
      cognitiveStyle: 0.3,
      incomeWeight: 0.55,
      statusWeight: 0.5,
      meaningWeight: 0.45,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "developer-advocate", "communications", "apis", "developer-relations"],
  },

  {
    // 0068 — Cloud Engineer I @ Figma (Design Tools, Seattle WA, remote)
    id: "0068",
    title: "Cloud Engineer I",
    category: "tech",
    company: "Figma",
    industry: "Design Tools",
    location: { city: "Seattle", state: "WA", country: "US", remote: "remote" },
    salary: { min: 97000, max: 122000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-03",
    description:
      "Figma is where billions of design decisions get made. Used by teams at Apple, Google, Tesla, and thousands of design studios, our multiplayer design platform is changing how the world builds products. As a Cloud Engineer, you'll architect infrastructure supporting millions of real-time design collaborators.",
    responsibilities: [
      "Design and deploy scalable cloud infrastructure using AWS/GCP/Azure",
      "Implement automated infrastructure provisioning and management",
      "Optimize cloud costs and resource utilization",
      "Maintain high availability and disaster recovery procedures",
      "Monitor system performance and troubleshoot infrastructure issues",
      "Document architecture decisions and create runbooks",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "1-3 years of cloud infrastructure or DevOps experience",
      skills: [
        "AWS/GCP/Azure",
        "Infrastructure as Code",
        "Kubernetes",
        "Linux/Unix",
        "CI/CD pipelines",
      ],
      certifications: [
        "AWS Solutions Architect",
        "GCP Associate Cloud Engineer",
      ],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    dimensions: {
      // Figma: growth-stage, startup culture (+0.2 risk)
      autonomy: 0.3,
      timeHorizon: 0.3,
      socialDensity: -0.1,
      riskTolerance: 0.2,   // startup-ish
      cognitiveStyle: 0.3,
      incomeWeight: 0.6,
      statusWeight: 0.4,
      meaningWeight: 0.3,
      geographicFlex: 0.7,  // remote
    },
    tags: ["tech", "cloud-engineer", "design-tools", "kubernetes", "infrastructure-as-code"],
  },

  {
    // 0069 — Network Technician @ Palo Alto Networks (Cybersecurity, Chicago IL, remote)
    id: "0069",
    title: "Network Technician",
    category: "tech",
    company: "Palo Alto Networks",
    industry: "Cybersecurity",
    location: { city: "Chicago", state: "IL", country: "US", remote: "remote" },
    salary: { min: 52000, max: 68000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-08",
    description:
      "Palo Alto Networks is hiring a Network Technician to support our global infrastructure and security operations. This fully remote position offers the opportunity to work on cutting-edge security technologies while building your career at a leader in cybersecurity. Help protect organizations from cyber threats worldwide.",
    responsibilities: [
      "Administer and maintain network infrastructure including firewalls, routers, and switches",
      "Monitor network performance and security metrics using advanced monitoring tools",
      "Implement network security policies and access controls",
      "Troubleshoot network connectivity issues and perform root cause analysis",
      "Document network configurations and maintain detailed network topology diagrams",
      "Support security incident response and threat containment procedures",
    ],
    requirements: {
      education:
        "Associate's degree in IT, Cybersecurity, or Network Administration; or equivalent experience",
      experience_years: "1-3",
      skills: [
        "Network administration and TCP/IP fundamentals",
        "Firewall and VPN configuration experience",
        "Knowledge of network security concepts and best practices",
        "Experience with network monitoring and SIEM tools",
        "Linux and Windows system administration basics",
        "Strong troubleshooting and analytical skills",
      ],
      certifications: ["CompTIA Security+ or CompTIA Network+ (preferred)"],
    },
    benefits: [
      "Fully remote work with flexible hours",
      "Competitive salary and equity grants",
      "Comprehensive health, dental, vision, and mental health coverage",
      "Professional development and certification support",
      "Generous PTO and wellness programs",
    ],
    dimensions: {
      // Palo Alto Networks: large public company, enterprise lean (-0.1)
      autonomy: -0.4,
      timeHorizon: -0.3,
      socialDensity: -0.3,
      riskTolerance: -0.1,  // enterprise
      cognitiveStyle: -0.4,
      incomeWeight: 0.35,
      statusWeight: 0.2,
      meaningWeight: 0.3,
      geographicFlex: 0.7,  // remote
    },
    tags: ["tech", "network-technician", "cybersecurity", "networking", "firewall"],
  },

  {
    // 0070 — Junior Frontend Developer @ ServiceNow (IT Management, Boston MA, hybrid)
    id: "0070",
    title: "Junior Frontend Developer",
    category: "tech",
    company: "ServiceNow",
    industry: "IT Management",
    location: { city: "Boston", state: "MA", country: "US", remote: "hybrid" },
    salary: { min: 87000, max: 112000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-22",
    description:
      "ServiceNow is hiring a Junior Frontend Developer for our Boston office to build user interfaces for enterprise workflow automation. You'll work hybrid on real products used by thousands of organizations, building your career in full-stack development.",
    responsibilities: [
      "Develop responsive user interfaces using modern web technologies",
      "Collaborate with product and design teams on feature implementation",
      "Write clean, maintainable code following best practices",
      "Test and debug frontend applications",
      "Participate in code reviews and improve code quality",
      "Learn and contribute to our component library and design system",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "1-3",
      skills: [
        "Proficiency in JavaScript and modern frameworks (React, Vue, or Angular)",
        "HTML, CSS, and responsive design knowledge",
        "Version control (Git) and development workflows",
        "Understanding of RESTful APIs and asynchronous programming",
        "Problem-solving and communication skills",
        "Familiarity with development tools and debugging",
      ],
      certifications: [],
    },
    benefits: [
      "Hybrid work (3 days on-site in Boston)",
      "Competitive salary and equity packages",
      "Comprehensive health, dental, and vision coverage",
      "Professional development and training budget",
      "Mentorship from experienced engineers",
    ],
    dimensions: {
      // ServiceNow: large enterprise company (-0.1 risk)
      autonomy: 0.1,
      timeHorizon: -0.2,
      socialDensity: -0.1,
      riskTolerance: -0.1,  // enterprise
      cognitiveStyle: -0.1,
      incomeWeight: 0.45,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "junior-frontend-developer", "it-management", "react", "javascript"],
  },

  {
    // 0071 — Release Engineer @ Slack (Collaboration, Durham NC, hybrid)
    id: "0071",
    title: "Release Engineer",
    category: "tech",
    company: "Slack",
    industry: "Collaboration",
    location: { city: "Durham", state: "NC", country: "US", remote: "hybrid" },
    salary: { min: 66000, max: 83000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-07",
    description:
      "Slack is hiring a Release Engineer to manage our deployment pipeline and release processes. Based in Durham with hybrid flexibility, you'll own the infrastructure that gets code from developers to millions of users worldwide. You'll work across teams to improve velocity, reliability, and tooling. This role blends operations, automation, and strategic thinking.",
    responsibilities: [
      "Design and maintain release pipelines and deployment automation across cloud infrastructure",
      "Coordinate releases with product and engineering teams; manage rollout strategies and rollback procedures",
      "Monitor deployment metrics, incident response, and system health; implement improvements based on observations",
      "Build tools and automation to reduce manual release work and improve developer experience",
      "Document processes and knowledge; mentor engineers on release procedures and best practices",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science or related field, or equivalent experience",
      experience_years: "2-4",
      skills: [
        "CI/CD pipelines and tools (Jenkins, GitLab, GitHub Actions)",
        "Cloud platforms (AWS, GCP, or Azure)",
        "Bash and Python scripting",
        "Git and version control",
        "Kubernetes or container orchestration",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary + equity",
      "Comprehensive health and wellness benefits",
      "Unlimited PTO",
      "$1,500/year professional development",
      "Home office setup budget",
    ],
    dimensions: {
      // Slack (Salesforce): large enterprise, slight enterprise lean (-0.1)
      autonomy: 0.1,
      timeHorizon: -0.2,
      socialDensity: 0.2,
      riskTolerance: -0.1,  // enterprise (Salesforce-owned)
      cognitiveStyle: 0.0,
      incomeWeight: 0.5,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "release-engineer", "collaboration", "ci-cd", "devops"],
  },

  {
    // 0072 — Machine Learning Engineer I @ Snowflake (Data, Houston TX, hybrid)
    id: "0072",
    title: "Machine Learning Engineer I",
    category: "tech",
    company: "Snowflake",
    industry: "Data",
    location: { city: "Houston", state: "TX", country: "US", remote: "hybrid" },
    salary: { min: 80000, max: 104000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-05",
    description:
      "Join Snowflake's ML team to build scalable machine learning systems. You'll work with modern ML frameworks and infrastructure, collaborating with data scientists and engineers.",
    responsibilities: [
      "Design and implement machine learning pipelines for production systems",
      "Optimize model training and inference performance",
      "Build data preprocessing and feature engineering frameworks",
      "Collaborate with data scientists on model deployment and monitoring",
      "Contribute to open source ML libraries and tools",
      "Participate in code reviews and architectural discussions",
    ],
    requirements: {
      education:
        "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "2-5",
      skills: [
        "Python",
        "TensorFlow or PyTorch",
        "SQL",
        "Statistics",
        "Data pipelines",
        "Cloud ML platforms",
        "Cloud platforms",
        "Scripting",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary with annual equity grants",
      "Health, dental, and vision coverage",
      "Equity grants",
      "Flexible time off and work arrangements",
      "Professional development opportunities",
    ],
    dimensions: {
      // Snowflake: large public company, enterprise lean (-0.1)
      autonomy: 0.5,
      timeHorizon: 0.6,
      socialDensity: -0.2,
      riskTolerance: -0.1,  // enterprise/public
      cognitiveStyle: 0.7,
      incomeWeight: 0.65,
      statusWeight: 0.5,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "machine-learning-engineer", "data", "python", "mlops"],
  },

  {
    // 0073 — Business Intelligence Analyst @ DigitalOcean (Cloud, Durham NC, onsite)
    id: "0073",
    title: "Business Intelligence Analyst",
    category: "tech",
    company: "DigitalOcean",
    industry: "Cloud",
    location: { city: "Durham", state: "NC", country: "US", remote: "onsite" },
    salary: { min: 58000, max: 76000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-01",
    description:
      "We're hiring a Business Intelligence Analyst at DigitalOcean. This is an exciting opportunity to join our open, inclusive, dev-centric team and make a direct impact on our mission. If you have 2-4 years years of experience and are passionate about Cloud, we'd love to hear from you.",
    responsibilities: [
      "Build and maintain data pipelines that connect disparate systems for unified analytics",
      "Develop dashboards and reports enabling stakeholders to make data-driven decisions",
      "Investigate data quality issues and implement solutions to improve accuracy",
      "Partner with product and engineering teams to instrument product for analytics",
      "Transform raw data into actionable insights supporting business strategy",
      "Establish metrics frameworks and KPI tracking systems across the organization",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "2-4 years",
      skills: [
        "SQL",
        "Python or R",
        "Data visualization",
        "BI tools (Tableau/PowerBI)",
        "Statistical analysis",
      ],
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
    dimensions: {
      // DigitalOcean: mid-size public company, moderate risk (-0.0)
      autonomy: 0.2,
      timeHorizon: 0.2,
      socialDensity: 0.2,
      riskTolerance: 0.0,   // public but developer-focused culture
      cognitiveStyle: 0.4,
      incomeWeight: 0.5,
      statusWeight: 0.4,
      meaningWeight: 0.3,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "business-intelligence-analyst", "cloud", "sql", "data-visualization"],
  },

  {
    // 0074 — Release Engineer @ HubSpot (Marketing Tech, Seattle WA, remote)
    id: "0074",
    title: "Release Engineer",
    category: "tech",
    company: "HubSpot",
    industry: "Marketing Tech",
    location: { city: "Seattle", state: "WA", country: "US", remote: "remote" },
    salary: { min: 87000, max: 110000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-07",
    description:
      "We're hiring a Release Engineer at HubSpot. This is an exciting opportunity to join our inbound-focused, customer-obsessed, open team and make a direct impact on our mission. If you have 0-2 years years of experience and are passionate about Marketing Tech, we'd love to hear from you.",
    responsibilities: [
      "Design and maintain CI/CD pipelines enabling safe, frequent releases to production",
      "Automate deployment processes, reducing manual effort and human error",
      "Develop release management tools and processes improving developer productivity",
      "Monitor build and deployment metrics, identifying bottlenecks and optimization opportunities",
      "Implement release coordination procedures ensuring smooth multi-system deployments",
      "Support incident response when production issues require rollback or remediation",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "0-2 years",
      skills: [
        "CI/CD tools",
        "Docker/Kubernetes",
        "Shell scripting",
        "Linux",
        "Version control",
      ],
      certifications: [],
    },
    benefits: [
      "Comprehensive health insurance (medical, dental, vision)",
      "401(k) retirement plan with company match",
      "Paid time off (PTO) and holidays",
      "Professional development and training budget",
      "Flexible work schedule and remote work options",
      "Stock options or equity compensation",
      "Wellness programs and gym membership reimbursement",
      "Product discounts and free subscriptions",
    ],
    dimensions: {
      // HubSpot: large public company, enterprise lean (-0.1)
      autonomy: 0.1,
      timeHorizon: -0.2,
      socialDensity: 0.2,
      riskTolerance: -0.1,  // enterprise/public
      cognitiveStyle: 0.0,
      incomeWeight: 0.5,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.7,  // remote
    },
    tags: ["tech", "release-engineer", "marketing-tech", "ci-cd", "kubernetes"],
  },

  {
    // 0075 — Database Administrator I @ Ramp (Fintech, Charlotte NC, onsite)
    id: "0075",
    title: "Database Administrator I",
    category: "tech",
    company: "Ramp",
    industry: "Fintech",
    location: { city: "Charlotte", state: "NC", country: "US", remote: "onsite" },
    salary: { min: 58000, max: 73000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-08",
    description:
      "Ramp is seeking a Database Administrator I to manage and optimize our PostgreSQL and cloud databases supporting our corporate spend management platform. You will monitor database performance, implement backup and recovery strategies, troubleshoot issues, and work with engineering teams to ensure data reliability and security for our growing customer base.",
    responsibilities: [
      "Monitor database performance and troubleshoot connectivity issues",
      "Implement and test backup and disaster recovery procedures",
      "Optimize database queries and maintain performance standards",
      "Manage user access and implement security best practices",
      "Collaborate with engineering on database design and scaling",
      "Document database architecture and maintain runbooks",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Information Technology, or related field",
      experience_years: "1-2",
      skills: [
        "SQL and database query optimization",
        "PostgreSQL or MySQL administration",
        "Cloud database platforms (AWS RDS, GCP Cloud SQL)",
        "Backup, recovery, and disaster planning",
        "Linux system administration",
      ],
      certifications: ["AWS or GCP cloud certifications preferred"],
    },
    benefits: [
      "Competitive salary and equity options",
      "Health, dental, vision, and life insurance",
      "Unlimited PTO and flexible work arrangements",
      "Learning budget and professional development",
    ],
    dimensions: {
      // Ramp: high-growth fintech startup (+0.3 risk)
      autonomy: -0.1,
      timeHorizon: 0.3,
      socialDensity: -0.4,
      riskTolerance: 0.3,   // startup
      cognitiveStyle: 0.1,
      incomeWeight: 0.5,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "database-administrator", "fintech", "postgresql", "sql"],
  },
];
