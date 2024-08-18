# Loading and Error States in Next.js App Router

## Loading States

Traditionally in React, you might manage loading states by creating separate variables and conditionally rendering UI based on their values.
In Next.js App Router, you can implement a loading state by defining and exporting a React component in a `loading.tsx` file.

To implement a loading state:

-   Define and export a React component in `loading.tsx`
-   Next.js will automatically use this component to show a loading state while the main component is being loaded

## Error States

For handling errors in Next.js App Router:

-   Define and export a React component in `error.tsx`
-   This error component will be displayed if an error occurs during rendering or data fetching in the main component

Important note: The error state component might need to be a client component, especially if you want to use hooks like `useEffect` to log errors while displaying a general message to the user.
For example:

```jsx
'use client';
import { useEffect } from 'react';

export default function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.error(`${error}`);
    }, [error]);

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-2xl text-red-500'>Error fetching users data</div>
        </div>
    );
}
```

In this case, the "use client" directive is necessary to use the `useEffect` hook for error logging.

## Benefits

-   Simplified state management: No need to manually manage loading or error states in your main components
-   Automatic handling: Next.js automatically handles the display of loading and error states
-   Improved user experience: Provides clear feedback to users during loading and error scenarios

By utilizing these features, you can create more robust and user-friendly applications with minimal additional code.
