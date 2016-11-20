## Website Performance Optimization Portfolio Project

### Getting started
Run the application from [GitHubPages](https://alias8.github.io/udportfolio/build/)

### General Optimizations Made:
- Avoid render-blocking CSS: add media="print" for print.css, inlined minified style.css and google fonts
- Avoid render-blocking Javascript: async tag on non essential scripts perfmatters.js and google-analytics, move essential scripts to end of body.
- Minification: HTML, CSS, and JavaScript using Gulp task
- Responsive Images: pizzeria.jpg is larger than we need. Resized to 1440px, 720px, 360px, 100px. Also used srcset to let browser decide what to download.
- Avoid layout thrashing: batching style reads and do them first (where the browser can use the previous frame’s layout values) and then do any writes.

### Optimizations Made in main.js:
- resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves had several things changed:
  - document.querySelectorAll(".randomPizzaContainer") was called every time instead of storing it as a variable
  - determineDx(elem, size) was being called on each iteration even though the answer will be the same for each element
  - removed layout calculation followed by style change on every loop
- background pizzas created during 'DOMContentLoaded' function:
  - pizzas reduced from 250 to 32
- scrolling background pizzas function:
  - calculated phase and scroll position outside of main loop to avoid redoing work
  - moving pizzas by using items[i].style.transform = translateX() instead of items[i].style.left = items[i].basicLeft + phase[i % 5] + 'px', 
  however this suggested change still triggers a style/layout/paint/composite instead of just triggering composite so not
  sure if this even makes a difference
- I was advise to add backface-visibility: hidden; to .mover in style_pizza.css, although I do not see any improvements??