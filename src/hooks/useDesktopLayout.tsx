import { useEffect, useState } from "react";

const breakpointSmall = 576;
const matchMedia = () => window.matchMedia(`(min-width: ${breakpointSmall}px)`);

export const useDesktopLayout = () => {
  const [mediaMatcher, setMediaMatcher] = useState<MediaQueryList>(matchMedia());

  useEffect(() => {
    const updateMediaMatcher = () => setMediaMatcher(matchMedia());

    window.addEventListener("resize", updateMediaMatcher);

    return () => window.removeEventListener("resize", updateMediaMatcher);
  });

  return mediaMatcher.matches;
}