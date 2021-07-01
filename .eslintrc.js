module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'dot-location': ['error', 'property'],
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'lines-between-class-members': [
      'error', 'always', { exceptAfterSingleLine: true }
    ],
    'linebreak-style': ['error', 'unix'],
    'no-unused-expressions': 'off',
    'no-new': 'off',
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // ts
    'no-explicit-any': 'off',

    // tsx
    'jsx-a11y/accessible-emoji': 'off',

    // react
    'react/prop-types': 'off',
  },

  // react
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: [
    'react',
  ],
  extends: ['react-app', 'plugin:react/recommended'],
};
