import { useState } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import './Header.scss';

type Section = 'Title' | 'Life' | 'Works' | 'Awards';

export const Header = () => {
  const [currentSection, setCurrentSection] = useState<Section>('Title');
  const isDesktop = useDesktopLayout();

  // hide header on title page
  // if (currentSection === 'Title') {
  //   return;
  // }

  if (isDesktop)  {
    return (
      <header className='header'>
        Desktop
      </header>
    );
  }

  return (
    <header className='header'>
      <h1 className='header__title'>{currentSection}</h1>
    </header>
  );
}