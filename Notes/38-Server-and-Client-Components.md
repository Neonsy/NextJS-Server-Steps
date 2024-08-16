# Server and Client Components in Next.js

As mentioned in [RSC Overview](/Notes/04-RSC-Overview.md), Next.js supports both Server Components and Client Components.

- Server Components are rendered on the server
- Client Components are rendered on the client

## Default Behavior

By default, Next.js uses Server Components.

## Creating Client Components

When creating a client component, you need to add the `'use client'` directive at the top of the component file:

```javascript
'use client'

// Your component code here
```

## Rendering Process

- Server Components are only rendered on the server.
- Client Components are rendered on the server once and then on the client.

### Client Component Optimization

A client component is rendered on the server once as part of the optimization process.
This results in the user not staring at a blank screen while the component loads.

### Testing the Rendering Process

You can test this behavior with a log statement.
For a client component, the log will appear in the server console once, and then in the client console on subsequent renders.

# Key Takeaway

Server components are exclusively rendered on the server, whereas client components have a hybrid rendering approach:
They're rendered once on the server for initial optimization, and then rendered on the client for interactivity and updates.