import { useCallback, useRef, useState, type FC, type KeyboardEvent, type PropsWithChildren, type UIEvent } from 'react';
import './ScrollOverflow.scss';

type Props = {
  className?: string;
  ariaLabel?: string;
};

export const ScrollOverflow: FC<PropsWithChildren<Props>> = ({ className, ariaLabel, children }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  // allow keyboard users to scroll with arrow keys
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.5;
    if (e.key === 'ArrowRight') {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      e.preventDefault();
    }
  }, []);

  const wrapperClass = [
    'scroll-overflow',
    canScrollLeft && 'scroll-overflow--left',
    canScrollRight && 'scroll-overflow--right',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      <div
        ref={scrollRef}
        className={`scroll-overflow__content ${className ?? ''}`}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
      >
        {children}
      </div>
    </div>
  );
};
