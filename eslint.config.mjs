import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
          parserOptions: {
            parser: "@typescript-eslint/parser",
            project: true,
          },
        },
        files: [
          // "test/unit/**/*.ts",
          "**/*.ts",
          // "lambda/Inbound/ConsentManagement/LambdaEventHandler.ts",
        ],
      },
  );