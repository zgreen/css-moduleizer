# Styles Loader
For use without CSS Modules.

## What?
Working from the premise that CSS Modules—which allow for locally-scoped, truly
modular CSS—are a preferred way to author styles, this script allows you to make
use of CSS Modules without the need for a JS framework.

## How?
Load your component script inside the component you're working with, e.g.:
```html
<article>
  <script async
    type="text/javascript"
    src="path/to/component.js">
  </script>
  <h2>My Title</h2>
  <p>Some more stuff...</p>
  <div class="tags">Art, cats, bird watching</div>
</article>
```
And, in `component.js`:
```js
import { article, title, excerpt, tags } from './component.css';
import stylesLoader from 'path/to/stylesLoader';

stylesLoader(
  article,
  {
    'h2': title,
    'p': excerpt,
    '.tags': tags,
  }
);
```

This will add the locally scoped `article` class to the `<article>` tag in the
above example, while also add locally scoped classes for each of the given
children: `h2` (title), `p` (excerpt), and `.tags` (tags).

It's recommended that you hide the component initially to prevent a FOUC, like
so:
```html
<article>
  <style> article { visibility: hidden } </style>
  <script async
    type="text/javascript"
    src="path/to/component.js">
  </script>
  <h2>My Title</h2>
  <p>Some more stuff...</p>
  <div class="tags">Art, cats, bird watching</div>
</article>
```
The script will remove that style tag (by default), once it has loaded.
