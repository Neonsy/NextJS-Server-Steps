# Static Rendering in Next.js

Static rendering is a server rendering strategy where HTML pages are generated at the time of building the application.

## Key Features

- Pages are built once and **can** be cached by a CDN
- Served to the client almost instantly
- Rendering work is shared among different users, boosting performance
- Particularly useful for:
  - Blog pages
  - E-commerce product pages
  - Documentation
  - Marketing pages

## How to Statically Render

Static rendering is the default rendering strategy in the Next.js app router.
All routes are automatically prepared at build time without additional setup.

## Static Rendering Summary

1. **HTML Generation**: HTML is generated at build time
2. **RSC Payload**: Along with HTML, an RSC payload is created for each component
3. **JavaScript Chunks**: JavaScript chunks are produced for client-side component hydration in the browser
4. **Direct Navigation**: If you navigate directly to a page route, the corresponding HTML file is served
5. **Client-Side Navigation**: If you navigate to the route from a different one, the route is created on the client side using the RSC payload and JavaScript chunks, without additional server requests

## Benefits

- Great for performance
- Ideal for content that doesn't change frequently