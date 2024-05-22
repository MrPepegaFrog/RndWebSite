import { useMediaQuery } from 'react-responsive';

export const useDevice = () => {
  const isCustomFooter = useMediaQuery({ query: '(max-width: 1200px)' });
  const isShowTabletHeader = useMediaQuery({ minWidth: 760, maxWidth: 1200 });
  const isLargeTablet = useMediaQuery({ query: '(max-width: 1000px)' });
  const isSmallTablet = useMediaQuery({ query: '(max-width: 760px)' });

  return { isLargeTablet, isSmallTablet, isCustomFooter, isShowTabletHeader };
};
