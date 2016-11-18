## Website Performance Optimization Portfolio Project

### Getting started
Run the application from [GitHubPages](https://alias8.github.io/udportfolio/build/)

### Optimizations Made:
- Avoid render-blocking CSS: add media="print" for print.css, inlined minified style.css and google fonts
- Avoid render-blocking Javascript: async tag on non essential scripts perfmatters.js and google-analytics, move essential scripts to end of body.
- Minification: HTML, CSS, and JavaScript using Gulp task
- Responsive Images: pizzeria.jpg is larger than we need. Resized to 1440px, 720px, 360px, 100px. Also used srcset to let browser decide what to download.
- Avoid layout thrashing: batching style reads and do them first (where the browser can use the previous frame’s layout values) and then do any writes.