/**
 * Dialog Elements
 */
const dialogs = document.querySelectorAll("dialog");

const mobileMenuDialog = document.querySelector("[data-dialog='mobile-menu']");

/**
 * Button Elements
 */
const mobileMenuButton = document.querySelector("[data-open-mobile-menu]");

/**
 * Helpers
 */

/**
 * Calculates the width of the browser's vertical scrollbar.
 *
 * @returns {number} The width of the scrollbar in pixels.
 */
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

/**
 * Set vertical scrollbar width as custom property on html element
 */
function setScrollBarWidth() {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.setProperty(
    "--scrollbar-width",
    scrollbarWidth + "px"
  );
}

/**
 * Close dialog
 */
dialogs.forEach((dialog) => {
  /**
   * Elements
   */
  const closeButton = dialog.querySelector("button[data-close-dialog]");

  /**
   * Listeners
   */

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // Close modal when click on overlay
  dialog.addEventListener("click", (event) => {
    if (event.target.nodeName === "DIALOG") {
      dialog.close();
    }
  });
});

/**
 * Event Listeners
 */

document.addEventListener("DOMContentLoaded", setScrollBarWidth);

mobileMenuButton.addEventListener("click", () => {
  mobileMenuDialog.showModal();
});
