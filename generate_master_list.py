"""
Generate master list of 500 job assignments for Pathfinder dataset.
Strategic selection to maximize coverage across the 9 preference dimensions:
  autonomy, timeHorizon, socialDensity, riskTolerance, cognitiveStyle,
  incomeWeight, statusWeight, meaningWeight, geographicFlex

Jobs are chosen to create surprising career matches — the whole point of Pathfinder
is surfacing careers people WOULDN'T have considered.
"""

import json
import random
import re

random.seed(42)

# ============================================================
# TITLE POOLS — strategically chosen for dimension diversity
# ============================================================

TECH_TITLES = [
    # High autonomy, analytical
    "Software Engineer I", "Associate Software Engineer", "Junior Frontend Developer",
    "Junior Backend Developer", "Mobile Developer", "Cloud Engineer I",
    "DevOps Engineer I", "Site Reliability Engineer I", "Data Engineer I",
    # Lower autonomy, process-oriented
    "QA Analyst", "QA Engineer", "Test Automation Engineer",
    "IT Support Specialist", "Help Desk Technician", "Systems Administrator",
    "Network Technician", "Database Administrator I",
    # Data/analytics — cognitive style variety
    "Data Analyst", "Associate Data Analyst", "Business Intelligence Analyst",
    "Machine Learning Engineer I", "AI Research Assistant",
    # Design/creative tech
    "Junior UX Designer", "Junior UI Developer", "UX Researcher",
    # Security
    "Security Analyst", "Junior Penetration Tester", "SOC Analyst",
    # Product-adjacent
    "Technical Writer", "Solutions Engineer", "Developer Advocate",
    "Junior Product Manager", "Scrum Master",
    # Infrastructure
    "Cloud Operations Analyst", "Infrastructure Engineer I",
    "Platform Engineer I", "Release Engineer",
]

BUSINESS_TITLES = [
    # Finance — high income weight, analytical
    "Financial Analyst", "Budget Analyst", "Credit Analyst", "Risk Analyst",
    "FP&A Analyst", "Investment Analyst", "Tax Analyst", "Pricing Analyst",
    "Actuarial Analyst", "Compliance Analyst",
    # Accounting — process-oriented, detail
    "Staff Accountant", "Audit Associate", "Tax Associate",
    "Accounting Associate", "Accounts Payable Specialist", "Bookkeeper",
    "Payroll Coordinator", "Revenue Analyst",
    # Marketing/Creative business — high social density
    "Marketing Coordinator", "Social Media Coordinator", "Brand Associate",
    "Content Marketing Associate", "Digital Marketing Analyst",
    "Market Research Analyst", "Communications Coordinator",
    # HR/People — high meaning, high social
    "HR Coordinator", "Recruiting Coordinator", "Benefits Coordinator",
    "Training Coordinator", "People Operations Associate",
    # Operations/Strategy — systems thinking
    "Business Analyst I", "Operations Analyst", "Supply Chain Analyst",
    "Project Coordinator", "Program Associate",
    "Management Consultant Analyst", "Strategy Analyst",
    # Sales-adjacent — high social, high risk tolerance
    "Account Executive", "Business Development Representative",
    "Client Services Coordinator", "Sales Operations Analyst",
    # Real estate/Insurance — geographic, risk
    "Insurance Underwriter", "Claims Analyst", "Commercial Appraiser",
]

