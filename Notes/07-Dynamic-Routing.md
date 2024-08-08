# Dynamic Routes in Next.js

Next.js supports dynamic routing, allowing you to create pages that respond to dynamic segments in the URL.
This is useful for scenarios like displaying product details based on a product ID.

## Scenario 4: Dynamic Routes for `/products` and `/products/[id]`

To create a page that displays a list of products and another page that shows product details for a specific ID, follow these steps:

1. **Create a Route for `/products`**:

    - Inside the `app` directory, create a `products` directory.
    - Add a `page.tsx` file inside the `products` directory:

    ```tsx
    export default function ProductsList() {
        return (
            <>
                <h1>Products List</h1>
                <p>This page will display a list of products.</p>
            </>
        );
    }
    ```

2. **Create a Dynamic Route for `/products/[id]`**:

    - Inside the `products` directory, create a `[productId]` directory. The square brackets `[]` indicate a dynamic segment.
    - Add a `page.tsx` file inside the `[productId]` directory:

    ```tsx
    export default function ProductDetails({ params }: { params: { productId: string } }) {
        return (
            <>
                <h1>Product Nr. {params.productId} - Details Page</h1>
                <p>This is the product details page for the product with ID {params.productId}.</p>
            </>
        );
    }
    ```

### How It Works

-   The `ProductsList` component renders a list of products at the `/products` route.
-   The `ProductDetails` component uses the `params` prop to access the `productId` from the URL. This allows you to display details specific to the product ID provided in the URL.

By using dynamic segments, you can create flexible and scalable routing structures in your Next.js applications.
