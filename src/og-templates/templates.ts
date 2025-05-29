import { html } from "satori-html";

// Templates is a Record, where the key is string(template name)
// And value is going to be a method that returns any, but optionally accepts
// data, which is a plain object

export const templates: Record<string, (data?: Record<string, any>) => any> = {
  default: (data) => html`
    <div
      style="display: flex; align-items: center; justify-content: center; height: 100%;"
    >
      <img
        src="https://jendesign-astro.netlify.app/images/og-template.jpg"
        width="1200"
        height="630"
      />
    </div>
  `,
  projectCover: (data) => html`
    <div style="display: flex; align-items: center; justify-content: center;">
      <img
        src="${data?.image}"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    </div>
  `,
};
