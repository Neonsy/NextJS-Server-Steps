# Nested Layouts in Next.js

Next.js allows you to nest layouts to create a hierarchy of layouts.
This feature enables you to apply specific layouts to particular sections of your application, providing more granular control over the structure and styling of your pages.

## Example: Nested Layout for Product Pages

In this example, a `layout.tsx` file is created in the `[productId]` directory.
This layout will be applied not just to the `productId` directory, but to all pages within it, including the reviews and specific review pages.

### Directory Structure

```
src
├── app
│   ├── products
│   │   ├── [productId]
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── reviews
│   │   │       ├── [reviewId]
│   │   │       │   └── page.tsx
│   │   │       └── page.tsx
```

### Explanation

- **Product Layout**: The `ProductLayout` component wraps all pages within the `[productId]` directory. It includes an aside for a sidebar and a main section for the page content.
- **Children Prop**: The `children` prop represents the content of the nested pages, such as the product details and reviews.

### Benefits of Nested Layouts

- **Modular Design**: Allows you to apply specific layouts to different sections of your application.
- **Reusability**: Common elements like sidebars or headers can be reused across related pages.
- **Consistency**: Ensures a consistent look and feel within specific sections of your application.

By using nested layouts, you can create a more organized and maintainable structure for your Next.js application, tailoring the user experience for different parts of your site.
