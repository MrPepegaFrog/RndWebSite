import { clsx } from '@/shared/lib/classNames';

import Text, { FontsEnum } from '../../../shared/ui/typography';
import { type VacancyModel } from '../model/types';

import style from './vacancy.module.scss';

interface VacancyProps {
  data: VacancyModel;
  className?: string;
}

export const Vacancy = ({ data, className }: VacancyProps) => {
  const { title, subtitle, icon } = data;

  return (
    <div className={clsx(className, style.Card)}>
      <div>
        <Text variant={FontsEnum.MEDIUM} className={style.JobTitle}>
          {title}
        </Text>

        <Text variant={FontsEnum.LIGHT}>{subtitle}</Text>
      </div>

      <img src={icon} alt={`${title} image not found`} className={style.img} />
    </div>
  );
};
