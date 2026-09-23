import {
  Table2,
  Database,
  Code2,
  BarChart3,
  TrendingUp,
  PieChart,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
}

export const services: Service[] = [
  {
    icon: Table2,
    title: "Excel Analysis & Automation",
    description:
      "Automated workbooks, Power Query pipelines, and formulas to eliminate repetitive manual spreadsheet hours.",
    tools: ["Excel", "Power Query", "VBA"],
  },
  {
    icon: Database,
    title: "SQL Querying & Data Analysis",
    description:
      "Optimized queries, window functions, and complex joins to extract deep insights from relational databases.",
    tools: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    icon: Code2,
    title: "Python Data Analysis",
    description:
      "Statistical modeling, dataset cleaning, and exploratory data analysis using Pandas, NumPy, and Scikit-Learn.",
    tools: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboards",
    description:
      "Interactive executive dashboards with custom DAX measures, automated refreshes, and drill-through KPIs.",
    tools: ["Power BI", "DAX", "Power Query"],
  },
  {
    icon: TrendingUp,
    title: "Marketing & Ad Analytics",
    description:
      "CPA, CPC, ROAS, and multi-channel attribution to identify your most profitable marketing campaigns.",
    tools: ["Excel", "Python", "Power BI"],
  },
  {
    icon: PieChart,
    title: "Business & Financial Insights",
    description:
      "FP&A variance analysis, forward forecasting, and customer cohort segmentation for strategic decision-making.",
    tools: ["Full Stack", "Statistics", "Econometrics"],
  },
];
