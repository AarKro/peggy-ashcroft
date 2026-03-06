import { useDesktopLayout } from '../../hooks/useDesktopLayout';
import { Page } from '../../components/page/Page';
import './Life.scss';

export const Life = () => {
  const isDesktop = useDesktopLayout();

  return (
    <Page page='Life'>
      {isDesktop && <h1>Life</h1>}
      <div className='life__timeline'>
        <div className='life__entry'>
          <h2>Early Life</h2>
          <p>
            Peggy Ashcroft was born in 1907, Edith Margaret Emily Ashcroft in Croydon,
            Surrey. She developed a passion for acting at a young age to pursue acting despite
            her family's initial reservations. She first trained at the Royal Central School of
            Speech and Drama and later continued her studies at the Royal Academy of Dramatic
            Art (RADA), from which she graduated in 1926.
          </p>
        </div>
        <div className='life__entry'>
          <h2>Breakthrough</h2>
          <p>
            Ashcroft made her professional stage debut in 1926, and by the early 1930s,
            she had established herself as one of Britain's leading actresses. Her portrayal
            of Juliet in John Gielgud's 1932 production of Romeo and Juliet at the New Theatre
            was a landmark in her career, earning widespread critical acclaim and solidifying
            her reputation as a Shakespearean actress of the highest order.
          </p>
        </div>
        <div className='life__entry'>
          <h2>Theater Leader</h2>
          <p>
            Across the 1940s through the 1960s, Ashcroft continued to dominate the British
            theater scene, taking on a wide range of challenging roles. She became a key figure
            at the Royal Shakespeare Company (RSC) and was instrumental in its development,
            working closely with directors like Peter Brook and Michel Saint-Denis.
          </p>
        </div>
        <div className='life__entry'>
          <h2>Screen Success</h2>
          <p>
            Although primarily known for her stage work, Ashcroft also made memorable
            appearances in film and television. Her most celebrated screen role came in 1984,
            when she starred in David Lean's A Passage to India, for which she won the Academy
            Award for Best Supporting Actress at the age of 77.
          </p>
        </div>
        <div className='life__entry'>
          <h2>Final Years</h2>
          <p>
            In her later years, Ashcroft continued to work selectively, choosing roles that
            challenged and inspired her. She was made a Dame Commander of the Order of the
            British Empire (DBE) in 1956 and received numerous other honors throughout her
            career. Peggy Ashcroft passed away on 14 June 1991.
          </p>
        </div>
      </div>
    </Page>
  );
};