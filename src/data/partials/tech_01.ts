export const techJobs01 = [
  {
    id: "0001",
    title: "Software Engineer I",
    category: "tech",
    company: "Stripe",
    industry: "Fintech",
    location: { city: "Austin", state: "TX", country: "US", remote: "hybrid" },
    salary: { min: 85000, max: 110000, currency: "USD", period: "yearly" },
    description:
      "Stripe builds the most powerful and flexible tools for internet commerce. Every year we handle hundreds of billions of dollars for millions of businesses worldwide — from startups launching their first checkout page to global platforms like Amazon and Shopify. As a Software Engineer I on our payments infrastructure team, you'll own features end-to-end, shipping code that processes real transactions at massive scale. This is a high-impact role where you'll learn fast, build with autonomy, and directly shape how money moves on the internet.",
    responsibilities: [
      "Design, build, and ship features across Stripe's payment processing infrastructure, owning your work from prototype to production",
      "Write clean, well-tested code in Ruby, Java, or Python that handles billions of dollars in transactions reliably",
      "Collaborate with product, design, and fellow engineers to scope technical solutions that balance speed with long-term quality",
      "Investigate and resolve production issues, participating in on-call rotations to keep our systems running at 99.999% uptime",
      "Contribute to engineering best practices through code reviews, technical documentation, and knowledge sharing with your team",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Software Engineering, or equivalent practical experience",
      experience_years: "0-2",
      skills: ["Ruby", "Java", "Python", "SQL", "Git", "AWS"],
      certifications: [],
    },
    benefits: [
      "Comprehensive health, dental, and vision insurance for you and your dependents",
      "401(k) with generous company match",
      "Flexible PTO — we trust you to take the time you need",
      "$3,000 annual learning and development stipend for courses, conferences, and books",
      "Commuter benefits including transit and parking pre-tax programs",
    ],
    employment_type: "full-time",
    posted_date: "2026-03-10",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.2,
      socialDensity: -0.2,
      riskTolerance: 0.4,   // Stripe: high-growth fintech, startup culture
      cognitiveStyle: 0.2,
      incomeWeight: 0.6,
      statusWeight: 0.5,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "software-engineering", "fintech", "payments", "backend"],
  },
  {
    id: "0002",
    title: "QA Analyst",
    category: "tech",
    company: "Datadog",
    industry: "Cloud Monitoring",
    location: { city: "Denver", state: "CO", country: "US", remote: "hybrid" },
    salary: { min: 70000, max: 90000, currency: "USD", period: "yearly" },
    description:
      "Datadog is the monitoring and security platform for cloud applications. Our platform ingests trillions of events per day from over 28,000 customers, giving engineering teams real-time visibility into their entire stack. As a QA Analyst, you'll be the quality backbone of our product — building and running test strategies that keep our observability platform rock-solid as we scale. You'll work directly with engineers to ship features that millions of developers rely on every day, and you'll have a real say in how we define and measure quality.",
    responsibilities: [
      "Design and execute comprehensive test plans for new features and enhancements across the Datadog platform",
      "Build and maintain automated test suites using Selenium and Python to ensure reliable regression coverage across releases",
      "Validate API endpoints and integrations through systematic API testing, ensuring data integrity at trillion-event scale",
      "Collaborate with engineering and product teams to identify edge cases, define acceptance criteria, and triage bugs in JIRA",
      "Continuously improve our CI/CD test pipeline by identifying gaps in coverage and advocating for quality-first development practices",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Information Technology, or equivalent hands-on experience",
      experience_years: "0-2",
      skills: ["Selenium", "Python", "JIRA", "SQL", "API testing", "CI/CD"],
      certifications: [],
    },
    benefits: [
      "Comprehensive health, dental, and vision coverage",
      "401(k) retirement plan",
      "Competitive stock options so you share in what we build together",
      "Unlimited PTO — recharge when you need to, no questions asked",
      "Dog-friendly office — yes, we really mean it",
    ],
    employment_type: "full-time",
    posted_date: "2026-03-08",
    dimensions: {
      autonomy: -0.1,
      timeHorizon: -0.3,
      socialDensity: 0.0,
      riskTolerance: 0.3,   // Datadog: fast-growing public tech company
      cognitiveStyle: -0.2,
      incomeWeight: 0.4,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "qa", "cloud-monitoring", "test-automation", "observability"],
  },
  {
    id: "0003",
    title: "IT Support Specialist",
    category: "tech",
    company: "Cisco",
    industry: "Networking & Infrastructure",
    location: {
      city: "San Jose",
      state: "CA",
      country: "US",
      remote: "onsite",
    },
    salary: { min: 65000, max: 80000, currency: "USD", period: "yearly" },
    description:
      "At Cisco, we power the internet. Our technology connects people, secures enterprises, and automates networks across every industry and every corner of the globe. As an IT Support Specialist at our San Jose headquarters, you'll be the go-to person keeping our internal teams productive and connected. You'll troubleshoot across platforms, manage infrastructure at enterprise scale, and collaborate with teams across the company to deliver the seamless technology experience that Cisco employees — and our mission — depend on.",
    responsibilities: [
      "Provide hands-on technical support for hardware, software, and network issues across Windows, macOS, and Linux environments",
      "Manage and administer Active Directory accounts, group policies, and access permissions for internal users",
      "Diagnose and resolve network connectivity issues involving TCP/IP, DNS, DHCP, and VPN configurations",
      "Track, prioritize, and resolve support tickets in ServiceNow, maintaining SLA targets and clear communication with end users",
      "Collaborate with infrastructure and security teams to deploy system updates, patches, and new endpoint configurations across the organization",
    ],
    requirements: {
      education:
        "Associate's or Bachelor's degree in Information Technology, Computer Science, or equivalent practical experience",
      experience_years: "0-2",
      skills: [
        "Windows",
        "macOS",
        "Linux",
        "Active Directory",
        "TCP/IP",
        "DNS",
        "DHCP",
        "ServiceNow",
        "Troubleshooting",
      ],
      certifications: [],
    },
    benefits: [
      "Comprehensive health insurance covering medical, dental, and vision",
      "401(k) with company match to help you plan for the future",
      "Tuition reimbursement for continued education and professional development",
      "Employee Stock Purchase Plan (ESPP) at a discounted rate",
      "On-site fitness center and wellness programs at our San Jose campus",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-28",
    dimensions: {
      autonomy: -0.6,
      timeHorizon: -0.6,
      socialDensity: 0.4,
      riskTolerance: -0.2,  // Cisco: large enterprise, stable
      cognitiveStyle: -0.5,
      incomeWeight: 0.3,
      statusWeight: 0.2,
      meaningWeight: 0.3,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "it-support", "networking", "enterprise", "help-desk"],
  },
  {
    id: "0011",
    title: "Site Reliability Engineer I",
    category: "tech",
    company: "Datadog",
    industry: "Cloud Monitoring",
    location: { city: "Omaha", state: "NE", country: "US", remote: "hybrid" },
    salary: { min: 64000, max: 80000, currency: "USD", period: "yearly" },
    employment_type: "full-time",
    posted_date: "2026-01-08",
    description:
      "Datadog is seeking a Site Reliability Engineer I to join our Omaha office and contribute to the reliability and scalability of our global infrastructure. You'll design monitoring and alerting strategies, automate operational tasks, and be part of a team committed to keeping systems running smoothly at massive scale.",
    responsibilities: [
      "Implement monitoring and alerting for critical systems using Datadog and ELK",
      "Develop automation scripts to reduce manual operational overhead",
      "Lead incident response activities and conduct post-mortems",
      "Optimize system performance and cost efficiency",
      "Document operational procedures and create training materials",
      "Partner with engineering teams on reliability improvements",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or equivalent experience",
      experience_years: "1-3",
      skills: [
        "Linux system administration and troubleshooting",
        "Monitoring and observability tools",
        "Scripting (Python, Go, or Bash)",
        "Incident response and communication",
        "Cloud platform knowledge (AWS, GCP, or Azure)",
      ],
      certifications: ["None required"],
    },
    benefits: [
      "Competitive salary and stock options",
      "Comprehensive health, dental, and vision insurance",
      "On-call stipend and flexibility for work-life balance",
      "Learning budget for training and conferences",
    ],
    dimensions: {
      autonomy: 0.2,
      timeHorizon: 0.3,
      socialDensity: -0.1,
      riskTolerance: 0.2,   // Datadog: established but high-growth
      cognitiveStyle: 0.1,  // slight variation from SRE baseline
      incomeWeight: 0.65,
      statusWeight: 0.4,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "sre", "cloud-monitoring", "observability", "devops"],
  },
  {
    id: "0012",
    title: "Data Engineer I",
    category: "tech",
    company: "Gusto",
    industry: "Payroll",
    location: {
      city: "Washington",
      state: "DC",
      country: "US",
      remote: "remote",
    },
    salary: { min: 90000, max: 114000, currency: "USD", period: "yearly" },
    description:
      "We're hiring a Data Engineer I at Gusto. This is an exciting opportunity to join our product-focused, SMB-obsessed, modern team and make a direct impact on our mission. If you have 0-2 years years of experience and are passionate about Payroll, we'd love to hear from you.",
    responsibilities: [
      "Design and build scalable data pipelines processing petabytes of data daily",
      "Implement data transformation logic using SQL and distributed computing frameworks",
      "Optimize database queries and storage architecture for performance and cost",
      "Develop monitoring and alerting for data pipeline failures and anomalies",
      "Mentor junior engineers and establish data engineering best practices",
      "Collaborate with analytics and machine learning teams on data requirements",
    ],
    requirements: {
      education: "Bachelor's degree in Computer Science or related field",
      experience_years: "0-2 years",
      skills: [
        "Python or Scala",
        "SQL",
        "Spark or Hadoop",
        "Data warehousing",
        "AWS or GCP",
        "ETL processes",
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
    employment_type: "full-time",
    posted_date: "2026-03-24",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.4,
      socialDensity: -0.1,  // slight variation: Gusto is collaborative
      riskTolerance: 0.3,   // Gusto: growth-stage startup
      cognitiveStyle: 0.4,
      incomeWeight: 0.6,
      statusWeight: 0.4,
      meaningWeight: 0.4,   // SMB mission adds meaning
      geographicFlex: 0.7,  // fully remote
    },
    tags: ["tech", "data-engineering", "payroll", "fintech", "pipelines"],
  },
  {
    id: "0013",
    title: "Cloud Engineer I",
    category: "tech",
    company: "Adobe",
    industry: "Creative Software",
    location: {
      city: "Cincinnati",
      state: "OH",
      country: "US",
      remote: "onsite",
    },
    salary: { min: 66000, max: 83000, currency: "USD", period: "yearly" },
    description:
      "Adobe is the global leader in digital media and marketing solutions used by millions of creatives, marketers, and enterprises. You'll build cloud infrastructure supporting billions of creative workflows.",
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
      "Comprehensive health and wellness benefits",
      "401(k) retirement savings plan with matching",
      "Paid vacation, holidays, and personal days",
      "Career advancement and training opportunities",
      "Employee recognition and incentive programs",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-01",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.3,
      socialDensity: -0.1,
      riskTolerance: -0.1,  // Adobe: large enterprise, stable
      cognitiveStyle: 0.3,
      incomeWeight: 0.6,
      statusWeight: 0.5,
      meaningWeight: 0.3,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "cloud-engineering", "creative-software", "devops", "infrastructure"],
  },
  {
    id: "0014",
    title: "Help Desk Technician",
    category: "tech",
    company: "Render",
    industry: "Cloud",
    location: {
      city: "Baltimore",
      state: "MD",
      country: "US",
      remote: "remote",
    },
    salary: { min: 42000, max: 55000, currency: "USD", period: "yearly" },
    description:
      "Render, a modern cloud platform for developers, seeks a Help Desk Technician to support our growing customer base. Working fully remote, you'll troubleshoot platform issues, resolve support tickets, and help developers build and deploy applications. This customer-facing role offers direct impact on developer success.",
    responsibilities: [
      "Respond to and resolve customer support tickets and inquiries",
      "Troubleshoot platform issues and provide technical guidance",
      "Escalate complex issues to engineering teams appropriately",
      "Document resolutions and contribute to knowledge base",
      "Follow up with customers to ensure satisfaction",
      "Identify patterns and suggest feature improvements",
    ],
    requirements: {
      education: "High school diploma or GED; some college preferred",
      experience_years: "0-1",
      skills: [
        "Customer service and communication skills",
        "Troubleshooting and problem-solving",
        "Basic technical knowledge (web applications, APIs, cloud concepts)",
        "Documentation and organization skills",
        "Patience and empathy with customers",
        "Willingness to learn and grow technically",
      ],
      certifications: [],
    },
    benefits: [
      "Fully remote position",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Professional development and learning opportunities",
      "Flexible paid time off",
    ],
    employment_type: "full-time",
    posted_date: "2026-03-01",
    dimensions: {
      autonomy: -0.6,
      timeHorizon: -0.6,
      socialDensity: 0.5,   // customer-facing bumps social density up
      riskTolerance: 0.2,   // Render: early-stage startup
      cognitiveStyle: -0.5,
      incomeWeight: 0.3,
      statusWeight: 0.2,
      meaningWeight: 0.3,
      geographicFlex: 0.7,  // fully remote
    },
    tags: ["tech", "help-desk", "cloud", "customer-support", "developer-tools"],
  },
  {
    id: "0015",
    title: "IT Support Specialist",
    category: "tech",
    company: "Mixpanel",
    industry: "Analytics",
    location: {
      city: "Cambridge",
      state: "MA",
      country: "US",
      remote: "remote",
    },
    salary: { min: 62000, max: 80000, currency: "USD", period: "yearly" },
    description:
      "Mixpanel, the product analytics platform trusted by data-driven teams, seeks an IT Support Specialist to manage our internal technology infrastructure. Working fully remote, you'll provide technical support, manage hardware and software, and maintain security standards. Help power the platform that helps teams make better decisions.",
    responsibilities: [
      "Provide tier-1 and tier-2 technical support to employees",
      "Manage hardware provisioning, setup, and lifecycle",
      "Maintain inventory of IT assets and software licenses",
      "Troubleshoot network and connectivity issues",
      "Support security policies and user access management",
      "Document support tickets and maintain knowledge base",
    ],
    requirements: {
      education:
        "High school diploma or GED; Associate degree in IT or related field preferred",
      experience_years: "2-4",
      skills: [
        "Technical troubleshooting and problem-solving",
        "Hardware and software support knowledge",
        "Networking basics and system administration",
        "Ticket management and documentation",
        "Customer service and communication",
        "Understanding of IT security best practices",
      ],
      certifications: [
        "CompTIA A+ or similar IT certification preferred",
      ],
    },
    benefits: [
      "Fully remote position",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "IT certification reimbursement",
      "Flexible paid time off",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-18",
    dimensions: {
      autonomy: -0.5,       // slight variation: remote IT can be slightly more independent
      timeHorizon: -0.6,
      socialDensity: 0.4,
      riskTolerance: 0.1,   // Mixpanel: mid-stage tech company
      cognitiveStyle: -0.5,
      incomeWeight: 0.3,
      statusWeight: 0.2,
      meaningWeight: 0.3,
      geographicFlex: 0.7,  // fully remote
    },
    tags: ["tech", "it-support", "analytics", "remote", "internal-tools"],
  },
  {
    id: "0016",
    title: "Systems Administrator",
    category: "tech",
    company: "Fastly",
    industry: "Edge Computing",
    location: {
      city: "Rochester",
      state: "MN",
      country: "US",
      remote: "hybrid",
    },
    salary: { min: 52000, max: 67000, currency: "USD", period: "yearly" },
    description:
      "Fastly powers the digital experiences of 99% of the top 100 global sites. Our edge computing platform delivers content and compute in milliseconds. You'll maintain systems supporting some of the world's most trafficked websites.",
    responsibilities: [
      "Manage user accounts, access controls, and security policies",
      "Deploy and maintain servers, networks, and IT infrastructure",
      "Monitor system performance and troubleshoot technical issues",
      "Implement backup and disaster recovery procedures",
      "Maintain IT documentation and runbooks",
      "Support hardware procurement and lifecycle management",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, IT, or related field",
      experience_years:
        "2-4 years of systems administration or IT infrastructure experience",
      skills: [
        "Windows/Linux",
        "Active Directory",
        "Networking",
        "Virtualization",
        "Scripting",
      ],
      certifications: ["CompTIA Security+", "Microsoft Azure Administrator"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-01",
    dimensions: {
      autonomy: -0.2,
      timeHorizon: 0.1,     // slight variation: edge infra is more long-horizon than basic sysadmin
      socialDensity: -0.2,
      riskTolerance: 0.1,   // Fastly: established public company
      cognitiveStyle: -0.3,
      incomeWeight: 0.35,
      statusWeight: 0.25,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "systems-administration", "edge-computing", "infrastructure", "networking"],
  },
  {
    id: "0017",
    title: "SOC Analyst",
    category: "tech",
    company: "Confluent",
    industry: "Data Streaming",
    location: {
      city: "Phoenix",
      state: "AZ",
      country: "US",
      remote: "onsite",
    },
    salary: { min: 52000, max: 67000, currency: "USD", period: "yearly" },
    description:
      "Confluent, the data streaming platform company, seeks a SOC Analyst to monitor and secure our infrastructure and customer environments. Working onsite in Phoenix, you'll detect security incidents, respond to alerts, and protect the platform trusted by thousands of enterprises. Grow your security career in a dynamic environment where data streaming security is critical.",
    responsibilities: [
      "Monitor security alerts and investigate suspicious activity in real-time",
      "Analyze logs and network traffic to identify anomalies and threats",
      "Respond to and escalate security incidents according to procedures",
      "Document incidents and maintain audit trails",
      "Collaborate with engineering teams on security improvements",
      "Participate in security drills and incident response exercises",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Cybersecurity, or related field",
      experience_years: "1-2",
      skills: [
        "Security monitoring and SIEM tools",
        "Network and systems knowledge",
        "Log analysis and troubleshooting",
        "Incident response procedures",
        "Attention to detail and pattern recognition",
        "Linux and basic scripting (Python or Bash preferred)",
      ],
      certifications: [
        "CompTIA Security+ or similar entry-level security certification (preferred)",
      ],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match",
      "Security training and certification support",
      "Onsite free meals and beverages",
      "Flexible paid time off",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-07",
    dimensions: {
      autonomy: -0.2,
      timeHorizon: -0.3,
      socialDensity: 0.1,
      riskTolerance: 0.1,
      cognitiveStyle: -0.2,
      incomeWeight: 0.4,
      statusWeight: 0.35,
      meaningWeight: 0.35,  // security has mission-adjacent meaning
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "security", "soc", "data-streaming", "incident-response"],
  },
  {
    id: "0018",
    title: "DevOps Engineer I",
    category: "tech",
    company: "Shopify",
    industry: "E-Commerce",
    location: {
      city: "Pittsburgh",
      state: "PA",
      country: "US",
      remote: "onsite",
    },
    salary: { min: 67000, max: 85000, currency: "USD", period: "yearly" },
    description:
      "Shopify is hiring a DevOps Engineer I to join our infrastructure team in Pittsburgh. You'll build and maintain the systems that keep our platform running smoothly for millions of merchants worldwide. In this onsite role, you'll work on infrastructure automation, deployment pipelines, and cloud systems while collaborating with talented engineers.",
    responsibilities: [
      "Manage and optimize cloud infrastructure across AWS; ensure system reliability and performance",
      "Build and improve deployment automation and CI/CD pipelines using modern tools and practices",
      "Monitor system health and respond to incidents; implement improvements to prevent future issues",
      "Collaborate with development teams to understand infrastructure needs and provide solutions",
      "Document procedures and knowledge; contribute to team learning through code reviews and discussions",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, Engineering, or related field",
      experience_years: "1-3",
      skills: [
        "AWS or cloud infrastructure",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "CI/CD tools and practices",
        "Linux and shell scripting",
        "Docker and containerization",
      ],
      certifications: [],
    },
    benefits: [
      "Competitive salary + equity",
      "Health, dental, vision coverage",
      "Paid parental leave",
      "$2,000/year learning budget",
      "Fitness and wellness programs",
    ],
    employment_type: "full-time",
    posted_date: "2026-02-12",
    dimensions: {
      autonomy: 0.2,
      timeHorizon: 0.2,
      socialDensity: 0.0,
      riskTolerance: 0.3,   // Shopify: large but growth-oriented
      cognitiveStyle: 0.2,
      incomeWeight: 0.6,
      statusWeight: 0.45,
      meaningWeight: 0.3,
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "devops", "e-commerce", "cloud", "ci-cd"],
  },
  {
    id: "0019",
    title: "Database Administrator I",
    category: "tech",
    company: "Cisco",
    industry: "Networking",
    location: { city: "Provo", state: "UT", country: "US", remote: "hybrid" },
    salary: { min: 55000, max: 69000, currency: "USD", period: "yearly" },
    description:
      "Cisco is seeking a Database Administrator I for our Provo operations center. You'll manage database systems that support our networking products and infrastructure. This hybrid role offers the opportunity to develop database administration expertise with a global leader in networking technology.",
    responsibilities: [
      "Administer SQL Server and Oracle databases; perform patches, updates, and maintenance",
      "Monitor database performance and implement optimization strategies",
      "Execute and test backup and recovery procedures regularly",
      "Manage user access and database security policies",
      "Support development teams with schema design and performance tuning",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, IT, or related field; or equivalent experience",
      experience_years: "1-3",
      skills: [
        "SQL Server or Oracle database administration",
        "Windows Server and Linux system administration",
        "T-SQL or PL/SQL query writing",
        "Backup and recovery technologies",
        "Strong troubleshooting and problem-solving abilities",
      ],
      certifications: ["SQL Server or Oracle certification (preferred)"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match",
      "Professional development and certification support",
      "Hybrid work arrangement",
      "Learning and development budget",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-18",
    dimensions: {
      autonomy: -0.1,
      timeHorizon: 0.3,
      socialDensity: -0.4,
      riskTolerance: -0.2,  // Cisco: large enterprise, very stable
      cognitiveStyle: 0.1,
      incomeWeight: 0.5,
      statusWeight: 0.3,
      meaningWeight: 0.3,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "database-administration", "networking", "enterprise", "sql"],
  },
  {
    id: "0020",
    title: "UX Researcher",
    category: "tech",
    company: "Shopify",
    industry: "E-Commerce",
    location: {
      city: "Sacramento",
      state: "CA",
      country: "US",
      remote: "hybrid",
    },
    salary: { min: 68000, max: 89000, currency: "USD", period: "yearly" },
    description:
      "Shopify powers over 5 million merchant stores across 175+ countries, from independent creators to enterprise brands. We're obsessed with empowering entrepreneurs with best-in-class commerce infrastructure. As a UX Researcher, you'll uncover hidden patterns in how merchants and customers interact with our platform.",
    responsibilities: [
      "Conduct user research through interviews, surveys, and usability testing",
      "Analyze user behavior patterns to inform product strategy",
      "Create research reports and present findings to product teams",
      "Collaborate with designers to validate design assumptions",
      "Track user satisfaction metrics and identify pain points",
      "Recommend feature priorities based on user research insights",
    ],
    requirements: {
      education:
        "Bachelor's degree in Psychology, HCI, Communication, or related field",
      experience_years:
        "2-4 years of UX research, user research, or product research experience",
      skills: [
        "User research methodologies",
        "Data analysis",
        "Qualitative analysis",
        "Prototyping",
        "Presentation",
      ],
      certifications: ["Nielsen NN/g certification (preferred)"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    employment_type: "full-time",
    posted_date: "2026-03-21",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.4,
      socialDensity: 0.5,
      riskTolerance: 0.2,   // Shopify: stable large company
      cognitiveStyle: 0.4,
      incomeWeight: 0.5,
      statusWeight: 0.4,
      meaningWeight: 0.5,
      geographicFlex: 0.3,  // hybrid
    },
    tags: ["tech", "ux-research", "e-commerce", "product", "user-research"],
  },
  {
    id: "0021",
    title: "Junior UI Developer",
    category: "tech",
    company: "Canva",
    industry: "Design",
    location: {
      city: "Philadelphia",
      state: "PA",
      country: "US",
      remote: "remote",
    },
    salary: { min: 68000, max: 88000, currency: "USD", period: "yearly" },
    description:
      "Canva is used by 185+ million people globally to create beautiful designs. We're democratizing design, one drag-and-drop at a time. As a UI Developer, you'll build interfaces that millions use to express themselves creatively.",
    responsibilities: [
      "Support business operations and contribute to team objectives",
      "Collaborate with cross-functional teams on key projects",
      "Maintain accurate records and documentation",
      "Identify improvement opportunities and implement solutions",
      "Support training and development initiatives",
      "Ensure compliance with company policies and regulations",
    ],
    requirements: {
      education: "Bachelor's degree in related field",
      experience_years: "68000 years of relevant experience",
      skills: [
        "Core competency 1",
        "Core competency 2",
        "Core competency 3",
      ],
      certifications: ["Relevant certifications"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-03",
    dimensions: {
      autonomy: 0.1,        // junior role, slightly structured
      timeHorizon: -0.2,
      socialDensity: -0.1,
      riskTolerance: 0.3,   // Canva: high-growth unicorn
      cognitiveStyle: -0.1,
      incomeWeight: 0.5,
      statusWeight: 0.4,
      meaningWeight: 0.35,  // creative/democratizing design has meaning
      geographicFlex: 0.7,  // fully remote
    },
    tags: ["tech", "frontend", "ui-development", "design", "creative-software"],
  },
  {
    id: "0022",
    title: "Systems Administrator",
    category: "tech",
    company: "Anduril",
    industry: "Defense Tech",
    location: {
      city: "Minneapolis",
      state: "MN",
      country: "US",
      remote: "onsite",
    },
    salary: { min: 58000, max: 75000, currency: "USD", period: "yearly" },
    description:
      "Anduril is building autonomous systems that power modern defense and security. We're at the intersection of cutting-edge AI, robotics, and government technology. You'll maintain the infrastructure backbone supporting mission-critical autonomous systems.",
    responsibilities: [
      "Manage user accounts, access controls, and security policies",
      "Deploy and maintain servers, networks, and IT infrastructure",
      "Monitor system performance and troubleshoot technical issues",
      "Implement backup and disaster recovery procedures",
      "Maintain IT documentation and runbooks",
      "Support hardware procurement and lifecycle management",
    ],
    requirements: {
      education:
        "Bachelor's degree in Computer Science, IT, or related field",
      experience_years:
        "2-4 years of systems administration or IT infrastructure experience",
      skills: [
        "Windows/Linux",
        "Active Directory",
        "Networking",
        "Virtualization",
        "Scripting",
      ],
      certifications: [
        "CompTIA Security+",
        "Microsoft Azure Administrator",
      ],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-08",
    dimensions: {
      autonomy: -0.1,       // slight variation: Anduril moves faster than typical sysadmin shops
      timeHorizon: 0.2,     // defense projects are longer-horizon
      socialDensity: -0.2,
      riskTolerance: 0.2,   // Anduril: fast-moving defense startup (vs. gov contractor = less stable)
      cognitiveStyle: -0.2,
      incomeWeight: 0.4,
      statusWeight: 0.35,   // defense/mission context adds mild status
      meaningWeight: 0.4,   // mission-critical work
      geographicFlex: -0.4, // onsite
    },
    tags: ["tech", "systems-administration", "defense-tech", "infrastructure", "security"],
  },
  {
    id: "0023",
    title: "UX Researcher",
    category: "tech",
    company: "Block",
    industry: "Fintech",
    location: {
      city: "St. Louis",
      state: "MO",
      country: "US",
      remote: "remote",
    },
    salary: { min: 55000, max: 72000, currency: "USD", period: "yearly" },
    description:
      "Block is a financial services and digital payments ecosystem serving millions. From Square to Cash App to Spiral, we're building a financial world that works for everyone. You'll help customers navigate complex technical challenges on our platform.",
    responsibilities: [
      "Conduct user research through interviews, surveys, and usability testing",
      "Analyze user behavior patterns to inform product strategy",
      "Create research reports and present findings to product teams",
      "Collaborate with designers to validate design assumptions",
      "Track user satisfaction metrics and identify pain points",
      "Recommend feature priorities based on user research insights",
    ],
    requirements: {
      education:
        "Bachelor's degree in Psychology, HCI, Communication, or related field",
      experience_years:
        "2-4 years of UX research, user research, or product research experience",
      skills: [
        "User research methodologies",
        "Data analysis",
        "Qualitative analysis",
        "Prototyping",
        "Presentation",
      ],
      certifications: ["Nielsen NN/g certification (preferred)"],
    },
    benefits: [
      "Competitive health, dental, and vision coverage",
      "401(k) with company match (up to 4%)",
      "Unlimited PTO and remote work flexibility",
      "Professional development budget ($2,000+/year)",
      "Equity options and/or stock purchase plan",
    ],
    employment_type: "full-time",
    posted_date: "2026-01-12",
    dimensions: {
      autonomy: 0.3,
      timeHorizon: 0.4,
      socialDensity: 0.5,
      riskTolerance: 0.3,   // Block: growth-stage public company
      cognitiveStyle: 0.4,
      incomeWeight: 0.5,
      statusWeight: 0.4,
      meaningWeight: 0.6,   // "financial world that works for everyone" — mission-driven
      geographicFlex: 0.7,  // fully remote
    },
    tags: ["tech", "ux-research", "fintech", "payments", "user-research"],
  },
];
