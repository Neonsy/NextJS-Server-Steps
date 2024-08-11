# Filtering Posts with URL Query Parameters in Next.js

This example demonstrates how to create a GET route handler in Next.js that filters posts based on a search term provided via URL query parameters.

## Example Data

```typescript
export const postData = [
    {
        id: 1,
        content: 'This is the very first post',
    },
    {
        id: 2,
        content: "In this post, we'll change the text to be more unique",
    },
    {
        id: 3,
        content: 'Is this the last post?',
    },
];
```

## Route Handler Implementation

```typescript
// src/app/api/posts/route.ts

import { NextRequest } from 'next/server';
import { postData } from './posts';

export function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams;
    const searchTerm = query.get('search');

    if (searchTerm) {
        const filteredPosts = postData.filter((post) => post.content.includes(searchTerm));

        return new Response(JSON.stringify(filteredPosts), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(postData), {
        headers: { 'Content-Type': 'application/json' },
    });
}
```

### Explanation

-   **Query Parameters**: The `NextRequest` object is used to access URL query parameters. The `search` parameter is extracted to filter posts.
-   **Filtering Logic**: If a `search` term is provided, the posts are filtered to include only those whose content contains the search term.
-   **Response**:
    -   Returns the filtered posts if a search term is present.
    -   Returns all posts if no search term is provided.

## Usage

To filter posts, make a GET request to the endpoint with a query parameter, such as `/api/posts?search=first`.
The server will return posts containing the specified search term in their content.
