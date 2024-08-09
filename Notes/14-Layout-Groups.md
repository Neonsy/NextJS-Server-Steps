# Layout Grouping in Next.js

Layout grouping allows you to apply a common layout to multiple routes without affecting the URL structure.
This is done by creating a layout file in a route group, which is a folder with a name surrounded by parentheses `()`.

### Example Directory Structure

```
src
├── app
│   ├── (auth)
│   │   ├── layout.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── register
│   │       └── page.tsx
```

### Key Points

- **Route Group**: The `(auth)` folder groups routes without changing their URLs.
- **Common Layout**: The `layout.tsx` applies a consistent structure to both `/login` and `/register`.
- **Benefits**: Provides an organized structure and ensures consistency across related routes.

Layout grouping is a powerful way to manage layouts in Next.js while keeping your URL paths clean and intuitive.
