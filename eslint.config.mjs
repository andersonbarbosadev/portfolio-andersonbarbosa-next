import * as fs from "fs"
import stylistic from "@stylistic/eslint-plugin"
import js from "@eslint/js"
import nextPlugin from "@next/eslint-plugin-next"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import importPlugin from "eslint-plugin-import"
import globals from "globals"

// Archivos y directorios a ignorar
const eslintIgnore = [".git/", ".next/", "node_modules/", "dist/", "build/", "coverage/", "*.min.js", "*.config.js"]

export default [
  {
    ignores: eslintIgnore,
    plugins: {
      "@stylistic": stylistic,
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        "eslint-import-resolver-alias": {
          map: [
            ["App", "./src"], // Ajusta esto según tu configuración en jsconfig.json
            // Agrega aquí más alias según los tengas configurados
          ],
          extensions: [".js", ".jsx", ".json"],
        },
        node: {
          extensions: [".js", ".jsx", ".json"],
        },
      },
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl", "cn", "cva"],
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
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
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message: "Please import from `@/i18n/routing` instead.",
        },
        {
          name: "next/navigation",
          importNames: ["redirect", "permanentRedirect", "useRouter", "usePathname"],
          message: "Please import from `@/i18n/routing` instead.",
        },
      ],
    },
  },
  js.configs.recommended,
]

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"]
  return fs
    .readdirSync(process.cwd())
    .filter((file) => fs.statSync(process.cwd() + "/" + file).isDirectory())
    .filter((f) => !ignoredSortingDirectories.includes(f))
}
