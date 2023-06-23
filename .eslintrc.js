module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2018: true,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'arrow-body-style': 'off',
    'prettier/prettier': 'warn',
    'prefer-arrow-callback': 'warn',
    'vue/no-mutating-props': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/one-component-per-file': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: [
    '*.mjs',
    '.eslintrc.js',
    'tailwind.config.js',
    'node_modules',
    'dist_electron',
    '*.spec.ts',
    'vite.config.ts',
    'postcss.config.js',
  ],
};
