# Deployment Guide

## Prerequisites

- Node.js installed
- Vercel CLI installed (`npm i -g vercel`)
- Cloudflare R2 bucket created with public access

## Step-by-Step Deployment

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Make sure your `.env` file has all R2 credentials:

```
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=happy3rd
R2_PUBLIC_BASE_URL=your_public_r2_url
R2_ENDPOINT=your_r2_endpoint
```

### 3. Upload Assets to Cloudflare R2

```bash
npm run upload
```

This will upload all videos and posters to your R2 bucket.

### 4. Update Asset URLs

```bash
npm run update-urls
```

This will update `script.js` and `index.html` to use R2 URLs instead of local paths.

### 5. Deploy to Vercel

```bash
vercel login
vercel --prod
```

Or use the combined command:

```bash
npm run deploy
```

## Manual Deployment Steps

### Option 1: Vercel CLI

```bash
vercel login
vercel --prod
```

### Option 2: Vercel Dashboard

1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy

## Important Notes

- **R2 Bucket**: Must have public access enabled
- **CORS**: Make sure R2 bucket allows CORS from your Vercel domain
- **Videos**: All videos will be served from R2 (not from Vercel)
- **Cost**: R2 has generous free tier (10GB storage, 10M requests/month)

## Troubleshooting

### Videos not loading

- Check R2 bucket public access settings
- Verify R2_PUBLIC_BASE_URL in .env
- Check browser console for CORS errors

### Upload fails

- Verify R2 credentials in .env
- Check R2 bucket permissions
- Ensure bucket name is correct

## After Deployment

Your site will be live at: `https://your-project.vercel.app`

Videos will be served from: `https://pub-xxxxx.r2.dev/assets/videos/`
