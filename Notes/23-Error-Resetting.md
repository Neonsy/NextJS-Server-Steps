# Resetting Error Boundaries in Next.js

In Next.js, error boundaries can be used to catch errors in your application and display a custom error UI.
You can also provide functionality to recover from errors by resetting the error boundary, allowing users to retry the operation that caused the error.

## Example: Error Handling with Recovery

Here's an example of how to implement error handling with a reset feature:

### About Page Component

This component randomly throws an error to simulate an error scenario.

```tsx
'use client';

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function About() {
    if (randomNumber(0, 1) === 1) {
        throw new Error('An error has occurred on the About page');
    }
    return <h1>About Page</h1>;
}
```

### Error Wrapper Component

This component catches the error and provides a button to reset the error boundary, allowing the user to retry the operation.

```tsx
'use client';

export default function ErrorWrapper({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <>
            <h1>Error Page</h1>
            <p>{error.message}</p>
            <button
                onClick={reset}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 my-3 py-2 px-4 rounded'>
                Try again
            </button>
        </>
    );
}
```

### How It Works

-   **Error Simulation**: The `About` component randomly throws an error using the `randomNumber` function.
-   **Error Boundary**: The `ErrorWrapper` component acts as an error boundary, catching errors thrown by the `About` component.
-   **Reset Functionality**: The `reset` function is provided to the `ErrorWrapper` component, allowing it to reset the error boundary when the "Try again" button is clicked. This attempts to re-render the `About` component, giving it another chance to render without errors.

By implementing error boundaries with reset functionality, you can create a more resilient and user-friendly application, allowing users to recover from errors without needing to refresh the entire page.
