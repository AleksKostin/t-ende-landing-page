module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'warn',
    // 'import/no-unresolved': 0,
    // 'import/extensions': 0,
  },
};
