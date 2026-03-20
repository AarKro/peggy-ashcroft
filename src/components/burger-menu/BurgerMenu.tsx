import { useRef, useEffect, type FC, type MouseEvent } from 'react';
import './BurgerMenu.scss';

type Props = {
  isOpen: boolean;
  onNavigation: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const BurgerMenu: FC<Props> = ({ isOpen, onNavigation }) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // move focus into menu when it opens
  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      id="burger-menu"
      className={`menu ${isOpen ? 'menu--open' : 'menu--closed'}`}
      aria-hidden={!isOpen}
      {...(!isOpen && { inert: true })}
    >
      <nav className='menu__nav' aria-label="Main navigation">
        <div className='menu__nav-section' />
        <div className='menu__nav-section'>
          <a ref={firstLinkRef} href="#Life" className='menu__nav-item' onClick={onNavigation}>Life</a>
        </div>
        <div className='menu__nav-section'>
          <a href="#Works" className='menu__nav-item' onClick={onNavigation}>Works</a>
        </div>
        <div className='menu__nav-section'>
          <a href="#Awards" className='menu__nav-item' onClick={onNavigation}>Awards</a>
        </div>
        <div className='menu__nav-section' />
      </nav>
    </div>
  );
}