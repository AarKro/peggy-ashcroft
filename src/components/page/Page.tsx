import type { FC, PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import { useStickAfterScroll } from '../../hooks/useStickAfterScroll';
import './Page.scss';

export type Page = 'Title' | 'Life' | 'Works' | 'Awards';

type Props = {
  page: Page;
};

export const Page: FC<PropsWithChildren<Props>> = ({ page, children }) => {
  const stickyRef = useStickAfterScroll();

  return (
    <section id={page} className='page' aria-label={page} ref={stickyRef}>
      <Header page={page} />
      {children}
    </section>
  );
}