export const techJobs03 = [
  {
    id: "0040",
    title: "Business Intelligence Analyst",
    category: "tech",
    company: "Workday",
    industry: "HR Tech",
    location: { city: "Baltimore", state: "MD", country: "US", remote: "remote" },
    salary: { min: 62000, max: 80000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-07",
    description:
      "Workday is seeking a Business Intelligence Analyst to transform data into actionable insights. You'll build dashboards, develop analytics solutions, and support data-driven decision-making across the organization. Work remotely for the world's leading cloud platform for finance and human resources.",
    responsibilities: [
      "Design and develop interactive dashboards and reports using BI tools",
      "Extract, transform, and analyze data from multiple sources",
      "Support business stakeholders with ad hoc analysis and insights",
      "Monitor data quality and recommend data governance improvements",
      "Document technical specifications and maintain analytics libraries",
    ],
    requirements: {
      education: "Bachelor's degree in Business, Analytics, Computer Science, or related field",
      experience_years: "0-2",
      skills: [
        "Tableau, Power BI, or Looker (BI platform proficiency)",
        "SQL for data querying and manipulation",
        "Data visualization and storytelling",
        "Excel and statistical analysis",
        "Strong problem-solving skills",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health, dental, and vision plans",
      "401(k) with company match",
      "Professional development and BI tool certifications",
      "Remote-first culture with flexible scheduling",
    ],
    // remote: Workday is an established enterprise SaaS company (moderate enterprise stability)
    dimensions: {
      autonomy: 0.2,         // BI Analyst base=0.2
      timeHorizon: 0.2,      // BI Analyst base=0.2
      socialDensity: 0.2,    // BI Analyst base=0.2; stakeholder-facing role
      riskTolerance: -0.1,   // Workday=large enterprise, slight conservative adjustment
      cognitiveStyle: 0.4,   // BI Analyst base=0.4; analytical/abstract
      incomeWeight: 0.5,     // BI Analyst base=0.5
      statusWeight: 0.4,     // BI Analyst base=0.4
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.7,   // remote=0.7
    },
    tags: ["tech", "business-intelligence-analyst", "hr-tech", "sql", "data-visualization"],
  },
  {
    id: "0041",
    title: "Junior UI Developer",
    category: "tech",
    company: "Rippling",
    industry: "HR Tech",
    location: { city: "San Diego", state: "CA", country: "US", remote: "remote" },
    salary: { min: 78000, max: 101000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-25",
    description:
      "Rippling, the HR and IT management platform, seeks a Junior UI Developer to build beautiful, intuitive interfaces. Working fully remote, you'll develop React components, collaborate with designers, and impact how millions of employees manage their work lives. Join a fast-growing company transforming enterprise software.",
    responsibilities: [
      "Build responsive UI components using React and modern JavaScript",
      "Collaborate with designers and product teams on interface implementation",
      "Write clean, maintainable code and follow engineering best practices",
      "Optimize components for performance and accessibility",
      "Participate in code reviews and contribute to team development",
      "Debug issues and troubleshoot cross-browser compatibility",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science, similar field, or equivalent experience",
      experience_years: "0-2",
      skills: [
        "JavaScript/TypeScript and React",
        "HTML, CSS, and responsive design",
        "Git version control",
        "RESTful APIs and frontend state management",
        "Problem-solving and attention to detail",
        "Communication and collaboration skills",
      ],
      certifications: [],
    },
    benefits: [
      "Fully remote position",
      "Competitive salary and equity",
      "Health, dental, vision, and life insurance",
      "401(k) with company match",
      "Learning stipend and professional development",
    ],
    // remote; Rippling=fast-growing startup, higher risk tolerance
    dimensions: {
      autonomy: 0.1,         // UI Dev base=0.1
      timeHorizon: -0.2,     // UI Dev base=-0.2
      socialDensity: -0.1,   // UI Dev base=-0.1
      riskTolerance: 0.3,    // Rippling=startup +0.3
      cognitiveStyle: -0.1,  // UI Dev base=-0.1
      incomeWeight: 0.45,    // UI Dev base=0.45
      statusWeight: 0.3,     // UI Dev base=0.3
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.7,   // remote=0.7
    },
    tags: ["tech", "junior-ui-developer", "hr-tech", "react", "frontend"],
  },
  {
    id: "0042",
    title: "Software Engineer I",
    category: "tech",
    company: "Salesforce",
    industry: "CRM",
    location: { city: "Durham", state: "NC", country: "US", remote: "hybrid" },
    salary: { min: 71000, max: 90000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-01",
    description:
      "Salesforce CRM powers customer relationships for enterprises worldwide. We're #1 in customer relationship management, trusted by millions of users.\n\nWe're seeking a Software Engineer I to join our CRM team in Durham. This role offers the opportunity to contribute meaningfully to our mission while developing your professional skills in a collaborative environment.",
    responsibilities: [
      "Develop and maintain full-stack web applications using modern frameworks",
      "Write clean, maintainable code following team coding standards",
      "Participate in code reviews and contribute to system architecture discussions",
      "Implement features and fix bugs in collaboration with product and design teams",
      "Write tests and ensure code quality through continuous integration",
      "Support deployment and troubleshoot production issues",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or equivalent professional experience",
      experience_years: "1-2 years of professional software development experience",
      skills: ["JavaScript/TypeScript", "React or backend framework", "SQL", "Git", "REST APIs"],
      certifications: ["None required; bootcamp or open-source contributions appreciated"],
    },
    benefits: [
      "Competitive salary and stock options",
      "Hybrid flexibility in Durham, NC",
      "Learning budget",
      "Comprehensive health coverage",
    ],
    // hybrid; Salesforce=large enterprise, slightly conservative risk
    dimensions: {
      autonomy: 0.3,         // SWE base=0.3
      timeHorizon: 0.2,      // SWE base=0.2
      socialDensity: -0.2,   // Dev base=-0.2
      riskTolerance: -0.1,   // Salesforce=large enterprise -0.1
      cognitiveStyle: 0.2,   // SWE base=0.2
      incomeWeight: 0.6,     // SWE base=0.6
      statusWeight: 0.5,     // SWE base=0.5
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "software-engineer", "crm", "full-stack", "javascript"],
  },
  {
    id: "0043",
    title: "Junior UI Developer",
    category: "tech",
    company: "Elastic",
    industry: "Search",
    location: { city: "Dallas", state: "TX", country: "US", remote: "onsite" },
    salary: { min: 64000, max: 83000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-08",
    description:
      "Elastic powers search and observability for thousands of companies processing exabytes of data daily. Our search and analytics platform powers real-time insights at scale.\n\nWe're seeking a Junior UI Developer to join our Search team in Dallas. This role offers the opportunity to contribute meaningfully to our mission while developing your professional skills in a collaborative environment.",
    responsibilities: [
      "Develop responsive user interfaces using modern web frameworks (React, Vue, Angular)",
      "Implement UI designs from mockups while maintaining code quality and accessibility standards",
      "Collaborate with designers and backend engineers to deliver seamless user experiences",
      "Write clean, maintainable CSS and JavaScript code following team conventions",
      "Participate in code reviews and contribute to front-end architecture discussions",
      "Optimize web application performance and ensure browser compatibility",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or equivalent bootcamp/self-taught experience",
      experience_years: "0-2 years of professional front-end development or strong portfolio",
      skills: [
        "JavaScript/TypeScript",
        "React or Vue.js",
        "CSS/HTML",
        "Git",
        "Web accessibility (WCAG)",
      ],
      certifications: ["None required; bootcamp certifications or portfolio projects appreciated"],
    },
    benefits: [
      "Competitive salary and equity",
      "Onsite work in Dallas",
      "Learning stipend",
      "Health insurance and 401k",
    ],
    // onsite; Elastic=mid-size growth company, moderate risk
    dimensions: {
      autonomy: 0.0,         // UI Dev base=0.1, slight onsite constraint -0.1
      timeHorizon: -0.2,     // UI Dev base=-0.2
      socialDensity: -0.1,   // UI Dev base=-0.1
      riskTolerance: 0.1,    // Elastic=growth-stage company, slight positive
      cognitiveStyle: -0.1,  // UI Dev base=-0.1
      incomeWeight: 0.45,    // UI Dev base=0.45
      statusWeight: 0.3,     // UI Dev base=0.3
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: -0.4,  // onsite=-0.4
    },
    tags: ["tech", "junior-ui-developer", "search", "react", "frontend"],
  },
  {
    id: "0044",
    title: "Cloud Engineer I",
    category: "tech",
    company: "Shopify",
    industry: "E-Commerce",
    location: { city: "Provo", state: "UT", country: "US", remote: "hybrid" },
    salary: { min: 66000, max: 83000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-03",
    description:
      "We're hiring a Cloud Engineer I at Shopify. This is an exciting opportunity to join our entrepreneurial, empowerment-focused, innovative team and make a direct impact on our mission. If you have 0-2 years years of experience and are passionate about E-Commerce, we'd love to hear from you.",
    responsibilities: [
      "Design cloud architectures on AWS/GCP/Azure meeting scalability and reliability requirements",
      "Implement infrastructure-as-code using Terraform and CloudFormation",
      "Manage containerization and orchestration with Docker and Kubernetes",
      "Optimize cloud costs through right-sizing and resource management strategies",
      "Establish security best practices and compliance controls across cloud environments",
      "Provide on-call support for production infrastructure and incident response",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "0-2 years",
      skills: ["AWS or GCP or Azure", "Infrastructure-as-Code", "Docker", "Kubernetes", "Python", "Networking"],
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
    // hybrid; Shopify=large e-commerce platform, moderate risk
    dimensions: {
      autonomy: 0.3,         // Cloud base=0.3
      timeHorizon: 0.3,      // Cloud base=0.3
      socialDensity: -0.1,   // Cloud base=-0.1
      riskTolerance: 0.1,    // Shopify=established but entrepreneurial, slight positive
      cognitiveStyle: 0.3,   // Cloud base=0.3
      incomeWeight: 0.6,     // Cloud base=0.6
      statusWeight: 0.4,     // Cloud/DevOps base ~0.4
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "cloud-engineer", "e-commerce", "kubernetes", "aws"],
  },
  {
    id: "0045",
    title: "Data Engineer I",
    category: "tech",
    company: "Ramp",
    industry: "Fintech",
    location: { city: "Palo Alto", state: "CA", country: "US", remote: "hybrid" },
    salary: { min: 105000, max: 133000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-18",
    description:
      "Ramp, the financial automation platform transforming how companies manage expenses, seeks a Data Engineer I to build scalable data infrastructure. Working hybrid in Palo Alto, you'll design data pipelines, manage data warehouses, and enable analytics at scale. Help finance teams make better decisions with real-time data.",
    responsibilities: [
      "Design and build data pipelines using Python and SQL",
      "Develop ETL processes for financial transaction data",
      "Manage and optimize data warehouse infrastructure",
      "Collaborate with analytics and product teams on data requirements",
      "Monitor data quality and implement validation checks",
      "Contribute to data architecture improvements and scaling",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "2-4",
      skills: [
        "Python and SQL for data processing",
        "Data warehouse technologies (Snowflake, BigQuery, or similar)",
        "ETL and data pipeline design",
        "Cloud platforms (AWS, GCP, or Azure)",
        "Version control and software engineering practices",
        "Understanding of fintech or financial data (preferred)",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, vision, and life insurance",
      "401(k) with match",
      "Learning and development budget",
      "Hybrid flexibility and paid time off",
    ],
    // hybrid; Ramp=fast-growing fintech startup
    dimensions: {
      autonomy: 0.3,         // Data Eng base=0.3
      timeHorizon: 0.4,      // Data base=0.4
      socialDensity: -0.2,   // Dev base=-0.2; slight variation for collab role
      riskTolerance: 0.3,    // Ramp=startup +0.3
      cognitiveStyle: 0.4,   // Data base=0.4
      incomeWeight: 0.6,     // Data Eng base=0.6
      statusWeight: 0.4,     // slight variation +0.1 from base DevOps=0.4
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "data-engineer", "fintech", "python", "etl"],
  },
  {
    id: "0046",
    title: "Database Administrator I",
    category: "tech",
    company: "Slack",
    industry: "Collaboration",
    location: { city: "Ann Arbor", state: "MI", country: "US", remote: "hybrid" },
    salary: { min: 61000, max: 77000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-07",
    description:
      "Slack is seeking a Database Administrator I to manage our databases supporting millions of daily users. Work hybrid at our Ann Arbor office, ensuring data reliability and performance for our collaboration platform.",
    responsibilities: [
      "Manage database installations, configurations, and upgrades",
      "Monitor database performance and optimize queries",
      "Implement backup and disaster recovery procedures",
      "Troubleshoot database issues and performance problems",
      "Maintain database security and access controls",
      "Support development teams on database design and optimization",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "2-3",
      skills: [
        "SQL and relational database management",
        "Experience with major databases (PostgreSQL, MySQL, or Oracle)",
        "Database backup, recovery, and replication",
        "Query optimization and performance tuning",
        "Linux/Unix system administration basics",
        "Strong troubleshooting and documentation skills",
      ],
      certifications: [],
    },
    benefits: [
      "Hybrid work (3 days on-site)",
      "Competitive salary and equity",
      "Comprehensive health, dental, and vision coverage",
      "Professional development and training budget",
      "Wellness programs and mental health support",
    ],
    // hybrid; Slack (Salesforce subsidiary) = large enterprise
    dimensions: {
      autonomy: -0.1,        // DBA base=-0.1
      timeHorizon: 0.3,      // DBA base=0.3
      socialDensity: -0.4,   // DBA base=-0.4
      riskTolerance: -0.1,   // Large enterprise (Salesforce-owned) -0.1
      cognitiveStyle: 0.1,   // DBA base=0.1
      incomeWeight: 0.5,     // DBA base=0.5
      statusWeight: 0.3,     // slight variation; DBA not high status
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "database-administrator", "collaboration", "sql", "postgresql"],
  },
  {
    id: "0047",
    title: "IT Support Specialist",
    category: "tech",
    company: "Mixpanel",
    industry: "Analytics",
    location: { city: "Raleigh", state: "NC", country: "US", remote: "hybrid" },
    salary: { min: 45000, max: 58000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-22",
    description:
      "Mixpanel powers product analytics for 9000+ companies including Uber, Slack, and Airbnb. We help teams measure, analyze, and optimize every user interaction. You'll provide technical support to customers integrating our analytics platform at scale.",
    responsibilities: [
      "Provide technical support to end-users via helpdesk",
      "Troubleshoot hardware and software issues",
      "Install and configure user equipment",
      "Maintain IT ticketing system and track resolution times",
      "Document technical procedures and solutions",
      "Support IT security policies and data protection",
    ],
    requirements: {
      education: "Associate's degree in IT or related field; CompTIA A+ preferred",
      experience_years: "1-2 years of IT support or technical support experience",
      skills: ["Troubleshooting", "Hardware/software support", "Customer service", "Documentation", "Remote support tools"],
      certifications: ["CompTIA A+", "CompTIA Network+ (preferred)"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    // hybrid; Mixpanel=mid-size growth company
    dimensions: {
      autonomy: -0.6,        // Help Desk base=-0.6
      timeHorizon: -0.6,     // Help Desk base=-0.6
      socialDensity: 0.2,    // IT Support=user-facing, moderately social
      riskTolerance: 0.1,    // Mixpanel=growth-stage, slight positive
      cognitiveStyle: -0.3,  // SysAdmin/Help Desk concrete=-0.3
      incomeWeight: 0.4,     // lower income bracket
      statusWeight: 0.2,     // low status role
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "it-support-specialist", "analytics", "help-desk", "troubleshooting"],
  },
  {
    id: "0048",
    title: "Junior UI Developer",
    category: "tech",
    company: "Fastly",
    industry: "Edge Computing",
    location: { city: "Detroit", state: "MI", country: "US", remote: "hybrid" },
    salary: { min: 57000, max: 74000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-04",
    description:
      "Fastly is hiring a Junior UI Developer to build beautiful, performant user interfaces for our edge computing platform. Based in Detroit with hybrid flexibility, you'll collaborate with designers and backend engineers to create experiences that delight users. This role offers mentorship and clear pathways for frontend growth.",
    responsibilities: [
      "Develop responsive web interfaces using modern frameworks (React, Vue, or similar)",
      "Collaborate with designers to implement UI designs; ensure pixel-perfect implementations",
      "Optimize frontend performance; identify and fix rendering and load time issues",
      "Write clean, maintainable code; participate in code reviews and contribute to best practices",
      "Test UI across browsers and devices; fix bugs and ensure cross-platform compatibility",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field, or equivalent experience",
      experience_years: "0-2",
      skills: ["HTML, CSS, and JavaScript", "React or similar framework", "Git and version control", "Responsive design principles", "Browser developer tools"],
      certifications: [],
    },
    benefits: [
      "Competitive salary + equity",
      "Health, dental, vision coverage",
      "401(k) with match",
      "$1,000/year learning budget",
      "Flexible work hours and hybrid options",
    ],
    // hybrid; Fastly=established CDN/edge company, moderate stability
    dimensions: {
      autonomy: 0.1,         // UI Dev base=0.1
      timeHorizon: -0.2,     // UI Dev base=-0.2
      socialDensity: -0.1,   // UI Dev base=-0.1
      riskTolerance: 0.0,    // Fastly=mid-size established company, neutral
      cognitiveStyle: -0.1,  // UI Dev base=-0.1
      incomeWeight: 0.45,    // UI Dev base=0.45
      statusWeight: 0.3,     // UI Dev base=0.3
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "junior-ui-developer", "edge-computing", "react", "performance"],
  },
  {
    id: "0049",
    title: "Systems Administrator",
    category: "tech",
    company: "Twilio",
    industry: "Communications",
    location: { city: "Nashville", state: "TN", country: "US", remote: "onsite" },
    salary: { min: 55000, max: 71000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-19",
    description:
      "Twilio, the communications platform trusted by developers worldwide, seeks a Systems Administrator for our Nashville office. You'll manage servers, maintain network infrastructure, and support our growing operations. Work onsite while enabling seamless communications for millions of users globally.",
    responsibilities: [
      "Manage and maintain Windows and Linux servers",
      "Monitor system performance and respond to alerts",
      "Manage user accounts, access controls, and security policies",
      "Support software deployments and system upgrades",
      "Troubleshoot technical issues and provide end-user support",
      "Maintain documentation and standard operating procedures",
    ],
    requirements: {
      education: "High school diploma or GED; Associate degree in IT preferred",
      experience_years: "1-3",
      skills: [
        "Windows and Linux system administration",
        "Networking fundamentals and TCP/IP",
        "Active Directory and user management",
        "Ticketing systems and technical support",
        "Bash/PowerShell scripting basics",
        "Problem-solving and communication skills",
      ],
      certifications: ["CompTIA A+ or Microsoft certification preferred"],
    },
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Professional development and certification support",
      "Flexible paid time off",
      "Collaborative team environment",
    ],
    // onsite; Twilio=established communications platform, moderate stability
    dimensions: {
      autonomy: -0.2,        // SysAdmin base=-0.2
      timeHorizon: 0.1,      // SysAdmin slightly longer than help desk
      socialDensity: -0.2,   // SysAdmin base=-0.2
      riskTolerance: 0.0,    // Twilio=mid-large established, neutral
      cognitiveStyle: -0.3,  // SysAdmin base=-0.3
      incomeWeight: 0.45,    // SysAdmin base=0.45
      statusWeight: 0.3,     // SysAdmin base=0.3
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: -0.4,  // onsite=-0.4
    },
    tags: ["tech", "systems-administrator", "communications", "linux", "active-directory"],
  },
  {
    id: "0050",
    title: "Systems Administrator",
    category: "tech",
    company: "Adobe",
    industry: "Creative Software",
    location: { city: "Atlanta", state: "GA", country: "US", remote: "onsite" },
    salary: { min: 55000, max: 71000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-03",
    description:
      "Adobe is seeking a Systems Administrator to manage and optimize our IT infrastructure. You'll ensure systems reliability, security, and performance.",
    responsibilities: [
      "Administer Windows and Linux servers across the enterprise",
      "Manage user accounts, permissions, and access controls",
      "Monitor system performance and implement optimization strategies",
      "Manage backups, disaster recovery, and business continuity",
      "Install, configure, and maintain enterprise software applications",
      "Respond to system outages and troubleshoot complex issues",
    ],
    requirements: {
      education: "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "1-3",
      skills: ["Windows Server", "Linux administration", "Networking", "Active Directory", "System monitoring", "Troubleshooting"],
      certifications: [],
    },
    benefits: [
      "Competitive salary with annual equity grants",
      "Health, dental, and vision coverage",
      "Equity grants",
      "Flexible time off and work arrangements",
      "Professional development opportunities",
    ],
    // onsite; Adobe=large enterprise creative software company
    dimensions: {
      autonomy: -0.2,        // SysAdmin base=-0.2
      timeHorizon: 0.1,      // SysAdmin, slightly above short-horizon
      socialDensity: -0.2,   // SysAdmin base=-0.2
      riskTolerance: -0.1,   // Adobe=large enterprise -0.1
      cognitiveStyle: -0.3,  // SysAdmin base=-0.3
      incomeWeight: 0.45,    // SysAdmin base=0.45
      statusWeight: 0.3,     // SysAdmin base=0.3
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: -0.4,  // onsite=-0.4
    },
    tags: ["tech", "systems-administrator", "creative-software", "windows-server", "linux"],
  },
  {
    id: "0052",
    title: "Scrum Master",
    category: "tech",
    company: "Snowflake",
    industry: "Data",
    location: { city: "Phoenix", state: "AZ", country: "US", remote: "remote" },
    salary: { min: 61000, max: 76000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-16",
    description:
      "Support agile team success at Snowflake as a Scrum Master, facilitating collaboration and removing impediments.",
    responsibilities: [
      "Facilitate daily standups, sprint planning, and retrospectives",
      "Coach teams on agile methodologies and best practices",
      "Remove impediments and facilitate cross-team collaboration",
      "Track team metrics and identify improvement opportunities",
      "Support backlog management and sprint planning",
      "Mentor junior team members and support team development",
    ],
    requirements: {
      education: "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "1-3",
      skills: ["Agile methodologies", "Scrum framework", "Team facilitation", "Conflict resolution", "Communication"],
      certifications: [],
    },
    benefits: [
      "Competitive salary with annual equity grants",
      "Health, dental, and vision coverage",
      "Equity grants",
      "Flexible time off and work arrangements",
      "Professional development opportunities",
    ],
    // remote; Snowflake=high-growth data cloud company
    dimensions: {
      autonomy: 0.1,         // Scrum Master base=0.1
      timeHorizon: -0.1,     // Scrum base=-0.1 (sprint-cycle focused)
      socialDensity: 0.8,    // Scrum Master base=0.8
      riskTolerance: 0.2,    // Snowflake=growth-stage, moderate positive
      cognitiveStyle: 0.1,   // Scrum base=0.1
      incomeWeight: 0.5,     // Scrum base=0.5
      statusWeight: 0.4,     // Scrum base=0.4
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.7,   // remote=0.7
    },
    tags: ["tech", "scrum-master", "data", "agile", "team-facilitation"],
  },
  {
    id: "0053",
    title: "Infrastructure Engineer I",
    category: "tech",
    company: "Ramp",
    industry: "Fintech",
    location: { city: "Provo", state: "UT", country: "US", remote: "remote" },
    salary: { min: 61000, max: 78000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-19",
    description:
      "Join Ramp's infrastructure team to build and maintain the cloud systems powering our financial platform.",
    responsibilities: [
      "Design and implement cloud infrastructure for scalability and reliability",
      "Automate infrastructure deployment and configuration management",
      "Monitor system performance and implement optimizations",
      "Manage security and access controls for cloud resources",
      "Participate in incident response and capacity planning",
      "Mentor junior engineers and document architectural decisions",
    ],
    requirements: {
      education: "High school diploma or equivalent; relevant degree or certification strongly preferred",
      experience_years: "1-3",
      skills: ["AWS or GCP", "Infrastructure as code", "Linux", "Networking", "Automation"],
      certifications: [],
    },
    benefits: [
      "Competitive salary with annual equity grants",
      "Health, dental, and vision coverage",
      "Equity grants",
      "Flexible time off and work arrangements",
      "Professional development opportunities",
    ],
    // remote; Ramp=startup fintech
    dimensions: {
      autonomy: 0.2,         // Infra base=0.2
      timeHorizon: 0.3,      // Infra base=0.3
      socialDensity: -0.2,   // Infra base=-0.2
      riskTolerance: 0.3,    // Ramp=startup +0.3
      cognitiveStyle: 0.1,   // Infra base=0.1
      incomeWeight: 0.6,     // DevOps/Cloud/Infra base=0.6
      statusWeight: 0.4,     // DevOps base=0.4
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.7,   // remote=0.7
    },
    tags: ["tech", "infrastructure-engineer", "fintech", "aws", "automation"],
  },
  {
    id: "0055",
    title: "DevOps Engineer I",
    category: "tech",
    company: "DocuSign",
    industry: "E-Signature",
    location: { city: "Cincinnati", state: "OH", country: "US", remote: "hybrid" },
    salary: { min: 63000, max: 80000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-02-14",
    description:
      "DocuSign's Agreement Cloud manages 1M+ agreements daily, helping organizations go digital. We're the global standard for e-signatures and agreement workflows across 180+ countries.\n\nWe're seeking a DevOps Engineer I to join our E-Signature team in Cincinnati. This role offers the opportunity to contribute meaningfully to our mission while developing your professional skills in a collaborative environment.",
    responsibilities: [
      "Deploy, monitor, and maintain CI/CD pipelines using Jenkins, GitLab CI, or equivalent platforms",
      "Provision and manage cloud infrastructure (AWS/Azure/GCP) with Infrastructure as Code",
      "Implement logging, monitoring, and alerting solutions for system reliability",
      "Collaborate with software engineers to resolve deployment and operational issues",
      "Automate routine operational tasks and improve deployment efficiency",
      "Participate on-call rotation to respond to production incidents and outages",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science, Engineering, or equivalent experience",
      experience_years: "1-3 years in DevOps, Cloud Operations, or Systems Engineering",
      skills: [
        "Linux/Unix administration",
        "Docker/Kubernetes",
        "Infrastructure as Code (Terraform)",
        "Cloud platforms (AWS/Azure/GCP)",
        "Python/Bash scripting",
      ],
      certifications: ["AWS Solutions Architect Associate or Cloud certifications"],
    },
    benefits: [
      "Competitive salary and equity",
      "Health and wellness programs",
      "Learning stipend for certifications",
      "Flexible work arrangements",
    ],
    // hybrid; DocuSign=large established enterprise software company
    dimensions: {
      autonomy: 0.2,         // DevOps base=0.2
      timeHorizon: 0.2,      // DevOps base=0.2
      socialDensity: -0.1,   // DevOps base=-0.1
      riskTolerance: -0.1,   // DocuSign=large enterprise -0.1
      cognitiveStyle: 0.1,   // DevOps base=0.1
      incomeWeight: 0.6,     // DevOps base=0.6
      statusWeight: 0.4,     // DevOps base=0.4
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.3,   // hybrid=0.3
    },
    tags: ["tech", "devops-engineer", "e-signature", "kubernetes", "ci-cd"],
  },
  {
    id: "0056",
    title: "Solutions Engineer",
    category: "tech",
    company: "Brex",
    industry: "Fintech",
    location: { city: "Los Angeles", state: "CA", country: "US", remote: "remote" },
    salary: { min: 86000, max: 110000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-03-21",
    description:
      "We're the AI-powered financial operating system for ambitious companies. With 15M+ monthly users and processing billions in transactions, we're reimagining how businesses manage spending, finance, and financial operations. As a Solutions Engineer, you'll translate complex customer challenges into elegant technical solutions.",
    responsibilities: [
      "Partner with enterprise customers to architect integrated payment solutions",
      "Translate complex business requirements into technical specifications",
      "Conduct proof-of-concept implementations demonstrating platform value",
      "Troubleshoot integration challenges and optimize system performance",
      "Build technical relationships with customer engineering teams",
      "Contribute to product roadmap based on customer feedback",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "3-6 years of technical sales or solutions architecture experience",
      skills: ["API integration", "Payment systems", "Cloud platforms", "Technical documentation", "Customer communication"],
      certifications: ["Cloud certification (AWS/GCP)", "Payment systems expertise"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    // remote; Brex=fast-growing fintech startup
    dimensions: {
      autonomy: 0.3,         // Solutions Eng base=0.3
      timeHorizon: 0.1,      // Solutions base=0.1
      socialDensity: 0.6,    // Solutions Eng base=0.6; heavily customer-facing
      riskTolerance: 0.3,    // Brex=startup +0.3
      cognitiveStyle: 0.2,   // Solutions base=0.2
      incomeWeight: 0.6,     // Solutions base=0.6
      statusWeight: 0.5,     // Solutions base=0.5
      meaningWeight: 0.3,    // Most tech=0.3
      geographicFlex: 0.7,   // remote=0.7
    },
    tags: ["tech", "solutions-engineer", "fintech", "api-integration", "customer-facing"],
  },
  {
    id: "0057",
    title: "DevOps Engineer I",
    category: "tech",
    company: "Cloudflare",
    industry: "Cybersecurity",
    location: { city: "Columbus", state: "OH", country: "US", remote: "remote" },
    salary: { min: 63000, max: 80000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-11",
    description:
      "Cloudflare operates one of the world's largest networks, protecting and accelerating millions of websites and APIs daily.\n\nWe're seeking a DevOps Engineer I to join our Cybersecurity team in Columbus. This role offers the opportunity to contribute meaningfully to our mission while developing your professional skills in a collaborative environment.",
    responsibilities: [
      "Deploy, monitor, and maintain CI/CD pipelines using Jenkins, GitLab CI, or equivalent platforms",
      "Provision and manage cloud infrastructure (AWS/Azure/GCP) with Infrastructure as Code",
      "Implement logging, monitoring, and alerting solutions for system reliability",
      "Collaborate with software engineers to resolve deployment and operational issues",
      "Automate routine operational tasks and improve deployment efficiency",
      "Participate on-call rotation to respond to production incidents and outages",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science, Engineering, or equivalent experience",
      experience_years: "1-3 years in DevOps, Cloud Operations, or Systems Engineering",
      skills: [
        "Linux/Unix administration",
        "Docker/Kubernetes",
        "Infrastructure as Code (Terraform)",
        "Cloud platforms (AWS/Azure/GCP)",
        "Python/Bash scripting",
      ],
      certifications: ["AWS Solutions Architect Associate or Cloud certifications"],
    },
    benefits: [
      "Competitive salary and equity",
      "Health and wellness programs",
      "Learning stipend for certifications",
      "Flexible work arrangements",
    ],
    // remote; Cloudflare=large well-funded tech company
    dimensions: {
      autonomy: 0.2,         // DevOps base=0.2
      timeHorizon: 0.2,      // DevOps base=0.2
      socialDensity: -0.1,   // DevOps base=-0.1
      riskTolerance: 0.1,    // Cloudflare=well-funded but still tech-growth, slight positive
      cognitiveStyle: 0.1,   // DevOps base=0.1
      incomeWeight: 0.6,     // DevOps base=0.6
      statusWeight: 0.4,     // DevOps base=0.4
      meaningWeight: 0.35,   // Cybersecurity mission adds slight bump
      geographicFlex: 0.7,   // remote=0.7
    },
    tags: ["tech", "devops-engineer", "cybersecurity", "kubernetes", "ci-cd"],
  },
];
