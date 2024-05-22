import { clsx } from '@/shared/lib/classNames';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './companyStats.module.scss';

const CONTENT = [
  {
    title: '30+',
    subtitle: 'Реализованных проектов'
  },
  {
    title: '2018',
    subtitle: 'Год основания компании'
  },
  {
    title: '60+',
    subtitle: 'Компетентных специалистов'
  },
  {
    title: '1,3 млрд',
    subtitle: 'Экономия наших заказчиков'
  }
];

interface CompanyStatsProps {
  className?: string;
}

export const CompanyStats = ({ className }: CompanyStatsProps) => {
  return (
    <div className={clsx(style.contentContainer, className)}>
      {CONTENT.map(({ title, subtitle }) => {
        return (
          <div key={title} className={style.item}>
            <Text className={style.title} variant={FontsEnum.MEDIUM}>
              {title}
            </Text>

            <Text className={style.subtitle} variant={FontsEnum.LIGHT}>
              {subtitle}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