HEALTHCARE_TITLES = [
    # Clinical — high meaning, high social density
    "Registered Nurse", "Licensed Practical Nurse",
    "Certified Nursing Assistant", "Patient Care Coordinator",
    "Medical Assistant", "Nursing Aide",
    # Lab/Diagnostic — low social, high cognitive
    "Medical Laboratory Technician", "Clinical Laboratory Technician",
    "Phlebotomy Technician", "Histotechnician",
    "Cytotechnologist", "EKG Technician",
    # Research — long time horizon, high autonomy
    "Research Associate I", "Laboratory Associate I",
    "Clinical Research Associate", "Clinical Research Coordinator",
    "Bioinformatics Analyst", "Biostatistician I",
    # Pharmacy — detail-oriented, process
    "Pharmacy Technician", "Pharmacy Assistant",
    # Therapy/Rehab — high meaning, high social
    "Physical Therapy Aide", "Occupational Therapy Aide",
    "Respiratory Therapist", "Speech-Language Pathology Assistant",
    "Recreational Therapist",
    # Public Health — high meaning, systems thinking
    "Public Health Analyst", "Health Educator",
    "Epidemiology Associate", "Environmental Health Specialist",
    "Community Health Worker", "Health Policy Analyst",
    # Health IT/Admin — lower social, process
    "Health Information Technician", "Medical Records Technician",
    "Clinical Data Coordinator", "Medical Coder",
    "Healthcare Quality Associate", "Patient Services Representative",
    # Imaging/Tech
    "Radiology Technician", "Surgical Technologist",
    "Sterile Processing Technician", "Dental Hygienist",
]

# ============================================================
# COMPANY POOLS — real firms, diverse sizes and cultures
# ============================================================

TECH_COMPANIES = [
    ("Stripe", "Fintech"), ("Datadog", "Cloud Monitoring"), ("Cisco", "Networking"),
    ("Cloudflare", "Cybersecurity"), ("Twilio", "Communications"), ("Shopify", "E-Commerce"),
    ("HubSpot", "Marketing Tech"), ("Toast", "Restaurant Tech"), ("Ramp", "Fintech"),
    ("Plaid", "Fintech"), ("Notion", "Productivity"), ("Figma", "Design Tools"),
    ("Vercel", "Developer Tools"), ("Supabase", "Developer Tools"), ("Render", "Cloud"),
    ("Snowflake", "Data"), ("Palantir", "Data Analytics"), ("Block", "Fintech"),
    ("MongoDB", "Databases"), ("Elastic", "Search"), ("GitLab", "DevOps"),
    ("Confluent", "Data Streaming"), ("HashiCorp", "Infrastructure"),
    ("Okta", "Identity"), ("CrowdStrike", "Cybersecurity"),
    ("Palo Alto Networks", "Cybersecurity"), ("Splunk", "Observability"),
    ("Akamai", "CDN"), ("Fastly", "Edge Computing"), ("DigitalOcean", "Cloud"),
    ("Atlassian", "Collaboration"), ("Dropbox", "Cloud Storage"),
    ("Zoom", "Communications"), ("Slack", "Collaboration"),
    ("Asana", "Project Management"), ("Monday.com", "Work Management"),
    ("Canva", "Design"), ("Adobe", "Creative Software"),
    ("Salesforce", "CRM"), ("ServiceNow", "IT Management"),
    ("Workday", "HR Tech"), ("Intuit", "Financial Software"),
    ("DocuSign", "E-Signature"), ("Zendesk", "Customer Service"),
    ("Amplitude", "Product Analytics"), ("Mixpanel", "Analytics"),
    ("Brex", "Fintech"), ("Gusto", "Payroll"), ("Rippling", "HR Tech"),
    ("Anduril", "Defense Tech"), ("SpaceX", "Aerospace"),
]

