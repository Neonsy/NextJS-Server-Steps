# Nested Routes in Next.js

Next.js allows you to create nested routes by organizing your files and directories within the `app` directory.
This structure maps directly to URL paths, making it easy to manage complex routing scenarios.

## Scenario 3: Nested Routes for `/blog`, `/blog/first`, and `/blog/second`

To render pages for `/blog`, `/blog/first`, and `/blog/second`, follow these steps:

1. **Create a Route for `/blog`**:

    - Inside the `app` directory, create a `blog` directory.
    - Add a `page.tsx` file inside the `blog` directory:

    ```tsx
    export default function Blog() {
        return <h1>Blog Home</h1>;
    }
    ```

2. **Create a Route for `/blog/first`**:

    - Inside the `blog` directory, create a `first` directory.
    - Add a `page.tsx` file inside the `first` directory:

    ```tsx
    export default function FirstBlogPost() {
        return <h1>First Blog Post</h1>;
    }
    ```

3. **Create a Route for `/blog/second`**:

    - Inside the `blog` directory, create a `second` directory.
    - Add a `page.tsx` file inside the `second` directory:

    ```tsx
    export default function SecondBlogPost() {
        return <h1>Second Blog Post</h1>;
    }
    ```

By organizing your files in this way, Next.js automatically handles the routing for these nested paths, allowing you to easily create and manage complex route hierarchies.
