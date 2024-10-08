# Title Object in Next.js Metadata

Next.js allows you to define metadata for your pages, including a `title` object with specific properties to control how page titles are displayed.

## Title Object Properties

- **default**: Specifies the default title for your application. This title is used when no specific title is provided for a page.
- **template**: Defines a template for constructing page titles. The `%s` placeholder is replaced with the specific page title. For example, if the template is `"%s | NeonSpace"`, a page with the title "Home" will be displayed as "Home | NeonSpace".

## Example Usage

### Defining the Metadata

```tsx
export const metadata = {
  title: {
    default: 'Next.js Tutorial - NeonSpace',
    template: '%s | NeonSpace',
  },
  description: 'Generated by Next.js',
};
```

### Using the Template

Here's how to define metadata for a page using the title with the template:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About', // This will use the template to become "About | NeonSpace"
  description: 'About page description',
};
```

In this example, the page title will be "About | NeonSpace" because the template is applied.

### Using Absolute Title

Here's how to define metadata for a page using an absolute title, bypassing the template:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Special Page - NeonSpace', // This title is used as is, without the template
  },
  description: 'Special page description',
};
```

In this example, the title "Special Page - NeonSpace" is used exactly as specified, without applying the template.

### How It Works

- **Template Usage**: When a simple string is provided for the title, the template is applied, resulting in a formatted title like "About | NeonSpace".
- **Absolute Title**: When using an object with `absolute`, the title is used directly, ignoring the template.

This setup provides flexibility in managing page titles across your Next.js application, allowing you to choose between templated and absolute titles as needed.
