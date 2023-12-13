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
                declaration: 'parens-new-line',
                assignment:  'parens-new-line',
                return:      'parens-new-line',
                arrow:       'parens-new-line',
                condition:   'parens-new-line',
                logical:     'parens-new-line',
                prop:        'parens-new-line',
            },
        ],
        'react/jsx-indent-props': [2, 'first'],
        'react/jsx-first-prop-new-line': [2, 'never']
    },
}
