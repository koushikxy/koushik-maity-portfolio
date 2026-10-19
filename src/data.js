import { SiMysql, SiPython, SiPandas, SiNumpy, SiJupyter, SiPowerbi, SiMicrosoftexcel, SiReact, SiTailwindcss, SiGithub, SiFigma, SiFastapi, SiScipy } from 'react-icons/si'

import upiOverview from './work/upi-overview.webp'
import upiShare from './work/upi-market-share.webp'
import upiChallengers from './work/upi-challengers.webp'
import flightWindow from './work/flight-booking-window.webp'
import flightAirlines from './work/flight-airlines.webp'
import cardDashboard from './work/card-dashboard.webp'
import groceryReport1 from './work/grocery-report-1.webp'
import groceryReport2 from './work/grocery-report-2.webp'
import flightReport1 from './work/flight-report-1.webp'
import flightReport2 from './work/flight-report-2.webp'
import turingLogo from './img/logos/turing.svg'
import distilLogo from './img/logos/distil.webp'
import ximLogo from './img/logos/xim.webp'
import groceryReorder from './projects_img/grocery-reorder.webp'
import heroCycles from './projects_img/hero-cycles.webp'
import apnafashion from './projects_img/apnafashion.webp'
import messagingApp from './projects_img/messaging-app.webp'
import crowdfunding from './projects_img/crowdfunding.webp'
import portfolio from './projects_img/portfolio.webp'
import pixential from './projects_img/pixential.webp'
import googleCert from './certificate/google-data-analytics.webp'
import reactCert from './certificate/react.webp'
import jsCert from './certificate/javascript.webp'
import sqlCert from './certificate/mysql.webp'
import cssCert from './certificate/css.webp'

export const email = 'ksmaity21@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/ksmaity/'
export const github = 'https://github.com/koushikxy'
export const resume = '/resume'

const repo = name => `https://github.com/koushikxy/${name}`
const file = (name, path) => `${repo(name)}/blob/main/${path}`

