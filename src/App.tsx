import { Awards } from './pages/awards/Awards';
import { Life } from './pages/life/Life';
import { Title } from './pages/title/Title';
import { Works } from './pages/works/Works';
import { Footer } from './components/footer/Footer';
import './App.scss';

export const App = () => {
  return (
    <main className='app'>
      <Title />
      <Life />
      <Works />
      <Awards />
      <Footer />
    </main>
  );
}