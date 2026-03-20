import type { FC } from 'react';
import './MoviePoster.scss';

type Props = {
  title: string;
  role: string;
  img: string;
}

export const MoviePoster: FC<Props> = ({ title, role, img }) => {
  return (
    <article className='movie-poster'>
      <div className='movie-poster__text'>
        <h2>{title}</h2>
        <p>{role}</p>
      </div>
      <img className='movie-poster__image' src={img} alt={title} loading='lazy' />
    </article>
  );
}