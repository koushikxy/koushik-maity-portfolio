const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            // Backgrounds
            content = content.replace(/(?<!hover:)(?<!focus:)bg-\[#1D1D1F\](\/[0-9]+)?/g, 'bg-slate-50 dark:bg-[#1D1D1F]$1');
            content = content.replace(/(?<!hover:)(?<!focus:)bg-\[#252528\]/g, 'bg-white dark:bg-[#252528]');
            
            // Text colors
            content = content.replace(/(?<!hover:)(?<!focus:)text-white/g, 'text-slate-900 dark:text-white');
            content = content.replace(/(?<!hover:)(?<!focus:)text-slate-200/g, 'text-slate-800 dark:text-slate-200');
            content = content.replace(/(?<!hover:)(?<!focus:)text-slate-300/g, 'text-slate-700 dark:text-slate-300');
            content = content.replace(/(?<!hover:)(?<!focus:)text-slate-400/g, 'text-slate-600 dark:text-slate-400');
            
            // Borders
            content = content.replace(/(?<!hover:)(?<!focus:)border-slate-800/g, 'border-slate-200 dark:border-slate-800');
            content = content.replace(/(?<!hover:)(?<!focus:)border-slate-700/g, 'border-slate-300 dark:border-slate-700');
            content = content.replace(/(?<!hover:)(?<!focus:)border-gray-700/g, 'border-slate-300 dark:border-gray-700');
            content = content.replace(/(?<!hover:)(?<!focus:)border-white/g, 'border-slate-900 dark:border-white');
            content = content.replace(/(?<!hover:)(?<!focus:)border-slate-600/g, 'border-slate-400 dark:border-slate-600');
            
            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated ' + file);
            }
        }
    });
}
walk(srcDir);
