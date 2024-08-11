# Dynamic GET Route Handler in Next.js

This example demonstrates how to create a GET route handler in Next.js to fetch a specific post by its ID using dynamic routing.

## Dynamic Route Handler Example

```typescript
// src/app/api/posts/[id]/route.ts

import { postData } from '../posts';

export function GET(_request: Request, context: { params: { id: string } }) {
    const { id } = context.params;

    if (Number.isNaN(Number(id))) {
        return new Response(JSON.stringify({ message: 'Invalid ID' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const post = postData.find((post) => post.id === Number(id));

    if (!post) {
        return new Response(JSON.stringify({ message: 'Post not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(post), {
        headers: { 'Content-Type': 'application/json' },
    });
}
```

### Explanation

-   **ID Validation**: Checks if the provided ID is a valid number. Returns a `400 Bad Request` if invalid.
-   **Post Lookup**: Searches for the post with the matching ID in `postData`.
-   **Response Handling**:
    -   Returns a `404 Not Found` if the post doesn't exist.
    -   Returns the post data with a `200 OK` if found.

## Usage

Access the endpoint with a URL like `/api/posts/1` to fetch the post with ID 1.
The handler will validate the ID and return the appropriate response.

> [!NOTE]
> You can use server actions to retrieve data from a database or other sources without needing to provide an API, if it's not necessary for your application.
