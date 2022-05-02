module.exports = {
    "env": {
        "browser": false ,
        "node":true, 
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", 
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint", 
        "prettier"
    ],
    "rules": {
      "no-console":1, 
      "no-var":2
    }
}
