import { useEffect, useState } from 'react';

export type OrientationType = 'portrait' | 'landscape';

/**
 * Custom hook that returns the current screen orientation.
 * It listens for changes in the screen orientation and updates the value accordingly.
 */
export const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<OrientationType>(getScreenOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getScreenOrientation());
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
};

const getScreenOrientation = (): OrientationType => {
  return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
};