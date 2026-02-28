import type { FC, PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import './Page.scss';

export type Page = 'Title' | 'Life' | 'Works' | 'Awards';

type Props = {
  page: Page;
  classNames?: string;
};
  
export const Page: FC<PropsWithChildren<Props>> = ({ page, classNames, children }) => {
  return (
    <section className={`page ${classNames}`}>
      <Header page={page} />
      {children}
    </section>
  );
}