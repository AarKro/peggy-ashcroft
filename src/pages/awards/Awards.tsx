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
            category='British Academy'
            name='BAFTA Awards'
            years={['1981', '1985', '1986']}
            detail='Caught on a Train · The Jewel in the Crown · A Passage to India'
          />
          <AwardCard
            count={1}
            category='The Academy'
            name='Academy Award'
            years={['1985']}
            detail='A Passage to India'
          />
          <AwardCard
            count={1}
            category='Hollywood Foreign Press'
            name='Golden Globe'
            years={['1985']}
            detail='A Passage to India'
          />
          <AwardCard
            count={1}
            category='Society of London Theatre'
            name='Laurence Olivier Award'
            years={['1976']}
            detail='Old World'
          />
          <AwardCard
            count={5}
            category='Additional Recognition'
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
