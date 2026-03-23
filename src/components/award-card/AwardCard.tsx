import type { FC } from 'react';
import { useInView } from '../../hooks/useInView';
import './AwardCard.scss';

type AwardEntry = {
  award: string;
  year: string;
};

type Props = {
  count: number;
  name: string;
  detail?: string;
  wide?: boolean;
  entries?: AwardEntry[];
};

export const AwardCard: FC<Props> = ({ count, name, detail, wide, entries }) => {
  const { ref, isVisible } = useInView();

  const classes = [
    'award-card',
    wide && 'award-card--wide',
    isVisible && 'award-card--visible',
  ].filter(Boolean).join(' ');

  return (
    <article className={classes} ref={ref}>
      <div className='award-card__inner'>
        <div className='award-card__count-block'>
          <span className='award-card__count'>{count}</span>
          <span className='award-card__count-label'>{count === 1 ? 'win' : 'wins'}</span>
        </div>
        <div className='award-card__divider' />
        <div className='award-card__info'>
          <h2 className='award-card__name'>{name}</h2>
          {detail && <p className='award-card__detail'>{detail}</p>}
        </div>
        {entries && (
          <div className='award-card__entries'>
            {entries.map(e => (
              <div key={e.award} className='award-card__entry'>
                <span className='award-card__entry-award'>{e.award}</span>
                <span className='award-card__entry-year'>{e.year}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
