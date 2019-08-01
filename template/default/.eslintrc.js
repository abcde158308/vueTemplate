module.exports = {
  rules: {
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-regex-spaces': 2,
    'no-unexpected-multiline': 2,
    'accessor-pairs': 2,
    complexity: [
      2,
      20
    ],
    curly: [
      2,
      'all'
    ],
    eqeqeq: [
      2,
      'allow-null'
    ],
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-eq-null': 1,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-implicit-globals': 1,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 1,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-with': 2,
    radix: 2,
    'wrap-iife': [
      2,
      'any'
    ],
    yoda: [
      2,
      'never'
    ],
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-use-before-define': 1,
    'global-require': 1,
    'handle-callback-err': [
      2,
      '^(err|error)$'
    ],
    'no-new-require': 2,
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'linebreak-style': [
      1,
      'unix'
    ],
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true
      }
    ],
    'max-nested-callbacks': [
      1,
      10
    ],
    'keyword-spacing': 2,
    'max-params': [
      1,
      7
    ],
    'max-statements': [
      1,
      200
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'space-before-blocks': [
      2,
      'always'
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'yield-star-spacing': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
