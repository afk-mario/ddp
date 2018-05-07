module.exports = {
  parserOptions: {
    ecmaVersion: 9,
  },
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
