# Loading Component in Next.js

In Next.js, you can create a `loading.tsx` or `loading.js` file to define a loading UI for your application.
This component is automatically used to display a loading state while your pages or data are being fetched.

## Key Features

-   **Automatic Display**: The loading component is shown automatically when navigating between pages or when data fetching is in progress.
-   **File Location**: Place the `loading.tsx` or `loading.js` file in the same directory as your `page.tsx` or `page.js` file to apply it to that specific route.
-   **Customization**: You can customize the loading UI to match your application's design and provide a better user experience during loading times.

## Example Usage

```tsx
// app/loading.tsx
export default function Loading() {
    return (
        <div className='loading'>
            <p>Loading...</p>
        </div>
    );
}
```

## Benefits

-   **Improved User Experience**: Provides visual feedback to users, indicating that content is being loaded.
-   **Seamless Transitions**: Enhances the perception of speed and responsiveness in your application.

Using a loading component in Next.js helps manage user expectations and provides a smoother navigation experience.
