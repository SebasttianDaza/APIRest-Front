import { useState, useEffect } from "react";

const useMatchMedia = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const identifyMatchMedia = () => {
      const mediaQuery = window.matchMedia("(min-width: 768px)");

      const handleMediaQueryChange = (e) => {
        if (e.matches) {
          setIsActive(true);
        }
        if (!e.matches) {
          setIsActive(false);
        }
      };

      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
    };

    identifyMatchMedia();
    return () => {
      identifyMatchMedia();
    };
  }, [setIsActive]);

  return isActive;
};

export default useMatchMedia;
