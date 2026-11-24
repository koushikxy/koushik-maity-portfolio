import { SiMysql, SiPython, SiPandas, SiNumpy, SiJupyter, SiPowerbi, SiTableau, SiMicrosoftexcel, SiReact, SiTailwindcss, SiGithub, SiFastapi } from 'react-icons/si'

import upiOverview from './work/upi-overview.webp'
import upiShare from './work/upi-market-share.webp'
import upiChallengers from './work/upi-challengers.webp'
import flightWindow from './work/flight-booking-window.webp'
import flightAirlines from './work/flight-airlines.webp'
import cardDashboard from './work/card-dashboard.webp'
import milletsOverview from './work/millets-overview.webp'
import milletsStates from './work/millets-states.webp'
import milletsMaharashtra from './work/millets-maharashtra.webp'
import milletsJowar from './work/millets-jowar.webp'
import groceryReport1 from './work/grocery-report-1.webp'
import groceryReport2 from './work/grocery-report-2.webp'
import flightReport1 from './work/flight-report-1.webp'
import flightReport2 from './work/flight-report-2.webp'
import turingLogo from './img/logos/turing.svg'
import distilLogo from './img/logos/distil.webp'
import ximLogo from './img/logos/xim.webp'
import groceryReorder from './projects_img/grocery-reorder.webp'
import heroCycles from './projects_img/hero-cycles.webp'
import portfolio from './projects_img/portfolio.webp'
import gstImg from './projects_img/gst.webp'
import airQualityImg from './projects_img/air.webp'
import outagesImg from './projects_img/outages.webp'
import epfoImg from './projects_img/epfo.webp'
import googleCert from './certificate/google-data-analytics.webp'
import sqlCert from './certificate/mysql.webp'
import gstCover from './work/gst-cover.webp'
import gstS0 from './work/gst-s0.webp'
import gstS1 from './work/gst-s1.webp'
import gstS2 from './work/gst-s2.webp'
import airCover from './work/air-cover.webp'
import airS1 from './work/air-s1.webp'
import airS2 from './work/air-s2.webp'
import airS3 from './work/air-s3.webp'
import sqlCover from './work/sql-cover.webp'
import sqlS1 from './work/sql-s1.webp'
import sqlS2 from './work/sql-s2.webp'
import sqlS3 from './work/sql-s3.webp'
import epfoCover from './work/epfo-cover.webp'

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
    numbers: [['790', 'products, 1.6% of the range, make up half of all items ordered'], ['12%', 'of customers place 30% of all orders'], ['17.9x', 'lift for the most common product pair']],
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
    charts: [
      { title: 'Change in payment infrastructure, August 2025 to August 2026', unit: '%', note: 'Shops are swapping card machines for UPI QR codes. ATMs are flat.', rows: [['UPI QR codes', 16.5], ['ATMs', 1.4], ['PoS card machines', -14.7], ['Bharat QR codes', -18.9]] },
      { title: 'Share of all credit cards, August 2026', unit: '%', digits: 1, note: 'These four banks hold 69.5% of all credit cards.', rows: [['HDFC Bank', 21.8], ['SBI', 18.5], ['ICICI Bank', 16.0], ['Axis Bank', 13.1]] }
    ],
    links: [['GitHub repo', repo('card-payments-excel-dashboard')], ['Dashboard (PDF)', file('card-payments-excel-dashboard', 'dashboard.pdf')], ['Excel workbook', file('card-payments-excel-dashboard', 'rbi_card_payments.xlsx')]]
  },
  {
    slug: 'india-millets-dashboard',
    short: ['What happened to millet farming in India over the last 25 years?', 'Millet area fell 40% between 1998-2000 and 2020-22, mostly jowar in Maharashtra and Karnataka, but production held steady because yields rose 73%.', "Most of the lost millet land is in Maharashtra and Karnataka, while Rajasthan, which already has 38% of the country's millet area, grew slightly."],
    title: 'India Millets Dashboard',
    question: "Where did India's millets go?",
    type: 'Tableau dashboard',
    stat: '-40%',
    statLabel: 'fall in millet area between 1998-2000 and 2020-22',
    tools: ['Tableau', 'Python', 'Pandas'],
    data: 'Ministry of Agriculture (DES) district crop statistics, 1997-98 to 2022-23, 743 districts and 8 cereal crops',
    cover: milletsOverview,
    size: [1188, 798],
    shots: [[milletsOverview, [1188, 798], 'Overview: millet area, output and yield, 1998-2000 vs 2020-22'], [milletsStates, [1188, 798], 'States: change in millet area by state, 1998-2000 to 2020-22']],
    intro: "2023 was the International Year of Millets, and jowar, bajra and ragi were suddenly everywhere. I wanted to know what had actually happened to millet farming in India before that, so I built a Tableau dashboard from the Ministry of Agriculture's district-level crop statistics.",
    numbers: [['-40%', 'millet area, 22.3 to 13.3 million hectares'], ['+73%', 'millet yield, 0.81 to 1.40 tonnes per hectare'], ['65%', 'of the lost millet area was in Maharashtra and Karnataka']],
    findings: [
      'Millet area (jowar, bajra, ragi and small millets) fell from 22.3 million hectares in 1998-2000 to 13.3 million in 2020-22, down 40%. Millets went from 22.5% of all cereal area to 12.2%.',
      'Production did not fall with it. Millet output went from 18.1 to 18.7 million tonnes because yield rose from 0.81 to 1.40 tonnes per hectare. Bajra production rose 81% on 19% less land.',
      'Jowar lost the most. Its area fell 58%, from 10.1 to 4.2 million hectares, and Maharashtra alone lost about 3 million hectares of jowar.',
      'Rice area grew 17%, wheat 31% and maize 58% over the same years.',
      'Maharashtra and Karnataka together lost about 6 million hectares of millet area, 65% of all the area lost. Telangana kept only 13% of its millet area.',
      "Rajasthan is the exception. Its millet area went up 4%, and it now has 38% of India's millet area, 88% of it bajra. Barmer district alone has 7%."
    ],
    recommendations: [
      'Millet programmes aimed at growing area should look at Maharashtra and Karnataka first. That is where most of the land was lost.',
      'Rajasthan did not lose millet land, so it is not where the area decline needs to be explained. Its bajra output gain came mostly from yield.',
      'Treat jowar and bajra separately. Bajra kept growing in output while jowar fell in both area and production, so one plan for all millets will miss what is happening to each crop.'
    ],
    limits: [
      'The figures are summed from district data and do not exactly match the all-India estimates DES publishes separately, so I compare changes and shares rather than quoting them as official totals.',
      'Some states stop reporting some crops (Maharashtra has no small millets figures after 2015-16), so the 70% fall in small millets is partly missing data.',
      'District boundaries changed a lot over these years, so I compare states over time, not districts.'
    ],
    gallery: [[milletsJowar, [1188, 798], 'The overview with jowar selected'], [milletsMaharashtra, [1188, 798], 'Clicking Maharashtra filters the district list']],
    links: [['GitHub repo', repo('india-millets-dashboard')], ['Tableau Public', 'https://public.tableau.com/app/profile/koushik.maity/viz/india_millets/Overview'], ['Tableau workbook', file('india-millets-dashboard', 'india_millets.twbx')]]
  }
]

