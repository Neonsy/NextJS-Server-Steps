# Handling Cookies in Next.js Route Handlers

Cookies are small pieces of data sent by a server to a user's web browser.
They are used for various purposes, such as session management, personalization, and tracking user behavior.

## Common Uses of Cookies

1. **Session Management**: Manage user logins, sessions, and shopping carts.
2. **Personalization**: Store user preferences, such as themes and language settings.
3. **Tracking**: Record and analyze user behavior for analytics purposes.

## Example: Setting and Retrieving Cookies in a Route Handler

Here's how you can set and retrieve cookies in a Next.js route handler:

```typescript
import { type NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    const headersFromRequest = new Headers(request.headers);
    const headersFromFunction = headers();

    // Setting a cookie
    cookies().set('results', '12');

    // Retrieving a cookie
    const theme = request.cookies.get('theme');

    // Logging headers and cookies
    console.log(headersFromRequest.get('Authorization'));
    console.log(headersFromFunction.get('Authorization'));

    console.log(theme);
    console.log(cookies().get('results'));

    // Returning a response with a cookie
    return new Response('<h1>API Data</h1>', {
        headers: {
            'Content-Type': 'text/html',
            'Set-Cookie': 'theme=synthwave',
        },
    });
}
```

### Explanation

-   **Setting Cookies**: Use `cookies().set()` to set a cookie. In this example, `results` is set to `12`.
-   **Retrieving Cookies**: Use `request.cookies.get()` to retrieve a cookie. Here, the `theme` cookie is accessed.

-   **Logging**: The example logs the `Authorization` header and the cookies to the console for debugging purposes.

-   **Response with Cookies**: The response includes a `Set-Cookie` header to set the `theme` cookie to `synthwave`.

By managing cookies in Next.js route handlers, you can enhance the user experience through session management, personalization, and tracking, while maintaining control over data storage and retrieval on the client side.
