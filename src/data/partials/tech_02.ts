export const techJobs02 = [
  {
    id: "0024",
    title: "Junior UI Developer",
    category: "tech",
    company: "HashiCorp",
    industry: "Infrastructure",
    location: { city: "Miami", state: "FL", country: "US", remote: "remote" },
    salary: { min: 71000, max: 92000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-09",
    description:
      "HashiCorp is hiring a Junior UI Developer to build user interfaces for infrastructure-as-code tools used by thousands of teams. Work fully remote developing experiences that empower engineers to automate infrastructure at scale.",
    responsibilities: [
      "Build responsive user interfaces using modern frontend frameworks",
      "Implement design specifications and improve user experience",
      "Write clean, well-tested JavaScript and CSS code",
      "Collaborate with product and design teams on feature development",
      "Debug and troubleshoot frontend issues",
      "Contribute to our design system and component library",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science or related field; or equivalent experience",
      experience_years: "1-2",
      skills: [
        "Proficiency in JavaScript and modern frontend frameworks",
        "HTML5 and CSS3 knowledge",
        "Git version control and development workflows",
        "Problem-solving and attention to detail",
        "Communication and collaboration skills",
        "Familiarity with testing frameworks (Jest, Enzyme, or similar)",
      ],
      certifications: [],
    },
    benefits: [
      "Fully remote work opportunity",
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "Learning and development budget",
      "Flexible hours and work-life balance",
    ],
    dimensions: {
      autonomy: 0.1,           // Junior UI dev, some structure but remote = modest autonomy
      timeHorizon: -0.2,       // Frontend/UI — fast feedback loops, visible results quickly
      socialDensity: -0.1,     // Collaborates with product/design but primarily solo dev work
      riskTolerance: 0.3,      // HashiCorp is established startup-culture company
      cognitiveStyle: -0.1,    // Frontend/UI — practical, concrete implementation work
      incomeWeight: 0.45,      // Mid-range salary for junior role
      statusWeight: 0.3,       // Junior title, UI work has moderate prestige
      meaningWeight: 0.3,      // Infrastructure tooling, indirect impact
      geographicFlex: 0.7,     // Fully remote
    },
    tags: ["tech", "junior-ui-developer", "frontend", "javascript", "infrastructure"],
  },
  {
    id: "0025",
    title: "Mobile Developer",
    category: "tech",
    company: "Salesforce",
    industry: "CRM",
    location: { city: "Boulder", state: "CO", country: "US", remote: "onsite" },
    salary: { min: 79000, max: 101000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-18",
    description:
      "Salesforce CRM powers customer relationships for enterprises worldwide. We're #1 in customer relationship management, trusted by millions of users.\n\nWe're seeking a Mobile Developer to join our CRM team in Boulder. This role offers the opportunity to contribute meaningfully to our mission while developing your professional skills in a collaborative environment.",
    responsibilities: [
      "Develop native and cross-platform mobile applications using Swift, Kotlin, or React Native",
      "Collaborate with designers and product managers to implement features",
      "Optimize mobile app performance and ensure quality through testing",
      "Debug and resolve mobile-specific issues and platform differences",
      "Integrate with backend APIs and third-party services",
      "Maintain code quality through code reviews and best practices",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science or equivalent professional experience",
      experience_years: "2-4 years in mobile app development (iOS, Android, or both)",
      skills: [
        "Swift/Kotlin or React Native",
        "Mobile design patterns",
        "REST APIs",
        "Git",
        "Mobile debugging tools",
      ],
      certifications: [
        "Mobile development certification or app store publications appreciated",
      ],
    },
    benefits: [
      "Competitive salary and stock options",
      "Onsite work in Boulder",
      "Learning budget",
      "Comprehensive health coverage",
    ],
    dimensions: {
      autonomy: 0.4,           // Mobile dev — relatively independent feature ownership
      timeHorizon: -0.1,       // Mobile — release cycles are moderate, some fast feedback
      socialDensity: -0.2,     // Collaborates with designers/PMs but primarily solo coding
      riskTolerance: -0.1,     // Salesforce is a large enterprise company
      cognitiveStyle: 0.0,     // Mobile: mix of practical patterns and platform-specific abstraction
      incomeWeight: 0.6,       // Good salary band, equity options
      statusWeight: 0.45,      // Salesforce brand carries prestige
      meaningWeight: 0.3,      // CRM tooling, indirect impact on businesses
      geographicFlex: -0.4,    // Onsite in Boulder
    },
    tags: ["tech", "mobile-developer", "ios", "android", "crm"],
  },
  {
    id: "0026",
    title: "Network Technician",
    category: "tech",
    company: "Notion",
    industry: "Productivity",
    location: { city: "St. Louis", state: "MO", country: "US", remote: "hybrid" },
    salary: { min: 42000, max: 55000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-09",
    description:
      "Notion is the all-in-one workspace for notes, databases, wikis, and project management. Used by 20M+ people and 4000+ teams, we're reimagining how work gets organized. You'll keep our global infrastructure stable and performant as we scale.",
    responsibilities: [
      "Install, configure, and maintain network infrastructure",
      "Troubleshoot connectivity issues and network performance",
      "Manage network security through firewalls and access controls",
      "Monitor bandwidth utilization and optimize network traffic",
      "Maintain network documentation and asset inventory",
      "Support network upgrades and infrastructure projects",
    ],
    requirements: {
      education:
        "Associate's degree in IT or Network Administration or equivalent experience",
      experience_years: "2-4 years of network administration or IT support experience",
      skills: [
        "Network configuration",
        "Troubleshooting",
        "Switching/routing",
        "Firewalls",
        "Network monitoring",
      ],
      certifications: ["CompTIA Network+", "Cisco CCNA (preferred)"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    dimensions: {
      autonomy: -0.4,          // Network technician — follows procedures, low autonomy
      timeHorizon: -0.3,       // Reactive troubleshooting, short feedback cycles
      socialDensity: -0.3,     // Mostly solo hands-on infrastructure work
      riskTolerance: 0.2,      // Notion is a growth-stage startup
      cognitiveStyle: -0.4,    // Concrete, hands-on physical networking tasks
      incomeWeight: 0.35,      // Lower salary band for this role
      statusWeight: 0.2,       // Network tech is functional, not high prestige
      meaningWeight: 0.25,     // Keeping infrastructure running, indirect impact
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "network-technician", "networking", "infrastructure", "productivity-software"],
  },
  {
    id: "0027",
    title: "Platform Engineer I",
    category: "tech",
    company: "Render",
    industry: "Cloud",
    location: { city: "Bethesda", state: "MD", country: "US", remote: "hybrid" },
    salary: { min: 93000, max: 117000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-25",
    description:
      "Join Render's platform engineering team to build the infrastructure enabling developers to deploy and scale applications effortlessly.",
    responsibilities: [
      "Design and implement platform services for developer productivity",
      "Build automation and tooling for deployment and infrastructure management",
      "Optimize platform performance and reliability",
      "Collaborate with customer-facing teams on feature development",
      "Contribute to platform documentation and best practices",
      "Participate in on-call rotation and incident response",
    ],
    requirements: {
      education:
        "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "2-5",
      skills: [
        "Cloud platforms",
        "Container orchestration",
        "Infrastructure as code",
        "Systems design",
        "Go or Rust",
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
      autonomy: 0.3,           // Platform Eng baseline
      timeHorizon: 0.4,        // Platform work is long-term systems thinking
      socialDensity: -0.1,     // Collaborates with customer-facing teams but mostly technical
      riskTolerance: 0.4,      // Render is a growth-stage startup, on-call rotation
      cognitiveStyle: 0.3,     // Platform engineering requires systems design abstraction
      incomeWeight: 0.6,       // High salary band with equity
      statusWeight: 0.4,       // Render is respected in the developer community
      meaningWeight: 0.35,     // Enabling developer productivity — meaningful to engineers
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "platform-engineer", "cloud", "devops", "infrastructure-as-code"],
  },
  {
    id: "0028",
    title: "Systems Administrator",
    category: "tech",
    company: "Cisco",
    industry: "Networking",
    location: { city: "Durham", state: "NC", country: "US", remote: "hybrid" },
    salary: { min: 55000, max: 71000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-09",
    description:
      "Cisco, the global networking leader, seeks a Systems Administrator for our Durham office. Working hybrid, you'll manage infrastructure, support network operations, and contribute to systems reliability. Join a company that's been shaping network technology for decades.",
    responsibilities: [
      "Administer Windows and Linux server environments",
      "Monitor network infrastructure and system performance",
      "Manage user accounts, access, and security controls",
      "Support system deployments and infrastructure upgrades",
      "Troubleshoot infrastructure and connectivity issues",
      "Maintain system documentation and runbooks",
    ],
    requirements: {
      education:
        "High school diploma or GED; Associate degree in IT or related field preferred",
      experience_years: "1-3",
      skills: [
        "Windows and Linux system administration",
        "Networking fundamentals and routing/switching",
        "Directory services and user management",
        "Monitoring and logging tools",
        "Bash or PowerShell scripting",
        "Troubleshooting and documentation skills",
      ],
      certifications: ["CompTIA A+ or Cisco certification preferred"],
    },
    benefits: [
      "Health, dental, vision, and life insurance",
      "401(k) with company match",
      "Tuition reimbursement and certification support",
      "Hybrid flexibility",
      "Career development opportunities",
    ],
    dimensions: {
      autonomy: -0.2,          // SysAdmin baseline — follows procedures
      timeHorizon: 0.1,        // Mix of reactive fixes and longer infrastructure projects
      socialDensity: -0.2,     // Primarily technical, limited external-facing work
      riskTolerance: -0.2,     // Cisco is a large enterprise, stable environment
      cognitiveStyle: -0.3,    // Concrete, procedural systems work
      incomeWeight: 0.4,       // Mid-range salary for sysadmin role
      statusWeight: 0.3,       // Cisco brand is reputable; sysadmin not glamorous
      meaningWeight: 0.25,     // Infrastructure reliability, support function
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "systems-administrator", "linux", "networking", "enterprise"],
  },
  {
    id: "0029",
    title: "Help Desk Technician",
    category: "tech",
    company: "Canva",
    industry: "Design",
    location: { city: "Irvine", state: "CA", country: "US", remote: "hybrid" },
    salary: { min: 48000, max: 63000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-07",
    description:
      "We're hiring a Help Desk Technician at Canva. This is an exciting opportunity to join our creative, user-focused, democratizing team and make a direct impact on our mission. If you have 0-2 years years of experience and are passionate about Design, we'd love to hear from you.",
    responsibilities: [
      "Contribute to team projects and strategic initiatives",
      "Collaborate with cross-functional teams on deliverables",
      "Support management with analysis and reporting",
      "Identify process improvements and efficiency opportunities",
      "Maintain accurate documentation and records",
      "Participate in professional development and training activities",
    ],
    requirements: {
      education: "Bachelor's degree or relevant certification",
      experience_years: "0-2 years",
      skills: [
        "Troubleshooting",
        "Customer service",
        "Windows/Mac",
        "Hardware",
        "Ticketing systems",
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
      autonomy: -0.6,          // Help Desk baseline — highly structured, reactive
      timeHorizon: -0.6,       // Immediate ticket resolution, very short feedback
      socialDensity: 0.4,      // Constant user interaction and support
      riskTolerance: 0.2,      // Canva is a fast-growing startup
      cognitiveStyle: -0.5,    // Concrete, troubleshooting-focused
      incomeWeight: 0.3,       // Lower salary band for entry-level help desk
      statusWeight: 0.2,       // Help Desk has low prestige; Canva brand softens this
      meaningWeight: 0.3,      // Helping users directly, Canva's democratizing design mission
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "help-desk-technician", "it-support", "customer-service", "design-software"],
  },
  {
    id: "0030",
    title: "Junior Product Manager",
    category: "tech",
    company: "Palo Alto Networks",
    industry: "Cybersecurity",
    location: { city: "Cambridge", state: "MA", country: "US", remote: "hybrid" },
    salary: { min: 104000, max: 130000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-05",
    description:
      "Palo Alto Networks is seeking a Junior Product Manager to help define the future of cybersecurity products. Work hybrid in our Cambridge office alongside experienced PMs and engineers. You'll own product initiatives that impact millions of security professionals worldwide.",
    responsibilities: [
      "Define product requirements and develop feature specifications",
      "Collaborate with engineering teams on product development and rollout",
      "Conduct market research and gather customer feedback",
      "Analyze product metrics and recommend improvements",
      "Participate in product planning and roadmap development",
      "Communicate with stakeholders on product progress and impact",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Business, Engineering, or related field",
      experience_years: "2-4",
      skills: [
        "Product management fundamentals and frameworks",
        "Understanding of cybersecurity products and markets",
        "Data analysis and metrics interpretation",
        "Communication and stakeholder management",
        "Problem-solving and strategic thinking",
        "Technical literacy and software development knowledge",
      ],
      certifications: [],
    },
    benefits: [
      "Hybrid work arrangement in Cambridge",
      "Competitive salary with equity packages",
      "Comprehensive health, dental, and vision coverage",
      "Professional development and executive coaching",
      "Unlimited PTO and flexible work arrangements",
    ],
    dimensions: {
      autonomy: 0.2,           // PM baseline — some ownership but junior level has constraints
      timeHorizon: 0.3,        // Product roadmaps are medium-term thinking
      socialDensity: 0.7,      // High cross-functional collaboration
      riskTolerance: -0.1,     // Palo Alto Networks is an enterprise security company
      cognitiveStyle: 0.3,     // Strategic thinking, data analysis, abstract planning
      incomeWeight: 0.55,      // High salary for a junior role
      statusWeight: 0.6,       // PM is a high-status role, Palo Alto is a strong brand
      meaningWeight: 0.4,      // Cybersecurity — protecting organizations, real mission
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "junior-product-manager", "product-management", "cybersecurity", "strategy"],
  },
  {
    id: "0031",
    title: "Data Engineer I",
    category: "tech",
    company: "Snowflake",
    industry: "Data",
    location: { city: "Omaha", state: "NE", country: "US", remote: "remote" },
    salary: { min: 60000, max: 76000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-18",
    description:
      "Snowflake is hiring a Data Engineer I to build data pipelines and infrastructure supporting our cloud data platform. Working remotely from Omaha, you'll design scalable data systems, optimize performance, and enable analytics at scale. This role offers exposure to cutting-edge data engineering practices.",
    responsibilities: [
      "Design and implement data pipelines using ETL tools; ensure data quality and reliability",
      "Optimize database performance; write efficient SQL queries and analyze execution plans",
      "Collaborate with data scientists and analysts to understand data requirements",
      "Monitor data pipelines and troubleshoot issues; implement monitoring and alerting",
      "Document data architecture and maintain data catalogs; contribute to knowledge sharing",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "1-3",
      skills: [
        "SQL and database design",
        "Python or Java",
        "ETL tools (Apache Spark, Airflow, or similar)",
        "Cloud data warehouses (Snowflake, BigQuery, Redshift)",
        "Data modeling",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary + equity",
      "Comprehensive health and wellness benefits",
      "Unlimited PTO",
      "$3,000/year learning budget",
      "Home office equipment stipend",
    ],
    dimensions: {
      autonomy: 0.3,           // Data engineering — moderate independence
      timeHorizon: 0.4,        // Data infrastructure is long-term work
      socialDensity: 0.0,      // Collaborates with analysts but mostly solo pipeline work
      riskTolerance: 0.35,     // Snowflake is public but high-growth tech culture
      cognitiveStyle: 0.4,     // Data modeling, systems thinking, abstract pipeline design
      incomeWeight: 0.6,       // Competitive salary + equity
      statusWeight: 0.45,      // Snowflake is a highly valued brand in data
      meaningWeight: 0.3,      // Enabling analytics, indirect but important
      geographicFlex: 0.7,     // Fully remote
    },
    tags: ["tech", "data-engineer", "etl", "sql", "cloud-data-warehouse"],
  },
  {
    id: "0032",
    title: "SOC Analyst",
    category: "tech",
    company: "Adobe",
    industry: "Creative Software",
    location: { city: "Columbus", state: "OH", country: "US", remote: "hybrid" },
    salary: { min: 49000, max: 63000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-08",
    description:
      "Join Adobe's Security Operations Center to monitor and respond to security threats protecting our infrastructure and customers.",
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
      autonomy: -0.2,          // SOC Analyst baseline — follows playbooks
      timeHorizon: -0.3,       // Reactive, shift-based, immediate threat response
      socialDensity: 0.1,      // Works with incident response team, some collaboration
      riskTolerance: -0.1,     // Adobe is a large established enterprise
      cognitiveStyle: -0.2,    // Pattern recognition, log analysis — concrete analytical work
      incomeWeight: 0.4,       // Mid-range; security pays reasonably but this is entry-level
      statusWeight: 0.35,      // Adobe brand is strong; security function is respected
      meaningWeight: 0.35,     // Protecting user data and infrastructure — real stakes
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "soc-analyst", "cybersecurity", "incident-response", "creative-software"],
  },
  {
    id: "0033",
    title: "Scrum Master",
    category: "tech",
    company: "Dropbox",
    industry: "Cloud Storage",
    location: { city: "Boston", state: "MA", country: "US", remote: "onsite" },
    salary: { min: 85000, max: 106000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-04",
    description:
      "We're hiring a Scrum Master at Dropbox. This is an exciting opportunity to join our efficient, user-focused, scaling team and make a direct impact on our mission. If you have 2-4 years years of experience and are passionate about Cloud Storage, we'd love to hear from you.",
    responsibilities: [
      "Facilitate daily standups and sprint ceremonies ensuring team alignment",
      "Remove impediments enabling teams to deliver on sprint commitments",
      "Track metrics including velocity and burndown identifying improvement areas",
      "Work with product owners to maintain and prioritize product backlog",
      "Coach teams on agile practices and continuous improvement mindset",
      "Report on team health and sprint progress to stakeholders",
    ],
    requirements: {
      education: "Bachelor's degree or relevant experience",
      experience_years: "2-4 years",
      skills: [
        "Agile methodologies",
        "Team facilitation",
        "Process improvement",
        "Communication",
        "Conflict resolution",
      ],
      certifications: ["Certified ScrumMaster (CSM)", "Safe Scrum Master preferred"],
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
      autonomy: 0.1,           // Scrum Master baseline — serves the team, not directing
      timeHorizon: 0.2,        // Sprint cycles are short but coaching is a long-term game
      socialDensity: 0.8,      // Extremely people-facing — facilitating, coaching, reporting
      riskTolerance: 0.1,      // Dropbox is established, stable-ish company
      cognitiveStyle: 0.1,     // Process-oriented, people-focused, moderate abstraction
      incomeWeight: 0.5,       // Good salary band for the role
      statusWeight: 0.4,       // Scrum Master baseline; Dropbox is a known brand
      meaningWeight: 0.35,     // Enabling team effectiveness — meaningful in aggregate
      geographicFlex: -0.4,    // Onsite in Boston
    },
    tags: ["tech", "scrum-master", "agile", "team-facilitation", "cloud-storage"],
  },
  {
    id: "0034",
    title: "QA Engineer",
    category: "tech",
    company: "SpaceX",
    industry: "Aerospace",
    location: { city: "Bethesda", state: "MD", country: "US", remote: "hybrid" },
    salary: { min: 72000, max: 93000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-20",
    description:
      "SpaceX is seeking a QA Engineer for our Bethesda facility to ensure the quality and reliability of our aerospace systems and software. You'll design rigorous testing protocols, execute comprehensive test plans, and contribute to the mission of making humanity multiplanetary. This hybrid role offers the opportunity to work on cutting-edge aerospace technology.",
    responsibilities: [
      "Design and execute comprehensive test strategies for aerospace software and hardware systems",
      "Create and maintain automated test suites using Python or C++",
      "Conduct integration testing, performance testing, and failure mode analysis",
      "Document test results, identify defects, and track resolution",
      "Collaborate with engineering teams on quality assurance requirements and improvements",
    ],
    requirements: {
      education: "Bachelor's degree in Engineering, Computer Science, or related field",
      experience_years: "2-4",
      skills: [
        "Test automation using Python, C++, or similar languages",
        "Understanding of aerospace or safety-critical systems",
        "Experience with testing frameworks and CI/CD tools",
        "Strong analytical and problem-solving abilities",
        "Excellent documentation and technical communication",
      ],
      certifications: ["ISTQB or aerospace-related certification (preferred)"],
    },
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, vision, and dental coverage",
      "401(k) with company match",
      "Professional development and training opportunities",
      "Hybrid work arrangement",
    ],
    dimensions: {
      autonomy: -0.1,          // QA baseline — follows test plans, some ownership
      timeHorizon: -0.2,       // QA feedback loops are short; aerospace adds longer cycles
      socialDensity: 0.0,      // Collaborates with engineering, but primarily analytical work
      riskTolerance: 0.5,      // SpaceX is a high-intensity, high-stakes startup culture
      cognitiveStyle: -0.1,    // QA: concrete testing with some analytical abstraction
      incomeWeight: 0.45,      // Decent salary, equity at SpaceX is notable
      statusWeight: 0.5,       // SpaceX is a prestige employer — above average status
      meaningWeight: 0.6,      // Making humanity multiplanetary — extremely high mission value
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "qa-engineer", "test-automation", "aerospace", "safety-critical"],
  },
  {
    id: "0035",
    title: "UX Researcher",
    category: "tech",
    company: "CrowdStrike",
    industry: "Cybersecurity",
    location: { city: "Ann Arbor", state: "MI", country: "US", remote: "hybrid" },
    salary: { min: 61000, max: 80000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-17",
    description:
      "CrowdStrike is seeking a UX Researcher to uncover customer insights that drive product innovation. You'll conduct user research, analyze usability data, and translate findings into design improvements. Work hybrid from Ann Arbor for the leading cybersecurity platform protecting enterprises.",
    responsibilities: [
      "Conduct user interviews and usability testing with customers",
      "Analyze user behavior data and identify pain points",
      "Create research insights and recommendations",
      "Collaborate with product and design teams",
      "Develop testing methodologies and research plans",
    ],
    requirements: {
      education: "Bachelor's degree in Psychology, HCI, Design, or related field",
      experience_years: "0-2",
      skills: [
        "User research methodologies",
        "Interview and testing facilitation",
        "Data analysis and synthesis",
        "Communication and presentation",
        "Empathy and user-centered thinking",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health, dental, and vision coverage",
      "401(k) with company match",
      "Flexible hybrid Ann Arbor schedule",
      "Professional development and conference attendance",
    ],
    dimensions: {
      autonomy: 0.3,           // UX Researcher — sets own research agenda with some direction
      timeHorizon: 0.6,        // Research is long-horizon — insights inform future product
      socialDensity: 0.5,      // Regular user interviews, cross-team collaboration
      riskTolerance: 0.2,      // CrowdStrike is a large public company
      cognitiveStyle: 0.4,     // Abstract synthesis, qualitative analysis, pattern recognition
      incomeWeight: 0.5,       // Mid-range UX salary
      statusWeight: 0.4,       // UX Research is respected; CrowdStrike is a strong brand
      meaningWeight: 0.5,      // Improving security UX — user-centered, mission-driven
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "ux-researcher", "user-research", "cybersecurity", "product-design"],
  },
  {
    id: "0036",
    title: "Platform Engineer I",
    category: "tech",
    company: "Stripe",
    industry: "Fintech",
    location: { city: "Bethesda", state: "MD", country: "US", remote: "remote" },
    salary: { min: 93000, max: 117000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-04",
    description:
      "Stripe is seeking a Platform Engineer I to build infrastructure and platforms that power payments globally. Work fully remote developing systems used by millions of businesses and developers. Help scale the financial infrastructure of the internet.",
    responsibilities: [
      "Design and implement platform infrastructure and tools for scale",
      "Develop APIs and services that support our payment processing",
      "Improve system reliability, performance, and observability",
      "Collaborate with product and engineering teams on platform improvements",
      "Document systems and best practices for the engineering team",
      "Participate in oncall rotation for production systems",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "2-4",
      skills: [
        "Backend development experience with Go, Java, or Python",
        "Distributed systems and microservices architecture",
        "Database design and optimization",
        "Strong debugging and troubleshooting skills",
        "Understanding of financial systems and payments (preferred)",
        "Clear communication and collaborative skills",
      ],
      certifications: [],
    },
    benefits: [
      "Fully remote work with flexible hours",
      "Competitive salary and equity",
      "Comprehensive health, dental, and vision coverage",
      "Professional development and conference budgets",
      "Unlimited PTO and flexible time off",
    ],
    dimensions: {
      autonomy: 0.35,          // Platform Eng + Stripe culture values ownership
      timeHorizon: 0.4,        // Platform systems are long-lived investments
      socialDensity: -0.05,    // Collaborates across teams but primarily technical work
      riskTolerance: 0.3,      // Stripe is scaling fast but established enough
      cognitiveStyle: 0.35,    // Distributed systems, payments complexity — abstract thinking
      incomeWeight: 0.65,      // Stripe pays top of market
      statusWeight: 0.55,      // Stripe is an elite employer in fintech
      meaningWeight: 0.4,      // Powering global payments infrastructure — real impact
      geographicFlex: 0.7,     // Fully remote
    },
    tags: ["tech", "platform-engineer", "fintech", "distributed-systems", "payments"],
  },
  {
    id: "0037",
    title: "Infrastructure Engineer I",
    category: "tech",
    company: "Rippling",
    industry: "HR Tech",
    location: { city: "Phoenix", state: "AZ", country: "US", remote: "remote" },
    salary: { min: 64000, max: 82000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-11",
    description:
      "Rippling is hiring an Infrastructure Engineer I to build and maintain the cloud infrastructure supporting our people management platform. Working remotely from Phoenix, you'll develop infrastructure solutions that scale with our growth. This role combines systems engineering with rapid learning.",
    responsibilities: [
      "Design and implement cloud infrastructure solutions using AWS and containerization technologies",
      "Build automation tools to reduce manual operations and improve deployment reliability",
      "Manage infrastructure as code; maintain and improve infrastructure templates",
      "Implement monitoring, logging, and alerting; respond to infrastructure alerts",
      "Collaborate with platform and application teams to meet infrastructure requirements",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "1-3",
      skills: [
        "AWS or cloud infrastructure",
        "Terraform or CloudFormation",
        "Docker and Kubernetes basics",
        "Linux system administration",
        "Python or Go scripting",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary + equity",
      "Health, dental, vision, FSA/HSA",
      "401(k) with match",
      "$2,000/year learning budget",
      "Remote work flexibility",
    ],
    dimensions: {
      autonomy: 0.2,           // Infra Eng baseline — some ownership, follows architecture decisions
      timeHorizon: 0.3,        // Infrastructure work has medium-to-long payoff horizon
      socialDensity: -0.2,     // Mostly technical, collaborates with platform/app teams
      riskTolerance: 0.4,      // Rippling is a high-growth startup with rapid pace
      cognitiveStyle: 0.1,     // Infrastructure: concrete systems with some abstract design
      incomeWeight: 0.6,       // Good salary + equity at a growth startup
      statusWeight: 0.4,       // Rippling is a well-regarded HR tech unicorn
      meaningWeight: 0.3,      // Enabling a people management platform — moderate meaning
      geographicFlex: 0.7,     // Fully remote
    },
    tags: ["tech", "infrastructure-engineer", "aws", "terraform", "hr-tech"],
  },
  {
    id: "0038",
    title: "Associate Data Analyst",
    category: "tech",
    company: "Akamai",
    industry: "CDN",
    location: { city: "San Diego", state: "CA", country: "US", remote: "hybrid" },
    salary: { min: 66000, max: 86000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-01",
    description:
      "We're hiring a Associate Data Analyst at Akamai. This is an exciting opportunity to join our performance-obsessed, global-operations, technical team and make a direct impact on our mission. If you have 2-4 years years of experience and are passionate about CDN, we'd love to hear from you.",
    responsibilities: [
      "Build and maintain data pipelines that connect disparate systems for unified analytics",
      "Develop dashboards and reports enabling stakeholders to make data-driven decisions",
      "Investigate data quality issues and implement solutions to improve accuracy",
      "Partner with product and engineering teams to instrument product for analytics",
      "Transform raw data into actionable insights supporting business strategy",
      "Establish metrics frameworks and KPI tracking systems across the organization",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science, Engineering, or related field",
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
      "Flexible work schedule and remote work options",
      "Stock options or equity compensation",
      "Wellness programs and gym membership reimbursement",
      "Product discounts and free subscriptions",
    ],
    dimensions: {
      autonomy: 0.15,          // Associate level — some independence, guided by seniors
      timeHorizon: 0.3,        // Data work has medium horizon; dashboards are ongoing
      socialDensity: 0.1,      // Partners with product/engineering but primarily analytical
      riskTolerance: -0.05,    // Akamai is a large established enterprise
      cognitiveStyle: 0.3,     // Data analysis — statistical thinking, pattern recognition
      incomeWeight: 0.55,      // Solid salary band, equity included
      statusWeight: 0.35,      // Akamai is a respected infrastructure company
      meaningWeight: 0.3,      // Enabling data-driven decisions — indirect impact
      geographicFlex: 0.3,     // Hybrid
    },
    tags: ["tech", "associate-data-analyst", "sql", "data-visualization", "cdn"],
  },
  {
    id: "0039",
    title: "Database Administrator I",
    category: "tech",
    company: "Zoom",
    industry: "Communications",
    location: { city: "Des Moines", state: "IA", country: "US", remote: "onsite" },
    salary: { min: 52000, max: 65000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-17",
    description:
      "Zoom seeks a Database Administrator I to manage and optimize our databases supporting global communications infrastructure.",
    responsibilities: [
      "Install, configure, and maintain database management systems",
      "Optimize database performance and query execution",
      "Implement backup and disaster recovery strategies",
      "Monitor database health and troubleshoot issues",
      "Manage user accounts and security access controls",
      "Perform database upgrades and maintenance",
    ],
    requirements: {
      education:
        "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "1-3",
      skills: [
        "SQL Server or Oracle",
        "Database optimization",
        "Backup strategies",
        "Networking",
        "Troubleshooting",
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
      autonomy: -0.1,          // DBA baseline — follows standards, some independent optimization
      timeHorizon: 0.3,        // Database health is an ongoing, long-term responsibility
      socialDensity: -0.4,     // DBA baseline — highly independent, technical work
      riskTolerance: -0.1,     // Zoom is now a stable large-cap company
      cognitiveStyle: 0.1,     // DBA: technical optimization with some analytical depth
      incomeWeight: 0.5,       // DBA baseline; Zoom equity adds value
      statusWeight: 0.3,       // DBA is functional, Zoom brand is well-known
      meaningWeight: 0.3,      // Keeping communications infrastructure reliable — indirect
      geographicFlex: -0.4,    // Onsite in Des Moines
    },
    tags: ["tech", "database-administrator", "sql", "database-optimization", "communications"],
  },
];
