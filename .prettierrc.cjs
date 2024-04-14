const companyConfig = require('@inc-dev/prettier-config')

/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-astro'],
  ...companyConfig
}