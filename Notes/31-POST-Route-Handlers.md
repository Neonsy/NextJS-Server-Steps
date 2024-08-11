# Setting Up a POST Route Handler in Next.js

In Next.js, you can create a POST route handler to handle data submissions.
Below is an example of how to implement this functionality.

## POST Handler Example

```typescript
// src/app/api/posts/route.ts

import { postData } from './posts';

export async function POST(request: Request) {
    const { content } = await request.json();

    const newPost = {
        id: postData.length + 1,
        content,
    };

    postData.push(newPost);

    return new Response(JSON.stringify(newPost), {
        headers: { 'Content-Type': 'application/json' },
        status: 201,
    });
}
```

### Explanation

-   **Request Handling**: The `POST` function extracts `content` from the incoming JSON request.
-   **Creating a New Post**: A new post is created and added to the `postData` array.
-   **Response**: Returns the newly created post with a `201` status code.

## Testing the Endpoint

To test the POST endpoint, send a JSON request like this:

```json
{
    "content": "This is a new post"
}
```

The server will respond with the created post.
