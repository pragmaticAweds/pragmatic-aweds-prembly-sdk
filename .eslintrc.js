/* eslint-disable @typescript-eslint/naming-convention */
/* global module */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // Set all rules to warn level
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'snake_case'],
      },
    ],
    'no-empty-function': 'warn',
    'no-magic-numbers': 'warn',
    'no-else-return': 'warn',
    'consistent-return': 'warn',
    'no-prototype-builtins': 'warn',
    'max-len': ['warn', { code: 80, ignoreComments: true }],
  },
  ignorePatterns: [
    // paths to ignore
    '!/.eslintrc.js', // add this line to exclude the ESLint config file
  ],
};
