import { ImplementationCard } from '@/entities/implementation';

import { Slash } from '@/shared/assets/icons/Slash';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './implementations.module.scss';

const IMPLEM_MOCKS = [
  {
    title: 'Техничесий аудит',
    number: 1
  },
  {
    title: 'Разработка решений с\u00A0закачиком',
    number: 2
  },
  {
    title: 'Реализация проекта под ключ',
    number: 3
  },
  {
    title: 'Тестирование и\u00A0оптимизация',
    number: 4
  },
  {
    title: 'Обучение персонала',
    number: 5
  },
  {
    title: 'Сервис',
    number: 6
  }
];

export const Implementations = () => {
  return (
    <Container>
      <div>
        <Slash />

        <Text variant={FontsEnum.MEDIUM}>реализация</Text>
      </div>

      <div className={style.cardContainer}>
        <div className={style.cards}>
          {IMPLEM_MOCKS.map((data) => (
            <ImplementationCard className={style.card} key={data.title} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};
