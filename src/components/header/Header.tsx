import { useRef, useState, type FC, type FocusEvent, type MouseEvent } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import type { Page } from '../page/Page';
import { BurgerMenu } from '../burger-menu/BurgerMenu';
import { getSectionTop, scrollToSection } from '../../utils/scrollToSection';
import './Header.scss';

type Props = {
  page: Page;
  activePage: Page;
};

export const Header: FC<Props> = ({ page, activePage }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const savedScrollY = useRef<number>(0);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const isDesktop = useDesktopLayout();
  const isVisible = activePage === page;

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (id) scrollToSection(id);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
    document.body.style.overflow = 'auto';
    burgerButtonRef.current?.focus(); // return focus to trigger button
    window.scrollTo({ top: savedScrollY.current, behavior: 'smooth' });
  };

  const onBurgerNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e);
    setIsBurgerMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  const onBurgerClick = () => {
    if (isBurgerMenuOpen) {
      // closing: restore saved scroll position
      closeBurgerMenu();
    } else {
      // opening: save current position, then scroll to anchor
      savedScrollY.current = window.scrollY;
      setIsBurgerMenuOpen(true);
      document.body.style.overflow = 'hidden';
      scrollToSection(page, 300);
    }
  }


  // hide header on title page
  if (page === 'Title') {
    return null;
  }

  // align section with viewport top when tabbing into a nav item
  const handleNavFocus = (e: FocusEvent<HTMLElement>) => {
    const focused = e.target as HTMLElement;
    if (!focused.matches(':focus-visible')) return;
    const section = e.currentTarget.closest('section');
    if (!section) return;
    const target = getSectionTop(section as HTMLElement);
    window.scrollTo({ top: target, behavior: 'instant' });
  };

  if (isDesktop)  {
    return (
      <header className={`header${isVisible ? ' header--visible' : ''}`}>
        <nav className='header__nav' onFocus={handleNavFocus}>
          <a href="#Life" className='header__nav-item' onClick={handleNavClick}>Life</a>
          <a href="#Works" className='header__nav-item' onClick={handleNavClick}>Works</a>
          <a href="#Awards" className='header__nav-item' onClick={handleNavClick}>Awards</a>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header className={`header${isVisible ? ' header--visible' : ''}`}>
        <h1>{page}</h1>
        <button
          ref={burgerButtonRef}
          className={`header__burger${isBurgerMenuOpen ? ' header__burger--open' : ''}`}
          onClick={onBurgerClick}
          aria-label="Menu"
          aria-expanded={isBurgerMenuOpen}
          aria-controls="burger-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </header>
      <BurgerMenu isOpen={isBurgerMenuOpen} onNavigation={onBurgerNavigation} />
    </>
  );
}