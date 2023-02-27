#  Ceneje - ESLint rules

This is repository of Ceneje d.o.o. packages of ESLint rules. 

### Use packages:

1. Tell NPM in which registry it can find our packages:
    
    ```
    npm config set @ceneje:registry=https://npm.pkg.github.com

    ```

2. Install any or all packages:

    `npm i @ceneje/eslint-rules --save`
    
    `npm i @ceneje/eslint-rules-vue --save`
    
    `npm i @ceneje/eslint-rules-react --save`

### Add rule to package

1. Get personal GitHub `ACCESS_TOKEN`. [Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token)
2. Configure npm to use your `ACCESS_TOKEN` when publishing to Ceneje GitHub registry.

   ```
   npm config set //npm.pkg.github.com/:_authToken=${ACCESS_TOKEN}
   ```

3. Navigate to package directory: `cd eslint-rule-{jsType}`
4. Add the rule to `eslint-rules-${jsType}.js`
5. Increase a package version in `package.json`
6. Publish package: `npm publish`.
7. Commit code and push it to remote.
