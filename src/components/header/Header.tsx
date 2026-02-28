import { type FC } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import type { Page } from '../page/Page';
import Burger from '../../assets/icons/burger.svg';
import './Header.scss';

type Props = {
  page: Page;
};

export const Header: FC<Props> = ({ page }) => {
  const isDesktop = useDesktopLayout();

  // hide header on title page
  if (page === 'Title') {
    return;
  }

  if (isDesktop)  {
    return (
      <header className='header'>
        <nav className='header__nav'>
          <a href="#Life" className='header__nav-item'>Life</a>
          <a href="#Works" className='header__nav-item'>Works</a>
          <a href="#Awards" className='header__nav-item'>Awards</a>
        </nav>
      </header>
    );
  }

  return (
    <header className='header'>
      <h1 className='header__title'>{page}</h1>
      <div className='header__burger'>
        <Burger />
      </div>
    </header>
  );
}