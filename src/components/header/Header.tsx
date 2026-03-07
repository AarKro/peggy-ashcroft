import { useEffect, useRef, useState, type FC, type MouseEvent } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import type { Page } from '../page/Page';
import { BurgerMenu } from '../burger-menu/BurgerMenu';
import { scrollToSection } from '../../utils/scrollToSection';
import './Header.scss';

type Props = {
  page: Page;
};

export const Header: FC<Props> = ({ page }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const savedScrollY = useRef<number>(0);
  const headerRef = useRef<HTMLElement>(null);
  const isDesktop = useDesktopLayout();

  useEffect(() => {
    const section = document.getElementById(page);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [page]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (id) scrollToSection(id);
  };

  const onNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e);
    setIsBurgerMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  const onBurgerClick = () => {
    if (isBurgerMenuOpen) {
      // closing: restore saved scroll position
      setIsBurgerMenuOpen(false);
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: savedScrollY.current, behavior: 'smooth' });
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
    return;
  }

  if (isDesktop)  {
    return (
      <header className={`header${isVisible ? ' header--visible' : ''}`} ref={headerRef}>
        <nav className='header__nav'>
          <a href="#Life" className='header__nav-item' onClick={handleNavClick}>Life</a>
          <a href="#Works" className='header__nav-item' onClick={handleNavClick}>Works</a>
          <a href="#Awards" className='header__nav-item' onClick={handleNavClick}>Awards</a>
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