import { clsx } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/avatar';
import Text, { FontsEnum } from '@/shared/ui/typography';

import { type EmployerModel } from '../../model/types';

import styles from './employerLite.module.scss';

interface EmployerLiteProps {
  data: Omit<EmployerModel, 'mail'>;
  className?: string;
}

export const EmployerLite = ({ className, data }: EmployerLiteProps) => {
  const { photoSrc, empName, jobTitle } = data;

  return (
    <div className={clsx(className, styles.employerLite)}>
      <Avatar src={photoSrc} />

      <div className={styles.content}>
        <Text variant={FontsEnum.LIGHT}>{empName}</Text>

        <Text variant={FontsEnum.LIGHT} className={styles.job}>
          {jobTitle}
        </Text>
      </div>
    </div>
  );
};
