/**
 * https://eslint.org/docs/rules/
 * https://github.com/import-js/eslint-plugin-import
 * https://github.com/yannickcr/eslint-plugin-react
 * https://reactjs.org/docs/hooks-rules.html
 */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Require slices with a single export to use a default export
    'import/prefer-default-export': 0,

    // Ensure consistent use of file extension within the import path
    'import/extensions': 0,

    // https://github.com/benmosher/eslint-plugin-import/issues/720
    // how the linter was checking case for parts of the path which come before the folder containing package.json.
    'import/no-unresolved': 0,

    // If you don't care if default imports are used, or if you prefer default imports over named imports.
    'import/no-default-export': 0,

    // Files constituting the test or development environment allow the use of devDependency.
    'import/no-extraneous-dependencies': 0,

    // CRLF
    'linebreak-style': 0,

    // Only warnings for unused variables.
    'no-unused-vars': 0,

    // Disallow the use of variables before they are defined
    'no-use-before-define': 0,

    // disallow variable declarations from shadowing variables declared in the outer scope (no-shadow)
    'no-shadow': 0,

    // disallow inline comments after code - off
    'no-inline-comments': 0,

    // For redux-js-toolkit immer
    'no-param-reassign': ['error', { props: false }],

    // Prevent missing props validation in a React component definition (react/prop-types) - use typescript
    'react/prop-types': 0,

    // Prevent JSX Error
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    // Check Rules of Hooks
    'react-hooks/rules-of-hooks': 'error',

    // Warning is to prevent the developers from missing dependencies inside their effect and lost some behavior. (useEffect Dependency Array)
    'react-hooks/exhaustive-deps': 'warn',

    // Spread operator to deliver the prop
    'react/jsx-props-no-spreading': 0,

    // use jsx comment /* { <tag>some tag</tag>} */
    'react/react-in-jsx-scope': 'off',

    // Remove Delete `␍` eslint (prettier/prettier)
    // 권장 설정은 'error' 인데 코딩하기가 너무 불편해서 'off' 로 놓고 저장할 때 수정
    'prettier/prettier': ['off', { endOfLine: 'auto' }],

    // Indentation error check off
    'no-trailing-spaces': 0,

    // Use single quote
    quotes: [2, 'single', 'avoid-escape'],

    // enforce consistent indentation
    indent: 0,

    // pages/_document.tsx custom page
    '@next/next/no-document-import-in-page': 0,

    // allow convention <Link href={src}><a>destination</a></Link>
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["dist/", "node_modules/", "/ecosystem.config.js"],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ]
};
