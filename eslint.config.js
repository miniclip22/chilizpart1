import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      globals: {
        ...globals.browser, // Include browser-specific globals
        ...globals.node,    // Include Node.js-specific globals
      },
    },
    rules: {
      // ESLint rules
      'no-console': 'warn', // Warn on console.log statements
      'prettier/prettier': 'error', // Integrate Prettier for formatting
    },
  },
  pluginJs.configs.recommended, // Use recommended ESLint rules for JS
  tseslint.configs.recommended, // Use recommended rules for TypeScript
];
