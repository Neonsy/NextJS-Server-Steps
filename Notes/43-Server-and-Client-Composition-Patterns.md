# Server and Client Composition Patterns in Next.js

Next.js allows for the use of both Server Components and Client Components, each with their own strengths and use cases.

## Server Components

Server Components are ideal for:

-   Fetching data
-   Directly accessing backend resources
-   Protecting sensitive information (like access tokens and API keys) on the server
-   Keeping large dependencies server-side, which helps in reducing client-side JavaScript

## Client Components

Client Components are necessary for:

-   Adding interactivity
-   Handling event listeners (such as `onClick()`, `onChange()`, etc.)
-   Managing state and lifecycle effects (using hooks like `useState()`, `useReducer()`, `useEffect()`)
-   Using browser-exclusive APIs
-   Using custom hooks
-   Using React Class components

## Best Practices

1. Start with Server Components: Use them as the default for your application.
2. Add Client Components: Introduce them as needed for client-side interactivity.
3. Keep sensitive operations server-side: Utilize Server Components for operations involving sensitive data or backend resources.
4. Optimize for performance: Use Server Components to reduce the amount of JavaScript sent to the client.

## Example

```jsx
// ServerComponent.js
export default async function ServerComponent() {
  const data = await fetchDataFromDatabase();
  return <div>{data}</div>;
}

// ClientComponent.js
'use client'

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// App.js
import ServerComponent from './ServerComponent';
import ClientComponent from './ClientComponent';

export default function App() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
```

In this example, `ServerComponent` handles data fetching on the server, while `ClientComponent` manages interactive state on the client.
