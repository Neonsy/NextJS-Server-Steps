# Middleware in Next.js

Middleware in Next.js is a powerful feature that allows you to intercept and control the flow of requests and responses in your application.
It operates at a global level, enabling enhancements such as redirection, URL rewrites, authentication, and more.

## Key Features of Middleware

-   **Global Request Handling**: Middleware can process requests before they reach your application's route handlers.
-   **Flexible Path Matching**: You can specify paths where the middleware will be active using custom matchers.
-   **Conditional Logic**: Implement conditional statements to handle requests differently based on specific criteria.

## Example Middleware Implementation

Here's an example of how to implement middleware in Next.js:

```typescript
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Check for a theme preference cookie
    const themePreference = request.cookies.get('theme');
    if (!themePreference) {
        // Set a default theme cookie if not present
        response.cookies.set('theme', 'synthwave');
    }

    // Set a custom header
    response.headers.set('custom-header', 'custom-value');

    // Conditional logic based on the request path
    if (request.nextUrl.pathname === '/about') {
        // Rewrite the URL to /blog
        return NextResponse.rewrite(new URL('/blog', request.url));
    }

    // Redirect to the homepage for other paths
    return NextResponse.redirect(new URL('/', request.url));

    return response;
}

// Optional: Specify paths where the middleware is active
export const config = {
    matcher: '/about',
};
```

### Explanation

-   **Cookies and Headers**: The middleware checks for a `theme` cookie and sets a default if it's missing. It also sets a custom header.
-   **URL Rewrites and Redirection**: Based on the request path, the middleware can rewrite the URL or redirect the user. In this example, requests to `/about` are rewritten to `/blog`, while other requests are redirected to the homepage.
-   **Path Matching**: The `config` object specifies that the middleware should only be active for the `/about` path.

By using middleware in Next.js, you can enhance your application's functionality by managing requests and responses more effectively, implementing global logic, and ensuring consistent behavior across your application.
