// import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination, FreeMode, Keyboard } from "swiper/modules";
// import Swiper styles
import "swiper/css";

/**
 * Swiper Configs
 */
const swiperConfig = {
  // configure Swiper to use modules
  modules: [FreeMode, Keyboard, Navigation],
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  keyboard: {
    enabled: true,
  },
};

/**
 * Init Swipers
 */
const swiper = new Swiper(".swiper", swiperConfig);
