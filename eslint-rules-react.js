module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
    ],
    rules:   {
        'react/jsx-max-props-per-line': [ 2, { 'maximum': 1 } ],
        'react/jsx-indent-props':       [ 2, 'first' ]
    },
}
