import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import { Page } from '../../components/page/Page';
import './Awards.scss';

export const Awards = () => {
  const isDesktop = useDesktopLayout();

  return (
    <Page page='Awards'>
      {isDesktop && <h1>Awards</h1>}
    </Page>
  );
};