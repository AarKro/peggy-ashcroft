import { useEffect } from 'react';
import { Awards } from './pages/awards/Awards';
import { Life } from './pages/life/Life';
import { Title } from './pages/title/Title';
import { Works } from './pages/works/Works';
import { useActivePage } from './hooks/useActivePage';
import { scrollToHash } from './utils/scrollToSection';
import './App.scss';

export const App = () => {
  const activePage = useActivePage();

  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <main className='app'>
      <Title activePage={activePage} />
      <Life activePage={activePage} />
      <Works activePage={activePage} />
      <Awards activePage={activePage} />
    </main>
  );
}