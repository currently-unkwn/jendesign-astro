/**
 * Auto hides and reveal navigation or header on scroll
 * Used with position: sticky or position: fixed
 * @param {String} navSelector Nav or Header element
 * @param {Number} hideThreshold Threshold when to hide header
 */

function autoHideNav(navSelector, hideThreshold) {
  const nav = document.querySelector(navSelector);

  // Get nav height
  // const navHeight = nav.getBoundingClientRect().height;

  const HEADER_HIDE_THRESHOLD = hideThreshold;

  // Store previous scroll position
  let previousScrollPosition = window.scrollY;

  window.addEventListener("scroll", (event) => {
    // Store current scroll position
    const currentScrollPosition = window.scrollY;

    // Get direction
    const direction =
      currentScrollPosition > previousScrollPosition ? "downwards" : "upwards";

    // Get scroll difference
    // const difference = currentScrollPosition - previousScrollPosition;

    // Get current nav top position
    // const currentNavTop = parseFloat(getComputedStyle(nav).top);

    if (
      direction === "downwards" &&
      currentScrollPosition > HEADER_HIDE_THRESHOLD
    ) {
      nav.classList.remove("is-visible");
      // // Store new nav top value and convert it to a positive number
      // const navTopValue = Math.abs(currentNavTop - difference);

      // // If new nav top value is more than nav height
      // if (navTopValue > navHeight) {
      //   // Set to nav height
      //   nav.style.top = `-${navHeight}px`;
      // } else {
      //   // Otherwise set to new nav top value
      //   nav.style.top = `-${navTopValue}px`;
      // }
    }

    if (direction === "upwards") {
      nav.classList.add("is-visible");
      // // Store new nav top value
      // const navTopValue = currentNavTop - difference;
      // // If new nav top value is more than 0
      // if (navTopValue > 0) {
      //   // Set nav top to 0
      //   nav.style.top = 0;
      // } else {
      //   // Otherwise set it a new nav top value
      //   nav.style.top = `${navTopValue}px`;
      // }
    }

    // Set previous scroll position to a current scroll position
    previousScrollPosition = currentScrollPosition;
  });
}

export default autoHideNav;
