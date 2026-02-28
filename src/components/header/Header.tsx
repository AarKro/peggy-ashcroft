import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import './Header.scss';

export const Header = () => {
  const isDesktop = useDesktopLayout();

  if (isDesktop)  {
    return (
      <header>
        Desktop
      </header>
    );
  }

  return (
    <header>
      Mobile
    </header>
  );
}