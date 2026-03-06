import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import { Page } from '../../components/page/Page';
import './Works.scss';

export const Works = () => {
  const isDesktop = useDesktopLayout();

  return (
    <Page page='Works'>
      {isDesktop && <h1>Works</h1>}
    </Page>
  );
};