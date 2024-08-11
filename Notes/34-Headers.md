# Handling HTTP Headers in Next.js Route Handlers

HTTP headers are crucial for managing metadata in API requests and responses.
In Next.js, you can access and manipulate these headers within route handlers.

## Request Headers

Request headers are sent by the client to the server and include important information that helps the server process the request. Common request headers include:

-   **User-Agent**: Identifies the client software (e.g., browser and operating system).
-   **Accept**: Specifies the content types the client can process (e.g., `text/html`, `application/json`).
-   **Authorization**: Used for client authentication to the server.

## Response Headers

Response headers are sent from the server back to the client, providing information about the server and the response data.
Common response headers include:

-   **Content-Type**: Indicates the media type of the response (e.g., `text/html`, `application/json`).

## Example: Accessing and Setting Headers in a Route Handler

Here's how you can access request headers and set response headers in a Next.js route handler:

```typescript
import { type NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
    const headersFromRequest = new Headers(request.headers);
    const headersFromFunction = headers();

    // Accessing request headers
    console.log(headersFromRequest.get('Authorization'));
    console.log(headersFromFunction.get('Authorization'));

    // Setting response headers
    return new Response('<h1>API Data</h1>', {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
```

### Explanation

-   **Accessing Request Headers**: Use `request.headers` to access incoming headers. You can retrieve specific headers like `Authorization` using `get()`.
-   **Setting Response Headers**: When returning a response, specify headers in the `Response` object. For example, setting `Content-Type` to `text/html` indicates that the response contains HTML content.

By effectively managing HTTP headers in Next.js route handlers, you can enhance communication between the client and server, ensuring that both parties understand the content and context of requests and responses.
