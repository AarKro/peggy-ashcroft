import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import { Page } from '../../components/page/Page';
import './Life.scss';

export const Life = () => {
  const isDesktop = useDesktopLayout();

  return (
    <Page page='Life'>
      {isDesktop && <h1>Life</h1>}
    </Page>
  );
};