module.exports = {
  plugins: ['import'],
  extends: [
    'standard',
  ],
  rules: {
    semi: ['error', 'always'],
    indent: [ 'error', 4, { SwitchCase: 1, ignoredNodes: ['JSXElement *', 'JSXElement'] } ],
    quotes: ['error', 'single'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: false}],
    'object-curly-spacing': ['error', 'always'],
    'array-callback-return': 0,
    'no-multiple-empty-lines': ['error', {'max': 1}],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'throw'],
      },
      {
        blankLine: 'always',
        prev: [
          'var',
          'let',
          'const',
          'iife',
        ],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: [
          'var',
          'let',
          'const',
        ],
        next: [
          'var',
          'let',
          'const',
        ],
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          VariableDeclarator: true,
        },
      },
    ],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', {multiline: true}],
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
        align: 'value',
      },
    ],
    'space-before-function-paren': [
      'error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'comma-spacing': [
      'error', {
        'before': false,
        'after': true,
      },
    ],
    'space-in-parens': ['error', 'never'],
  },
}
