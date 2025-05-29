import satori from "satori";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { templates } from "@/og-templates/templates";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  // Obtain dynamic context
  const { template } = context.params;

  // Indicating a client that they are making wrong request
  if (!template) {
    return new Response("Must provide a template", { status: 400 });
  }

  const templateFn = templates[template];

  if (!templateFn) {
    return new Response("Template not found", { status: 404 });
  }

  const { searchParams } = new URL(context.request.url);

  // Convert entries to key:value object
  const data = Object.fromEntries(searchParams.entries());

  // Generating svg image from our template
  const svg = await satori(templateFn(data), {
    width: 1200,
    height: 630,
    fonts: [],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
}
