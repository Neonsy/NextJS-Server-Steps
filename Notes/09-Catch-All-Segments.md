# Catch-All Segments in Next.js

Catch-all segments in Next.js allow you to match any remaining path segments in a URL. This is useful for creating flexible routes that can handle various URL patterns.

## Using Catch-All Segments

To create a catch-all segment, use the `[...slug]` syntax, where `slug` is a common naming convention for these segments.
This captures all remaining path segments as an array of strings.

### Accessing Segments

Since `slug` is an array, you can access individual segments using array indexing, like `params.slug[0]`, `params.slug[1]`, etc.

### Making the Parameter Optional

To make the `/docs` page accessible without any additional segments, you need to make the `slug` parameter optional.
This can be achieved by using `[[...slug]]`. In TypeScript, you'll also need to add a `?` to the parameter type to indicate it's optional.

### Example Code

Here's how you can implement this in a Next.js page:

```tsx
export default function Docs({ params }: { params: { slug?: string[] } }) {
    if (params.slug?.length === 1) {
        return <h1>Viewing Docs feature {params.slug}</h1>;
    } else if (params.slug?.length === 2) {
        return (
            <h1>
                Viewing Docs Example {params.slug} for feature {params.slug}
            </h1>
        );
    } else {
        return <h1>Docs Home Page</h1>;
    }
}
```

### How It Works

-   **Docs Home Page**: If no segments are provided, it displays the "Docs Home Page."
-   **Single Segment**: If one segment is provided, it displays "Viewing Docs feature {params.slug\[0\]}."
-   **Two Segments**: If two segments are provided, it displays "Viewing Docs Example {params.slug\[1\]} for feature {params.slug\[0\]}."

This setup allows you to create versatile routes that can adapt to different URL structures, providing a dynamic way to handle documentation pages or similar scenarios.
