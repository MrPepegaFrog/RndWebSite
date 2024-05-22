import { useParams } from 'react-router-dom';

import { CaseCard } from '@/entities/case';

import { DATA_CASES } from '@/shared/config/cases';
import Accordion from '@/shared/ui/accordion/ui/Accordion';
import { Container } from '@/shared/ui/container';

import styles from './caseSinglePage.module.scss';

const CaseSinglePage = () => {
  const { id } = useParams<{ id: string }>();

  const singleCase = DATA_CASES[id as keyof typeof DATA_CASES];

  if (!singleCase) {
    throw new Error('Нет кейса');
  }
  return (
    <Container isOffLayout>
      <CaseCard data={singleCase} className={styles.case} />

      <Accordion data={singleCase} />
    </Container>
  );
};

export default CaseSinglePage;
