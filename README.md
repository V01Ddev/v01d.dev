# v01d.dev

Personal website and blog. The landing page is hand-written static HTML/CSS/JS;
the blog is generated with [Hugo](https://gohugo.io/) into a static `/blog`
directory. There is no server-side build step — the whole repo is served as-is
from its root.

## How Hugo is used (only for `/blog`)

Hugo is **not** a site-wide framework here. It only generates the blog. The
landing page (`index.html`, `style.css`, `script.js`, …) is plain static markup
and has no build step at all.

All of the Hugo source lives in `hugo_src/`. Two settings in
[`hugo_src/hugo.toml`](hugo_src/hugo.toml) are what tie it to `/blog`:

```toml
baseURL    = 'https://v01d.dev/blog'  # every generated URL lives under /blog/
publishDir = "../blog"                # write the output one level up, into blog/
```

So running Hugo from `hugo_src/` emits the finished site into `blog/`, making it
just another static directory sitting next to the landing page. The generated
`blog/` is committed to git and deployed alongside everything else; the landing
page links to it with `./blog`.

## Layout

```
.
├── index.html          # Landing page (plain HTML, no build step)
├── style.css           # Landing page styles
├── script.js           # Landing page JS
├── logo.png / logo.svg / og.png / favicon.ico
├── robots.txt
├── sitemap.xml
├── hugo_src/           # Hugo source for the blog
│   ├── hugo.toml       # Hugo config (baseURL + publishDir above)
│   ├── content/        # Blog posts in Markdown
│   ├── layouts/        # Custom templates (no third-party theme)
│   ├── assets/         # CSS/JS source
│   └── archetypes/     # Front-matter template for `hugo new`
└── blog/               # Hugo output (committed), served at /blog/
```

## Prerequisites

- [Hugo](https://gohugo.io/installation/). This repo is built with v0.170.x.
  The blog uses Hugo's CSS asset pipeline (`minify` + `fingerprint`), which is in
  the standard build, so the non-extended edition is sufficient.

## Build

```sh
cd hugo_src
hugo
```

This regenerates `blog/` in place:

- `publishDir = "../blog"` writes the output one level up.
- A plain `hugo` build runs in the `production` environment, so the CSS is
  minified and fingerprinted — that's the `main.min.<hash>.css` in `blog/css/`.
- Commit the resulting changes under `blog/`.

## Dev mode

### Blog only (with live reload)

```sh
cd hugo_src
hugo server
```

- Serves the blog at <http://localhost:1313/blog/>.
- Watches content, layouts, assets and `hugo.toml`, and live-reloads the browser
  on change.
- By default it also writes its output to `blog/`. Add `--renderToMemory` to
  serve purely from memory and leave `blog/` untouched.
- Drafts are excluded by default; preview them with `hugo server -D`.

> The landing page is not part of Hugo, so `hugo server` only serves `/blog/`;
> visiting `/` returns 404.

### Full site (landing page + blog together)

To preview the landing page and the blog at the same time, build the blog and
serve the repo root with any static file server:

```sh
cd hugo_src && hugo
cd ..
python3 -m http.server 8000
```

Then open <http://localhost:8000/> (landing page) and
<http://localhost:8000/blog/> (blog).

## Writing a post

```sh
cd hugo_src
hugo new content/my-post/index.md   # folder + index.md when the post has images
hugo new content/some-post.md       # flat .md file for a text-only post
```

- The default archetype (`hugo_src/archetypes/default.md`) sets `draft = true`.
  Flip it to `false` to publish, or preview with `hugo server -D`.
- Keep images and attachments next to the post and reference them by relative
  path; see the existing posts under `hugo_src/content/` for the pattern.
