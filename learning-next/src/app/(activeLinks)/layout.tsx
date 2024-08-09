'use client';

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
