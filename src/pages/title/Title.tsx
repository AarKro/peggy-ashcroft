import { useEffect, useState, type FC } from 'react';
import { Page, type Page as PageType } from '../../components/page/Page';
import { ImageTrack } from '../../components/image-track/ImageTrack';
import peggy1 from '../../assets/images/peggy_1.jpg';
import peggy2 from '../../assets/images/peggy_2.jpg';
import peggy3 from '../../assets/images/peggy_3.jpg';
import peggy4 from '../../assets/images/peggy_4.jpg';
import peggy5 from '../../assets/images/peggy_5.jpg';
import peggy6 from '../../assets/images/peggy_6.jpg';
import peggy7 from '../../assets/images/peggy_7.webp';
import peggy8 from '../../assets/images/peggy_8.webp';
import './Title.scss';

const allImages = [peggy1, peggy2, peggy3, peggy4, peggy5, peggy6, peggy7, peggy8];

const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const tracks: { images: string[]; speed: number; reverse: boolean }[] = [
  { images: shuffle(allImages), speed: 28, reverse: false },
  { images: shuffle(allImages), speed: 26, reverse: true },
  { images: shuffle(allImages), speed: 21, reverse: false },
  { images: shuffle(allImages), speed: 22, reverse: true },
];

type Props = { activePage: PageType };

export const Title: FC<Props> = ({ activePage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <Page page='Title' activePage={activePage}>
      <div className="title__tracks" aria-hidden="true">
        {tracks.map((track, i) => (
          <ImageTrack
            key={i}
            images={track.images}
            speed={track.speed}
            reverse={track.reverse}
          />
        ))}
      </div>
      <h1 className={`title__heading${visible ? ' title__heading--visible' : ''}`}>
        <span className="title__dame">Dame</span>
        Peggy Ashcroft
      </h1>
    </Page>
  );
};
