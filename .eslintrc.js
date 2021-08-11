module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    indent: ['error', 2],
    'no-use-before-define': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'max-len': ['error', 140],
    'no-restricted-syntax': ['off'],
    'no-param-reassign': ['off'],
    'object-curly-newline': ['off'],
    'guard-for-in': ['off'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
