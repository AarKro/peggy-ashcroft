import { type FC } from 'react';
import Burger from '../../assets/icons/burger.svg';
import './BurgerMenu.scss';

type Props = {
  isOpen: boolean;
  onNavigation: () => void;
}

export const BurgerMenu: FC<Props> = ({ isOpen, onNavigation }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <section className='menu'>
      <nav className='menu__nav'>
        <a href="#Life" className='menu__nav-item' onClick={onNavigation}>Life</a>
        <a href="#Works" className='menu__nav-item' onClick={onNavigation}>Works</a>
        <a href="#Awards" className='menu__nav-item' onClick={onNavigation}>Awards</a>
      </nav>
      <div className='menu__burger' onClick={onNavigation}>
        <Burger />
      </div>
    </section>
  );
}