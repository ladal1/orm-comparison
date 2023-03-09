module.exports = {
  ...require('@ackee/styleguide-backend-config/eslint'),
  ignorePatterns: ['dist', '.eslintrc.js', '*.queries.ts', 'generated'],
  parserOptions: {
    project: '.eslint.tsconfig.json',
  },
  rules: {
    ...require('@ackee/styleguide-backend-config/eslint').rules,
    'new-cap': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
  },
}
