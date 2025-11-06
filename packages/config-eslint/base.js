import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import onlyWarn from 'eslint-plugin-only-warn'
import perfectionist from 'eslint-plugin-perfectionist'
import turboPlugin from 'eslint-plugin-turbo'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/importMap.js', '**/payload-types.ts'],
    plugins: {
      onlyWarn,
      perfectionist,
      turbo: turboPlugin,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              fc: ['^@fc/.+', '^fc'],
              react: ['^react$', '^react-.+'],
            },
            value: {
              fc: ['^@fc/.+', '^fc'],
              react: ['^react$', '^react-.+'],
            },
          },
          environment: 'node',
          groups: [
            'react',
            'fc',
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['^@/.+'],
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-jsx-props': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-objects': 'error',
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    ignores: ['dist/**', '.next/**'],
  },
])
