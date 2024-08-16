# Context Providers in Next.js

## The Challenge with Server Components

React context is not supported in Server Components.
Attempting to create a context at the root of your application (e.g., in `layout.tsx`) will result in an error.

If you try to solve this by adding the `'use client'` directive to the root layout, it will force the entire component tree to become Client Components, which is usually not desirable as it negates the benefits of Server Components.

## Solution: Client Component Wrapper

To address the challenge of using context with Server Components, create a separate Client Component that wraps the context provider around its children.

### Example: Theme Context

Create a new file `ThemeContext.tsx`:

```tsx
'use client';
import { createContext, useContext } from 'react';

type Theme = {
    colors: {
        primary: string;
        secondary: string;
    };
};

const defaultTheme: Theme = {
    colors: {
        primary: '#00ccff',
        secondary: '#cc33ff',
    },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
```

Now, use this provider in your `layout.tsx`:

```tsx
import { ThemeProvider } from '@/components/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
```

You can now use the theme in any Client Component:

```tsx
'use client';

import { useTheme } from '@/components/ThemeContext';

export default function MyComponent() {
    const theme = useTheme();

    return <div style={{ color: theme.colors.primary }}>This text is in the primary color.</div>;
}
```

## Key Points

-   The `ThemeProvider` is a Client Component (note the `'use client'` directive).
-   It wraps its children with the context provider.
-   The `useTheme` hook is exported for easy access to the theme in other components.
-   This approach allows you to use context without forcing your entire app to be client-side rendered.
