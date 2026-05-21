// Update script.js to use R2 URLs instead of local paths
const fs = require('fs');
require('dotenv').config();

const R2_BASE_URL = process.env.R2_PUBLIC_BASE_URL;

function updateScriptFile() {
  let scriptContent = fs.readFileSync('script.js', 'utf8');

  // Replace local asset paths with R2 URLs
  scriptContent = scriptContent.replace(
    /src:\s*"assets\/(videos|posters)\//g,
    `src: "${R2_BASE_URL}/assets/$1/`
  );

  scriptContent = scriptContent.replace(
    /poster:\s*"assets\/(videos|posters)\//g,
    `poster: "${R2_BASE_URL}/assets/$1/`
  );

  // Save the updated file
  fs.writeFileSync('script.js', scriptContent);
  console.log('✅ Updated script.js with R2 URLs');
}

function updateIndexFile() {
  let indexContent = fs.readFileSync('index.html', 'utf8');

  // Replace local asset paths with R2 URLs in HTML
  indexContent = indexContent.replace(
    /src="assets\/(videos|posters)\//g,
    `src="${R2_BASE_URL}/assets/$1/`
  );

  indexContent = indexContent.replace(
    /poster="assets\/(videos|posters)\//g,
    `poster="${R2_BASE_URL}/assets/$1/`
  );

  // Save the updated file
  fs.writeFileSync('index.html', indexContent);
  console.log('✅ Updated index.html with R2 URLs');
}

console.log('🔄 Updating asset URLs to use Cloudflare R2...\n');
console.log(`Base URL: ${R2_BASE_URL}\n`);

updateScriptFile();
updateIndexFile();

console.log('\n✨ All files updated! Ready for Vercel deployment.');
