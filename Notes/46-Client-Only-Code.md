# Client-only Code in Next.js

Client-only code is functionality that should be confined to the client side in a Next.js application.

## Characteristics of Client-only Code

Client-only code typically interacts with:
- Browser-specific features (DOM, window object)
- localStorage
- sessionStorage
- Other APIs not available on the server

## Importance

Ensuring that such code is executed only on the client side prevents errors during server-side rendering.
It's crucial to identify and isolate client-specific code to maintain the integrity of server-side rendering and avoid runtime errors.

## The `client-only` Package

To prevent unintended server-side usage of client-side code, we can use a package called `client-only` provided by React.

### How to Use `client-only`

1. Install the package:
   ```bash
   npm install client-only
   ```

2. Import it in your client-only modules:
   ```javascript
   import 'client-only'

   export function myClientOnlyFunction() {
     // Client-only code here, e.g., using localStorage
     localStorage.setItem('key', 'value')
   }
   ```

3. If this module is imported in a Server Component, you'll get a build-time error.

## Benefits

- Provides build-time errors if developers accidentally use client-only code in Server Components
- Helps maintain the separation between server and client code
- Prevents potential runtime errors caused by trying to access browser APIs on the server

## Best Practices

1. Use the `client-only` package for all browser-specific code
2. Keep client-side interactivity and browser API usage in Client Components
3. Be mindful of the execution environment when writing code that might run on both client and server

By using the `client-only` package and following these practices, you can ensure that your client-side code remains properly isolated, enhancing the reliability and performance of your Next.js application.