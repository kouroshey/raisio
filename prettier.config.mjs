/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export const config = {
  printWidth: 120,
  overrides: [{ files: "*.svg", options: { parser: "html" } }],
};
