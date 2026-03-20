import type { FC } from 'react';
import { Page, type Page as PageType } from '../../components/page/Page';
import './Title.scss';

type Props = { activePage: PageType };

export const Title: FC<Props> = ({ activePage }) => {
  return (
    <Page page='Title' activePage={activePage}>
      <h1>Title</h1>
    </Page>
  );
};