import { Page } from '../../components/page/Page';
import aPassageToIndia from '../../assets/images/a_passage_to_india.png';
import theJewelInTheCrown from '../../assets/images/the_jewel_in_the_crown.png';
import sundayBloodySunday from '../../assets/images/sunday_bloody_sundy.png';
import theNunsStory from '../../assets/images/the_nuns_story.png';
import madameSousatzka from '../../assets/images/madame_soustzka.png';
import secretCeremony from '../../assets/images/secret_ceremony.png';
import { MoviePoster } from '../../components/movie-poster/MoviePoster';
import './Works.scss';

const MOVIES = [
  { title: 'A Passage to India', role: 'as Mrs Moore', src: aPassageToIndia },
  { title: 'The Jewel in the Crown', role: 'as Barbie Batchelor', src: theJewelInTheCrown },
  { title: 'Sunday Bloody Sunday', role: 'as Mrs Greville', src: sundayBloodySunday },
  { title: 'The Nun\'s Story', role: 'as Mother Gabrielle', src: theNunsStory },
  { title: 'Madame Sousatzka', role: 'as Lady Emily', src: madameSousatzka },
  { title: 'Secret Ceremony', role: 'as Hannah', src: secretCeremony },
];

export const Works = () => {
  return (
    <Page page='Works'>
      <div className='works'>
        <div className='works__carousell'>
          {MOVIES.map((movie) => (
            <MoviePoster key={movie.title} title={movie.title} role={movie.role} img={movie.src} />
          ))}
        </div>
        <p className='works__text'>
          Check out Peggy Ashcrofts full <a target='_blank' href="https://en.wikipedia.org/wiki/Peggy_Ashcroft#Filmography">Filmography</a>
        </p>
      </div>
    </Page>
  );
};