import cryptoJs from "crypto-js";

/**
 * Retrieves the current URL and its search parameters.
 *
 * @property {URL} url - The URL object representing the current page URL.
 * @property {URLSearchParams} params - An object containing the parsed query string parameters.
 *
 * */
export function getURLAndSearchParams() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  return { url, params };
}

/**
 * Extracts the base path from a given URL path.
 *
 * @param {string} path - The full URL path to process.
 * @returns {string} The base path (first segment after the leading slash) or an empty string if not found.
 *
 * @example
 * Returns "/dashboard"
 * getBasePath("/dashboard/users");
 */
export function getBasePath(path) {
  const parts = path.split("/");

  if (parts.length >= 2) {
    return `/${parts[1]}`;
  }

  return "";
}

/**
 * Creates breakpoints classes to use in class:list directive
 */
export function getBreakpoints(prefix, prop) {
  return typeof prop === "object"
    ? {
        [`default:${prefix}-${prop.default}`]: prop.default,
        [`tablet-s:${prefix}-${prop.smallTablet}`]: prop.smallTablet,
        [`tablet:${prefix}-${prop.tablet}`]: prop.tablet,
        [`laptop:${prefix}-${prop.laptop}`]: prop.laptop,
        [`desktop:${prefix}-${prop.desktop}`]: prop.desktop,
      }
    : { [`${prefix}-${prop}`]: prop };
}

/**
 * Returns aspect ratio based on orientation
 * @param {String} orientation
 * @returns {String} Aspect ratio
 */
export function getRatio(orientation) {
  if (orientation === "landscape") {
    return "3:2";
  }

  if (orientation === "portrait") {
    return "3:4";
  }

  if (orientation === "square") {
    return "1:1";
  }

  if (orientation === "wide") {
    return "16:9";
  }
}

/**
 * Sort projects by publish date from newest to oldest
 * @param {Array} projects
 * @returns {Array} Sorted projects
 */
export function getSortedProjects(projects) {
  return [...projects].sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
}

/**
 * Get project index in a projects array
 * @param {Array} projects
 * @param {Object} project
 * @returns {Number} Index number
 */
export function getProjectIndex(projects, project) {
  return projects.findIndex((p) => p.id === project.id);
}

/**
 * Creates a Response object with JSON-formatted content.
 *
 * @param {Object} options - The options for creating the response.
 * @param {string} options.message - The message to include in the response body.
 * @param {boolean} options.success - Indicates whether the operation was successful.
 * @param {number} options.status - The HTTP status code for the response.
 * @returns {Response} A new Response object with the specified content and status.
 */
export function createResponse({ message, success, status }) {
  return new Response(JSON.stringify({ message, success }), { status });
}

/**
 * Updates the browser's history state with a new URL without reloading the page.
 * @param {*} url — The new URL to be set in the browser's address bar.
 */
export function updateBrowserHistory(url) {
  window.history.replaceState({}, "", url);
}
