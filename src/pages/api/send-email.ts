// Server rendered
// export const prerender = false;

import type { APIRoute } from "astro";
import emailjs from "@emailjs/nodejs";
import sanitizeHtml from "sanitize-html";
import { createResponse } from "@/lib/helpers";

// Define TypeScript types
type FormValues = {
  name: string;
  email: string;
  message: string;
};

type EmailJSRequest = {
  status: number;
  text: string;
};

const publicKey = import.meta.env.PUBLIC_EMAILJS_API_KEY as string;
const privateKey = import.meta.env.SECRET_EMAILJS_API_KEY as string;
const serviceId = import.meta.env.SECRET_EMAILJS_SERVICE_ID as string;
const templateId = import.meta.env.SECRET_EMAILJS_TEMPLATE_ID as string;

// const publicKey = process.env.PUBLIC_EMAILJS_API_KEY as string;
// const privateKey = process.env.SECRET_EMAILJS_API_KEY as string;
// const serviceId = process.env.SECRET_EMAILJS_SERVICE_ID as string;
// const templateId = process.env.SECRET_EMAILJS_TEMPLATE_ID as string;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Initialize EmailJS with server-side credentials from environment variables
    emailjs.init({
      publicKey,
      privateKey,
    });

    // Get the raw form data sent from the client
    const body = (await request.json()) as FormValues;

    let { name, message, email } = body;

    // Validate
    if (
      !name ||
      typeof name !== "string" ||
      !message ||
      typeof message !== "string" ||
      !email ||
      typeof email !== "string"
    ) {
      return createResponse({
        message: "Please provide all required data",
        success: false,
        status: 400,
      });
    }

    // Sanitize values
    name = sanitizeHtml(name);
    message = sanitizeHtml(message);
    email = sanitizeHtml(email);

    // Send the email using EmailJS
    const emailJsRequest: EmailJSRequest = await emailjs.send(
      serviceId,
      templateId,
      {
        name,
        email,
        message,
      }
    );

    if (emailJsRequest.status !== 200) {
      return createResponse({
        message: "Failed to send the request",
        success: false,
        status: 500,
      });
    }
    // Return success response
    return createResponse({
      message: "Request was sent successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Failed to send emailjs email:", error);

    // Return error if API call failed
    if (error instanceof Error) {
      return createResponse({
        message: error.message,
        success: false,
        status: 500,
      });
    }
  }

  // Return overall error
  return createResponse({
    message: "Something went wrong",
    success: false,
    status: 404,
  });
};
