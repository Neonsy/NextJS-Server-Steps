# Navigating Programmatically (Redirects) in Next.js

In Next.js, you can navigate programmatically using the `useRouter` hook from the `next/navigation` module.
This allows you to redirect users to different pages in response to events, such as form submissions or button clicks.

## Example

To implement programmatic navigation, ensure that your component is a client component by including the `'use client';` directive.
Then, use the `useRouter` hook to access navigation methods.

### Example Code

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function ReportBug() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/'); // Redirects to the home page
    };

    return (
        <>
            <h1 className='ml-3 text-3xl font-bold'>Report Bug</h1>
            <button
                onClick={handleSubmit}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 my-3 py-2 px-4 rounded'>
                Report Bug
            </button>
        </>
    );
}
```

### Explanation

-   **`useRouter` Hook**: Provides access to the router object, allowing you to perform navigations.
-   **`router.push('/')`**: Redirects the user to the specified path (`'/'` in this case, which is the home page).
-   **Client Component**: The `'use client';` directive ensures that the component can use client-side features like hooks.

This setup is useful for scenarios where you need to redirect users after certain actions, such as submitting a form or completing a task, enhancing the user experience in your Next.js application.
