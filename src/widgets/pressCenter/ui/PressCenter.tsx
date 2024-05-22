import { useCallback, useState } from 'react';

import { Search } from '@/features/search';

import { Arrow } from '@/shared/assets/icons/Arrow';
import { Container } from '@/shared/ui/container';
import { InfoLine } from '@/shared/ui/infoLine';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './pressCenter.module.scss';

const TABLE_CONTENT = [
  {
    date: '26 апреля',
    content:
      '22 апреля наша компания участвовала на Всероссийском молодежном форуме по информационным технологиям «На ТЫ с IT».'
  },
  {
    date: '16 апреля',
    content: '🎉 Сегодня ООО "РнД МГТУ" исполнилось 6 лет!'
  },
  {
    date: '12 апреля',
    content:
      'Поздравляем со всемирным ознаменованием первого полёта человека в космос! С днём космонавтики! 🚀'
  },
  {
    date: '9 апреля',
    content:
      '🎉 Примите наши искренние поздравления по случаю юбилея - 90-летия Магнитогорского государственного технического университета им. Г.И. Носова!'
  },
  {
    date: '14 августа',
    content:
      'В листопрокатном цехе № 11 Магнитогорского металлургического комбината внедрена система автоматизированной'
  },
  {
    date: '12 марта',
    content: 'Студентам Магнитогорска провели семинар о перспективах бизнеса в сфере IT'
  },
  {
    date: '8 февраля',
    content: '🇷🇺 Поздравляем Вас с Днём российской науки!'
  }
];

interface PressCenterProps {
  isShowSearch?: boolean;
  className?: string;
}

export const PressCenter = ({ className, isShowSearch }: PressCenterProps) => {
  const [value, setValue] = useState('');

  const updateValue = useCallback((value: string) => {
    setValue(value.toLowerCase());
  }, []);

  // TODO: в будущем отправлять запрос на бекенд
  const filterContent = TABLE_CONTENT.filter(
    ({ content, date }) =>
      content.toLowerCase().includes(value) || date.toLowerCase().includes(value)
  );

  return (
    <Container className={className} isOffLayout>
      <div className={style.titleBlock}>
        <div className={style.title}>
          <Arrow />

          <Text variant={FontsEnum.MEDIUM}>ПРЕСС-ЦЕНТР</Text>
        </div>

        {isShowSearch && (
          <Search
            className={style.search}
            placeholder='Поиск по ключевым словам'
            value={value}
            setValue={updateValue}
          />
        )}
      </div>

      <div className={style.contentBlock}>
        {filterContent.map(({ content, date }) => (
          <InfoLine
            title={date}
            subTitle={content}
            key={date}
            classNameContent={style.contentInfo}
            innerPropsTextTitle={{
              className: style.titleInfo
            }}
            innerPropsTextSubtitle={{
              variant: FontsEnum.REGULAR,
              className: style.subtitleInfo
            }}
          />
        ))}
      </div>
    </Container>
  );
};
