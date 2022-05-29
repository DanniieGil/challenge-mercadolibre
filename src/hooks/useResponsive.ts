import { useState, useEffect } from 'react';

type ResponsiveSizes = {
  isMobile: boolean;
  isMediumSize: boolean;
  isDesktop: boolean;
};
export function useResponsive() {
  const [sizesValues, setSizesValues] = useState<ResponsiveSizes>({
    isMobile: false,
    isMediumSize: false,
    isDesktop: false,
  });

  const handleWindowSizeChange = () => {
    setSizesValues(checkSizes());
  };

  const checkSizes = (): ResponsiveSizes => ({
    isMobile: window.innerWidth < 600,
    isMediumSize: window.innerWidth > 599 && window.innerWidth < 992,
    isDesktop: window.innerWidth > 991,
  });

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  if (sizesValues.isMobile) {
    return 'isMobile';
  }
  if (sizesValues.isMediumSize) {
    return 'isMediumSize';
  }
  if (sizesValues.isDesktop) {
    return 'isDesktop';
  }
}
