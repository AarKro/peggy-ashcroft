import type { FC } from 'react';
import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import { Page, type Page as PageType } from '../../components/page/Page';
import { AwardCard } from '../../components/award-card/AwardCard';
import { Footer } from '../../components/footer/Footer';
import './Awards.scss';

type Props = { activePage: PageType };

export const Awards: FC<Props> = ({ activePage }) => {
  const isDesktop = useDesktopLayout();

  return (
    <Page page='Awards' activePage={activePage}>
      {isDesktop && <h1>Awards</h1>}
      <div className="awards">
        <div className='awards__cards'>
          <AwardCard
            count={3}
            name='BAFTA Awards'
            detail='Caught on a Train (1981) · The Jewel in the Crown (1985) · A Passage to India (1986)'
          />
          <AwardCard
            count={1}
            name='Academy Award'
            detail='A Passage to India, 1985'
          />
          <AwardCard
            count={1}
            name='Golden Globe'
            detail='A Passage to India, 1985'
          />
          <AwardCard
            count={1}
            name='Laurence Olivier Award'
            detail='Old World, 1976'
          />
          <AwardCard
            count={5}
            name='Other Awards'
            wide
            entries={[
              { award: 'Boston Society of Film Critics', year: 'Best Supporting Actress, 1984' },
              { award: 'LA Film Critics Association', year: 'Best Supporting Actress, 1984' },
              { award: 'National Board of Review', year: 'Best Actress, 1985' },
              { award: 'NY Film Critics Circle', year: 'Best Actress, 1985' },
              { award: 'Venice Film Festival', year: 'Volpi Cup, 1989' },
            ]}
          />
        </div>
      </div>
      <Footer />
    </Page>
  );
};