export const projects = [
  {
    slug: 'upi-payments-dashboard',
    short: ['Who handles most UPI payments, and is that changing?', 'PhonePe and Google Pay still handle 78% of transactions, but their grip is the weakest since 2020 as newer apps like Navi grow.', 'A new payments app can still win share, and banks reach users mostly through third-party apps.'],
    title: 'UPI Payments Dashboard',
    question: "Who owns India's payment market?",
    type: 'Power BI dashboard',
    stat: '78%',
    statLabel: 'of UPI transactions go through PhonePe and Google Pay',
    tools: ['Power BI', 'DAX', 'Power Query'],
    data: 'NPCI monthly app-wise statistics, June 2020 to September 2026 (76 months, about 140 apps)',
    cover: upiOverview,
    size: [1400, 803],
    intro: "UPI handles more than 20 billion payments a month now, and most of them go through two apps. I wanted to see how that happened and whether it's changing, so I built a Power BI dashboard from NPCI's official monthly app-wise statistics.",
    line: true,
    shots: [[upiOverview, [1400, 803], 'Dashboard page 1: UPI at a glance'], [upiShare, [1400, 803], 'Dashboard page 2: who owns UPI'], [upiChallengers, [1400, 803], "Dashboard page 3: Paytm's fall and the new challengers"]],
    numbers: [['18x', 'growth in monthly UPI transactions since June 2020'], ['-37%', 'drop in the average payment, from ₹1,958 to ₹1,225'], ['3,211', 'market concentration (HHI), the lowest in the whole period']],
    findings: [
      'Monthly UPI transactions grew about 18x, from 1.3 billion in June 2020 to 23.9 billion in September 2026. Volume in September 2026 was 24% higher than a year earlier.',
      'The average payment fell from ₹1,958 to ₹1,225. UPI has moved from occasional transfers to everyday small payments.',
      'PhonePe and Google Pay have handled 77-87% of all UPI transactions every month since 2020. In September 2026 PhonePe had 45.6% of volume and Google Pay 32.2%.',
      'Their combined share peaked at 86.8% in May 2024, right after the RBI restricted Paytm Payments Bank. Paytm went from 12.7% of volume in January 2024 to 7.0% by December.',
      'Since then the market has been opening up again. Navi went from almost nothing in mid-2024 to 4.8% of volume, and super.money to 1.7%.',
      "Banks' own apps carry only about 3% of UPI volume. Almost everything goes through third-party apps."
    ],
    recommendations: [
      'For a new payments app, the window is open. The top two are back to their early-2021 share and concentration is the lowest on record. Navi went from almost nothing to 4.8% in about two years.',
      'Build for small, everyday payments. The average payment fell 37% to ₹1,225, so speed and reliability on small amounts matter more than features for big transfers.',
      "Banks should power third-party apps rather than push their own. Bank apps carry only about 3% of UPI volume.",
      'Plan for regulatory risk. Paytm lost nearly half its share within a year of the RBI action, so an app that depends on one partner bank needs a backup.'
    ],
    limits: [
      'NPCI publishes app-level totals only, so there is nothing on individual users, merchants or cities.',
      'The value of PhonePe and Google Pay payments is missing for February and March 2022 in the source, so value measures are blank for those months.',
      "NPCI's download links for March, May and June 2026 are broken, so I took those months from the table on NPCI's website."
    ],
    gallery: [[upiShare, [1800, 1032], 'PhonePe and Google Pay share of UPI volume over time'], [upiChallengers, [1800, 1032], 'Newer apps like Navi and super.money taking share']],
    process: [
      'Two different file layouts across the 76 months, so the Power Query function reads the total volume and value from the last two columns.',
      'Numbers stored as text in Indian format (12,03,787.91) in 12 months, and "-" used for zero.',
      'January 2022 totals for PhonePe and Google Pay were literally ######## in the source, so I rebuilt them from the breakdown columns.',
      "App names were spelled 302 different ways. I mapped them to 141 apps and marked each as a bank or third-party app.",
      'Measures in DAX: volume share, top 2 share, HHI, year-on-year change and average ticket size.'
    ],
    links: [['GitHub repo', repo('upi-payments-dashboard')], ['Dashboard (PDF)', file('upi-payments-dashboard', 'upi_dashboard.pdf')], ['Write-up (PDF)', file('upi-payments-dashboard', 'upi_report.pdf')]]
  },
  {
    slug: 'grocery-reorder-analysis',
    short: ['What do grocery customers buy again, and how often do they come back?', '59% of items are repeat buys, most people order weekly or fortnightly, and 12% of customers place 30% of orders.', 'A grocery app grows most by making reorders easy and nudging fortnightly shoppers to order weekly.'],
    title: 'Grocery Reorder Analysis',
    question: 'What makes grocery customers reorder?',
    type: 'SQL analysis',
    stat: '59%',
    statLabel: 'of items bought on Instacart are repeat purchases',
    tools: ['MySQL', 'CTEs', 'Window Functions'],
    data: 'Instacart Market Basket dataset: 3.4 million orders, 33.8 million order lines, 206k customers',
    cover: groceryReorder,
    shots: [[groceryReorder, [880, 462], 'Customers and orders by shopper type'], [groceryReport1, [1082, 1400], 'Write-up, page 1'], [groceryReport2, [1082, 1400], 'Write-up, page 2']],
    size: [880, 462],
    intro: 'Online grocery apps like Blinkit, Zepto and Instamart live or die on repeat orders, so I wanted to see what repeat buying looks like at scale. I loaded the Instacart dataset into MySQL and answered a set of questions with SQL: when people order, how often they come back, what they reorder, and what they buy together.',
    numbers: [['59%', 'of everything people buy is something they bought before'], ['12%', 'of customers place 30% of all orders'], ['17.9x', 'lift for the most common product pair']],
    findings: [
      'Most customers are on a weekly or fortnightly routine. The most common gap between orders is exactly 7 days.',
      '790 products (1.6% of the 49,685 that sold) account for half of all items ordered.',
      'Produce and dairy are the habit categories, reordered about two-thirds of the time. Pantry and personal care have the lowest reorder rates.',
      'Items added to the cart first are reorders 68% of the time. By the 20th item it drops to 46%.',
      'Organic items get reordered more: 63.5% vs 56.9% for non-organic.',
      'Sparkling water flavours and salsa ingredients (jalapeño, cilantro, limes) keep showing up in the same orders.'
    ],
    charts: [
      { title: 'Share of orders by shopper type', unit: '%', note: 'Weekly shoppers are only 12% of customers but place 30% of orders.', rows: [['Weekly', 29.6], ['Fortnightly', 41.6], ['Every 3 weeks', 19.9], ['Monthly or less', 8.8]] },
      { title: 'Reorder rate by department', unit: '%', note: 'Fresh food and dairy are bought out of habit. Pantry items are stocked up on, not reordered every week.', rows: [['Dairy & eggs', 67], ['Produce', 65], ['Beverages', 65], ['Snacks', 57], ['Frozen', 54], ['Pantry', 35]] }
    ],
    recommendations: [
      'Focus on the fortnightly and 3-week shoppers. They are 65% of customers, and moving some to a weekly routine is worth more than chasing the monthly group.',
      'Build the home screen around reorders. Six in ten items are repeats, and the first items in the cart are the most predictable.',
      'Bundle the obvious pairs: sparkling water variety packs, a salsa kit, a stir-fry kit.',
      'Keep stock tight on the ~800 products that make up half of all volume.'
    ],
    limits: [
      'Instacart only included customers with 4 to 100 orders, so one-time buyers are missing and the real reorder rate would be lower.',
      'There are no prices, so this is about volume, not revenue.',
      'The data is from 2017 and US-based, so the patterns will not map exactly onto Indian quick commerce.'
    ],
    process: [
      'products.csv escapes quotes in an unusual way, which made MySQL silently drop 333 products on the first load. Fixed with ESCAPED BY and a REPLACE.',
      'Joining 33.8M order lines for every question took minutes per query, so I aggregate once into summary tables. The whole file runs in about 13 minutes instead of 30 for just six queries.',
      'CTEs, ROW_NUMBER, running SUM() OVER for cumulative share, self-joins for product pairs and CASE for customer segments.'
    ],
    links: [['GitHub repo', repo('grocery-reorder-analysis')], ['SQL queries', file('grocery-reorder-analysis', 'analysis.sql')], ['Write-up (PDF)', file('grocery-reorder-analysis', 'grocery_reorder_report.pdf')]]
  },
  {
    slug: 'flight-fare-analysis',
    short: ['What actually changes the price of a domestic flight?', 'When you book matters most: fares are 1.7x inside 15 days and 2.4x in the last 3 days. The airline you pick matters almost as much.', 'Book 16+ days ahead and compare airlines first. Weekends and early-morning flights matter much less.'],
    title: 'Flight Fare Analysis',
    question: 'When should you book a flight in India?',
    type: 'Python analysis',
    stat: '1.7x',
    statLabel: 'higher fares when you book within 15 days of departure',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    data: '300k fares between Delhi, Mumbai, Bangalore, Kolkata, Hyderabad and Chennai, scraped from EaseMyTrip (Feb to Mar 2022)',
    cover: flightWindow,
    shots: [[flightWindow, [937, 477], 'Fares by days before departure'], [flightAirlines, [775, 431], 'Fares by airline'], [flightReport1, [1082, 1400], 'Write-up, page 1'], [flightReport2, [1082, 1400], 'Write-up, page 2']],
    size: [937, 477],
    intro: 'I kept hearing different advice about booking flights: book early, avoid weekends, take the 5am flight. So I took about 300k real fares between India\'s six biggest metros and checked what actually moves the price.',
    numbers: [['2.4x', 'the normal fare when you book in the last 3 days'], ['40%', 'below the route median on AirAsia'], ['9x', 'business class compared with economy']],
    findings: [
      'Booking 16+ days ahead gets you roughly the normal fare. Inside 15 days, fares jump to about 1.7x, and in the last 3 days to about 2.4x.',
      'The airline matters almost as much as timing. On the same route, AirAsia is about 40% below the median fare and IndiGo 18% below, while Vistara is 11% above.',
      'Non-stop flights were cheaper than connecting ones: about 38% below the route median, while 2+ stops were 44% above.',
      'Weekend flights cost about 5% more, even when booked early.',
      'Departure time barely matters. Pre-5am flights are 18% cheaper, but they are under 2% of all flights.'
    ],
    charts: [
      { title: 'Fare compared with the normal fare for the route, by when you book', unit: 'x', digits: 1, rows: [['16+ days ahead', 1.0], ['Within 15 days', 1.7], ['Last 3 days', 2.4]], note: '16+ days ahead is roughly the normal fare for the route.' },
      { title: 'Fare compared with the route median, by airline', unit: '%', note: 'Same routes, different airlines: AirAsia is about half the price of Vistara.', rows: [['AirAsia', -40], ['IndiGo', -18], ['Vistara', 11]] }
    ],
    gallery: [[flightAirlines, [775, 431], 'Fare compared with the route median, by airline']],
    recommendations: [
      'Book at least 16 days ahead. Inside 15 days the fare jumps to about 1.7x the normal fare for the route.',
      'Compare airlines before worrying about dates. Picking AirAsia over Vistara on the same route saves about as much as booking early.',
      'Pick non-stop flights. They were about 38% below the route median, while 2+ stops were 44% above.',
      'For a travel app: warn users when a route is 16 days out, since that is where the price curve turns up.'
    ],
    limits: [
      'Each days-before-departure value is a different set of flights, not one flight tracked over time, so the booking curve is a snapshot rather than a price history.',
      'The data covers travel dates from 11 February to 31 March 2022 and only six metros.',
      'The market has changed since then: Go First stopped flying in 2023 and Vistara merged into Air India in 2024.'
    ],
    process: [
      'Used the raw economy and business files instead of the cleaned Kaggle file.',
      'The stops column had 37 different values with tabs, newlines and layover airports mixed in, for what is really 0, 1 or 2+ stops.',
      'Prices and durations were stored as text, and some rows were duplicates or had broken durations.',
      'Fares are compared against the median for their route, so expensive routes do not skew the results.'
    ],
    links: [['GitHub repo', repo('flight-price-analysis')], ['Notebook', file('flight-price-analysis', 'flight_price_analysis.ipynb')], ['Write-up (PDF)', file('flight-price-analysis', 'flight_fare_report.pdf')]]
  },
  {
    slug: 'card-payments-dashboard',
    short: ['What is UPI doing to cards, ATMs and card machines?', 'UPI is replacing card machines, not cards. QR codes grew 16.5% while card machines fell 14.7%, and credit cards kept growing.', 'Banks should put money into QR acceptance and credit cards, and treat debit cards as a cash card.'],
    title: 'Card Payments Dashboard',
    question: 'How does India pay with cards now?',
    type: 'Excel dashboard',
    stat: '+16.5%',
    statLabel: 'growth in UPI QR codes in a year, while card machines fell 14.7%',
    tools: ['Excel', 'Power Query', 'XLOOKUP', 'Pivot Tables'],
    data: "RBI bank-wise ATM, POS and card statistics for August 2025 and August 2026, about 64 banks",
    cover: cardDashboard,
    size: [1400, 916],
    shots: [[cardDashboard, [1400, 916], 'Excel dashboard, August 2025 vs August 2026']],
    intro: "My UPI dashboard showed UPI taking over everyday payments. I wanted to see what that is doing to cards, ATMs and card machines, so I compared the RBI's bank-wise card statistics for August 2025 and August 2026 in Excel.",
    numbers: [['6.1x', 'more money withdrawn at ATMs with debit cards than spent with them'], ['69.5%', 'of credit cards issued by just four banks'], ['+10.3%', 'growth in credit cards, to 12.4 crore']],
    findings: [
      'UPI is replacing card machines, not cards. UPI QR codes grew 16.5% while PoS machines fell 14.7% and Bharat QR codes fell 18.9%.',
      'Debit cards are now mostly a cash card. Money withdrawn at ATMs is 6.1 times what people spend with them in shops and online.',
      'Credit cards are still growing. Transactions rose 23.5% at shops and 32.2% online.',
      'HDFC Bank, SBI, ICICI Bank and Axis Bank hold 69.5% of all credit cards. HDFC customers spend the most per card, about ₹22,600 in August 2026.',
      'Paytm Payments Bank is in the August 2025 data but gone by August 2026, the same RBI action that shows up in my UPI project.'
    ],
    recommendations: [
      'Move spending on card machines to UPI QR acceptance for small shops. QR codes grew 16.5% while card machines fell 14.7%.',
      'Treat debit cards as a cash and ATM product. People withdraw 6.1 times more cash with them than they spend in shops and online.',
      'Put growth money into credit cards, especially online. Online credit card transactions rose 32.2%.',
      "Smaller banks still have room in credit cards. Small finance banks doubled their share from 1.1% to 2.0%."
    ],
    limits: [
      'Only two months are compared, so a one-off change in either month can look like a trend.',
      'Numbers are what banks report to the RBI. There is at least one error in the source: RBL Bank reports a fractional number of debit cards.',
      'The data counts cards and machines, not people, so it cannot show how many people use each.'
    ],
    gallery: [[cardDashboard, [1400, 916], 'The Excel dashboard: KPIs and 4 charts, filterable by bank type']],
    process: [
      'The RBI header is spread over 6 merged rows, so columns are named by position in Power Query.',
      'Bank type is a heading row above each group rather than a column, so it is filled down to every bank.',
      'A Banks sheet uses SORTBY, FILTER and XLOOKUP to compare the two months and find banks that dropped out.',
      'Pivots with a bank type slicer, and a dashboard sheet with SUMIFS KPIs and 4 charts. Adding a month is drop the file in and refresh.'
    ],
    charts: [
      { title: 'Change in payment infrastructure, August 2025 to August 2026', unit: '%', note: 'Shops are swapping card machines for UPI QR codes. ATMs are flat.', rows: [['UPI QR codes', 16.5], ['ATMs', 1.4], ['PoS card machines', -14.7], ['Bharat QR codes', -18.9]] },
      { title: 'Share of all credit cards, August 2026', unit: '%', digits: 1, note: 'These four banks hold 69.5% of all credit cards.', rows: [['HDFC Bank', 21.8], ['SBI', 18.5], ['ICICI Bank', 16.0], ['Axis Bank', 13.1]] }
    ],
    links: [['GitHub repo', repo('card-payments-excel-dashboard')], ['Dashboard (PDF)', file('card-payments-excel-dashboard', 'dashboard.pdf')], ['Excel workbook', file('card-payments-excel-dashboard', 'rbi_card_payments.xlsx')]]
  }
]

