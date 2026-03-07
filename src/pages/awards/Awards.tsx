import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import { Page } from '../../components/page/Page';
import { AwardCard } from '../../components/award-card/AwardCard';
import { Footer } from '../../components/footer/Footer';
import './Awards.scss';

export const Awards = () => {
  const isDesktop = useDesktopLayout();

  return (
    <Page page='Awards'>
      {isDesktop && <h1>Awards</h1>}
      <div className="awards">
        {/* <h2 className='awards__subtitle'>11 Awards & 20 Nominations</h2> */}
        <div className='awards__cards'>
          <AwardCard number='3' title='BAFTAs' />
          <AwardCard number='1' title='Academy Awards' />
          <AwardCard number='1' title='Golden Globe' />
          <AwardCard number='1' title='Laurence Olivier' />
          <AwardCard number='5' title='Other Awards' />
        </div>
        <p className='awards__text'>
          Check out all her <a target='_blank' href="https://en.wikipedia.org/wiki/Peggy_Ashcroft#Honours,_awards_and_memorials">Accolades</a>
        </p>
        <Footer />
      </div>
    </Page>
  );
};