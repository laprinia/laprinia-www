# Adding a New Project

## How assets work here

**Cloudinary does the optimising, not you.** Every delivery URL carries
`f_auto,q_auto,w_<width>`, so Cloudinary picks the format (AVIF, WebP, JPEG) per
browser and the size per layout, then caches the result. Nothing should be
pre-compressed before upload.

**Upload the best copy you have.** `public/projects/` is not in the repo, so
Cloudinary is the archive of record — whatever you upload is the highest-quality
copy that will ever exist. `process-assets.js` produces a *master*, not a
delivery file: it only caps dimensions and normalises the format so the upload
stays inside Cloudinary's free-tier limits.

| asset | master produced | why |
| --- | --- | --- |
| `content/*` images | WebP q90, long edge 3200px | 3200 is `MAX_CLOUDINARY_WIDTH` — the largest the site can ever request |
| `headshot-img.*` | WebP q90, 1600px | thumbnail on `/portfolio` and the work list |
| `headshot.*` (video/gif) | animated WebP, 900px q80 | hover motion on the lab tiles |
| `content/*` videos | untouched | Cloudinary transcodes on delivery |

Free-tier ceilings: **10MB per image**, **100MB per video**. The script warns if
a master exceeds either.

## Adding a project

```bash
# 1. Place the ORIGINALS — highest resolution you have, not exports
mv my-project public/projects/my-project

#    Expected layout:
#      public/projects/my-project/headshot-img.<ext>   static thumbnail
#      public/projects/my-project/headshot.<ext>       video or gif for hover motion
#      public/projects/my-project/content/*            case study media

# 2. Build masters into public/projects/upload/my-project (originals untouched)
npm run process:assets -- public/projects/my-project

# 3. Create content/projects/my-project.yaml
# 4. Add the slug to content/projects/_order.yaml

# 5. Upload
npm run upload:cloudinary -- public/projects/upload/my-project

# 6. Generate TypeScript
npm run generate:projects

# 7. Verify
npm run dev
```

Keep your originals somewhere safe after step 5. If you lose them, Cloudinary
still holds the master — but a master is not the original.

## Replacing an asset

The upload script skips any `public_id` that already exists, so re-running it
over an existing project does nothing. To replace:

```bash
npm run upload:cloudinary -- public/projects/upload/my-project --force
```

`--force` overwrites and invalidates the CDN cache. This is what you need when
re-uploading an old project from its originals.

## YAML fields

`media:` lists every filename under `content/`. It is the manifest — anything
referenced by `walkthrough:` or an article's `media:` must appear in it, or
generation fails with an error naming the file.

Filenames in the YAML should match what step 2 produced (`.webp` for images).
The extension is only a format hint: Cloudinary strips it from the public ID and
`f_auto` overrides it at delivery, so an older `.avif` entry still resolves.

## The motion file is optional

`headshotGif` is only used by the **lab** tiles, where it plays on hover. Selected
Work renders through a different component that shows the still only, so a
Selected Work project never needs one.

Leave `headshotGif` out of the YAML entirely and everything degrades cleanly: the
tile keeps its still thumbnail and simply does not fade on hover. Only `headshot`
is required.

If you do want motion, supply `headshot.<ext>` as a video or gif and step 2 turns
it into an animated WebP. If you supply a still image named `headshot.*` instead,
the pipeline converts that and the tile shows a static image on hover.

## Links

`links:` is an optional list of outbound links shown in the case study rail. The
first one also becomes the live-site link on the portfolio board.

```yaml
links:
  - label: Behance
    url: https://www.behance.net/gallery/...
  - label: GitHub
    url: https://github.com/laprinia/hyzu
```

`label` is the visible text. An entry without a `url` is skipped with a warning
rather than rendering a dead link. Omit `links:` entirely, or use `links: []`,
for a project with nothing to link to.

Add `livePreview: false` to keep a link out of the portfolio board's live-site
slot; it still shows in the case study rail. The board uses the first link that
is not opted out, so a project whose links are all `livePreview: false` shows no
live-site link at all.

```yaml
links:
  - label: EuMAR Platform
    url: https://www.eshre.eu/...
    livePreview: false
```

## Two gotchas

**Asset folders are keyed by the YAML filename, not the project name.**
`web-terrain-visualizer.yaml` has `name: web 3d terrain generator`, so the page
lives at `/portfolio/web-3d-terrain-generator` but its assets live under
`projects/web-terrain-visualizer/`. Name the asset folder after the YAML file.

**Animated WebP has a hard 50 megapixel ceiling** — width x height x frames,
across the whole clip. Over that, Cloudinary refuses to transform it (HTTP 400)
and it can only be served at full size. `process-assets.js` warns when a master
crosses the line; the fix is a shorter clip or a lower `MOTION_FPS`. The lab
tiles fall back to the untransformed file automatically, so an over-budget clip
still animates, just heavier.

## Notes

- No grayscale. Thumbnails are colour; the treatment was removed from the
  pipeline entirely.
- Projects uploaded before this pipeline hold 1200px grayscale derivatives.
  Re-uploading from originals with `--force` is the only way to get colour and
  full resolution back.
- `published: false` in the YAML keeps a project out of the build — no page is
  generated and its URL 404s.
