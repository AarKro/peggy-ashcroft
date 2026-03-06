import { useRef, useState, type FC } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import type { Page } from '../page/Page';
import { BurgerMenu } from '../burger-menu/BurgerMenu';
import './Header.scss';

type Props = {
  page: Page;
};

export const Header: FC<Props> = ({ page }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const savedScrollY = useRef<number>(0);
  const isDesktop = useDesktopLayout();

  const onNavigation = () => {
    setIsBurgerMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  const onBurgerClick = () => {
    if (isBurgerMenuOpen) {
      // closing: restore saved scroll position
      setIsBurgerMenuOpen(false);
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: savedScrollY.current });
    } else {
      // opening: save current position, then scroll to anchor
      savedScrollY.current = window.scrollY;
      setIsBurgerMenuOpen(true);
      document.body.style.overflow = 'hidden';
      window.location.href = `#${page}`;
    }
  }

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
    <>
      <header className='header'>
        <h1>{page}</h1>
        <button className={`header__burger${isBurgerMenuOpen ? ' header__burger--open' : ''}`} onClick={onBurgerClick}>
          <span />
          <span />
          <span />
        </button>
      </header>
      <BurgerMenu isOpen={isBurgerMenuOpen} onNavigation={onNavigation} />
    </>
  );
}