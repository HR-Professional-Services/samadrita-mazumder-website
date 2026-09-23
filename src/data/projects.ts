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
      "Analyzed ~1,143 Facebook ads across 3 campaigns to determine if the highest-converting campaign is necessarily the most efficient. Used Chi-square testing with Bonferroni correction to validate statistically significant associations between campaign and conversion outcome (χ² = 456.94, p < 0.001).",
    githubUrl: "https://github.com/samadrita-mazumder",
  },
  {
    title: "FP&A Variance Analysis & Forecasting",
    category: "Financial Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding: "$1.8M actual vs $1.7M budget — +$123.8K favorable variance (~7%)",
    description:
      "Built an end-to-end FP&A Actuals vs. Budget Variance Analysis using a US Superstore dataset. Constructed a defensible budget baseline (prior-year × 1.08 growth target) and built a 3-month forward forecast using scikit-learn LinearRegression.",
  },
  {
    title: "Credit Risk Analysis",
    category: "Financial Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding: "~$75M in loan exposure associated with defaulted loans identified",
    description:
      "Explored ~32,500 loan records to understand which borrower and loan characteristics are most associated with default. Grade F & G loans showed substantially higher default rates, and loan-to-income ratio emerged as an important risk signal.",
  },
  {
    title: "RFM & Cohort Retention Analysis",
    category: "Customer Analytics",
    tools: ["Excel", "Python", "SQL", "Power BI"],
    keyFinding:
      "Champions = 45.11% of customers contributing 89.9% of total revenue",
    description:
      "Combined RFM segmentation and cohort retention analysis on a global Online Retail dataset. Revealed that Loyal Customers had the lowest monetary value despite high frequency — highlighting the distinction between buying frequently and generating high value.",
    githubUrl: "https://github.com/samadrita-mazumder",
  },
  {
    title: "Order-to-Payment Reconciliation",
    category: "Financial Analytics",
    tools: ["Excel", "Python", "MySQL", "Power BI"],
    keyFinding: "99% match rate but $3.27K in accumulated absolute variance",
    description:
      "Reconciled ~100,000 e-commerce orders from the Brazilian Olist dataset. Found 775 payment records with no matching order items, and highlighted that a 99% match rate doesn't mean there is nothing to worry about.",
  },
];
