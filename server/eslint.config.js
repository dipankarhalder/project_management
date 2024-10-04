const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginNode = require('eslint-plugin-node');
const eslintPluginImport = require('eslint-plugin-import');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly'
      }
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error'
    },
    plugins: {
      prettier: eslintPluginPrettier,
      node: eslintPluginNode,
      import: eslintPluginImport
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    ignores: ['node_modules/', 'dist/', '*.config.js']
  }
];
