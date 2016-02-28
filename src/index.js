/**
 * Load component styles using CSS Modules.
 *
 * @param {object} params Fuction arguments.
 * @param {string} params.className Localized CSS Module class name. Default empty string.
 * @param {element} params.object Reference to the component's wrapping element.
 *        Default null.
 * @param {object} params.children Key/value pairs of selector/localized css module
 *        class. Default empty object.
 * @param {boolean} params.hiddenInitially If the element is hidden initially. Default
 *        true.
 */
export default function(params) {
  const args = Object.assign({
    className: '',
    element: null,
    children: {},
    hiddenInitially: true
  }, params);
  // Get the component
  const $el = args.element
    ? args.element
    : document.currentScript.parentNode;
  if (!args.className.length || !$el) {
    if (!args.className.length) {
      console.error('You failed to define a className.');
    }
    return;
  }
  // Add the component class
  $el.classList.add(args.className);
  // Loop through children
  Object.keys(args.children).forEach((selector) => {
    if (args.children[selector]) {
      // Select the children
      const $childEls = document
        .querySelectorAll(`.${args.className} ${selector}`);
      if ($childEls) {
        // Add the child classes
        Object.keys($childEls).forEach((childEl) => {
          $childEls[childEl].classList.add(args.children[selector]);
        });
      }
    }
  });
  // Remove the leading style tag if it exists
  if (args.hiddenInitially && 'STYLE' === $el.firstElementChild.tagName) {
    $el.firstElementChild.remove();
  }
}
