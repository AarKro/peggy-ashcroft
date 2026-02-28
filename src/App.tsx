import { Awards } from './pages/awards/Awards';
import { Life } from './pages/life/Life';
import { Title } from './pages/title/Title';
import { Works } from './pages/works/Works';
import './App.scss';

export const App = () => {
  return (
    <>
      <Title />
      <Life />
      <Works />
      <Awards />
    </>
  );
}