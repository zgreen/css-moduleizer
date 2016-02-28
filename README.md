# CSS Moduleizer
Use with CSS Modules without a JS framework.

## What?
Working from the premise that CSS Modules—which allow for locally-scoped, truly
modular CSS—are a preferred way to author styles, this script allows you to make
use of CSS Modules without the need for a JS framework.

## Arguments
The `stylesLoader()` function takes a single object as its only parameter. The
following properties are valid:

| Property          | Type      | Description                                              |
| ----------------- | --------- | -------------------------------------------------------- |
| `className`       | `string`  | A CSS Modules class name                                 |
| `element`         | `object`  | The component's element                                  |
| `children`        | `object`  | Key/value pairs of selector/localized CSS Module classes |
| `hiddenInitially` | `boolean` | If the component is initially hidden                     |

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
import cssModuleizer from 'path/to/cssModuleizer';

cssModuleizer({
  className: article,
  children: {
    'h2': title,
    'p': excerpt,
    '.tags': tags,
  },
});
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
