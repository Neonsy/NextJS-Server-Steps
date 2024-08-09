# Designing Active Links in Next.js

To style active links in your Next.js application, you can use the `usePathname` hook from the `next/navigation` module.
This allows you to dynamically apply styles to links based on the current URL.

## Using the `usePathname` Hook

The `usePathname` hook returns the current pathname of the browser's URL, which you can use to determine if a link is active.

### Client-Side Rendering

Ensure that the file (e.g., `layout.tsx`) includes the `'use client';` directive to enable client-side rendering.

```tsx
'use client';
```

### Example

Here's an example of how to use the `usePathname` hook to style active links:

```tsx
import { usePathname } from 'next/navigation';

const navigationLinks = [
  { href: '/page1', label: 'Page 1' },
  { href: '/page2', label: 'Page 2' },
  { href: '/page3', label: 'Page 3' },
];

export default function ActiveLinksLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {children}
      {navigationLinks.map((link) => {
        const isActive = link.href === pathname;
        let linkStyle = 'text-blue-700 hover:text-blue-500 px-3 py-2 rounded-md underline underline-offset-2';

        if (isActive) {
          linkStyle = linkStyle
            .replace('text-blue-700', 'text-red-700')
            .replace('hover:text-blue-500', 'hover:text-red-500');
        }

        return (
          <a key={link.label} href={link.href} className={linkStyle}>
            {link.label}
          </a>
        );
      })}
    </>
  );
}
```

### Explanation

- **`usePathname` Hook**: Retrieves the current pathname, allowing you to check if a link is active.
- **Active Link Styling**: The `isActive` variable determines if the current link matches the pathname. If it does, the link's style is updated to indicate it's active (e.g., changing text color).
- **Dynamic Styling**: The example dynamically adjusts the link's style based on its active status, enhancing user navigation experience.

By using the `usePathname` hook, you can effectively manage active link styles in your Next.js application, providing clear visual cues for users navigating your site.
