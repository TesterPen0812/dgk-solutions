# Deployment Guide

## Pre-Deployment Checklist

- [ ] Database migrations are set up and tested
- [ ] Environment variables are configured
- [ ] Formspree endpoint is configured
- [ ] Build process works locally (`npm run build`)
- [ ] Production build starts correctly (`npm start`)

## Required Environment Variables

```bash
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
PORT=3000  # (or let platform set it)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Database Setup

Before deploying, ensure your production database is created and migrations are run:

```bash
# Set DATABASE_URL to production database
export DATABASE_URL="postgresql://..."

# Push schema to database
npm run db:push
```

## Platform-Specific Instructions

### Railway

1. Connect GitHub repo to Railway
2. Add PostgreSQL service
3. Set environment variables
4. Deploy automatically on push

### Render

1. Create Web Service
2. Add PostgreSQL database
3. Set environment variables
4. Build: `npm run build`
5. Start: `npm start`

### Fly.io

1. `fly launch`
2. `fly postgres create`
3. `fly postgres attach <db-name>`
4. `fly secrets set VITE_FORMSPREE_ENDPOINT=...`
5. `fly deploy`

### Replit

1. Already configured in `.replit`
2. Set environment variables in Replit secrets
3. Click "Deploy" button

## Post-Deployment

- [ ] Test all form submissions
- [ ] Verify database connections
- [ ] Check mobile responsiveness
- [ ] Test phone number links
- [ ] Monitor error logs
- [ ] Set up domain (if needed)

