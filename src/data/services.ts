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
      "Pivot tables, Power Query, VLOOKUP/INDEX-MATCH, automated reporting, data cleaning and preprocessing. Transform chaotic spreadsheets into structured, reliable data architectures.",
    tools: ["Excel", "Power Query", "VBA"],
  },
  {
    icon: Database,
    title: "SQL Querying & Data Analysis",
    description:
      "Complex joins, window functions, aggregations, and stored procedures. Extract meaningful patterns from large databases and build optimized queries for recurring analysis.",
    tools: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    icon: Code2,
    title: "Python Data Analysis",
    description:
      "Data cleaning, transformation, statistical analysis, and machine learning preparation using Pandas, NumPy, and scikit-learn. Automate repetitive data pipelines.",
    tools: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboards",
    description:
      "Interactive dashboards with DAX measures, KPI cards, slicers, and drill-through reports. Turn raw data into visual stories that executives can act on immediately.",
    tools: ["Power BI", "DAX", "Power Query"],
  },
  {
    icon: TrendingUp,
    title: "Marketing & Campaign Analytics",
    description:
      "CTR, CPC, CPA, ROAS analysis. Facebook Ads performance breakdowns, cohort retention, A/B testing with Chi-square significance, and unified attribution modeling.",
    tools: ["Excel", "Python", "Power BI"],
  },
  {
    icon: PieChart,
    title: "Business Insights & KPI Reporting",
    description:
      "FP&A variance analysis, forecasting, credit risk assessment, RFM segmentation, reconciliation analysis. Moving from 'What happened?' to 'What should we do?'",
    tools: ["Full Stack", "Statistics", "Econometrics"],
  },
];
