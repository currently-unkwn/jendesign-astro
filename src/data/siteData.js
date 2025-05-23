/**
 * Todo: Come up with description
 * Example:
 * With her interior design firm based in Sacramento, California, Yana serves clients who are bold, unusual, and ready to transform their homes into spaces unlike anything most have seen before. Together with her clients, Yana creates spaces that plow new paths in the design world.
 */

export const BASE_DATA = {
  title: "Eugenia Kuznetsova — Interior designer artist",
  // title: "Євгенія Кузнєцова - Дизайнерка Інтер'єрів",
  description: "Come up with description",
};

export const ABOUT_DATA = {
  fullName: "Eugenia Kuznetsova",
  city: "Kyiv",
  country: "Ukraine",
  text: "Hello! I'm Zhenya, an interior designer with over 15 years of experience. I love creating atmospheric and elegant spaces.",
  // text: "Привіт! Я Женя, дизайнер інтер'єрів з понад 15 роками досвіду. Обожнюю створювати атмосферні та елегантні простори.",
  // image: {
  //   src: "/images/profile/profile-light-blue.jpg",
  //   alt: "Portrait of Jane Kuznetsova, an interior designer.",
  // },
};
// TODO: Change email and phone to valid
export const CONTACT_SOURCES = [
  {
    title: "Email",
    value: "jendesign@gmail.com",
    link: "mailto:jendesign@gmail.com",
    icon: "",
    isSocial: false,
  },
  {
    title: "Phone",
    value: "+38 093 555-44-33",
    link: "tel:+38 093 555-44-33",
    icon: "",
    isSocial: false,
  },
  {
    title: "Instagram",
    value: "@eugenia_kuznetsova",
    link: "https://www.instagram.com/eugenia_kuznetsova/",
    icon: "logo-instagram-fill",
    isSocial: true,
  },
  {
    title: "Telegram",
    value: "@EugeniaKuznetsova",
    link: "https://t.me/EugeniaKuznetsova",
    icon: "logo-telegram-fill",
    isSocial: true,
  },
];

export const CONTACTS_DATA = CONTACT_SOURCES.map(({ title, value, link }) => ({
  title,
  value,
  link,
}));

export const SOCIAL_DATA = CONTACT_SOURCES.filter(
  (contact) => contact.isSocial
).map(({ link, icon }) => ({
  link,
  icon,
}));

export const INPUT_DATA = [
  {
    formControl: "input",
    label: "Full Name*",
    name: "name",
    type: "text",
    placeholder: "Oksana Tkachenko",
    required: true,
    pattern: "^[A-Za-zА-Яа-я0-9]{2,70}",
  },
  {
    formControl: "input",
    label: "Your Email*",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
    pattern: "^[^s@]+@[^s@]+.[^s@]+$",
    required: true,
  },
  {
    formControl: "textarea",
    name: "message",
    label: "Message*",
    placeholder: "Hi, tell me about your project...",
    required: true,
    rows: "6",
    minlength: "10",
    maxlength: "2000",
  },
];

export const navData = [
  {
    title: "Main",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];
