import { clsx } from '@/shared/lib/classNames';
import Card, { ColorEnum } from '@/shared/ui/card/Card';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { type ImplementationModel } from '../../model/types';

import styles from './implementationCard.module.scss';

interface ImplementationCardProps {
  data: ImplementationModel;
  className?: string;
}

export const ImplementationCard = ({ className, data }: ImplementationCardProps) => {
  const { title, number } = data;

  const newNumber = number < 10 ? `0${number}` : number;

  return (
    <Card variant={ColorEnum.CORP_BLUE_CARD} className={clsx(className, styles.implementationCard)}>
      <Text variant={FontsEnum.MEDIUM} className={styles.title}>
        {title}
      </Text>

      <Text variant={FontsEnum.MEDIUM} className={styles.number}>
        {newNumber}
      </Text>
    </Card>
  );
};
