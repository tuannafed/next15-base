import { dirname } from 'path';
import js from '@eslint/js';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next/core-web-vitals', 'next/typescript', 'next', 'prettier'],
  }),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-no-literals': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      // Allow unused variables that start with an underscore.
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-console': 'error',
      'prefer-const': 'error',
      'no-useless-escape': 'off',
      'import/no-anonymous-default-export': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'any', prev: '*', next: 'export' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
      ],
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', '*.config.{ts,js,cjs,mjs}'],
  },
];

export default eslintConfig;
