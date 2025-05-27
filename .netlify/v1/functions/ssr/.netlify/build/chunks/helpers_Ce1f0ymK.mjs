import 'crypto-js';

/**
 * Creates breakpoints classes to use in class:list directive
 */
function getBreakpoints(prefix, prop) {
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
function getRatio(orientation) {
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
function getSortedProjects(projects) {
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
function getProjectIndex(projects, project) {
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
function createResponse({ message, success, status }) {
  return new Response(JSON.stringify({ message, success }), { status });
}

export { getProjectIndex as a, getRatio as b, createResponse as c, getBreakpoints as d, getSortedProjects as g };