BUSINESS_COMPANIES = [
    ("JPMorgan Chase", "Investment Banking"), ("Goldman Sachs", "Investment Banking"),
    ("Morgan Stanley", "Investment Banking"), ("Bank of America", "Banking"),
    ("Citigroup", "Banking"), ("Wells Fargo", "Banking"),
    ("Capital One", "Banking"), ("PNC Financial", "Banking"),
    ("Deloitte", "Professional Services"), ("PwC", "Professional Services"),
    ("EY", "Professional Services"), ("KPMG", "Professional Services"),
    ("McKinsey", "Management Consulting"), ("Bain & Company", "Management Consulting"),
    ("BCG", "Management Consulting"), ("Accenture", "Consulting"),
    ("Procter & Gamble", "Consumer Goods"), ("Unilever", "Consumer Goods"),
    ("Johnson & Johnson", "Consumer Health"), ("Coca-Cola", "Beverages"),
    ("PepsiCo", "Food & Beverage"), ("General Mills", "Food"),
    ("Nike", "Apparel"), ("Under Armour", "Apparel"),
    ("Allstate", "Insurance"), ("Progressive", "Insurance"),
    ("State Farm", "Insurance"), ("GEICO", "Insurance"),
    ("Travelers", "Insurance"), ("Liberty Mutual", "Insurance"),
    ("Fidelity Investments", "Asset Management"), ("Charles Schwab", "Brokerage"),
    ("T. Rowe Price", "Asset Management"), ("Vanguard", "Asset Management"),
    ("BlackRock", "Asset Management"), ("Northwestern Mutual", "Financial Planning"),
    ("H&R Block", "Tax Services"), ("Robert Half", "Staffing"),
    ("Marsh McLennan", "Risk Management"), ("Aon", "Insurance Brokerage"),
    ("CBRE", "Commercial Real Estate"), ("JLL", "Real Estate Services"),
    ("Caterpillar", "Manufacturing"), ("3M", "Manufacturing"),
    ("Honeywell", "Industrial"), ("GE Aerospace", "Aerospace"),
    ("Lockheed Martin", "Defense"), ("Raytheon", "Defense"),
    ("FedEx", "Logistics"), ("UPS", "Logistics"),
    ("Target", "Retail"), ("Costco", "Retail"),
]

HEALTHCARE_COMPANIES = [
    ("Mayo Clinic", "Healthcare"), ("Cleveland Clinic", "Healthcare"),
    ("Johns Hopkins Medicine", "Academic Medicine"), ("Stanford Medicine", "Academic Medicine"),
    ("UCSF Health", "Academic Medicine"), ("Mass General Brigham", "Healthcare"),
    ("Dana-Farber Cancer Institute", "Oncology"), ("Memorial Sloan Kettering", "Oncology"),
    ("Kaiser Permanente", "Integrated Healthcare"), ("HCA Healthcare", "Hospital System"),
    ("Ascension Health", "Hospital System"), ("CommonSpirit Health", "Hospital System"),
    ("Providence Health", "Hospital System"), ("Intermountain Health", "Hospital System"),
    ("NYU Langone Health", "Academic Medicine"), ("Mount Sinai Health", "Academic Medicine"),
    ("Pfizer", "Pharmaceuticals"), ("Merck", "Pharmaceuticals"),
    ("Moderna", "Biotechnology"), ("Eli Lilly", "Pharmaceuticals"),
    ("AbbVie", "Pharmaceuticals"), ("Bristol-Myers Squibb", "Pharmaceuticals"),
    ("GSK", "Pharmaceuticals"), ("Roche", "Pharmaceuticals"),
    ("Novartis", "Pharmaceuticals"), ("AstraZeneca", "Pharmaceuticals"),
    ("Genentech", "Biotechnology"), ("Amgen", "Biotechnology"),
    ("Gilead Sciences", "Biotechnology"), ("Regeneron", "Biotechnology"),
    ("Biogen", "Biotechnology"), ("BioNTech", "Biotechnology"),
    ("Takeda", "Pharmaceuticals"), ("Sanofi", "Pharmaceuticals"),
    ("IQVIA", "Clinical Research"), ("Parexel", "Clinical Research"),
    ("Syneos Health", "Clinical Research"), ("PPD", "Clinical Research"),
    ("Fortrea", "Clinical Research"), ("ICON", "Clinical Research"),
    ("CDC", "Government/Public Health"), ("NIH", "Government/Research"),
    ("Broad Institute", "Research"), ("Scripps Research", "Research"),
    ("Medtronic", "Medical Devices"), ("Boston Scientific", "Medical Devices"),
    ("Stryker", "Medical Devices"), ("Intuitive Surgical", "Medical Devices"),
    ("Abbott Laboratories", "Medical Devices"), ("Baxter International", "Medical Products"),
]

