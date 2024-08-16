# Server-only Code in Next.js

Certain code is intended to execute only on the server. This includes:

-   Modules or functions that use multiple libraries
-   Code that uses environment variables
-   Direct interactions with a database
-   Processing of confidential information

## Risks of Mixing Server and Client Code

-   JavaScript modules can be shared, potentially exposing server-only code to the client
-   If server-side code gets bundled into client-side JavaScript, it could lead to:
    -   Bloated bundle size
    -   Exposure of secret keys
    -   Exposure of database queries
    -   Exposure of sensitive business logic

It is crucial to separate server-only code from client-side code to protect the application's security and integrity.

## The `server-only` Package

React provides the `server-only` package to help prevent accidental use of server-only code in Client Components.

### How to Use `server-only`

1. Install the package:

    ```bash
    npm install server-only
    ```

2. Import it in your server-only modules:

    ```javascript
    import 'server-only';

    export function myServerOnlyFunction() {
        // Server-only code here
    }
    ```

3. If this module is imported in a Client Component, you'll get a build-time error.

### Benefits

-   Provides a build-time error if developers accidentally import server-only modules into a Client Component
-   Helps maintain the separation between server and client code
-   Improves application security by preventing sensitive server-side code from being exposed to the client

## Best Practices

1. Use the `server-only` package for all server-specific modules
2. Keep sensitive operations and data handling on the server
3. Use Server Components for data fetching and sensitive operations
4. Use Client Components only when client-side interactivity is needed

By following these practices and using the `server-only` package, you can ensure that your server-side code remains secure and separate from your client-side code.
