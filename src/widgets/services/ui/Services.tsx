import { CaseCard } from '@/entities/case';

import { Arrow } from '@/shared/assets/icons/Arrow';
import ASUimg from '@/shared/assets/images/3d images/ASU.png';
import AUDITimg from '@/shared/assets/images/3d images/Audit.png';
import NIOKRimg from '@/shared/assets/images/3d images/NIOKR.png';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './services.module.scss';

const SERVICE_MOCKS = [
  {
    title: 'Интеллектуальные системы асу тп',
    imgSrc: ASUimg
  },
  {
    title: 'Научно-исследовательские и опытно-конструкторские работы',
    imgSrc: NIOKRimg
  },
  {
    title: 'Технический аудит',
    imgSrc: AUDITimg
  }
];

export const Services = () => {
  return (
    <Container>
      <div>
        <Arrow />

        <Text variant={FontsEnum.MEDIUM}>услуги</Text>
      </div>

      <div>
        {SERVICE_MOCKS.map((data) => (
          <CaseCard key={data.title} data={data} className={style.service} />
        ))}
      </div>
    </Container>
  );
};
