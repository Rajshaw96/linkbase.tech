module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // ECMAScript 2018
  },
  extends: [
    "eslint:recommended",
    "google", // Google style guide
  ],
  rules: {
    // Restrict use of global variables
    "no-restricted-globals": ["error", "name", "length"],
    // Enforce the use of arrow functions where possible
    "prefer-arrow-callback": "error",
    // Enforce double quotes, allow template literals
    "quotes": ["error", "double", {allowTemplateLiterals: true}],
    // Set max line length to 120
    "max-len": ["error", {code: 120}],
    "new-cap": ["error", {"capIsNewExceptions": ["Router"]}],

  },
  overrides: [
    {
      // Override for test files
      files: ["**/*.spec.*"],
      env: {
        mocha: true, // Add Mocha globals
      },
      rules: {},
    },
  ],
  globals: {
    // Define global variables here if needed
  },
};
