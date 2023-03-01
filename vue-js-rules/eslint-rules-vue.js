module.exports = {
  plugins:   [ 'vue' ],
  extends: [
    'plugin:vue/vue3-essential',
  ],
  rules:   {
    'vue/multi-word-component-names': 0,
    'vue/max-len':                    [
      'error',
      {
        code:                      120,
        template:                  120,
        tabWidth:                  2,
        comments:                  120,
        ignorePattern:             '',
        ignoreComments:            true,
        ignoreTrailingComments:    true,
        ignoreUrls:                true,
        ignoreStrings:             false,
        ignoreTemplateLiterals:    false,
        ignoreRegExpLiterals:      false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents:    false,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline:  { max: 1 },
      },
    ],
    'vue/object-curly-newline': [
      'error',
      {
        ObjectExpression:  { multiline: true },
        ObjectPattern:     { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true },
      },
    ],
    'vue/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: false } ],
    'vue/object-curly-spacing':    [ 'error', 'always' ],
    'vue/html-indent':             [
      'error',
      2,
      {
        attribute:                 1,
        baseIndent:                1,
        closeBracket:              0,
        alignAttributesVertically: true,
        ignores:                   [],
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline:    'always',
        multiline:     'always',
        maxEmptyLines: 1,
        blocks:        { template: { maxEmptyLines: 0 } },
      },
    ],
    'vue/no-multi-spaces':   [ 'error', { ignoreProperties: true } ],
  },
}
