import emailjs from '@emailjs/nodejs';
import sanitizeHtml from 'sanitize-html';
import { c as createResponse } from '../../chunks/helpers_Ce1f0ymK.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const publicKey = "20hOOiULEXUKia-Kl";
const privateKey = "SH2wM_Et_GD-kASFrRTe9";
const serviceId = "jendesign_cg6o08q";
const templateId = "jacf_template_id";
const POST = async ({ request }) => {
  try {
    emailjs.init({
      publicKey,
      privateKey
    });
    const body = await request.json();
    let { name, message, email } = body;
    if (!name || typeof name !== "string" || !message || typeof message !== "string" || !email || typeof email !== "string") {
      return createResponse({
        message: "Please provide all required data",
        success: false,
        status: 400
      });
    }
    name = sanitizeHtml(name);
    message = sanitizeHtml(message);
    email = sanitizeHtml(email);
    const emailJsRequest = await emailjs.send(
      serviceId,
      templateId,
      {
        name,
        email,
        message
      }
    );
    if (emailJsRequest.status !== 200) {
      return createResponse({
        message: "Failed to send the request",
        success: false,
        status: 500
      });
    }
    return createResponse({
      message: "Request was sent successfully",
      success: true,
      status: 200
    });
  } catch (error) {
    console.error("Failed to send emailjs email:", error);
    if (error instanceof Error) {
      return createResponse({
        message: error.message,
        success: false,
        status: 500
      });
    }
  }
  return createResponse({
    message: "Something went wrong",
    success: false,
    status: 404
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
