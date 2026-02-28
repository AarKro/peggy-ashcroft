import type { FC, PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import './Page.scss';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className='page'>
      <Header/>
      {children}
    </section>
  );
}