export const otherProjects = [
  { title: 'Pixential', description: 'Website and client portal for a web design agency, with an admin panel for leads and clients', tools: 'Next.js, Express, Prisma', image: pixential, size: [900, 520], github: repo('Pixential'), live: 'https://pixential.netlify.app' },
  { title: 'Hero Cycles Pricing Tool', description: 'Pick parts and a date, get the total price split by component', tools: 'Python, FastAPI, JavaScript', image: heroCycles, size: [900, 675], github: repo('hero-cycles-pricing'), live: 'https://hero-cycles-pricing.netlify.app' },
  { title: 'ApnaFashion.in', description: 'E-commerce frontend for a streetwear brand, designed in Figma', tools: 'React, Tailwind CSS', image: apnafashion, size: [900, 675], github: repo('apnafashion.in'), live: 'https://apnafashion.netlify.app' },
  { title: 'Messaging App', description: 'Team capstone. Real-time chat with rooms, voice notes and media', tools: 'Next.js, Firebase', image: messagingApp, size: [900, 520], github: repo('Messaging_app') },
  { title: 'Milestone Crowdfunding', description: 'Team project. Funds are released one milestone at a time', tools: 'Solidity, Ethereum', image: crowdfunding, size: [900, 520], github: repo('Milestone-Based-Crowdfunding-using-solidity') },
  { title: 'This portfolio', description: 'The site you are on', tools: 'React, GSAP, Tailwind CSS', image: portfolio, size: [900, 457], github: repo('koushik-maity-portfolio') }
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
    logo: turingLogo,
    short: 'Turing',
    span: ['2026-03', '2026-08'],
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
    logo: distilLogo,
    short: 'Distil',
    light: true,
    span: ['2024-04', '2024-07'],
    bullets: [
      'Led a team of 5 interns that built and delivered 6 client websites in 3 months.',
      'Found and fixed 60+ layout and responsiveness issues across those sites.'
    ]
  },
  {
    role: 'B.Tech, Computer Science and Engineering (Hons.)',
    org: 'XIM University, Bhubaneswar',
    dates: 'Aug 2021 - Apr 2025',
    logo: ximLogo,
    round: true,
    short: 'XIM University',
    light: true,
    span: ['2021-08', '2025-04'],
    bullets: []
  }
]


