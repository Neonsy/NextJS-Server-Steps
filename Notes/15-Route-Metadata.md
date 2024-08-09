# Route Metadata in Next.js

Next.js allows you to define metadata for your routes, which can be used to enhance SEO and provide additional information about your pages.

## How to Define Metadata

1. **Static Metadata Object**: Export a static object containing metadata.
2. **Dynamic Metadata Function**: Export a `generateMetadata` function for dynamic metadata generation.

## Metadata Rules

- **Scope**: Both `layout.tsx` and `page.tsx` files can export metadata. Metadata in a layout applies to all pages within that layout, while metadata in a page applies only to that specific page.
- **Order**: Metadata is read in order, from the root level down to the final page level.
- **Combination**: When metadata exists in multiple places for the same route, they are combined. However, page-level metadata will replace layout-level metadata if they share the same properties.

## Example Code

Here's an example of how to use dynamic metadata in a Next.js page:

```tsx
import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Product Nr. {params.productId} - Details Page</h1>
      <p>This is the product details page for the product with ID {params.productId}.</p>
    </>
  );
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product Details - ${params.productId}`,
  };
};
```

### Explanation

- **Dynamic Metadata**: The `generateMetadata` function dynamically sets the page title based on the `productId`.
- **Page-Level Metadata**: This metadata applies specifically to the `ProductDetails` page, allowing for tailored SEO and page information.

> [!NOTE]
> The `generateMetadata` function can also be used `async` to fetch metadata from an external API.

This approach provides flexibility in managing metadata across your Next.js application, ensuring that each page and layout can have tailored metadata as needed.
