import { type FC } from 'react';
import './BurgerMenu.scss';

type Props = {
  isOpen: boolean;
  onNavigation: () => void;
}

export const BurgerMenu: FC<Props> = ({ isOpen, onNavigation }) => {
  return (
    <section className={`menu ${isOpen ? 'menu--open' : 'menu--closed'}`}>
      <nav className='menu__nav'>
        <a href="#Life" className='menu__nav-item' onClick={onNavigation}>Life</a>
        <a href="#Works" className='menu__nav-item' onClick={onNavigation}>Works</a>
        <a href="#Awards" className='menu__nav-item' onClick={onNavigation}>Awards</a>
      </nav>
    </section>
  );
}