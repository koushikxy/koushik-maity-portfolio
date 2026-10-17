import { SiMysql, SiPostgresql, SiPython, SiPandas, SiNumpy, SiJupyter, SiPowerbi, SiMicrosoftexcel, SiReact, SiJavascript, SiTailwindcss, SiGit, SiGithub, SiJira, SiFigma } from 'react-icons/si'

import upiDashboard from './projects_img/upi-dashboard.webp'
import groceryReorder from './projects_img/grocery-reorder.webp'
import flightFares from './projects_img/flight-fares.webp'
import cardPayments from './projects_img/card-payments-excel.webp'
import heroCycles from './projects_img/hero-cycles.webp'
import apnafashion from './projects_img/apnafashion.webp'
import messagingApp from './projects_img/messaging-app.webp'
import crowdfunding from './projects_img/crowdfunding.webp'
import portfolio from './projects_img/portfolio.webp'
import googleCert from './certificate/google-data-analytics.webp'
import reactCert from './certificate/react.webp'
import jsCert from './certificate/javascript.webp'
import sqlCert from './certificate/mysql.webp'
import cssCert from './certificate/css.webp'
import penToPixel from './certificate/pen-to-pixel.webp'

export const email = 'ksmaity21@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/ksmaity/'
export const github = 'https://github.com/koushikxy'
export const resume = '/Koushik_Maity_Data_Analyst_CV.pdf'

export const dataProjects = [
  {
    title: 'UPI Payments Dashboard',
    stat: '78%',
    statLabel: 'of UPI transactions go through PhonePe and Google Pay',
    description: 'Power BI dashboard on 76 months of NPCI data. Market concentration is the lowest it has been since 2020 as newer apps like Navi grow.',
    tools: ['Power BI', 'DAX', 'Power Query'],
    image: upiDashboard, size: [900, 516],
    github: 'https://github.com/koushikxy/upi-payments-dashboard'
  },
  {
    title: 'Grocery Reorder Analysis',
    stat: '59%',
    statLabel: 'of items bought on Instacart are repeat purchases',
    description: 'SQL analysis of 3.4 million orders in MySQL. 12% of customers place 30% of orders, and some products are bought together up to 18x more often than chance.',
    tools: ['MySQL', 'CTEs', 'Window Functions'],
    image: groceryReorder, size: [880, 462],
    github: 'https://github.com/koushikxy/grocery-reorder-analysis'
  },
  {
    title: 'Flight Fare Analysis',
    stat: '1.7x',
    statLabel: 'higher fares when you book within 15 days of departure',
    description: 'Cleaned and analysed 300k domestic flight fares. The airline you pick changes the price by up to 45% on the same route.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    image: flightFares, size: [900, 458],
    github: 'https://github.com/koushikxy/flight-price-analysis'
  },
  {
    title: 'Card Payments Dashboard',
    stat: '+16.5%',
    statLabel: 'growth in UPI QR codes in a year, while card machines fell 14.7%',
    description: 'Excel dashboard on RBI bank-wise card data. Debit cards are now mostly used to withdraw cash.',
    tools: ['Excel', 'Power Query', 'XLOOKUP', 'Pivot Tables'],
    image: cardPayments, size: [900, 589],
    github: 'https://github.com/koushikxy/card-payments-excel-dashboard'
  }
]

export const otherProjects = [
  {
    title: 'Hero Cycles Pricing Tool',
    description: 'Pick parts and a date, get the total price split by component',
    tools: 'Python, FastAPI, JavaScript',
    image: heroCycles, size: [900, 746],
    github: 'https://github.com/koushikxy/hero-cycles-pricing'
  },
  {
    title: 'ApnaFashion.in',
    description: 'E-commerce frontend for a streetwear brand, designed in Figma',
    tools: 'React, Tailwind CSS',
    image: apnafashion, size: [900, 459],
    github: 'https://github.com/koushikxy/apnafashion.in',
    live: 'https://apnafashion.netlify.app'
  },
  {
    title: 'Messaging App',
    description: 'Team capstone. Real-time chat with rooms, voice notes and media',
    tools: 'Next.js, Firebase',
    image: messagingApp, size: [900, 520],
    github: 'https://github.com/koushikxy/Messaging_app'
  },
  {
    title: 'Milestone Crowdfunding',
    description: 'Team project. Funds are released one milestone at a time, with refunds if the goal is missed',
    tools: 'Solidity, Ethereum',
    image: crowdfunding, size: [900, 520],
    github: 'https://github.com/koushikxy/Milestone-Based-Crowdfunding-using-solidity'
  },
  {
    title: 'This portfolio',
    description: 'The site you are on, with a light and dark mode',
    tools: 'React, Tailwind CSS',
    image: portfolio, size: [900, 457],
    github: 'https://github.com/koushikxy/koushik-maity-portfolio'
  }
]

