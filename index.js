/**
 * Load component styles using CSS Modules.
 *
 * @param {string} className Localized CSS Module class name.
 * @param {object} children Key/value pairs of selector/localized css module class.
 * @param {boolean} hiddenInitially If the element is hidden initially.
 */
export default function(className, children = {}, hiddenInitially = true) {
  // Get the component
  const $el = document.currentScript.parentNode;
  if (!$el) {
    return;
  }
  // Add the component class
  $el.classList.add(className);
  // Loop through children
  Object.keys(children).forEach((selector) => {
    if (children[selector]) {
      // Select the children
      const $childEls = document.querySelectorAll(`.${className} ${selector}`);
      if ($childEls) {
        // Add the child classes
        Object.keys($childEls).forEach((childEl) => {
          $childEls[childEl].classList.add(children[selector]);
        });
      }
    }
  });
  // Remove the leading style tag if it exists
  if (hiddenInitially && 'STYLE' === $el.firstElementChild.tagName) {
    $el.firstElementChild.remove();
  }
}
