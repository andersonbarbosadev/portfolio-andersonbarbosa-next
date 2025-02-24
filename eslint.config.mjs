import * as fs from "fs";

import eslintPluginImport from "eslint-plugin-import";
import eslintPluginNext from "@next/eslint-plugin-next";
import eslintPluginReact from "eslint-plugin-react";

const eslintIgnore = [
  ".git/",
  ".next/",
  "node_modules/",
  "dist/",
  "build/",
  "coverage/",
  "*.min.js",
  "*.config.js",
];

const config = {
  ignores: eslintIgnore,
  ...eslintPluginImport.flatConfigs.recommended,
  plugins: {
    "react": eslintPluginReact,
    import: eslintPluginImport,
    "@next/next": eslintPluginNext,
  },
  rules: {
    ...eslintPluginNext.configs.recommended.rules,
    ...eslintPluginNext.configs["core-web-vitals"].rules,
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "import/order": [
      "warn",
      {
        groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: "internal",
          })),
          {
            pattern: "env",
            group: "internal",
          },
          {
            pattern: "theme",
            group: "internal",
          },
          {
            pattern: "public/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'next/link',
        message: 'Please import from `@/i18n/routing` instead.'
      },
      {
        name: 'next/navigation',
        importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
        message: 'Please import from `@/i18n/routing` instead.'
      }
    ]
  },
  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl", "cn", "cva"],
    },
    "import/resolver": {
      node: true,
    },
  },
};

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"];
  return fs
    .readdirSync(process.cwd())
    .filter((file) => fs.statSync(process.cwd() + "/" + file).isDirectory())
    .filter((f) => !ignoredSortingDirectories.includes(f));
}

export default config;
