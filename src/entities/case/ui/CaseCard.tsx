import { clsx } from '@/shared/lib/classNames';
import Card, { ColorEnum } from '@/shared/ui/card/Card';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { type CaseModel } from '../model/types';

import style from './caseCard.module.scss';

interface CaseCardProps {
  data: CaseModel;
  className?: string;
  onClick?: () => void;
}

export const CaseCard = ({ className, data, onClick }: CaseCardProps) => {
  const { title, imgSrc } = data;

  return (
    <Card variant={ColorEnum.CARD} className={clsx(style.card, className)} onClick={onClick}>
      <img src={imgSrc} alt={`${title} image not found`} className={style.img} />

      <Text variant={FontsEnum.MEDIUM} className={style.cardText}>
        {title}
      </Text>
    </Card>
  );
};
