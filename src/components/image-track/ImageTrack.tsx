import { useEffect, useMemo, useRef, type FC } from 'react';
import './ImageTrack.scss';

type Props = {
  images: string[];
  speed?: number;
  reverse?: boolean;
};

const COPIES = 6;

export const ImageTrack: FC<Props> = ({
  images,
  speed = 50,
  reverse = false,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Slides the track sideways in a loop. The images are repeated COPIES
  // times, so when the offset wraps around, identical images are already
  // in place and the jump is invisible.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // How wide one full set of images is (the point where the pattern repeats)
    const first = el.children[0] as HTMLElement;
    const nth = el.children[images.length] as HTMLElement;
    const setWidth = nth.offsetLeft - first.offsetLeft;
    if (setWidth <= 0) return;

    const dir = reverse ? -1 : 1;
    // Reverse tracks start one full set in, so there's content to scroll into
    let offset = reverse ? setWidth : 0;
    let raf = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      offset += dir * speed * dt;
      offset = ((offset % setWidth) + setWidth) % setWidth;

      el.style.transform = `translateX(${-offset}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [images.length, speed, reverse]);

  const repeatedImages = useMemo(() => {
    const result: string[] = [];
    for (let i = 0; i < COPIES; i++) result.push(...images);
    return result;
  }, [images]);

  return (
    <div className="image-track" ref={trackRef}>
      {repeatedImages.map((src, i) => (
        <div key={i} className="image-track__frame">
          {/* images dont have alt text because whole component is aria-hidden anyway */}
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};
