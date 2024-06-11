/**
 *
 * 공통 config
 */
module.exports = {
  plugins: ['no-relative-import-paths'],
  extends: [
    '@rushstack/eslint-config/profile/web-app',
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true, rootDir: 'src', prefix: '@' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prefer-destructuring': [
      'warn',
      {
        'VariableDeclarator': {
          'array': false,
          'object': true,
        },
        'AssignmentExpression': {
          'array': false,
          'object': false,
        },
      },
    ],

  },
  settings: {},
};