export const featuredCert = {
  title: 'Google Data Analytics Professional Certificate',
  issuer: 'Google, on Coursera',
  year: '2025',
  image: googleCert,
  size: [1200, 927],
  link: 'https://coursera.org/share/5d84b1c7f96be454d508f13c20306564'
}

export const certs = [
  { title: 'Data Analytics with Python', issuer: 'NPTEL', year: '2024' },
  { title: 'React JS', issuer: 'Infosys', image: reactCert },
  { title: 'JavaScript', issuer: 'Udemy', image: jsCert },
  { title: 'MySQL', issuer: 'Udemy', image: sqlCert },
  { title: 'CSS', issuer: 'HackerRank', image: cssCert }
]

export const pdf = '/Koushik_Maity_Data_Analyst_CV.pdf'

export const cv = {
  summary: 'Data Analyst with a B.Tech in Computer Science and hands-on experience in SQL, Python and Power BI. Built end-to-end projects on real public datasets of up to 34 million rows, covering data cleaning, analysis, dashboards and business recommendations. Most recently worked as a freelance Business Analyst at Turing, validating data samples and tracking quality metrics.',
  skills: [
    ['SQL', 'MySQL, PostgreSQL, CTEs, Window Functions, Joins, Query Optimization'],
    ['Python', 'Pandas, NumPy, Matplotlib, Seaborn, Jupyter'],
    ['BI & Reporting', 'Power BI, DAX, Power Query (ETL), Data Modeling, Data Visualization, Excel (Pivot Tables, Lookups), Dashboards, KPI Tracking'],
    ['Analysis', 'Data Cleaning, Data Validation, EDA, Statistics'],
    ['Tools', 'Git, GitHub, Jira, Agile']
  ],
  projects: [
    { name: 'UPI Payments Market Dashboard', tech: 'Power BI, DAX, Power Query', slug: 'upi-payments-dashboard', bullets: [
      'Built a 3-page Power BI dashboard on 76 months of official NPCI data covering 140+ UPI apps, combining inconsistent monthly Excel files with one Power Query function and a lookup table that maps 302 app name variants.',
      'Wrote 15 DAX measures including market share, YoY growth and HHI concentration; showed PhonePe and Google Pay at 78% of UPI transactions, with concentration at its lowest since 2020 as challengers like Navi grew to 4.8%.'
    ] },
    { name: 'Grocery Reorder Analysis', tech: 'MySQL', slug: 'grocery-reorder-analysis', bullets: [
      'Loaded 33.8M order lines (3.4M orders, 206K customers) into MySQL and analysed repeat buying with CTEs, window functions and self-joins; found 59% of items are reorders and 12% of customers place 30% of orders.',
      'Reduced runtime by pre-aggregating into summary tables (six queries took 30 min before; the full analysis now runs in 13 min), and caught 333 products silently dropped during the CSV load.',
      'Identified frequently bought-together products using lift (up to 18x) and recommended bundles and reorder reminders.'
    ] },
    { name: 'Flight Fare Analysis', tech: 'Python, Pandas', slug: 'flight-fare-analysis', bullets: [
      'Cleaned and analysed 300K+ domestic flight fares across 6 airlines and 30 routes from raw scraped data, parsing messy price, duration and stop fields.',
      'Found fares rise ~1.7x when booked within 15 days of departure and ~2.4x in the last 3 days; showed weekend flights cost ~5% more even when booked early.'
    ] }
  ],
  education: { degree: 'B.Tech in Computer Science and Engineering (Hons.), CGPA 7.06/10', org: 'XIM University, Bhubaneswar', dates: 'Aug 2021 - Apr 2025' },
  certifications: [['Google Data Analytics Professional Certificate', '2025'], ['Data Analytics with Python, NPTEL', '2024']]
}

