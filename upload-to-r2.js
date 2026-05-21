// Upload videos and posters to Cloudflare R2
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function uploadFile(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  const contentType = getContentType(filePath);

  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
  });

  try {
    await s3Client.send(command);
    console.log(`✅ Uploaded: ${key}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to upload ${key}:`, error.message);
    return false;
  }
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.mp4': 'video/mp4',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
  };
  return contentTypes[ext] || 'application/octet-stream';
}

async function uploadDirectory(dirPath, prefix = '') {
  const files = fs.readdirSync(dirPath);
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const result = await uploadDirectory(filePath, `${prefix}${file}/`);
      uploaded += result.uploaded;
      failed += result.failed;
    } else {
      const key = `${prefix}${file}`;
      const success = await uploadFile(filePath, key);
      if (success) uploaded++;
      else failed++;
    }
  }

  return { uploaded, failed };
}

async function main() {
  console.log('🚀 Starting upload to Cloudflare R2...\n');
  console.log(`Bucket: ${process.env.R2_BUCKET_NAME}`);
  console.log(`Public URL: ${process.env.R2_PUBLIC_BASE_URL}\n`);

  // Upload videos
  console.log('📹 Uploading videos...');
  const videoResults = await uploadDirectory('assets/videos', 'assets/videos/');

  // Upload posters
  console.log('\n🖼️  Uploading posters...');
  const posterResults = await uploadDirectory('assets/posters', 'assets/posters/');

  console.log('\n✨ Upload Summary:');
  console.log(`   Videos: ${videoResults.uploaded} uploaded, ${videoResults.failed} failed`);
  console.log(`   Posters: ${posterResults.uploaded} uploaded, ${posterResults.failed} failed`);
  console.log(`\n🌐 Your assets are now available at:`);
  console.log(`   ${process.env.R2_PUBLIC_BASE_URL}/assets/videos/`);
  console.log(`   ${process.env.R2_PUBLIC_BASE_URL}/assets/posters/`);
}

main().catch(console.error);
