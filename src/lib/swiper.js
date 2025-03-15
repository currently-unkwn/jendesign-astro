// import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";

/**
 * Swiper Configs
 */
const multiSlideConfig = {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1.9,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".multi-swiper-button-next",
    prevEl: ".multi-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.2,
    },
    550: {
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
  },
};

const singSlideConfig = {
  // configure Swiper to use modules
  modules: [Navigation],

  // Navigation arrows
  navigation: {
    nextEl: ".single-swiper-button-next",
    prevEl: ".single-swiper-button-prev",
  },
};

const teamMembersConfig = {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1.9,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".team-swiper-button-next",
    prevEl: ".team-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 2.2,
    },
    550: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
};

const relatedProjectsConfig = {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 24,

  // Navigation arrows
  // TODO: Custom Names
  navigation: {
    nextEl: ".related-swiper-button-next",
    prevEl: ".related-swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "progressbar",
  // },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.3,
    },
    550: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
};

export const fullScreenConfig = {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1.2,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".fullscreen-gallery-swiper-button-next",
    prevEl: ".fullscreen-gallery-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 1.2,
    },
    550: {
      spaceBetween: 20,
      slidesPerView: 1.5,
    },
    1280: {
      slidesPerView: 1.7,
      spaceBetween: 24,
    },
  },
};

/**
 * Init Swipers
 */
const multiSlideSwiper = new Swiper(".multi-slide-swiper", multiSlideConfig);
const singleSlideSwiper = new Swiper(".single-slide-swiper", singSlideConfig);
const teamMembersSwiper = new Swiper(".team-members-swiper", teamMembersConfig);
const relatedProjectsSwiper = new Swiper(
  ".related-projects-swiper",
  relatedProjectsConfig
);