export const tools = [
  { name: 'Power BI', Icon: SiPowerbi, used: ['UPI Payments Dashboard'] },
  { name: 'SQL / MySQL', Icon: SiMysql, used: ['Grocery Reorder Analysis'] },
  { name: 'Python', Icon: SiPython, used: ['Flight Fare Analysis', 'Hero Cycles Pricing Tool'] },
  { name: 'Excel', Icon: SiMicrosoftexcel, used: ['Card Payments Dashboard'] },
  { name: 'Pandas', Icon: SiPandas, used: ['Flight Fare Analysis'] },
  { name: 'DAX', mark: 'DAX', used: ['UPI Payments Dashboard'] },
  { name: 'Power Query', mark: 'PQ', used: ['UPI Payments Dashboard', 'Card Payments Dashboard'] },
  { name: 'Jupyter', Icon: SiJupyter, used: ['Flight Fare Analysis'] },
  { name: 'Matplotlib', mark: 'Mpl', used: ['Flight Fare Analysis'] },
  { name: 'NumPy', Icon: SiNumpy, used: ['Flight Fare Analysis'] },
  { name: 'SciPy', Icon: SiScipy, used: ['Flight Fare Analysis'] },
  { name: 'FastAPI', Icon: SiFastapi, used: ['Hero Cycles Pricing Tool'] },
  { name: 'React', Icon: SiReact, used: ['This portfolio', 'ApnaFashion.in'] },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, used: ['This portfolio', 'ApnaFashion.in'] },
  { name: 'Figma', Icon: SiFigma, used: ['ApnaFashion.in'] },
  { name: 'Git and GitHub', Icon: SiGithub, used: ['Every project'] }
]

export const alsoKnow = ['PostgreSQL', 'Seaborn', 'JavaScript', 'Jira', 'Data Modeling', 'Pivot Tables', 'XLOOKUP', 'Statistics', 'Data Validation']
