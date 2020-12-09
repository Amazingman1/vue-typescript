/*
 * @Author: wangxuan
 * @Date: 2020-12-09 13:34:45
 * @LastEditors: wangxuan
 * @LastEditTime: 2020-12-09 14:22:21
 * @FilePath: /vue-typescript-element-template/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'strict': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    // 'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
