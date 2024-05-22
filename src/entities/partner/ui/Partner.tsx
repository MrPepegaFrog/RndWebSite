import { clsx } from '@/shared/lib/classNames';

import { type PartnerModel } from '../model/types';

import style from './partner.module.scss';

interface PartnerProps {
  data: PartnerModel;
  className?: string;
}

export const Partner = ({ className, data }: PartnerProps) => {
  return (
    <div className={clsx(className, style.PartnerCard)}>
      <img className={style.img} src={data.imgSrc} alt={`Partner ${data.imgSrc} not found`} />
    </div>
  );
};
