import { useDevice } from '@/shared/hooks/useDevice';

import { DesktopFooter } from './ui/desktopFooter/DesktopFooter';
import { PhoneFooter } from './ui/phoneFooter/Phonefooter';

export const Footer = () => {
  const { isCustomFooter } = useDevice();

  return isCustomFooter ? <PhoneFooter /> : <DesktopFooter />;
};
