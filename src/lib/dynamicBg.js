/**
 * Sets up dynamic background color changes based on scroll position.
 * This function observes multiple DOM elements and changes a CSS variable when they enter the viewport.
 * Each observed element must have a "data-color" attribute that specifies the color value to use.
 *
 * @param {...Object} sections - An array of React refs pointing to DOM elements to observe.
 *                             Each element should have a "data-color" attribute.
 * @returns {void} - This function doesn't return a value.
 */
const setDynamicBg = (sections) => {
  /**
   * Callback function for the IntersectionObserver.
   * Updates the CSS variable when an observed element enters the viewport.
   *
   * @param {IntersectionObserverEntry[]} entries - The observed entries.
   * @returns {void}
   */
  const callback = (entries) => {
    entries.forEach((entry) => {
      const sectionColor = entry.target.getAttribute("data-color");

      const color = `var(--color-${sectionColor})`;

      const rootProperty = document.documentElement.style;

      if (entry.isIntersecting) {
        rootProperty.setProperty("--dynamic-bg-color", color);
      }
    });
  };

  /**
   * IntersectionObserver instance to detect when elements enter the viewport.
   * Configuration creates a trigger zone in the middle 50% of the viewport.
   *
   * @type {IntersectionObserver}
   */
  const observer = new IntersectionObserver(callback, {
    // Layout should be larger than viewport
    // Should be tested across layouts
    root: null,

    threshold: [0, 0.1, 0.5],
    rootMargin: "-50% 0px -50% 0px",
  });

  // Start observing all provided refs
  sections.forEach((section) => {
    observer.observe(section);
  });
};

export default setDynamicBg;
