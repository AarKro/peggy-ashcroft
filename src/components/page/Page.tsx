import type { FC, PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import { useStickAfterScroll } from '../../hooks/useStickAfterScroll';
import './Page.scss';

export type Page = 'Title' | 'Life' | 'Works' | 'Awards';

type Props = {
  page: Page;
  activePage: Page;
};

export const Page: FC<PropsWithChildren<Props>> = ({ page, activePage, children }) => {
  const stickyRef = useStickAfterScroll();

  return (
    // tabIndex allows programmatic focus after scroll navigation
    <section id={page} className='page' aria-label={page} ref={stickyRef} tabIndex={-1}>
      <Header page={page} activePage={activePage} />
      {children}
    </section>
  );
}