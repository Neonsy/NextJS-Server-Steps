# Custom 404 Pages in Next.js

Next.js allows you to create custom 404 pages to handle cases when a user navigates to a resource that doesn't exist.
You can create both global and specific 404 pages.

## Creating a Global 404 Page

To create a global 404 page, add a `not-found.js` or `not-found.tsx` file in the `app` directory.
This file should export a React component that will be displayed whenever a page is not found.

### Example

```tsx
// app/not-found.tsx
export default function NotFound() {
    return <h1>404 - Page Not Found</h1>;
}
```

This component will be used as the default 404 page for your entire application.

## Creating Specific 404 Pages

You can also create more specific 404 pages for particular sections of your site.
To do this, add a `not-found.js` or `not-found.tsx` file in the specific directory where you want a custom 404 page.

### How It Works

-   **Global 404 Page**: If you create the `not-found` file in the `app` folder, it serves as the default 404 page for your entire application.
-   **Specific 404 Page**: If you create a `not-found` file in a specific directory (e.g., `app/products/not-found.tsx`), it will be used for 404 errors within that directory, overriding the global 404 page.

## Programmatically Triggering a 404 Page

You can also programmatically trigger a 404 page using the `notFound` function from `next/navigation`.
This allows you to conditionally display a 404 page based on certain logic.

### Example

```tsx
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { productId: string } }) {
    const product = getProductById(params.productId); // Assume this function fetches a product

    if (!product) {
        notFound(); // Triggers the 404 page
    }

    return <h1>Product {params.productId}</h1>;
}
```

In this example, if the product with the specified ID doesn't exist, the `notFound` function is called to display the 404 page.

By using these techniques, you can provide a better user experience by customizing the 404 pages for different parts of your application.