# ============================================================
# LOCATIONS — 50 US cities with cost-of-living multipliers
# ============================================================

LOCATIONS = [
    ("New York", "NY", 1.35), ("San Francisco", "CA", 1.40),
    ("San Jose", "CA", 1.35), ("Los Angeles", "CA", 1.20),
    ("Seattle", "WA", 1.25), ("Boston", "MA", 1.25),
    ("Washington", "DC", 1.20), ("Chicago", "IL", 1.05),
    ("Austin", "TX", 1.05), ("Denver", "CO", 1.05),
    ("San Diego", "CA", 1.15), ("Portland", "OR", 1.05),
    ("Philadelphia", "PA", 1.00), ("Miami", "FL", 1.05),
    ("Atlanta", "GA", 0.95), ("Dallas", "TX", 0.95),
    ("Houston", "TX", 0.95), ("Phoenix", "AZ", 0.90),
    ("Minneapolis", "MN", 1.00), ("Raleigh", "NC", 0.95),
    ("Durham", "NC", 0.95), ("Nashville", "TN", 0.95),
    ("Charlotte", "NC", 0.90), ("Salt Lake City", "UT", 0.95),
    ("Pittsburgh", "PA", 0.90), ("Columbus", "OH", 0.85),
    ("Indianapolis", "IN", 0.85), ("Cincinnati", "OH", 0.85),
    ("Kansas City", "MO", 0.85), ("St. Louis", "MO", 0.85),
    ("Tampa", "FL", 0.90), ("Orlando", "FL", 0.90),
    ("Baltimore", "MD", 1.00), ("Detroit", "MI", 0.85),
    ("Milwaukee", "WI", 0.85), ("Sacramento", "CA", 1.05),
    ("Richmond", "VA", 0.90), ("Rochester", "MN", 0.90),
    ("Ann Arbor", "MI", 0.95), ("Madison", "WI", 0.90),
    ("Boulder", "CO", 1.10), ("Cambridge", "MA", 1.30),
    ("Palo Alto", "CA", 1.40), ("Bethesda", "MD", 1.20),
    ("Research Triangle Park", "NC", 0.95), ("Irvine", "CA", 1.15),
    ("Provo", "UT", 0.85), ("Omaha", "NE", 0.80),
    ("Des Moines", "IA", 0.80), ("Boise", "ID", 0.85),
]

REMOTE_OPTIONS = ["onsite", "hybrid", "remote"]

# ============================================================
# BASE SALARY RANGES by title pattern (adjusted by COL multiplier)
# ============================================================

