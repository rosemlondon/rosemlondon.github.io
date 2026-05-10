# myrtle cross — website

A handmade static website. No frameworks, no build tools, no CMS.
Pure HTML and one shared CSS file.

Hosted on GitHub Pages.

---

## File structure

```
/
├── index.html                  ← landing page
├── art.html                    ← gallery wall
├── writing.html                ← links to writing
├── other.html                  ← other projects
├── style.css                   ← ONE stylesheet for all pages
├── images/                     ← all images go here
│   └── hills.jpg               ← background image
└── forging-fragments/
    ├── index.html              ← scrapbook landing
    └── blog.html               ← blog / updates
```

---

## How to do common things

### Change the colour scheme
Open `style.css`. At the very top, under `:root { }`, you'll see variables like
`--accent` and `--text`. Change those hex values. The change applies everywhere instantly.

### Change the background image
Drop your image into `images/hills.jpg`.
If you want to rename it, update the filename in `style.css` — search for `hills.jpg`.

### Adjust how dark the overlay is over the hills
In `style.css`, find `--overlay`. The last number (e.g. `0.62`) is the opacity.
Higher = darker overlay = easier to read text. Lower = more of the hills shows through.

### Add a piece to the art gallery
In `art.html`, copy one `<li class="gallery-item">` block. Replace the image src and alt text.
Put the image file in `images/`.

### Add a writing entry
In `writing.html`, copy one `<li>` block inside `.writing-list`. Fill in the link and text.

### Add a blog post
In `forging-fragments/blog.html`, copy the `<article class="post">` block.
Paste it ABOVE the previous post (newest first). Fill in the date, title, and text.

---

## Deploying to GitHub Pages

1. Create a repo on GitHub (e.g. `myrtlecross.github.io` for a root site)
2. Push this folder to the `main` branch
3. In repo Settings → Pages, set source to `main` branch, root folder
4. GitHub will give you a URL — done

---

## Notes on the `../` in forging-fragments pages

Pages inside `forging-fragments/` are one folder deeper than the root.
So to find `style.css` (which lives at the root), they have to go up one level: `../style.css`.
Same for images: `../images/hills.jpg`.
This is just how file paths work — nothing scary.
