import { type FC } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import type { Page } from '../page/Page';
import './Header.scss';

type Props = {
  page: Page;
};

export const Header: FC<Props> = ({ page }) => {
  const isDesktop = useDesktopLayout();

  // hide header on title page
  if (page === 'Title') {
    return;
  }

  if (isDesktop)  {
    return (
      <header className='header'>
      </header>
    );
  }

  return (
    <header className='header'>
      <h1 className='header__title'>{page}</h1>
    </header>
  );
}