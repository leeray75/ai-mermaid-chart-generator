// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused variables (you can change 'warn' to 'off' to disable)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // Allow the use of 'any' type (you can change 'warn' to 'off' to disable)
      "@typescript-eslint/no-explicit-any": "off",
      // Disable the rule for params type
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];

export default eslintConfig;