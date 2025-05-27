import initDialog from "@/lib/dialog";
import initSwiper from "@/lib/swiper.js";
import setDynamicBg from "@/lib/dynamicBg.js";
import autoHideNav from "@/lib/autoHideNav.js";

document.addEventListener("astro:page-load", () => {
  /**
   * AUTOHIDE NAV ON SCROLL
   */
  autoHideNav(".header", 400);

  /**
   * INITIALIZE SWIPER
   */
  initSwiper();

  /**
   * INITIALIZE DIALOG
   */
  initDialog();

  const rootElement = document.documentElement;
  rootElement.classList.add("no-bg-transition");

  // Get all sections with data-color attribute
  const sections = document.querySelectorAll("[data-color]");

  // // Set initial background color based on first visible section (if any exists)
  // if (sections.length > 0) {
  //   // Try to find which section is visible in the middle of the viewport
  //   let initialSection = sections[0]; // Default to first section

  //   for (const section of sections) {
  //     const rect = section.getBoundingClientRect();
  //     // Check if section is in the middle portion of the viewport
  //     if (
  //       rect.top <= window.innerHeight / 2 &&
  //       rect.bottom >= window.innerHeight / 2
  //     ) {
  //       initialSection = section;
  //       break;
  //     }
  //   }

  //   // Set the background color from the selected section
  //   const initialColor = initialSection.getAttribute("data-color");
  //   rootElement.style.setProperty(
  //     "--dynamic-bg-color",
  //     `var(--color-${initialColor})`
  //   );
  // }

  setDynamicBg(sections);

  // Re-enable transitions after a short delay
  setTimeout(() => {
    rootElement.classList.remove("no-bg-transition");
  }, 100);
});