export const stats = [
  [34, 'M', 'rows of data in my biggest project'],
  [4, '', 'data projects built end to end'],
  [200, '+', 'AI responses reviewed every week at Turing'],
  [92, '%', 'agreement with senior reviewers']
]

export const experience = [
  {
    role: 'Business Analyst (Freelance)',
    org: 'Turing',
    dates: 'Mar 2026 - Aug 2026',
    bullets: [
      'Evaluated 200+ Gemini responses and prompts every week against quality criteria, with 92% agreement with senior reviewers.',
      'Curated and validated 40+ data samples a week, checking for inconsistencies, exceptions and recurring patterns.',
      'Tracked task-level metrics and quality trends and reported what I found to the team.'
    ]
  },
  {
    role: 'Web Developer Intern',
    org: 'Distil Ventures Limited',
    dates: 'Apr 2024 - Jul 2024',
    bullets: [
      'Led a team of 5 interns that built and delivered 6 client websites in 3 months.',
      'Found and fixed 60+ layout and responsiveness issues across those sites.'
    ]
  },
  {
    role: 'B.Tech, Computer Science and Engineering (Hons.)',
    org: 'XIM University, Bhubaneswar',
    dates: 'Aug 2021 - Apr 2025',
    bullets: []
  }
]

export const skills = [
  { group: 'BI and reporting', note: 'Used for the UPI and card payments dashboards.', wide: true, items: [['Power BI', SiPowerbi], ['DAX'], ['Power Query'], ['Excel', SiMicrosoftexcel], ['Pivot Tables'], ['Data Modeling']] },
  { group: 'SQL', note: 'Used for the 3.4M-order Instacart analysis.', items: [['MySQL', SiMysql], ['PostgreSQL', SiPostgresql], ['CTEs'], ['Window Functions'], ['Joins']] },
  { group: 'Python', note: 'Used for the 300k flight fares analysis.', items: [['Python', SiPython], ['Pandas', SiPandas], ['NumPy', SiNumpy], ['Matplotlib'], ['Seaborn'], ['Jupyter', SiJupyter]] },
  { group: 'Analysis', note: 'Part of every project, from cleaning the raw files to the final recommendations.', wide: true, items: [['Data Cleaning'], ['Data Validation'], ['EDA'], ['Statistics'], ['KPI Tracking']] },
  { group: 'Web', note: 'Built this site, and client sites during my internship.', items: [['React', SiReact], ['JavaScript', SiJavascript], ['Tailwind CSS', SiTailwindcss], ['HTML and CSS']] },
  { group: 'Tools', note: 'Version control for every project, Jira for tasks.', wide: true, items: [['Git', SiGit], ['GitHub', SiGithub], ['Jira', SiJira], ['Figma', SiFigma]] }
]

export const featuredCert = {
  title: 'Google Data Analytics Professional Certificate',
  issuer: 'Google, on Coursera',
  year: '2025',
  image: googleCert, size: [1200, 927],
  link: 'https://coursera.org/share/5d84b1c7f96be454d508f13c20306564'
}

export const certs = [
  { title: 'Data Analytics with Python', issuer: 'NPTEL', year: '2024' },
  { title: 'React JS', issuer: 'Infosys', image: reactCert, size: [1200, 849] },
  { title: 'JavaScript', issuer: 'Udemy', image: jsCert, size: [1200, 892] },
  { title: 'MySQL', issuer: 'Udemy', image: sqlCert, size: [1200, 892] },
  { title: 'CSS', issuer: 'HackerRank', image: cssCert, size: [1200, 915] },
  { title: 'Pen To Pixel', issuer: 'AI/ML and IoT event', image: penToPixel, size: [1200, 849] }
]
