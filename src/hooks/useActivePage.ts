import { useEffect, useState } from 'react';
import type { Page } from '../components/page/Page';

const pages: Page[] = ['Title', 'Life', 'Works', 'Awards'];

export const useActivePage = (): Page => {
  const [activePage, setActivePage] = useState<Page>('Title');

  useEffect(() => {
    const visiblePages = new Set<Page>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const page = entry.target.id as Page;
          if (entry.isIntersecting) {
            visiblePages.add(page);
          } else {
            visiblePages.delete(page);
          }
        });

        // Active page is the last visible one in document order
        for (let i = pages.length - 1; i >= 0; i--) {
          if (visiblePages.has(pages[i])) {
            setActivePage(pages[i]);
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    pages.forEach((page) => {
      const el = document.getElementById(page);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activePage;
};
