import { Job, RevealedPreferences } from '@/lib/types';

// ---------------------------------------------------------------------------
// Dimension vectors for each unique job title slug.
// Each dimension: autonomy, timeHorizon, socialDensity, riskTolerance,
//   cognitiveStyle range -1 to 1.
// incomeWeight, statusWeight, meaningWeight range 0 to 1.
// geographicFlex range -1 to 1.
// ---------------------------------------------------------------------------

type Dims = RevealedPreferences;

const titleDimensions: Record<string, Dims> = {
  // ── TECH ──────────────────────────────────────────────────────────────────
  'software-engineer-i':           { autonomy: 0.3, timeHorizon: 0.3, socialDensity: 0.1, riskTolerance: 0.1, cognitiveStyle: 0.5, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.4, geographicFlex: 0.5 },
  'associate-software-engineer':   { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.2, riskTolerance: 0.0, cognitiveStyle: 0.4, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.5 },
  'junior-frontend-developer':     { autonomy: 0.3, timeHorizon: 0.1, socialDensity: 0.2, riskTolerance: 0.1, cognitiveStyle: 0.4, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.6 },
  'junior-backend-developer':      { autonomy: 0.3, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: 0.1, cognitiveStyle: 0.5, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.6 },
  'junior-ui-developer':           { autonomy: 0.3, timeHorizon: 0.1, socialDensity: 0.3, riskTolerance: 0.1, cognitiveStyle: 0.5, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.5 },
  'mobile-developer':              { autonomy: 0.4, timeHorizon: 0.2, socialDensity: 0.1, riskTolerance: 0.2, cognitiveStyle: 0.5, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.4, geographicFlex: 0.6 },
  'data-engineer-i':               { autonomy: 0.3, timeHorizon: 0.4, socialDensity: -0.1, riskTolerance: 0.1, cognitiveStyle: 0.4, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.6 },
  'data-analyst':                  { autonomy: 0.2, timeHorizon: 0.1, socialDensity: 0.0, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.4 },
  'associate-data-analyst':        { autonomy: 0.1, timeHorizon: 0.1, socialDensity: 0.1, riskTolerance: -0.2, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.4, geographicFlex: 0.4 },
  'database-administrator-i':      { autonomy: 0.2, timeHorizon: 0.3, socialDensity: -0.3, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.2, meaningWeight: 0.3, geographicFlex: 0.3 },
  'machine-learning-engineer-i':   { autonomy: 0.5, timeHorizon: 0.6, socialDensity: -0.3, riskTolerance: 0.4, cognitiveStyle: 0.8, incomeWeight: 0.8, statusWeight: 0.5, meaningWeight: 0.5, geographicFlex: 0.7 },
  'ai-research-assistant':         { autonomy: 0.4, timeHorizon: 0.7, socialDensity: -0.2, riskTolerance: 0.3, cognitiveStyle: 0.9, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.6, geographicFlex: 0.6 },
  'cloud-engineer-i':              { autonomy: 0.4, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: 0.2, cognitiveStyle: 0.3, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.8 },
  'cloud-operations-analyst':      { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.1, riskTolerance: 0.0, cognitiveStyle: 0.2, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.7 },
  'devops-engineer-i':             { autonomy: 0.4, timeHorizon: 0.3, socialDensity: 0.1, riskTolerance: 0.2, cognitiveStyle: 0.3, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.7 },
  'site-reliability-engineer-i':   { autonomy: 0.3, timeHorizon: 0.3, socialDensity: 0.1, riskTolerance: 0.2, cognitiveStyle: 0.3, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.6 },
  'infrastructure-engineer-i':     { autonomy: 0.3, timeHorizon: 0.4, socialDensity: 0.0, riskTolerance: 0.1, cognitiveStyle: 0.3, incomeWeight: 0.7, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.6 },
  'platform-engineer-i':           { autonomy: 0.4, timeHorizon: 0.4, socialDensity: 0.1, riskTolerance: 0.2, cognitiveStyle: 0.4, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.7 },
  'systems-administrator':         { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.0, riskTolerance: -0.1, cognitiveStyle: 0.0, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.3, geographicFlex: 0.3 },
  'network-technician':            { autonomy: 0.1, timeHorizon: 0.1, socialDensity: 0.1, riskTolerance: -0.2, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.3, geographicFlex: 0.0 },
  'help-desk-technician':          { autonomy: -0.3, timeHorizon: -0.3, socialDensity: 0.4, riskTolerance: -0.4, cognitiveStyle: -0.4, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.4, geographicFlex: 0.0 },
  'it-support-specialist':         { autonomy: -0.2, timeHorizon: -0.2, socialDensity: 0.3, riskTolerance: -0.3, cognitiveStyle: -0.3, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.4, geographicFlex: 0.1 },
  'qa-engineer':                   { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.1, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.5 },
  'qa-analyst':                    { autonomy: 0.1, timeHorizon: 0.1, socialDensity: 0.2, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.4, geographicFlex: 0.4 },
  'test-automation-engineer':      { autonomy: 0.3, timeHorizon: 0.2, socialDensity: 0.0, riskTolerance: 0.0, cognitiveStyle: 0.3, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.5 },
  'security-analyst':              { autonomy: 0.3, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: 0.2, cognitiveStyle: 0.3, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.5, geographicFlex: 0.4 },
  'soc-analyst':                   { autonomy: 0.1, timeHorizon: -0.1, socialDensity: 0.2, riskTolerance: 0.1, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.3 },
  'junior-penetration-tester':     { autonomy: 0.5, timeHorizon: 0.1, socialDensity: -0.2, riskTolerance: 0.5, cognitiveStyle: 0.4, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.5, geographicFlex: 0.5 },
  'release-engineer':              { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.2, riskTolerance: 0.0, cognitiveStyle: 0.2, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.5 },
  'scrum-master':                  { autonomy: 0.3, timeHorizon: 0.2, socialDensity: 0.7, riskTolerance: 0.0, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.4, geographicFlex: 0.5 },
  'junior-product-manager':        { autonomy: 0.4, timeHorizon: 0.3, socialDensity: 0.5, riskTolerance: 0.2, cognitiveStyle: 0.3, incomeWeight: 0.6, statusWeight: 0.5, meaningWeight: 0.5, geographicFlex: 0.5 },
  'technical-writer':              { autonomy: 0.4, timeHorizon: 0.2, socialDensity: -0.1, riskTolerance: -0.2, cognitiveStyle: 0.3, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.4, geographicFlex: 0.6 },
  'developer-advocate':            { autonomy: 0.6, timeHorizon: 0.2, socialDensity: 0.6, riskTolerance: 0.3, cognitiveStyle: 0.4, incomeWeight: 0.6, statusWeight: 0.5, meaningWeight: 0.5, geographicFlex: 0.8 },
  'solutions-engineer':            { autonomy: 0.3, timeHorizon: 0.1, socialDensity: 0.5, riskTolerance: 0.1, cognitiveStyle: 0.3, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.4, geographicFlex: 0.5 },
  'ux-researcher':                 { autonomy: 0.4, timeHorizon: 0.3, socialDensity: 0.4, riskTolerance: 0.0, cognitiveStyle: 0.5, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.6, geographicFlex: 0.4 },
  'junior-ux-designer':            { autonomy: 0.3, timeHorizon: 0.2, socialDensity: 0.3, riskTolerance: 0.1, cognitiveStyle: 0.6, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.6, geographicFlex: 0.4 },
  'business-intelligence-analyst': { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.1, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.4 },

  // ── BUSINESS ──────────────────────────────────────────────────────────────
  'financial-analyst':              { autonomy: 0.2, timeHorizon: 0.3, socialDensity: 0.1, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.7, statusWeight: 0.5, meaningWeight: 0.3, geographicFlex: 0.2 },
  'fpa-analyst':                    { autonomy: 0.2, timeHorizon: 0.4, socialDensity: 0.1, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.7, statusWeight: 0.5, meaningWeight: 0.3, geographicFlex: 0.2 },
  'budget-analyst':                 { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: -0.3, cognitiveStyle: 0.0, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.1 },
  'revenue-analyst':                { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.0, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.2 },
  'pricing-analyst':                { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.0, riskTolerance: 0.1, cognitiveStyle: 0.2, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.3 },
  'investment-analyst':             { autonomy: 0.3, timeHorizon: 0.5, socialDensity: 0.0, riskTolerance: 0.4, cognitiveStyle: 0.4, incomeWeight: 0.9, statusWeight: 0.7, meaningWeight: 0.2, geographicFlex: 0.2 },
  'credit-analyst':                 { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.1 },
  'actuarial-analyst':              { autonomy: 0.3, timeHorizon: 0.6, socialDensity: -0.3, riskTolerance: -0.1, cognitiveStyle: 0.6, incomeWeight: 0.8, statusWeight: 0.5, meaningWeight: 0.3, geographicFlex: 0.2 },
  'risk-analyst':                   { autonomy: 0.2, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: -0.2, cognitiveStyle: 0.2, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.4, geographicFlex: 0.2 },
  'tax-analyst':                    { autonomy: 0.1, timeHorizon: 0.3, socialDensity: -0.2, riskTolerance: -0.4, cognitiveStyle: 0.0, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.2, geographicFlex: 0.1 },
  'tax-associate':                  { autonomy: 0.0, timeHorizon: 0.2, socialDensity: -0.1, riskTolerance: -0.4, cognitiveStyle: -0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.2, geographicFlex: 0.1 },
  'staff-accountant':               { autonomy: 0.0, timeHorizon: 0.2, socialDensity: -0.1, riskTolerance: -0.4, cognitiveStyle: -0.2, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.2, geographicFlex: 0.1 },
  'accounting-associate':           { autonomy: -0.1, timeHorizon: 0.2, socialDensity: 0.0, riskTolerance: -0.4, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.2, geographicFlex: 0.1 },
  'bookkeeper':                     { autonomy: 0.0, timeHorizon: 0.1, socialDensity: -0.2, riskTolerance: -0.5, cognitiveStyle: -0.3, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.2, geographicFlex: 0.1 },
  'audit-associate':                { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.1, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.7, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.2 },
  'accounts-payable-specialist':    { autonomy: -0.2, timeHorizon: 0.0, socialDensity: 0.0, riskTolerance: -0.5, cognitiveStyle: -0.4, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.2, geographicFlex: 0.0 },
  'payroll-coordinator':            { autonomy: -0.1, timeHorizon: 0.1, socialDensity: 0.1, riskTolerance: -0.4, cognitiveStyle: -0.3, incomeWeight: 0.5, statusWeight: 0.1, meaningWeight: 0.3, geographicFlex: 0.0 },
  'insurance-underwriter':          { autonomy: 0.2, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.1 },
  'claims-analyst':                 { autonomy: 0.0, timeHorizon: 0.1, socialDensity: 0.1, riskTolerance: -0.3, cognitiveStyle: -0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.3, geographicFlex: 0.1 },
  'compliance-analyst':             { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.0, riskTolerance: -0.3, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.2 },
  'operations-analyst':             { autonomy: 0.1, timeHorizon: 0.2, socialDensity: 0.2, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.2 },
  'supply-chain-analyst':           { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.1, riskTolerance: 0.0, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.2 },
  'strategy-analyst':               { autonomy: 0.3, timeHorizon: 0.5, socialDensity: 0.2, riskTolerance: 0.2, cognitiveStyle: 0.5, incomeWeight: 0.7, statusWeight: 0.6, meaningWeight: 0.3, geographicFlex: 0.3 },
  'business-analyst-i':             { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.3, riskTolerance: 0.0, cognitiveStyle: 0.2, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.3, geographicFlex: 0.3 },
  'management-consultant-analyst':  { autonomy: 0.3, timeHorizon: 0.3, socialDensity: 0.4, riskTolerance: 0.2, cognitiveStyle: 0.4, incomeWeight: 0.8, statusWeight: 0.7, meaningWeight: 0.3, geographicFlex: 0.4 },
  'market-research-analyst':        { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.1, riskTolerance: 0.0, cognitiveStyle: 0.3, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.3 },
  'business-development-representative': { autonomy: 0.3, timeHorizon: -0.1, socialDensity: 0.6, riskTolerance: 0.3, cognitiveStyle: -0.2, incomeWeight: 0.7, statusWeight: 0.5, meaningWeight: 0.3, geographicFlex: 0.3 },
  'sales-operations-analyst':       { autonomy: 0.1, timeHorizon: 0.2, socialDensity: 0.3, riskTolerance: 0.0, cognitiveStyle: 0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: 0.2 },
  'commercial-appraiser':           { autonomy: 0.4, timeHorizon: 0.2, socialDensity: 0.1, riskTolerance: 0.0, cognitiveStyle: 0.0, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.3, geographicFlex: -0.2 },
  'marketing-coordinator':          { autonomy: 0.1, timeHorizon: 0.1, socialDensity: 0.4, riskTolerance: 0.0, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.3 },
  'digital-marketing-analyst':      { autonomy: 0.2, timeHorizon: 0.1, socialDensity: 0.2, riskTolerance: 0.1, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.5 },
  'content-marketing-associate':    { autonomy: 0.3, timeHorizon: 0.1, socialDensity: 0.2, riskTolerance: 0.0, cognitiveStyle: 0.3, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.5 },
  'social-media-coordinator':       { autonomy: 0.2, timeHorizon: -0.2, socialDensity: 0.3, riskTolerance: 0.1, cognitiveStyle: 0.2, incomeWeight: 0.4, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.5 },
  'brand-associate':                { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.3, riskTolerance: 0.1, cognitiveStyle: 0.4, incomeWeight: 0.5, statusWeight: 0.4, meaningWeight: 0.4, geographicFlex: 0.3 },
  'communications-coordinator':     { autonomy: 0.1, timeHorizon: 0.1, socialDensity: 0.4, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.3 },
  'hr-coordinator':                 { autonomy: 0.0, timeHorizon: 0.1, socialDensity: 0.5, riskTolerance: -0.2, cognitiveStyle: 0.0, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.1 },
  'people-operations-associate':    { autonomy: 0.1, timeHorizon: 0.2, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.2 },
  'benefits-coordinator':           { autonomy: -0.1, timeHorizon: 0.1, socialDensity: 0.3, riskTolerance: -0.3, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.4, geographicFlex: 0.1 },
  'recruiting-coordinator':         { autonomy: 0.1, timeHorizon: 0.0, socialDensity: 0.6, riskTolerance: -0.1, cognitiveStyle: 0.0, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.2 },
  'training-coordinator':           { autonomy: 0.1, timeHorizon: 0.2, socialDensity: 0.6, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.6, geographicFlex: 0.1 },
  'project-coordinator':            { autonomy: 0.1, timeHorizon: 0.2, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.4, geographicFlex: 0.2 },
  'program-associate':              { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.4, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.5, geographicFlex: 0.2 },
  'client-services-coordinator':    { autonomy: 0.0, timeHorizon: 0.0, socialDensity: 0.5, riskTolerance: -0.2, cognitiveStyle: -0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.4, geographicFlex: 0.1 },

  // ── HEALTHCARE ────────────────────────────────────────────────────────────
  'registered-nurse':               { autonomy: 0.2, timeHorizon: 0.0, socialDensity: 0.6, riskTolerance: 0.1, cognitiveStyle: 0.0, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.9, geographicFlex: 0.1 },
  'licensed-practical-nurse':       { autonomy: 0.0, timeHorizon: -0.1, socialDensity: 0.5, riskTolerance: 0.0, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.8, geographicFlex: 0.0 },
  'certified-nursing-assistant':    { autonomy: -0.3, timeHorizon: -0.2, socialDensity: 0.6, riskTolerance: -0.1, cognitiveStyle: -0.4, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.8, geographicFlex: -0.1 },
  'nursing-aide':                   { autonomy: -0.3, timeHorizon: -0.2, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: -0.4, incomeWeight: 0.3, statusWeight: 0.1, meaningWeight: 0.8, geographicFlex: -0.1 },
  'medical-assistant':              { autonomy: -0.1, timeHorizon: -0.1, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.8, geographicFlex: 0.0 },
  'pharmacy-technician':            { autonomy: -0.1, timeHorizon: 0.0, socialDensity: 0.3, riskTolerance: -0.3, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.7, geographicFlex: 0.0 },
  'pharmacy-assistant':             { autonomy: -0.2, timeHorizon: -0.1, socialDensity: 0.3, riskTolerance: -0.3, cognitiveStyle: -0.3, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.7, geographicFlex: 0.0 },
  'phlebotomy-technician':          { autonomy: -0.2, timeHorizon: -0.3, socialDensity: 0.4, riskTolerance: -0.2, cognitiveStyle: -0.4, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.7, geographicFlex: -0.1 },
  'radiology-technician':           { autonomy: 0.0, timeHorizon: 0.0, socialDensity: 0.3, riskTolerance: -0.1, cognitiveStyle: -0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.7, geographicFlex: 0.0 },
  'ekg-technician':                 { autonomy: -0.1, timeHorizon: -0.2, socialDensity: 0.3, riskTolerance: -0.2, cognitiveStyle: -0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.7, geographicFlex: -0.1 },
  'surgical-technologist':          { autonomy: 0.0, timeHorizon: 0.0, socialDensity: 0.4, riskTolerance: 0.2, cognitiveStyle: -0.1, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.8, geographicFlex: -0.1 },
  'sterile-processing-technician':  { autonomy: -0.2, timeHorizon: -0.2, socialDensity: 0.1, riskTolerance: -0.3, cognitiveStyle: -0.5, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.6, geographicFlex: -0.2 },
  'respiratory-therapist':          { autonomy: 0.2, timeHorizon: 0.1, socialDensity: 0.4, riskTolerance: 0.1, cognitiveStyle: 0.0, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.9, geographicFlex: 0.0 },
  'physical-therapy-aide':          { autonomy: -0.1, timeHorizon: 0.1, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: -0.2, incomeWeight: 0.4, statusWeight: 0.2, meaningWeight: 0.8, geographicFlex: -0.1 },
  'occupational-therapy-aide':      { autonomy: -0.1, timeHorizon: 0.1, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: -0.1, incomeWeight: 0.4, statusWeight: 0.2, meaningWeight: 0.8, geographicFlex: -0.1 },
  'recreational-therapist':         { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.6, riskTolerance: 0.0, cognitiveStyle: 0.2, incomeWeight: 0.4, statusWeight: 0.2, meaningWeight: 0.9, geographicFlex: -0.1 },
  'speech-language-pathology-assistant': { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.5, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.9, geographicFlex: 0.0 },
  'dental-hygienist':               { autonomy: 0.2, timeHorizon: 0.0, socialDensity: 0.4, riskTolerance: -0.2, cognitiveStyle: -0.2, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.7, geographicFlex: 0.0 },
  'clinical-laboratory-technician': { autonomy: 0.1, timeHorizon: 0.2, socialDensity: -0.2, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.7, geographicFlex: 0.0 },
  'medical-laboratory-technician':  { autonomy: 0.1, timeHorizon: 0.2, socialDensity: -0.2, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.7, geographicFlex: 0.0 },
  'histotechnician':                { autonomy: 0.2, timeHorizon: 0.3, socialDensity: -0.4, riskTolerance: -0.2, cognitiveStyle: 0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.7, geographicFlex: -0.1 },
  'cytotechnologist':               { autonomy: 0.3, timeHorizon: 0.4, socialDensity: -0.4, riskTolerance: -0.1, cognitiveStyle: 0.3, incomeWeight: 0.6, statusWeight: 0.3, meaningWeight: 0.8, geographicFlex: 0.0 },
  'laboratory-associate-i':         { autonomy: 0.0, timeHorizon: 0.3, socialDensity: -0.1, riskTolerance: -0.2, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.6, geographicFlex: 0.0 },
  'research-associate-i':           { autonomy: 0.3, timeHorizon: 0.6, socialDensity: -0.1, riskTolerance: 0.1, cognitiveStyle: 0.6, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.7, geographicFlex: 0.1 },
  'clinical-research-coordinator':  { autonomy: 0.2, timeHorizon: 0.5, socialDensity: 0.3, riskTolerance: 0.0, cognitiveStyle: 0.3, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.8, geographicFlex: 0.1 },
  'clinical-research-associate':    { autonomy: 0.3, timeHorizon: 0.5, socialDensity: 0.2, riskTolerance: 0.1, cognitiveStyle: 0.4, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.8, geographicFlex: 0.2 },
  'clinical-data-coordinator':      { autonomy: 0.1, timeHorizon: 0.4, socialDensity: 0.1, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.7, geographicFlex: 0.2 },
  'bioinformatics-analyst':         { autonomy: 0.4, timeHorizon: 0.6, socialDensity: -0.3, riskTolerance: 0.2, cognitiveStyle: 0.7, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.7, geographicFlex: 0.4 },
  'biostatistician-i':              { autonomy: 0.3, timeHorizon: 0.5, socialDensity: -0.3, riskTolerance: 0.0, cognitiveStyle: 0.6, incomeWeight: 0.6, statusWeight: 0.4, meaningWeight: 0.7, geographicFlex: 0.3 },
  'epidemiology-associate':         { autonomy: 0.3, timeHorizon: 0.6, socialDensity: 0.1, riskTolerance: 0.0, cognitiveStyle: 0.5, incomeWeight: 0.5, statusWeight: 0.4, meaningWeight: 0.8, geographicFlex: 0.2 },
  'public-health-analyst':          { autonomy: 0.2, timeHorizon: 0.5, socialDensity: 0.3, riskTolerance: 0.0, cognitiveStyle: 0.4, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.9, geographicFlex: 0.2 },
  'health-policy-analyst':          { autonomy: 0.3, timeHorizon: 0.6, socialDensity: 0.2, riskTolerance: 0.0, cognitiveStyle: 0.5, incomeWeight: 0.5, statusWeight: 0.4, meaningWeight: 0.9, geographicFlex: 0.2 },
  'health-educator':                { autonomy: 0.3, timeHorizon: 0.3, socialDensity: 0.6, riskTolerance: -0.1, cognitiveStyle: 0.2, incomeWeight: 0.4, statusWeight: 0.2, meaningWeight: 0.9, geographicFlex: 0.1 },
  'community-health-worker':        { autonomy: 0.2, timeHorizon: 0.2, socialDensity: 0.7, riskTolerance: 0.0, cognitiveStyle: 0.0, incomeWeight: 0.3, statusWeight: 0.1, meaningWeight: 0.9, geographicFlex: -0.2 },
  'environmental-health-specialist': { autonomy: 0.3, timeHorizon: 0.4, socialDensity: 0.2, riskTolerance: 0.0, cognitiveStyle: 0.3, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.8, geographicFlex: 0.1 },
  'healthcare-quality-associate':   { autonomy: 0.1, timeHorizon: 0.3, socialDensity: 0.2, riskTolerance: -0.2, cognitiveStyle: 0.2, incomeWeight: 0.5, statusWeight: 0.3, meaningWeight: 0.7, geographicFlex: 0.1 },
  'medical-records-technician':     { autonomy: -0.1, timeHorizon: 0.0, socialDensity: 0.0, riskTolerance: -0.4, cognitiveStyle: -0.3, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.5, geographicFlex: 0.1 },
  'health-information-technician':  { autonomy: 0.0, timeHorizon: 0.1, socialDensity: 0.0, riskTolerance: -0.3, cognitiveStyle: -0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.5, geographicFlex: 0.2 },
  'medical-coder':                  { autonomy: 0.1, timeHorizon: 0.0, socialDensity: -0.2, riskTolerance: -0.4, cognitiveStyle: -0.1, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.5, geographicFlex: 0.4 },
  'patient-care-coordinator':       { autonomy: 0.0, timeHorizon: 0.1, socialDensity: 0.6, riskTolerance: -0.1, cognitiveStyle: 0.0, incomeWeight: 0.5, statusWeight: 0.2, meaningWeight: 0.8, geographicFlex: 0.0 },
  'patient-services-representative': { autonomy: -0.2, timeHorizon: -0.1, socialDensity: 0.5, riskTolerance: -0.3, cognitiveStyle: -0.3, incomeWeight: 0.4, statusWeight: 0.1, meaningWeight: 0.6, geographicFlex: 0.0 },
};

