module.exports = {
  plugins: ['@angular-eslint/eslint-plugin'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'abc',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'abc',
            style: 'kebab-case',
          },
        ],
      },
    },
    {
      files: ['*.html'],
      parser: '@angular-eslint/template-parser',
      extends: ['plugin:@angular-eslint/eslint-plugin-template/recommended'],
      rules: {},
    },
  ],
};
