# Next.js File System-Based Routing

Next.js uses a file system-based routing mechanism, which means that the URL paths users can access in the browser are directly mapped to files and directories in your codebase.
This feature simplifies routing by following specific conventions.

## Routing Conventions

-   **App Folder**: All routes must be placed in the `app` folder.
-   **Page Files**: Every page that should be accessible by the browser must be in a `page.js` or `page.tsx` file.
-   **Path Segments**: Each folder corresponds to a segment of the URL path.

## Scenarios

### Scenario 1: Display a Message on the Root Path

To display a message on the root path, create the `app` directory and place a `page.tsx` file in it:

```tsx
export default function ComponentName() {
    return <h1>Hello World</h1>;
}
```

Running the development command after this setup will create a `layout.tsx` file in the `app` directory.
We'll explore layouts at a later point.

### Scenario 2: Create Routes for `/about` and `/profile`

To create routes for `/about` and `/profile`, follow these steps:

1. **About Route**:

    - Create a directory called `about` inside the `app` folder.
    - Add a `page.tsx` file inside the `about` directory:

    ```tsx
    export default function ComponentName() {
        return <h1>About</h1>;
    }
    ```

2. **Profile Route**:

    - Create a directory called `profile` inside the `app` folder.
    - Add a `page.tsx` file inside the `profile` directory:

    ```tsx
    export default function ComponentName() {
        return <h1>Profile</h1>;
    }
    ```

By following these conventions, Next.js automatically maps these files and directories to the corresponding URL paths, making it easy to manage routes in your application.
