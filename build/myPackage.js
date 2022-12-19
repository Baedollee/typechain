//@ts-check
/**
 * Initializes the project
 * @param {*} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean};
 */

export function init(config) {
  return true;
}

/**
 * Exit the program
 * @param {*} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
