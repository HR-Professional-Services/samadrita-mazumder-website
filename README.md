# Samadrita Mazumder — Premium Data Analytics Portfolio Website

Professional, high-converting portfolio and thought leadership website for **Samadrita Mazumder**, Data Analyst (M.Sc. Economics, University of Calcutta).

- **Production URL**: [https://samadrita-mazumder-website.ranam.workers.dev](https://samadrita-mazumder-website.ranam.workers.dev)
- **GitHub Repository**: [https://github.com/HR-Professional-Services/samadrita-mazumder-website](https://github.com/HR-Professional-Services/samadrita-mazumder-website)
- **Fiverr Service**: [https://www.fiverr.com/s/BbBA3zz](https://www.fiverr.com/s/BbBA3zz)
- **LinkedIn Profile**: [https://www.linkedin.com/in/samadrita-mazumder-264783304/](https://www.linkedin.com/in/samadrita-mazumder-264783304/)

---

## Tech Stack & Architecture

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Tokens
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Hosting & Edge**: Cloudflare Workers with Static Assets (Global Edge Network)
- **CI/CD**: GitHub Actions auto-deploy on every push to `main`

---

## Key Features

1. **Brand & Visual Design**:
   - Clean white background (`#FFFFFF`) with alternating soft slate cards (`#F8FAFC`).
   - Deep Trust Navy (`#1E3A5F`) and Electric Blue (`#3B82F6`) gradients.
   - Professional regenerated studio headshot of Samadrita with verified analyst badges.
   - 3D Isometric Analytics Dashboard mockup (`/hero-dashboard.jpg`).
   - Smooth SVG wave section dividers and backdrop blur headers.

2. **12 Complete Sections**:
   - **Navbar**: Sticky glassmorphic bar with fast anchor navigation and mobile overlay.
   - **Hero**: Spring-staggered headline, trust pills, dual action CTAs, and 3D dashboard illustration with analyst headshot.
   - **Problems ("What I Help With")**: 6 operational client bottleneck cards.
   - **Services**: 6 data analytics offerings with technology pills and direct booking links.
   - **Featured Projects**: 5 authenticated case studies from LinkedIn posts with quantitative findings.
   - **Blogs**: 6 in-depth analytical essays with interactive modal reader and syntax-highlighted code.
   - **Process**: 6-step progression from discovery to executive recommendations.
   - **Tech Stack**: Navy-gradient showcase of tools (Excel, SQL, Python, Pandas, NumPy, Power BI, Econometrics).
   - **About**: Calcutta University & Serampore College education, McKinsey Forward credentials, and skills cloud.
   - **Fiverr CTA**: High-converting banner highlighting the starting price ($15) with direct booking links.
   - **Contact**: Interactive lead intake form with service selector.
   - **Footer**: Deep navy section with ghost wordmark, quick navigation, and social links.

3. **6 Thought Leadership Blogs**:
   - *Facebook Ads Efficiency: Why High CTR Often Masks Bleeding Ad Budgets* (Chi-Square Analysis)
   - *Modern FP&A: How Predictive Linear Models Replace Broken Static Budgets*
   - *De-Risking Lending Portfolios: What 32,500 Loan Records Teach Us About Default*
   - *The RFM Loyalty Myth: Why High-Frequency Shoppers May Be Draining Your Margin*
   - *The 99% Fallacy: Uncovering $3.2K in Hidden Leaks Across 100,000 E-Commerce Orders*
   - *Why an Economics Background Gives Data Analysts an Unfair Advantage*

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/HR-Professional-Services/samadrita-mazumder-website.git
cd samadrita-mazumder-website

# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build for production
npm run build

# Deploy directly to Cloudflare Workers
npx wrangler deploy
```

---

## Continuous Deployment (CI/CD)

Every push to the `main` branch automatically triggers `.github/workflows/deploy.yml`:
1. Installs dependencies and builds the project (`npm run build`).
2. Deploys the static assets directly to Cloudflare Workers via `wrangler-action`.
