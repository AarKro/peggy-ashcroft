import { useEffect } from 'react';
import { Awards } from './pages/awards/Awards';
import { Life } from './pages/life/Life';
import { Title } from './pages/title/Title';
import { Works } from './pages/works/Works';
import { scrollToHash } from './utils/scrollToSection';
import './App.scss';

export const App = () => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <main className='app'>
      <Title />
      <Life />
      <Works />
      <Awards />
    </main>
  );
}