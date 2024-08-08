# Nested Dynamic Routing in Next.js

Next.js allows you to create nested dynamic routes, enabling you to handle complex URL structures.
This is particularly useful for scenarios like displaying product information and related reviews.

## Scenario 5: Nested Dynamic Routes for `/product/[productId]/reviews/[reviewId]`

To display information about a specific product and its reviews, you'll need to set up the following directory structure:

```
src
├── app
│   ├── products
│   │   ├── [productId]
│   │   │   ├── page.tsx
│   │   │   └── reviews
│   │   │       ├── [reviewId]
│   │   │       │   └── page.tsx
│   │   │       └── page.tsx
```

### Content of Reviews Page

In the `products/[productId]/reviews/page.tsx` file, add the following code:

```tsx
export default function Reviews({ params }: { params: { productId: string } }) {
    return <h1>All Reviews for Product {params.productId}</h1>;
}
```

### Content of Dynamic Review Page

In the `products/[productId]/reviews/[reviewId]/page.tsx` file, add the following code:

```tsx
export default function Review({ params }: { params: { productId: string; reviewId: string } }) {
    return (
        <h1>
            Review {params.reviewId} for Product {params.productId}
        </h1>
    );
}
```

### How It Works

-   The `Reviews` component shows all reviews for a product using the `productId`.
-   The `Review` component displays a specific review for a product, using both `productId` and `reviewId` from the URL.

This setup allows you to create a flexible and organized routing structure for handling nested dynamic routes in your Next.js application.
