export interface Project {
  title: string;
  category: string;
  tools: string[];
  keyFinding: string;
  description: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Facebook Ads Campaign Efficiency Analysis",
    category: "Marketing Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding:
      "Campaign 916 had the lowest CPA ($6.24) and highest conversion rate (21.24%)",
    description:
      "Evaluated ~1,143 Facebook ads across 3 campaigns using Chi-square testing (χ² = 456.94, p < 0.001) to identify the highest ROI ad sets.",
    githubUrl: "https://github.com/samadrita-mazumder",
  },
  {
    title: "FP&A Variance Analysis & Forecasting",
    category: "Financial Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding: "$1.8M actual vs $1.7M budget — +$123.8K favorable variance (~7%)",
    description:
      "Built budget vs. actuals variance models and a 3-month predictive forward forecast using Scikit-Learn linear regression on US retail data.",
  },
  {
    title: "Credit Risk Analysis & Default Detection",
    category: "Financial Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding: "~$75M in loan exposure associated with defaulted loans identified",
    description:
      "Analyzed ~32,500 credit records to isolate loan-to-income and grade risk factors driving default probabilities.",
  },
  {
    title: "RFM & Cohort Retention Analysis",
    category: "Customer Analytics",
    tools: ["Excel", "Python", "SQL", "Power BI"],
    keyFinding:
      "Champions = 45.11% of customers contributing 89.9% of total revenue",
    description:
      "Segmented global retail accounts into behavioral cohorts to distinguish high-frequency shoppers from high-margin buyers.",
    githubUrl: "https://github.com/samadrita-mazumder",
  },
  {
    title: "Order-to-Payment Reconciliation",
    category: "Financial Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding: "99% match rate but $3.27K in accumulated absolute variance",
    description:
      "Audited ~100,000 transaction records to pinpoint unlinked payment items and revenue leakage.",
  },
];
