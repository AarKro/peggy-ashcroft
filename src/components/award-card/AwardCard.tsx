import type { FC } from 'react';
import './AwardCard.scss';

type Props = {
  number: string;
  title: string;
}

export const AwardCard: FC<Props> = ({ number, title }) => {
  return (
    <article className='award-card'>
      <p className='award-card__number'>{number}</p>
      <h2 className='award-card__title'>{title}</h2>
    </article>
  );
};