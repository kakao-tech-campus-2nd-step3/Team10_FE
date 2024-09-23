module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: ["node_modules/"],
  plugins: ["@typescript-eslint", "react", "import", "chakra-ui"],
  rules: {
    "no-extra-semi": "error",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "React",
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/extensions": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: [".prettierrc"] }],
    "import/order": [
      "error",
      {
        groups: ["external", "internal", "index", "sibling", "parent", "builtin", "object", "type"],
        pathGroups: [
          {
            pattern: "react-dom/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error",
    "chakra-ui/require-specific-component": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
