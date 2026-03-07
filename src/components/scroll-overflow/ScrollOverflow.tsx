import { useCallback, useState, type FC, type PropsWithChildren, type UIEvent } from 'react';
import './ScrollOverflow.scss';

type Props = {
  className?: string;
};

export const ScrollOverflow: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const wrapperClass = [
    'scroll-overflow',
    canScrollLeft && 'scroll-overflow--left',
    canScrollRight && 'scroll-overflow--right',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      <div className={`scroll-overflow__content ${className ?? ''}`} onScroll={onScroll}>
        {children}
      </div>
    </div>
  );
};
