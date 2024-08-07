# React Server Components

## Server Components

In Next.js, all components are Server components by default.
These components have some unique characteristics:

-   They can perform tasks like reading files or fetching data from a database.
-   They don't have the ability to use React hooks.
-   They can't handle user interactions directly.

## Client Components

To create a Client component in Next.js, you need to add the "use client" directive at the top of the component file.
Client components have different capabilities:

-   They can't perform server-side tasks like reading files or direct database access.
-   They have the ability to use React hooks.
-   They can manage and respond to user interactions.

To declare a Client component, add this line at the top of your component file:

```javascript
'use client';
```

This tells Next.js that the component should be rendered on the client side, enabling client-side interactivity and state management.
