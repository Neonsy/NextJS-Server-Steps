# Rendering Lifecycle in Next.js

## Three Key Elements
When working with React Server Components, it's important to consider three elements:
1. Your browser (the client)
2. The server side, Next.js (the framework)
3. React (the library)

## RSC Loading Sequence

1. **Initial Request**: The browser requests a page.
2. **Route Matching**: Next.js app router matches the requested URL to a server component.
3. **Server Component Rendering**: Next.js instructs React to render the server component.
4. **RSC Payload Generation**: React renders the server component and its child server components, converting them into a special JSON format known as the RSC payload.
5. **Suspension Handling**: If any server component suspends, React pauses rendering of that subtree and sends a placeholder value.
6. **Client Component Preparation**: Client components are prepared with instructions for later in the lifecycle.
7. **HTML Generation**: Next.js uses the RSC payload to generate HTML on the server.
8. **Streaming**: The HTML is streamed to the browser for an immediate, non-interactive preview. Next.js also streams the RSC payload.
9. **Progressive Rendering**: In the browser, Next.js processes the streamed React response.
10. **UI Rendering**: React uses the RSC payload and client component instructions to progressively render the UI.
11. **Final UI State**: Once all components are loaded, the final UI state is presented.
12. **Hydration**: Client components undergo hydration, transforming the app from a static display into an interactive experience.

## Update Sequence

1. **Refetch Request**: The browser requests a refetch of a specific UI (e.g., a full route).
2. **Component Matching**: Next.js processes the request and matches it to the requested server component.
3. **Rendering**: React renders the component tree (similar to initial loading, but without HTML generation).
4. **Streaming**: Next.js progressively streams the response data back to the client.
5. **Client-side Rendering**: Next.js triggers a render of the route using the new output.
6. **Reconciliation**: React reconciles the new rendered output with existing components on screen.
7. **DOM Updates**: React updates the DOM while preserving crucial UI states (e.g., focus, input values).

## Server Rendering Strategies

Next.js employs three server rendering strategies:
1. Static Rendering
2. Dynamic Rendering
3. Streaming

Each strategy offers different benefits for performance and data freshness.