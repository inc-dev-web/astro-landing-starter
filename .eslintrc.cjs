module.exports = {
  extends: ['@inc-dev/eslint-config-astro'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
}
