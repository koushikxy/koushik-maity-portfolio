const fs = require('fs');
let content = fs.readFileSync('src/pages/Project.jsx', 'utf8');

const titlesToRemove = [
  'Portfolio Website',
  'Computer Vision Assignment',
  'Binary Tree Algorithms',
  'Login and Signup System',
  'ML Assignment',
  'Radar Detection',
  'Ridex',
  'SNA Assignment'
];

titlesToRemove.forEach(title => {
  const regex = new RegExp(`\\{\\s*title:\\s*['"\`]${title}['"\`][\\s\\S]*?live:[^\\}]*\\},?\\s*`, 'g');
  const match = content.match(regex);
  if (match) {
    console.log('Removed:', title);
    content = content.replace(regex, '');
  } else {
    console.log('NOT FOUND:', title);
  }
});

content = content.replace(/,\s*\];/g, '\n];');
fs.writeFileSync('src/pages/Project.jsx', content);
