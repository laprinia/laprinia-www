# Adding a New Project

Step-by-step guide for adding a new portfolio project to the site.

## All Commands

```bash
# 1. Place raw assets
mv my-project public/projects/my-project

# 2. Process (convert formats, B&W headshots)
npm run process:assets -- public/projects/my-project

# 3. Create content/projects/my-project.yaml  (see template above)
# 4. Add slug to content/projects/_order.yaml

# 5. Upload to Cloudinary
npm run upload:cloudinary -- public/projects/upload/my-project

# 6. Remove local assets (served from CDN)
rm -rf public/projects/my-project

# 7. Generate TypeScript
npm run generate:projects

# 8. Verify
npm run dev
```