// ---------------------------------------------------------------------------
// Tag derivation from title slug
// ---------------------------------------------------------------------------

const titleTagMap: Record<string, string[]> = {
  // Tech
  'software-engineer-i': ['engineering', 'coding'],
  'associate-software-engineer': ['engineering', 'coding'],
  'junior-frontend-developer': ['engineering', 'frontend', 'coding'],
  'junior-backend-developer': ['engineering', 'backend', 'coding'],
  'junior-ui-developer': ['engineering', 'frontend', 'design'],
  'mobile-developer': ['engineering', 'mobile', 'coding'],
  'data-engineer-i': ['engineering', 'data', 'coding'],
  'data-analyst': ['data', 'analytics'],
  'associate-data-analyst': ['data', 'analytics'],
  'database-administrator-i': ['data', 'infrastructure'],
  'machine-learning-engineer-i': ['ai', 'engineering', 'research'],
  'ai-research-assistant': ['ai', 'research'],
  'cloud-engineer-i': ['infrastructure', 'cloud'],
  'cloud-operations-analyst': ['infrastructure', 'cloud', 'operations'],
  'devops-engineer-i': ['infrastructure', 'automation', 'coding'],
  'site-reliability-engineer-i': ['infrastructure', 'operations'],
  'infrastructure-engineer-i': ['infrastructure', 'engineering'],
  'platform-engineer-i': ['infrastructure', 'engineering'],
  'systems-administrator': ['infrastructure', 'operations'],
  'network-technician': ['infrastructure', 'networking'],
  'help-desk-technician': ['support', 'people-facing'],
  'it-support-specialist': ['support', 'people-facing'],
  'qa-engineer': ['quality', 'testing'],
  'qa-analyst': ['quality', 'testing'],
  'test-automation-engineer': ['quality', 'automation', 'coding'],
  'security-analyst': ['security', 'analytics'],
  'soc-analyst': ['security', 'operations'],
  'junior-penetration-tester': ['security', 'offensive'],
  'release-engineer': ['engineering', 'automation'],
  'scrum-master': ['management', 'agile', 'people-facing'],
  'junior-product-manager': ['management', 'strategy', 'people-facing'],
  'technical-writer': ['writing', 'documentation'],
  'developer-advocate': ['community', 'writing', 'people-facing'],
  'solutions-engineer': ['engineering', 'sales', 'people-facing'],
  'ux-researcher': ['research', 'design', 'people-facing'],
  'junior-ux-designer': ['design', 'creative'],
  'business-intelligence-analyst': ['data', 'analytics'],
  // Business
  'financial-analyst': ['finance', 'analytics'],
  'fpa-analyst': ['finance', 'analytics', 'planning'],
  'budget-analyst': ['finance', 'planning'],
  'revenue-analyst': ['finance', 'analytics'],
  'pricing-analyst': ['finance', 'analytics', 'strategy'],
  'investment-analyst': ['finance', 'investing'],
  'credit-analyst': ['finance', 'risk'],
  'actuarial-analyst': ['finance', 'math', 'risk'],
  'risk-analyst': ['finance', 'risk', 'analytics'],
  'tax-analyst': ['finance', 'tax', 'compliance'],
  'tax-associate': ['finance', 'tax'],
  'staff-accountant': ['finance', 'accounting'],
  'accounting-associate': ['finance', 'accounting'],
  'bookkeeper': ['finance', 'accounting'],
  'audit-associate': ['finance', 'compliance'],
  'accounts-payable-specialist': ['finance', 'accounting'],
  'payroll-coordinator': ['finance', 'hr'],
  'insurance-underwriter': ['finance', 'insurance', 'risk'],
  'claims-analyst': ['insurance', 'analytics'],
  'compliance-analyst': ['compliance', 'legal'],
  'operations-analyst': ['operations', 'analytics'],
  'supply-chain-analyst': ['operations', 'logistics'],
  'strategy-analyst': ['strategy', 'consulting'],
  'business-analyst-i': ['analytics', 'strategy'],
  'management-consultant-analyst': ['consulting', 'strategy'],
  'market-research-analyst': ['research', 'marketing', 'analytics'],
  'business-development-representative': ['sales', 'people-facing'],
  'sales-operations-analyst': ['sales', 'analytics', 'operations'],
  'commercial-appraiser': ['real-estate', 'valuation'],
  'marketing-coordinator': ['marketing', 'people-facing'],
  'digital-marketing-analyst': ['marketing', 'analytics', 'digital'],
  'content-marketing-associate': ['marketing', 'writing', 'creative'],
  'social-media-coordinator': ['marketing', 'creative', 'digital'],
  'brand-associate': ['marketing', 'creative'],
  'communications-coordinator': ['communications', 'writing', 'people-facing'],
  'hr-coordinator': ['hr', 'people-facing'],
  'people-operations-associate': ['hr', 'operations', 'people-facing'],
  'benefits-coordinator': ['hr', 'compliance'],
  'recruiting-coordinator': ['hr', 'people-facing'],
  'training-coordinator': ['hr', 'education', 'people-facing'],
  'project-coordinator': ['management', 'operations'],
  'program-associate': ['management', 'operations'],
  'client-services-coordinator': ['support', 'people-facing'],
  // Healthcare
  'registered-nurse': ['clinical', 'patient-care'],
  'licensed-practical-nurse': ['clinical', 'patient-care'],
  'certified-nursing-assistant': ['clinical', 'patient-care'],
  'nursing-aide': ['clinical', 'patient-care'],
  'medical-assistant': ['clinical', 'patient-care'],
  'pharmacy-technician': ['pharmacy', 'clinical'],
  'pharmacy-assistant': ['pharmacy', 'clinical'],
  'phlebotomy-technician': ['clinical', 'lab'],
  'radiology-technician': ['clinical', 'imaging'],
  'ekg-technician': ['clinical', 'diagnostics'],
  'surgical-technologist': ['clinical', 'surgical'],
  'sterile-processing-technician': ['clinical', 'operations'],
  'respiratory-therapist': ['clinical', 'therapy'],
  'physical-therapy-aide': ['therapy', 'rehabilitation'],
  'occupational-therapy-aide': ['therapy', 'rehabilitation'],
  'recreational-therapist': ['therapy', 'creative'],
  'speech-language-pathology-assistant': ['therapy', 'speech'],
  'dental-hygienist': ['clinical', 'dental'],
  'clinical-laboratory-technician': ['lab', 'diagnostics'],
  'medical-laboratory-technician': ['lab', 'diagnostics'],
  'histotechnician': ['lab', 'pathology'],
  'cytotechnologist': ['lab', 'pathology', 'diagnostics'],
  'laboratory-associate-i': ['lab', 'research'],
  'research-associate-i': ['research', 'science'],
  'clinical-research-coordinator': ['research', 'clinical'],
  'clinical-research-associate': ['research', 'clinical'],
  'clinical-data-coordinator': ['data', 'research'],
  'bioinformatics-analyst': ['data', 'bioinformatics', 'research'],
  'biostatistician-i': ['data', 'statistics', 'research'],
  'epidemiology-associate': ['research', 'public-health'],
  'public-health-analyst': ['public-health', 'analytics'],
  'health-policy-analyst': ['policy', 'public-health'],
  'health-educator': ['education', 'public-health', 'people-facing'],
  'community-health-worker': ['public-health', 'people-facing', 'community'],
  'environmental-health-specialist': ['public-health', 'environmental'],
  'healthcare-quality-associate': ['quality', 'compliance'],
  'medical-records-technician': ['data', 'administration'],
  'health-information-technician': ['data', 'administration'],
  'medical-coder': ['data', 'coding-medical'],
  'patient-care-coordinator': ['administration', 'patient-care', 'people-facing'],
  'patient-services-representative': ['administration', 'patient-care', 'people-facing'],
};

