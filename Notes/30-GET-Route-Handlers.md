# Setting Up a GET Route Handler in Next.js

In Next.js, you can create custom route handlers to serve data via RESTful endpoints.
This example demonstrates how to set up a GET route handler to return a list of posts.

## Directory Structure

To create a route handler, organize your files within the `src/app/api` directory:

```
src
└── app
    └── api
        └── posts
            ├── route.ts
            └── posts.ts
```

## Implementing the Route Handler

### Step 1: Define Your Data

First, define the data you want to serve in a separate file, `posts.ts`:

> [!NOTE]
> You would usually have data in something like a database, or in a markdown collection etc.

```typescript
// src/app/api/posts/posts.ts

export const postData = [
    {
        id: 1,
        content: 'This is the content of post 1',
        author: 'John Doe',
    },
    {
        id: 2,
        content: 'This is the content of post 2',
        author: 'Jane Smith',
    },
    {
        id: 3,
        content: 'This is the content of post 3',
        author: 'Bob Johnson',
    },
];
```

### Step 2: Create the Route Handler

Next, create the route handler in `route.ts` to serve the data:

```typescript
// src/app/api/posts/route.ts

import { postData } from './posts';

export function GET() {
    return new Response(JSON.stringify(postData), {
        headers: { 'Content-Type': 'application/json' },
    });
}
```

### Explanation

-   **Data Definition**: The `postData` array in `posts.ts` contains the posts you want to serve. Each post has an `id`, `content`, and `author`.
-   **GET Handler**: The `GET` function in `route.ts` handles GET requests to the `/api/posts` endpoint. It returns a JSON response containing the `postData`.

-   **Response Object**: The `Response` object is used to send the data back to the client. The `Content-Type` header is set to `application/json` to indicate that the response is JSON.

## Accessing the Endpoint

Once set up, you can access the endpoint by navigating to `/api/posts` in your browser or using a tool like `curl`, `Thunder Client` or `Postman`.
The endpoint will return the JSON data defined in `postData`.

By using route handlers in Next.js, you can efficiently create and manage server-side logic, providing dynamic data to your application without needing a separate server setup.
