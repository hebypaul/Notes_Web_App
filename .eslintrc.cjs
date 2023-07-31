module.exports = {
  env: { browser: true, es2020: true ,     node: true,},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["react","react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "no-undef": "error",
    // 'indent': ['error', 2],
    // 'quotes': ['error', 'single'],
    semi: ["error", "always"],
  },
};