// ---------------------------------------------------------------------------
// Derive geographic flexibility from remote field
// ---------------------------------------------------------------------------

function deriveGeographicFlex(remote: string, baseFlex: number): number {
  if (remote === 'remote') return Math.min(1, baseFlex + 0.3);
  if (remote === 'hybrid') return baseFlex;
  // onsite
  return Math.max(-1, baseFlex - 0.2);
}

// ---------------------------------------------------------------------------
// Load all jobs from the master list
// ---------------------------------------------------------------------------

import masterListData from './job_data.json';

function loadAllJobs(): Job[] {
  const jobs: Job[] = [];
  const masterList = masterListData as Array<Record<string, unknown>>;

  for (const raw of masterList) {
    const titleSlug = extractTitleSlug(raw);
    const dims = titleDimensions[titleSlug];
    if (!dims) {
      // Unknown title — skip rather than crash
      continue;
    }

    const category = raw.category as 'tech' | 'business' | 'healthcare';
    const remote = (raw.location as { remote: string })?.remote ?? 'onsite';

    const adjustedDims: Dims = {
      ...dims,
      geographicFlex: deriveGeographicFlex(remote, dims.geographicFlex),
    };

    const baseTags = titleTagMap[titleSlug] ?? [];

    const job: Job = {
      id: raw.id as string,
      title: raw.title as string,
      category,
      company: raw.company as string,
      industry: raw.industry as string,
      location: raw.location as Job['location'],
      salary: raw.salary as Job['salary'],
      employment_type: (raw.employment_type as string) ?? 'full-time',
      posted_date: (raw.posted_date as string) ?? '',
      description: raw.description as string,
      responsibilities: raw.responsibilities as string[],
      requirements: raw.requirements as Job['requirements'],
      benefits: (raw.benefits as string[]) ?? [],
      dimensions: adjustedDims,
      tags: [category, ...baseTags],
    };

    jobs.push(job);
  }

  return jobs;
}

function extractTitleSlug(raw: Record<string, unknown>): string {
  // Derive slug from title: "Site Reliability Engineer I" → "site-reliability-engineer-i"
  const title = (raw.title as string) ?? '';
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export const jobs: Job[] = loadAllJobs();
