'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {
  var args = Object.assign({
    className: '',
    element: null,
    children: {},
    hiddenInitially: true
  }, params);
  // Get the component
  var $el = args.element ? args.element : document.currentScript.parentNode;
  if (!args.className.length || !$el) {
    if (!args.className.length) {
      console.error('You failed to define a className.');
    }
    return;
  }
  // Add the component class
  $el.classList.add(args.className);
  // Loop through children
  Object.keys(args.children).forEach(function (selector) {
    if (args.children[selector]) {
      (function () {
        // Select the children
        var $childEls = document.querySelectorAll('.' + args.className + ' ' + selector);
        if ($childEls) {
          // Add the child classes
          Object.keys($childEls).forEach(function (childEl) {
            $childEls[childEl].classList.add(args.children[selector]);
          });
        }
      })();
    }
  });
  // Remove the leading style tag if it exists
  if (args.hiddenInitially && 'STYLE' === $el.firstElementChild.tagName) {
    $el.firstElementChild.remove();
  }
};