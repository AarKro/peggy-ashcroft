import type { FC, PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import './Page.scss';

export type Page = 'Title' | 'Life' | 'Works' | 'Awards';

type Props = {
  page: Page;
};
  
export const Page: FC<PropsWithChildren<Props>> = ({ page, children }) => {
  return (
    <section id={page} className='page'>
      <Header page={page} />
      {children}
    </section>
  );
}