export const moreProjects = [
  {
    slug: "india-gst-dashboard",
    short: ["Which states does India's GST money come from, and how fast is it growing?", "Collections roughly doubled between 2018-19 and 2025-26, but yearly growth has slowed from 26.9% to 6.4%.", "The big states' share is growing: the top 5 went from 52.2% to 55.6% of collections."],
    title: "India's GST Collections",
    question: "Which states does India's GST money come from?",
    type: "Power BI dashboard",
    stat: "+107%",
    statLabel: "growth in GST collections, 2018-19 to 2025-26",
    tools: ["Power BI", "DAX", "Power Query"],
    data: "GST portal state-wise collection files, July 2017 to September 2026, 12,849 rows",
    cover: gstCover,
    size: [1400, 788],
    shots: [[gstS0, [1400, 789], "Overview: yearly and monthly collections"], [gstS1, [1400, 789], "Trend: growth by year"], [gstS2, [1400, 789], "States: collections and growth by state"]],
    intro: "GST collections are reported every month as one big all-India number. I wanted to see which states that money comes from, whether the gap between the big states and the rest is changing, and how fast collections are still growing, so I built a Power BI dashboard from the GST portal's state-wise collection files.",
    numbers: [["₹16.32 lakh crore", "collected in 2025-26, up from ₹7.89 lakh crore in 2018-19"], ["6.4%", "growth in 2025-26, down from 26.9% in 2021-22"], ["55.6%", "of collections came from the top 5 states, up from 52.2%"]],
    findings: ["Domestic GST (CGST + SGST + IGST) collections went from ₹7.89 lakh crore in 2018-19 to ₹16.32 lakh crore in 2025-26, up 107%.", "Growth has slowed every year since the post-lockdown rebound: 26.9% in 2021-22, then 20.9%, 15.2%, 10.3% and 6.4% in 2025-26.", "November 2025 was 2.3% below November 2024, the first month below the year before since June 2021. It came soon after the rate cuts of 22 September 2025, but this data alone can't say how much of the dip is because of them.", "The top 5 states had 52.2% of the total in 2018-19 and 55.6% in 2025-26. Maharashtra alone went from 20.1% to 22.2%, and Karnataka moved past Gujarat into second place.", "Among the 15 biggest states, growth since 2018-19 ranged from +69% in Andhra Pradesh to +141% in Odisha. The split between IGST, SGST and CGST hardly moved."],
    limits: ["These are collections by the state where tax was paid, before IGST is settled between the Centre and states, so they are not each state's GST revenue. Import IGST is not split by state in these files.", "The figures are provisional and 2026-27 only runs to September. Cess is left out because newer files do not report it, so my totals are lower than the gross GST figures in the news.", "I haven't checked causes of the late-2025 dip other than the rate cuts, such as refunds or compliance changes."],
    links: [["GitHub repo", repo("india-gst-dashboard")], ["Dashboard (PDF)", file("india-gst-dashboard", "gst_dashboard.pdf")]]
  },
  {
    slug: "india-city-air-quality-python",
    short: ["Is city air in India getting cleaner, and is Delhi improving along with everyone else?", "Across 41 cities with continuous monitors, mean AQI fell 17.7% from 2019 to 2025, but Delhi fell only 6.6%.", "Part of the improvement is new monitoring stations, not cleaner air, so I report it with that limit."],
    title: "India City Air Quality",
    question: "Is city air in India getting cleaner?",
    type: "Python analysis",
    stat: "-17.7%",
    statLabel: "mean AQI across a fixed panel of 41 cities, 2019 to 2025",
    tools: ["Python", "pandas", "matplotlib"],
    data: "CPCB daily AQI bulletins, May 2015 to November 2026: 4,219 PDFs and 551,221 city-day rows",
    cover: airCover,
    size: [1399, 600],
    shots: [[airCover, [1399, 600], "Delhi's daily AQI"], [airS1, [1276, 696], "Days rated Poor or worse by year"], [airS2, [1285, 722], "AQI by month of the year"], [airS3, [1182, 1388], "Change in mean AQI by city"]],
    intro: "Every day CPCB publishes an Air Quality Index bulletin listing each Indian city with a continuous monitor. I downloaded all of them, turned the tables into city-day rows with Python, and checked whether air quality has improved since 2019 and whether Delhi improved along with everyone else.",
    numbers: [["-17.7%", "mean AQI across 41 cities, 137.7 in 2019 to 113.3 in 2025"], ["-6.6%", "for Delhi, still the worst of the 41 cities in 2025"], ["360", "Delhi's median AQI in November, against 84 in August"]],
    findings: ["The number of cities in the bulletin grew from 33 in 2016 to 289 in 2025, so the all-city average falls partly because cleaner cities join the list. For the trend I used a fixed panel of 41 cities that reported on at least 300 days in every year from 2019 to 2025.", "Leaving Delhi out, the share of days rated Poor or worse (AQI above 200) fell from 19.1% to 8.8%. Delhi had 164 such days in 2025 against 183 in 2019.", "The problem is the winter. Delhi's median AQI is 84 in August and 360 in November, and the other cities follow the same curve at a lower level.", "32 of the 41 cities had a lower average in 2025 than in 2019, but not all of that is cleaner air. The five biggest drops all went from one monitoring station to three or more in the same years. Cities that started below an AQI of 130 improved by about 8% whether or not they gained stations.", "Delhi's daily AQI moves almost exactly with Noida (correlation 0.96), Ghaziabad (0.93), Greater Noida (0.92) and Gurugram (0.91), and much less with Chennai (0.30)."],
    limits: ["AQI is an index based on the worst pollutant of the day, not a concentration, and the bulletin gives one 24-hour value per city. The city value is an average of the stations that reported, so station changes affect it.", "The trend is for 41 cities that already had monitors in 2019, mostly in the north, not all 338 cities.", "The bulletins have no weather, crop-burning or policy data, so I can't say what caused these changes."],
    links: [["GitHub repo", repo("india-city-air-quality-python")], ["Write-up (PDF)", file("india-city-air-quality-python", "air_quality_report.pdf")]]
  },
  {
    slug: "india-power-plant-outages-sql",
    short: ["How much of India's coal, lignite and nuclear capacity is out of service on a given day, and why?", "About 16% of the monitored capacity was out on an average day, and 46.5% of that was down because something broke.", "About a fifth of the idle capacity was not broken but had no schedule, no buyer or was on reserve shutdown."],
    title: "India Power Plant Outages",
    question: "Why are India's power plants out of service?",
    type: "MySQL analysis",
    stat: "40.3 GW",
    statLabel: "of coal, lignite and nuclear capacity out on an average day",
    tools: ["MySQL", "Python"],
    data: "CEA daily maintenance reports, April 2023 to March 2026: 1,093 days and 165,249 rows",
    cover: sqlCover,
    size: [1400, 760],
    shots: [[sqlCover, [1400, 760], "Database schema"], [sqlS1, [1300, 546], "Capacity out by reason"], [sqlS2, [1400, 636], "Capacity out by month"], [sqlS3, [1300, 780], "Breakdown loss by state"]],
    intro: "On any given day a large part of India's coal, lignite and nuclear capacity is not running. The Central Electricity Authority publishes a daily maintenance report listing every unit that is out and the reason. I downloaded three years of these reports, cleaned them and worked through the questions in MySQL.",
    numbers: [["46.5%", "of the capacity out was down because something broke"], ["21.9%", "was idle with no demand or no buyer"], ["7.0%", "Gujarat's breakdown loss without one plant, against 13.3% with it"]],
    findings: ["On an average day 40.3 GW was out of service, about 16% of the 254 GW of units in CEA's monitored list: 40.1 GW in 2023-24, 37.2 GW in 2024-25 and 43.6 GW in 2025-26.", "I grouped the 376 different reason texts into a few categories. Breakdowns were 46.5% of the capacity out, planned maintenance 26.8% and no demand or no buyer 21.9%.", "Most of the 2025-26 jump in breakdowns is one plant. All five Mundra UMTPP units went out on 1-3 July 2025 and stayed out to March 2026, which looks like one plant-wide shutdown. Without Mundra, breakdowns were 17.2, 16.4 and 17.9 GW a day, about the same in all three years.", "CEA moved most reserve shutdowns from its Others column into the forced-outage columns from April 2025, so the forced column can't be compared across years.", "State plants lost 9.5% of their capacity to breakdowns, private plants 7.7% and central plants 5.1%. Water wall tube leakage is the most common single breakdown, with 2,583 outages in three years."],
    limits: ["The report is a snapshot taken once a day, so a unit that trips and returns between two reports may never appear and durations are rough.", "The reason groups are my own, made with LIKE patterns, and a few edge cases could be grouped differently.", "This covers coal, lignite and nuclear units only, and plant outages are not the same as power cuts for consumers."],
    links: [["GitHub repo", repo("india-power-plant-outages-sql")], ["Write-up (PDF)", file("india-power-plant-outages-sql", "power_outages_report.pdf")]]
  },
  {
    slug: "india-epfo-payroll-excel",
    short: ["In which states are people joining formal payroll, how old are they, and how has that changed since 2018-19?", "Net additions peaked at 1.39 crore in 2022-23 and were 1.30 crore in 2024-25, and the 18-25 share fell from 67.3% to 49.1%.", "Five states account for most of the additions, and 26 of 32 states and UTs added fewer members than at the 2022-23 peak."],
    title: "EPFO Payroll by State and Age",
    question: "Who is joining India's formal payroll?",
    type: "Excel dashboard",
    stat: "49.1%",
    statLabel: "of net EPF additions in 2024-25 were aged 18 to 25, down from 67.3% in 2018-19",
    tools: ["Excel", "Power Query", "XLOOKUP", "PivotTables"],
    data: "EPFO payroll data release of September 2025: state tables from a 24-page PDF, 2,304 rows",
    cover: epfoCover,
    size: [1400, 1609],
    shots: [[epfoCover, [1400, 1609], "The Excel dashboard for a chosen state, year and age group"]],
    intro: "Every month EPFO publishes how many people joined the Employees' Provident Fund, the savings scheme that comes with most formal jobs in India. I wanted to see in which states people are joining, how old they are and how that changed from 2018-19 to 2024-25. The data only comes as a PDF, so I pulled the state tables out with Power Query and built the analysis and dashboard in Excel.",
    numbers: [["1.39 crore", "net additions at the 2022-23 peak, 1.30 crore in 2024-25"], ["58.3%", "from five states: Maharashtra, Tamil Nadu, Karnataka, Gujarat and Haryana"], ["26 of 32", "states and UTs added fewer members in 2024-25 than in 2022-23"]],
    findings: ["Net payroll here means new EPF members, minus members who left, plus members who came back. It counts EPF accounts, not jobs.", "Net additions went from 61.1 lakh in 2018-19 to a peak of 1.39 crore in 2022-23 and were 1.30 crore in 2024-25, 6.3% below the peak. The big jump was 2021-22, up 58.7% after Covid.", "The people joining are getting older. In 2018-19, 67.3% of net additions were aged 18 to 25 and by 2024-25 it was 49.1%. The group aged 26 and over grew from 19.0 lakh to 65.4 lakh and is now the bigger one.", "Maharashtra, Tamil Nadu, Karnataka, Gujarat and Haryana had 58.3% of net additions in 2024-25. Maharashtra's share fell from 25.8% to 22.1% because other states grew faster, such as Odisha at 6.4 times its 2018-19 figure.", "The age mix differs a lot by state: about 60% of 2024-25 additions in Karnataka and Bihar were aged 18 to 25, against 38.9% in Odisha and 24.6% in Jharkhand."],
    limits: ["Net payroll is not the number of new jobs. It counts EPF accounts, includes temporary workers, and EPFO revises it every month.", "The state is where the employer's EPF account is, not where the person lives or works. Four small states and UTs are not in the state tables.", "I only used the state tables. The industry tables in the same PDF show only the top 10 industries per age group and one has a wrong header, so I left them out."],
    links: [["GitHub repo", repo("india-epfo-payroll-excel")], ["Dashboard (PDF)", file("india-epfo-payroll-excel", "dashboard.pdf")], ["Excel workbook", file("india-epfo-payroll-excel", "epfo_payroll.xlsx")]]
  }
]

