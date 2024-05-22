import Text, { FontsEnum } from '@/shared/ui/typography';

import styles from './partners.module.scss';

export const DescriptionsPartners = () => {
  return (
    <div className={styles.partnerText}>
      <Text variant={FontsEnum.LIGHT}>
        На протяжении долгих лет выстраиваем эффективное и надежное сотрудничество с&nbsp;крупными
        организациями и промышленными предприятиями
      </Text>
    </div>
  );
};
