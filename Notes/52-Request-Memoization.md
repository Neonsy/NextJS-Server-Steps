# Request Memoization in Next.js

Request memoization is a technique that deduplicates requests for the same data within a single render pass.
This approach allows for re-use of data in a React Component tree, prevents redundant network calls, and enhances performance.

## How It Works

1. For the initial request, data is fetched from an external source and the result is stored in memory.
2. Subsequent requests for the same data within the same render pass retrieve the result from memory, bypassing the need to make the request again.

## Benefits

1. **Enhanced Performance**: Reduces the number of network calls.
2. **Simplified Data Fetching**: Eliminates the need to fetch data at the top of the tree and pass props between components.
3. **Efficient Resource Usage**: Prevents redundant requests for the same data.

## Impact on Component Design

This optimization simplifies data fetching within a component tree.
When the same data is needed across different components in a route (e.g., in a Layout, Page, and multiple components):

-   It eliminates the need to fetch data at the top of the tree and pass props between components.
-   Data can be fetched directly within the components that require it, without concerns about the performance implications of multiple network requests for the same data.

## Important Notes

1. Request memoization is a React feature, not specifically a Next.js feature.
2. Memoization only applies to the GET method in fetch requests.
3. Memoization only applies within the React Component tree. It does not extend to fetch requests in Route Handlers as they are not part of the React component tree.
4. For cases where `fetch` is not suitable (e.g., some database clients, CMS clients, or GraphQL clients), you can use the React `cache` function to memoize functions.

> [!NOTE]
> This won't be the default behavior in React 19, but it will be available as an opt-in feature.

## Example Use Case

```jsx
async function getData() {
    const res = await fetch('https://api.example.com/data');
    return res.json();
}

// This component can safely call getData() multiple times
// The actual fetch will only happen once
export default async function Page() {
    const data1 = await getData();
    const data2 = await getData();
    // data1 and data2 will be the same, but only one network request was made
}
```

By leveraging request memoization, you can create more efficient and performant React applications, especially when dealing with complex component trees that require the same data in multiple places.
