import { Awards } from './pages/awards/Awards';
import { Life } from './pages/life/Life';
import { Title } from './pages/title/Title';
import { Works } from './pages/works/Works';
import './App.scss';

export const App = () => {
  // todo: create page and add it here
  return (
    <>
      <Title />
      <Life />
      <Works />
      <Awards />
    </>
  );
}