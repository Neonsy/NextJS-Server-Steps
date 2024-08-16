# Streaming in Next.js

Streaming is a rendering strategy that allows for progressive UI rendering from the server.

## Key Features

- Work is divided into chunks and streamed to the client as it's ready
- Users can see parts of the page immediately, before the entire content has finished rendering
- Improves initial page loading performance
- Enhances rendering of UI elements that rely on slower data fetches

## Implementation Example

Here's how you can implement streaming in Next.js using `Suspense`:

```jsx
import { Suspense } from 'react';
import ProductDetails from '@/components/ProductDetails';
import Reviews from '@/components/Reviews';

export default function Product() {
    return (
        <>
            <h1>Product Page</h1>
            
            <Suspense fallback={<h2>Loading...</h2>}>
                <ProductDetails />
            </Suspense>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Reviews />
            </Suspense>
        </>
    );
}
```

### ProductDetails Component

```jsx
export default async function ProductDetails() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <h2>Product Details Component</h2>;
}
```

### Reviews Component

```jsx
export default async function Reviews() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <h2>Review Component</h2>;
}
```

## How Streaming Works

1. The page starts rendering immediately with the available content
2. Placeholder content (fallbacks) is shown for components still loading
3. As each component finishes loading, it replaces its fallback content
4. This process continues until all components are rendered

## Benefits

- Faster initial page load
- Improved user experience for content with varying load times
- Reduces blocking time for slower data fetches

## Use Cases

- Complex pages with multiple data sources
- Pages with some fast-loading and some slow-loading components
- Improving perceived performance on slower connections