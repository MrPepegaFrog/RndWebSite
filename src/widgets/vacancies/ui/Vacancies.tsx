// import { Vacancy } from '@/entities/vacancy';

import Text, { FontsEnum } from '@/shared/ui/typography';

import styles from './vacancies.module.scss';

// import VacIcon from '@/shared/assets/icons/vacansiesIcons/code_120 1.png';

interface VacanciesProps {
  className?: string;
}

export const Vacancies = ({ className }: VacanciesProps) => {
  return (
    <div className={className}>
      <Text variant={FontsEnum.LIGHT} className={styles.no_vacancies}>
        Вакансий на данный момент нет
      </Text>

      {/* {VACANSIES_CARD_ITEM.map((data) => (
        <Vacancy data={data} key={data.title} />
      ))} */}
    </div>
  );
};
