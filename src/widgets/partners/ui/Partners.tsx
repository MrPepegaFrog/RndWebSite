import { Partner } from '@/entities/partner';

import InformService from '@/shared/assets/icons/carousel_Icons/InformService.png';
import MGTU from '@/shared/assets/icons/carousel_Icons/MGTU.png';
import Missis from '@/shared/assets/icons/carousel_Icons/missis.png';
import MMK from '@/shared/assets/icons/carousel_Icons/MMK.png';
import NMLK from '@/shared/assets/icons/carousel_Icons/NMLK.png';
import NorNik from '@/shared/assets/icons/carousel_Icons/NorNik.png';
import NorthSteel from '@/shared/assets/icons/carousel_Icons/NorthSteel.png';
import OSK from '@/shared/assets/icons/carousel_Icons/OSK.png';
import RCC from '@/shared/assets/icons/carousel_Icons/RCC.png';
import YRGU from '@/shared/assets/icons/carousel_Icons/YRGU.png';
import { Slash } from '@/shared/assets/icons/Slash';
import { useDevice } from '@/shared/hooks/useDevice';
import { clsx } from '@/shared/lib/classNames';
import Carousel from '@/shared/ui/carousel/Carousel';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { DescriptionsPartners } from './DescriptionPartners';

import styles from './partners.module.scss';

const PartnerCardItem = [
  InformService,
  MGTU,
  Missis,
  MMK,
  NMLK,
  NorNik,
  NorthSteel,
  RCC,
  OSK,
  YRGU
];

interface PartnersProps {
  className?: string;
}

export const Partners = ({ className }: PartnersProps) => {
  const { isSmallTablet } = useDevice();

  return (
    <Container className={clsx(className)} isOffSidesPadding isOffLayout>
      <Container className={styles.partnerContainer} isTagWillSelect={false}>
        <div className={styles.title}>
          <Slash className={styles.logo} />

          <Text variant={FontsEnum.MEDIUM}>наши&nbsp;партнеры</Text>
        </div>

        {!isSmallTablet && <DescriptionsPartners />}
      </Container>

      <div className={styles.carouselContainer}>
        <Carousel isAutoPlay>
          {PartnerCardItem.map((imgSrc, index) => (
            <div key={index}>
              <Partner data={{ imgSrc }} />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};
