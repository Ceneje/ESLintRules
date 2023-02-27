#  Ceneje - ESLint rules

This is repository of Ceneje d.o.o. packages of ESLint rules. 

### Use packages:

1. Tell NPM in which registry it can find our packages:
    
    ```
    npm config set @ceneje:registry=https://gitlab.com/api/v4/packages/npm/
    ```

2. Install any or all packages:

    `npm i @ceneje/eslint-rules --save`
    
    `npm i @ceneje/eslint-rules-vue --save`
    
    `npm i @ceneje/eslint-rules-react --save`

### Add rule to package

1. Get `API_ACCESS_TOKEN` for Ceneje GitHub registry.
2. Configure npm to use your `API_ACCESS_TOKEN` when publishing to Ceneje GitHub registry.

    ``npm config set //gitlab.com/api/v4/projects/43873483/packages/npm/:_authToken=${API_ACCESS_TOKEN}``

3. Navigate to package directory: `cd eslint-rule-{jsType}`

4. Add the rule to `eslint-rules-${jsType}.js`
5. Increase a package version in `package.json`
6. Publish package: `npm publish`.Ł
7. Commit code and push it to remote.
