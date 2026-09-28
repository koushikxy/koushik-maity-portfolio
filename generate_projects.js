const fs = require('fs');
const repos = JSON.parse(fs.readFileSync('repos.json', 'utf8'));

const existingGithub = [
  'https://github.com/koushikxy/Credit-Card-Financial-Dashboard',
  'https://github.com/koushikxy/Flight-Ticket-Sell-Analysis',
  'https://github.com/koushikxy/apnafashion.in',
  'https://github.com/koushikxy/portfolio',
  'https://github.com/koushikxy/hero-cycles-pricing',
  'https://github.com/koushikxy/CVIP-Assignment',
  'https://github.com/koushikxy/Binary-Tree-and-Binary-Search-Tree-in-Python',
  'https://github.com/koushikxy/CodeClause-PDF-to-WORD-Converter',
  'https://github.com/koushikxy/Bloodstock-Depot-Blood-Bank-',
  'https://github.com/koushikxy/Words-and-Characters-counter',
  'https://github.com/koushikxy/QR-Code-Scanner-Reader',
  'https://github.com/koushikxy/QR-Code-Generator',
  'https://github.com/koushikxy/koushikMaity',
  'https://github.com/koushikxy/koushikxy'
];

const filtered = repos.filter(r => !existingGithub.includes(r.github) && r.title !== 'koushikxy');

const newProjectsString = filtered.map(r => {
  let cat = r.category;
  if (['JavaScript', 'HTML', 'CSS', 'PHP'].includes(cat)) cat = 'Web Development';
  if (!cat || cat === 'null') cat = 'Other';
  
  return `  {
    title: \`${r.title}\`,
    description: \`${r.description || 'GitHub Repository'}\`,
    image: null,
    category: '${cat}',
    github: '${r.github}',
    live: ${r.live && r.live !== 'null' ? `'${r.live}'` : 'null'}
  }`;
}).join(',\n');

fs.writeFileSync('new_projects.txt', newProjectsString);
