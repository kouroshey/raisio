/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  overrides: [{ files: "*.svg", options: { parser: "html" } }],
};

module.exports = config;