SALARY_BASES = {
    # Tech
    "Software Engineer": (75000, 95000), "Frontend Developer": (70000, 90000),
    "Backend Developer": (75000, 95000), "Mobile Developer": (72000, 92000),
    "Cloud Engineer": (78000, 98000), "DevOps Engineer": (75000, 95000),
    "Site Reliability Engineer": (80000, 100000), "Data Engineer": (75000, 95000),
    "QA": (60000, 78000), "Test Automation": (65000, 82000),
    "IT Support": (48000, 62000), "Help Desk": (42000, 55000),
    "Systems Administrator": (58000, 75000), "Network Technician": (50000, 65000),
    "Database Administrator": (65000, 82000), "Data Analyst": (58000, 75000),
    "Business Intelligence": (62000, 80000), "Machine Learning": (85000, 110000),
    "AI Research": (80000, 105000), "UX Designer": (65000, 85000),
    "UX Researcher": (65000, 85000), "UI Developer": (68000, 88000),
    "Security Analyst": (65000, 85000), "Penetration Tester": (70000, 90000),
    "SOC Analyst": (58000, 75000), "Technical Writer": (55000, 72000),
    "Solutions Engineer": (72000, 92000), "Developer Advocate": (75000, 95000),
    "Product Manager": (80000, 100000), "Scrum Master": (68000, 85000),
    "Cloud Operations": (62000, 80000), "Infrastructure Engineer": (72000, 92000),
    "Platform Engineer": (78000, 98000), "Release Engineer": (70000, 88000),
    # Business
    "Financial Analyst": (65000, 85000), "Budget Analyst": (55000, 70000),
    "Credit Analyst": (55000, 72000), "Risk Analyst": (62000, 80000),
    "FP&A Analyst": (65000, 82000), "Investment Analyst": (70000, 90000),
    "Tax Analyst": (55000, 70000), "Pricing Analyst": (58000, 75000),
    "Actuarial Analyst": (68000, 85000), "Compliance Analyst": (55000, 72000),
    "Staff Accountant": (50000, 65000), "Audit Associate": (55000, 68000),
    "Tax Associate": (55000, 68000), "Accounting Associate": (48000, 62000),
    "Accounts Payable": (42000, 55000), "Bookkeeper": (38000, 50000),
    "Payroll Coordinator": (45000, 58000), "Revenue Analyst": (58000, 75000),
    "Marketing Coordinator": (45000, 58000), "Social Media Coordinator": (42000, 55000),
    "Brand Associate": (48000, 62000), "Content Marketing": (48000, 62000),
    "Digital Marketing": (50000, 65000), "Market Research": (52000, 68000),
    "Communications Coordinator": (45000, 58000),
    "HR Coordinator": (45000, 58000), "Recruiting Coordinator": (45000, 60000),
    "Benefits Coordinator": (48000, 62000), "Training Coordinator": (48000, 62000),
    "People Operations": (50000, 65000),
    "Business Analyst": (58000, 75000), "Operations Analyst": (52000, 68000),
    "Supply Chain Analyst": (52000, 68000), "Project Coordinator": (48000, 62000),
    "Program Associate": (50000, 65000), "Management Consultant": (70000, 90000),
    "Strategy Analyst": (65000, 85000),
    "Account Executive": (45000, 60000), "Business Development": (45000, 60000),
    "Client Services": (45000, 58000), "Sales Operations": (50000, 65000),
    "Insurance Underwriter": (50000, 65000), "Claims Analyst": (45000, 58000),
    "Commercial Appraiser": (48000, 62000),
    # Healthcare
    "Registered Nurse": (55000, 72000), "Licensed Practical Nurse": (42000, 55000),
    "Certified Nursing Assistant": (32000, 42000), "Patient Care Coordinator": (42000, 55000),
    "Medical Assistant": (32000, 42000), "Nursing Aide": (30000, 40000),
    "Medical Laboratory Technician": (42000, 55000), "Clinical Laboratory": (45000, 58000),
    "Phlebotomy Technician": (32000, 42000), "Histotechnician": (45000, 58000),
    "Cytotechnologist": (55000, 70000), "EKG Technician": (35000, 45000),
    "Research Associate": (50000, 65000), "Laboratory Associate": (45000, 58000),
    "Clinical Research Associate": (52000, 68000), "Clinical Research Coordinator": (48000, 62000),
    "Bioinformatics": (62000, 80000), "Biostatistician": (60000, 78000),
    "Pharmacy Technician": (35000, 48000), "Pharmacy Assistant": (30000, 40000),
    "Physical Therapy Aide": (28000, 38000), "Occupational Therapy Aide": (28000, 38000),
    "Respiratory Therapist": (48000, 62000), "Speech-Language": (50000, 65000),
    "Recreational Therapist": (40000, 52000),
    "Public Health Analyst": (48000, 62000), "Health Educator": (42000, 55000),
    "Epidemiology": (52000, 68000), "Environmental Health": (48000, 62000),
    "Community Health Worker": (35000, 45000), "Health Policy": (52000, 68000),
    "Health Information Technician": (38000, 50000), "Medical Records": (35000, 45000),
    "Clinical Data Coordinator": (48000, 62000), "Medical Coder": (40000, 52000),
    "Healthcare Quality": (48000, 62000), "Patient Services Representative": (32000, 42000),
    "Radiology Technician": (48000, 62000), "Surgical Technologist": (42000, 55000),
    "Sterile Processing": (35000, 45000), "Dental Hygienist": (55000, 72000),
}


