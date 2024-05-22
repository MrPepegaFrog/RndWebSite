import { clsx } from '@/shared/lib/classNames';
import Card, { ColorEnum } from '@/shared/ui/card/Card';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { type HistoryModel } from '../model/types';

import styles from './history.module.scss';

interface HistoryProps {
  data: HistoryModel;
  className?: string;
}

export const History = ({ className, data }: HistoryProps) => {
  const { title, subtitle } = data;

  return (
    <Card variant={ColorEnum.CARD} className={clsx(styles.historyCard, className)}>
      <Text variant={FontsEnum.MEDIUM} className={styles.title}>
        {title}
      </Text>

      <div className={styles.subtitleWrapper}>
        {subtitle?.map((value) => (
          <Text key={value} variant={FontsEnum.LIGHT} className={styles.subtitle}>
            {value}
          </Text>
        ))}
      </div>
    </Card>
  );
};
