module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(usePromiseMemo)',
      },
    ],
  },
}