export const otherProjects = [
  { title: "India's GST collections by state", description: 'Power BI dashboard of state-wise GST collections, 2017 to 2026', tools: 'Power BI, DAX, Power Query', slug: "india-gst-dashboard", image: gstImg, size: [900, 507], github: repo('india-gst-dashboard') },
  { title: 'Is city air in India getting cleaner?', description: '11 years of CPCB daily AQI bulletins: most cities improved, Delhi barely moved', tools: 'Python, pandas, matplotlib', slug: "india-city-air-quality-python", image: airQualityImg, size: [900, 386], github: repo('india-city-air-quality-python') },
  { title: "Why are India's power plants out of service?", description: 'Three years of CEA daily outage reports for coal and nuclear units, in MySQL', tools: 'MySQL, Python', slug: "india-power-plant-outages-sql", image: outagesImg, size: [900, 489], github: repo('india-power-plant-outages-sql') },
  { title: "Who is joining India's formal payroll", description: 'Excel dashboard of EPFO net payroll by state and age, built from a PDF', tools: 'Excel, Power Query', slug: "india-epfo-payroll-excel", image: epfoImg, size: [900, 1034], github: repo('india-epfo-payroll-excel') },
  { title: 'Hero Cycles Pricing Tool', description: 'Pick parts and a date, get the total price split by component', tools: 'Python, FastAPI, JavaScript', image: heroCycles, size: [900, 675], github: repo('hero-cycles-pricing'), live: 'https://hero-cycles-pricing.netlify.app' },
  { title: 'This portfolio', description: 'The site you are on', tools: 'React, GSAP, Tailwind CSS', image: portfolio, size: [900, 457], github: repo('koushik-maity-portfolio') }
]

