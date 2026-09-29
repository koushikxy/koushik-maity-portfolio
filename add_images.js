const fs = require('fs');

let content = fs.readFileSync('src/pages/Project.jsx', 'utf8');

const images = {
  'Data Analytics': [
    "'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'",
    "'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'",
    "'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800'",
    "'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800'"
  ],
  'Web Development': [
    "'https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=800'",
    "'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'"
  ],
  'Python': [
    "'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'"
  ],
  'Other': [
    "'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'",
    "'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'"
  ]
};

let i = 0;
content = content.replace(/image:\s*null,\s*category:\s*'([^']+)'/g, (match, category) => {
  const categoryImages = images[category] || images['Other'];
  const url = categoryImages[i % categoryImages.length];
  i++;
  return `image: ${url},\n    category: '${category}'`;
});

// Fix any lingering image: null without category beneath it
let j = 0;
content = content.replace(/image:\s*null,/g, (match) => {
  const url = images['Other'][j % images['Other'].length];
  j++;
  return `image: ${url},`;
});

fs.writeFileSync('src/pages/Project.jsx', content);
