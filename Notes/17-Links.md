# Navigational Links in Next.js

To provide navigational links in your Next.js application, you can use the `Link` component from the `next/link` module.
This component extends the `a` element, adding functionality for client-side navigation.

## Basic Usage

The `Link` component allows you to create links with the same ease as using the `a` element.
You can place the visible text or elements between the opening and closing `Link` tags.

### Example

```tsx
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href='/about'>About Us</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
  );
}
```

## Attributes

- **`href`**: Specifies the URL to navigate to. This is similar to the `href` attribute in a standard `a` element.

- **`replace`**: When set to `true`, the `replace` attribute replaces the current URL in the browser history with the new URL specified in the `href` attribute. This means the browser will navigate to the new URL without adding a new entry to the history.

### Example with `replace`

```tsx
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href='/about' replace>
        About Us
      </Link>
    </nav>
  );
}
```

In this example, clicking the "About Us" link will navigate to the `/about` page without adding a new entry to the browser history.

Using the `Link` component in Next.js ensures efficient client-side navigation, enhancing the performance and user experience of your application.
