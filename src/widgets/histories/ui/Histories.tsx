import { History } from '@/entities/history';

import { Slash } from '@/shared/assets/icons/Slash';
import Carousel from '@/shared/ui/carousel/Carousel';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './histories.module.scss';

const historyData = [
  {
    title: '2018',
    subtitle: ['Выход на международный рынок, сотрудничество с\u00A0ОАЭ']
  },
  {
    title: '2019',
    subtitle: [
      '5 разработанных и\u00A0реализованных проектов на\u00A0ПАО\u00A0ММК',
      'На\u00A0основе коммерческого продукта создана и\u00A0выведена первая SPV компания',
      'Получен первый грант на\u00A0разработку системы машинного зрения'
    ]
  },
  {
    title: '2020',
    subtitle: [
      'Расширение компании, иницировано создание отдела продаж',
      'Участие более 30\u00A0докторов и\u00A0кандидатов наук в\u00A0реализации проектов'
    ]
  },
  {
    title: '2021',
    subtitle: [
      'Разработка программно-аппаратных комплексов для\u00A0масштабирования',
      'Участие более 60\u00A0специалистов, программистов и\u00A0инжинеров в\u00A0реализациии проектов'
    ]
  },
  {
    title: '2022',
    subtitle: [
      'Открытие первого филиала в\u00A0Норильске',
      'Разработка решений по\u00A0импортозамещению',
      'Масташибрование на\u00A0крупые предприятия РФ'
    ]
  },
  {
    title: '2023',
    subtitle: [
      'Расширение штата и\u00A0открытие второго офиса в\u00A0Магнитогорске',
      'Открытие школы интернов',
      'Стали участником Сколкова'
    ]
  }
];

export const Histories = () => {
  return (
    <Container isOffSidesPadding isOffLayout>
      <div className={style.nameBlock}>
        <Slash />

        <Text variant={FontsEnum.MEDIUM}>история</Text>
      </div>

      <div className={style.content}>
        <Carousel circular={false} isAutoPlay={false} align='prev' cameraClass={style.carousel}>
          {historyData.map((data, index) => (
            <div key={index}>
              <History data={data} />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};
