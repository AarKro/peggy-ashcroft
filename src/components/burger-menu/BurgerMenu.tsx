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
        <div className='menu__nav-section'>
          <a href="#Life" className='menu__nav-item' onClick={onNavigation}>Life</a>
        </div>
        <div className='menu__nav-section'>
          <a href="#Works" className='menu__nav-item' onClick={onNavigation}>Works</a>
        </div>
        <div className='menu__nav-section'>
          <a href="#Awards" className='menu__nav-item' onClick={onNavigation}>Awards</a>
        </div>
      </nav>
    </section>
  );
}