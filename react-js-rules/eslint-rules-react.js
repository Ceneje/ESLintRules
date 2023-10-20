module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    'react/jsx-max-props-per-line': [1, {'maximum': 1}],
    'react/jsx-no-target-blank':          0,
    'react/jsx-one-expression-per-line':  1,
    'react/jsx-indent':                   [ 2, 4, { indentLogicalExpressions: true } ],
    'react/jsx-curly-spacing':            [
      1, {
        when:     'never',
        children: false,
        spacing:  { objectLiterals: 'never' },
      },
    ],
    'react/jsx-curly-newline':            1,
    'react/jsx-closing-tag-location':     2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-wrap-multilines':          [
      2, {
        declaration: 'ignore',
        assignment:  'ignore',
        return:      'parens-new-line',
        arrow:       'ignore',
        condition:   'ignore',
        logical:     'ignore',
        prop:        'ignore',
      },
    ],
  },
}