export const stats = [
  [34, 'M', 'rows of data in my biggest project'],
  [9, '', 'data projects built end to end'],
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
      'Reached 92% agreement with senior reviewers by evaluating 200+ Gemini responses and prompts a week against structured quality criteria.',
      'Raised the quality of AI training data by validating 40+ data samples a week and flagging inconsistencies, exceptions and recurring error patterns for correction.',
      'Helped the team catch quality gaps early by tracking task-level KPIs and quality trends and reporting findings that drove process improvements.'
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
      'Built and delivered 2 client websites in 3 months.',
      'Found and fixed 60+ application issues across those sites through testing.'
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
  { title: 'MySQL', issuer: 'Udemy', image: sqlCert },
]

export const pdf = '/Koushik_Maity_Data_Analyst_CV.pdf'

export const cv = {
  summary: 'Data Analyst who checks the data before trusting it: in one project I caught 333 products silently dropped during a CSV load that would have skewed the results. Built end-to-end projects in SQL, Python, Power BI and Tableau on real public data of up to 34 million rows, from cleaning to dashboards and recommendations. Most recently a freelance Business Analyst at Turing.',
  skills: [
    ['SQL', 'MySQL, PostgreSQL, CTEs, Window Functions, Joins'],
    ['Python', 'Pandas, NumPy, Matplotlib, Seaborn, Jupyter'],
    ['BI & Reporting', 'Power BI, DAX, Power Query (ETL), Tableau, Data Modeling, Data Visualization, Excel (Pivot Tables, Lookups), Dashboards, KPI Tracking'],
    ['Analysis', 'Data Cleaning, Data Validation, EDA, Descriptive Statistics'],
    ['Tools', 'Git, GitHub']
  ],
  projects: [
    { name: 'UPI Payments Market Dashboard', tech: 'Power BI, DAX, Power Query', slug: 'upi-payments-dashboard', bullets: [
      'Built a 3-page Power BI dashboard on 76 months of official NPCI data covering 140+ UPI apps, combining inconsistent monthly Excel files with one Power Query function and a lookup table that maps 302 app name variants.',
      'Wrote 15 DAX measures including market share, YoY growth and HHI concentration; showed PhonePe and Google Pay at 78% of UPI transactions, with concentration at its lowest since 2020 as challengers like Navi grew to 4.8%.'
    ] },
    { name: 'Grocery Reorder Analysis', tech: 'MySQL', slug: 'grocery-reorder-analysis', bullets: [
      'Loaded 33.8M order lines (3.4M orders, 206K customers) into MySQL and analysed repeat buying with CTEs, window functions and self-joins; found 59% of items are reorders and 12% of customers place 30% of orders.',
      'Cut query runtime by pre-aggregating the order lines into summary tables, and caught a silent data loss during the CSV load.',
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
  { name: 'Python', Icon: SiPython, used: ['Flight Fare Analysis', 'India Millets Dashboard', 'Hero Cycles Pricing Tool'] },
  { name: 'Tableau', Icon: SiTableau, used: ['India Millets Dashboard'] },
  { name: 'Excel', Icon: SiMicrosoftexcel, used: ['Card Payments Dashboard'] },
  { name: 'Pandas', Icon: SiPandas, used: ['Flight Fare Analysis', 'India Millets Dashboard'] },
  { name: 'DAX', mark: 'DAX', used: ['UPI Payments Dashboard'] },
  { name: 'Power Query', mark: 'PQ', used: ['UPI Payments Dashboard', 'Card Payments Dashboard'] },
  { name: 'Jupyter', Icon: SiJupyter, used: ['Flight Fare Analysis'] },
  { name: 'Matplotlib', mark: 'Mpl', used: ['Flight Fare Analysis'] },
  { name: 'NumPy', Icon: SiNumpy, used: ['Flight Fare Analysis'] },
  { name: 'FastAPI', Icon: SiFastapi, used: ['Hero Cycles Pricing Tool'] },
  { name: 'React', Icon: SiReact, used: ['This portfolio'] },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, used: ['This portfolio'] },
  { name: 'Git and GitHub', Icon: SiGithub, used: ['Every project'] }
]

export const alsoKnow = ['PostgreSQL', 'Seaborn', 'JavaScript', 'Data Modeling', 'Pivot Tables', 'XLOOKUP', 'Descriptive Statistics', 'Data Validation']
