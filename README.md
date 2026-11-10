# Flash gallery

Photos flash inside a Code Block, at whatever size and position you give the block in Fluid Engine. No scroll effect.

### Settings (on the `.vx` div)
| Setting | What it does |
|---|---|
| `data-images` | A blog or portfolio address (e.g. `/hero-images`, uses each post's thumbnail) or a list of image links, comma separated |
| `data-images-mobile` | The same, for phones |
| `data-flash` | Speed in ms (default 300) |
| `data-radius` | Corner rounding in px |

### Install

Paste into **Settings → Developer tools → Code injection → Footer**:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sq-assets/flash-gallery@main/effect.css">
<script src="https://cdn.jsdelivr.net/gh/sq-assets/flash-gallery@main/effect.js"></script>
```

After changing a file here, jsDelivr can take up to 12 hours to update the live site. To force it straight away, purge it at https://www.jsdelivr.com/tools/purge

### Code Block

```html
<div class="vx" data-flash="300" data-images="/hero-images"></div>
```

Made by [Kill Vanilla Studio](https://www.killvanillastudio.com)
