# Project Structure

The Next.js project structure includes several key files and directories:

## Key Files

- **package.json**: Contains dependencies and scripts for the project.
- **next.config.mjs**: Contains configuration for the Next.js project.
- **tsconfig.json**: Contains configuration for the TypeScript project.
- **.eslintrc.json**: Contains configuration for the ESLint project.
- **tailwind.config.ts**: Contains configuration for the Tailwind project.

## Directories

- **.next/**: Contains the Next.js project files for both development and production.
- **public/**: Contains the static assets for the project.
- **src/**: Contains the source code for the project.
  - **app/**: This directory is used with the new App Router.

## Important Files in src/app/

- **favicon.ico**: The favicon for the project.
- **global.css**: The global CSS for the project.
- **layout.tsx**: UI that can be shared across all pages.
- **page.tsx**: The main page for the project.

## How It Works

The `page.tsx` replaces the `layout.tsx` children prop with its JSX content.

When you run the dev command, the execution begins with the `app/layout.tsx` file. 
The root layout component is the first to be rendered.
