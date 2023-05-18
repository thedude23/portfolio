module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'jsx-a11y/label-has-associated-control': [
    //   'error',
    //   {
    //     required: {
    //       some: ['nesting', 'id'],
    //     },
    //   },
    // ],
    // 'jsx-a11y/label-has-for': [
    //   'error',
    //   {
    //     required: {
    //       some: ['nesting', 'id'],
    //     },
    //   },
    // ],
    'react/jsx-props-no-spreading': 'off',
  },
};