def get_salary(title: str, col_multiplier: float) -> tuple[int, int]:
    """Find best matching salary base for a title and apply COL multiplier."""
    for key, (base_min, base_max) in SALARY_BASES.items():
        if key.lower() in title.lower():
            adj_min = int(base_min * col_multiplier / 1000) * 1000
            adj_max = int(base_max * col_multiplier / 1000) * 1000
            return adj_min, adj_max
    return 50000, 65000  # fallback


def slugify(text: str) -> str:
    """Convert text to filename-safe slug."""
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def generate_jobs():
    jobs = []
    used_combos = set()
    id_counter = 11  # Start after the 10 test jobs

    categories = [
        ("tech", TECH_TITLES, TECH_COMPANIES),
        ("business", BUSINESS_TITLES, BUSINESS_COMPANIES),
        ("healthcare", HEALTHCARE_TITLES, HEALTHCARE_COMPANIES),
    ]

    # 167 tech, 167 business, 166 healthcare = 500
    targets = [("tech", 167), ("business", 167), ("healthcare", 166)]

    for category, target_count in targets:
        cat_titles = [t for cat, titles, _ in categories if cat == category for t in titles]
        cat_companies = [c for cat, _, companies in categories if cat == category for c in companies]

        count = 0
        attempts = 0
        max_attempts = target_count * 10

        while count < target_count and attempts < max_attempts:
            attempts += 1
            title = random.choice(cat_titles)
            company, industry = random.choice(cat_companies)
            city, state, col = random.choice(LOCATIONS)
            remote = random.choice(REMOTE_OPTIONS)

            # Ensure unique combo
            combo = (title, company, city)
            if combo in used_combos:
                continue
            used_combos.add(combo)

            sal_min, sal_max = get_salary(title, col)
            posted_day = random.randint(1, 25)
            posted_month = random.choice([1, 2, 3])
            posted_date = f"2026-{posted_month:02d}-{posted_day:02d}"

            job_id = f"{id_counter:04d}"
            filename_base = f"{job_id}_{category}_{slugify(title)}_{slugify(city)}-{state.lower()}"

            jobs.append({
                "id": job_id,
                "title": title,
                "category": category,
                "company": company,
                "industry": industry,
                "location": {
                    "city": city,
                    "state": state,
                    "country": "US",
                    "remote": remote,
                },
                "salary": {
                    "min": sal_min,
                    "max": sal_max,
                    "currency": "USD",
                    "period": "yearly",
                },
                "employment_type": "full-time",
                "posted_date": posted_date,
                "filename_base": filename_base,
            })

            id_counter += 1
            count += 1

    random.shuffle(jobs)
    return jobs


if __name__ == "__main__":
    jobs = generate_jobs()

    # Write master list
    with open("job_data/master_list.json", "w") as f:
        json.dump(jobs, f, indent=2)

    # Write 10 batch files (50 jobs each)
    for batch_idx in range(10):
        batch = jobs[batch_idx * 50 : (batch_idx + 1) * 50]
        with open(f"job_data/batch_{batch_idx:02d}.json", "w") as f:
            json.dump(batch, f, indent=2)

    # Print summary
    cats = {}
    companies = set()
    titles = set()
    cities = set()
    for j in jobs:
        cats[j["category"]] = cats.get(j["category"], 0) + 1
        companies.add(j["company"])
        titles.add(j["title"])
        cities.add(j["location"]["city"])

    print(f"Total jobs: {len(jobs)}")
    print(f"Categories: {cats}")
    print(f"Unique companies: {len(companies)}")
    print(f"Unique titles: {len(titles)}")
    print(f"Unique cities: {len(cities)}")
