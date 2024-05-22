import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section>
      <Container className={styles.notFound} isOffLayout>
        <Text variant={FontsEnum.BOLD} className={styles.titleNotFound}>
          404
        </Text>

        <Text variant={FontsEnum.MEDIUM} className={styles.textNotFound}>
          Извините, видимо такой страницы не существует
        </Text>
      </Container>
    </section>
  );
};
export default NotFoundPage;
