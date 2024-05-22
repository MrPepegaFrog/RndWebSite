import { Vacancies } from '@/widgets/vacancies/ui/Vacancies';

import { SendResumeForm } from '@/features/sendResumeForm';

import { Slash } from '@/shared/assets/icons/Slash';
import { useDevice } from '@/shared/hooks/useDevice';
import { Container } from '@/shared/ui/container';
import { InfoLine } from '@/shared/ui/infoLine';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './careers.module.scss';

const TABLE_CONTENT = [
  {
    title: 'КОРПОРАТИВНАЯ ЖИЗНЬ',
    subTitle:
      'Современная компания поддерживающая бирюзовый подход в\u00A0 своей деятельности, свободное перемещение по\u00A0проффесиональной лестнице с\u00A0возможностью изменения специфики работы открытая политика компании в поддержке специалистов по\u00A0обучению в\u00A0направлениях финансируемых компанией, широкий пул финансовой мотивации'
  },
  {
    title: 'ЗАБОТА О\u00A0СОТРУДНИКАХ',
    subTitle:
      'Конкурентная оплата труда, широкий спектр KPI завязанный на\u00A0результатах работы, наставничество на\u00A0начальных шагах в\u00A0компании'
  },
  {
    title: 'ПРОФЕССИОНАЛЬНЫЙ ТРЭК',
    subTitle:
      'Полноценная внутренняя система CRM с\u00A0возможностью выстраивания цифрового следа сотрудника и\u00A0планирование проффесионального роста на\u00A0регулярном мониторинге, для\u00A0реализации вертикального или\u00A0горизонтального самовыражения'
  },
  {
    title: 'КРЕАТИВНАЯ СРЕДА И\u00A0САМОРАЗВИТИЕ',
    subTitle:
      'Опенспейс в\u00A0центре города. Реализация собственных инициатив при поддержке коллег и\u00A0компании. Обучение и\u00A0развитие сотрудников'
  },
  {
    title: 'МАСШТАБНЫЕ ПРОЕКТЫ В\u00A0СФЕРЕ ИННОВАЦИЙ',
    subTitle:
      'Работая в\u00A0РнД МГТУ, вы\u00A0становитесь частью больших проектов и\u00A0получаете возможность побывать на\u00A0крупнейших промышленных предприятиях Российской Федерации и\u00A0стран\u00A0СНГ'
  }
];

export const Careers = () => {
  const { isSmallTablet } = useDevice();

  return (
    <Container isOffLayout>
      <div className={style.titleBlock}>
        <div>
          <Slash />

          <Text variant={FontsEnum.MEDIUM}>карьера</Text>
        </div>

        {!isSmallTablet && (
          <Text variant={FontsEnum.MEDIUM} className={style.nameBlockSubtitle}>
            Мы заинтересованы в поиске новых кадров
          </Text>
        )}
      </div>

      <div className={style.contentBlock}>
        <div className={style.TableBlock}>
          {TABLE_CONTENT.map((data) => (
            <InfoLine
              key={data.title}
              classNameContent={style.infoLineWrapper}
              {...data}
              innerPropsTextSubtitle={{
                className: style.infoLineSubtitle
              }}
              innerPropsTextTitle={{
                className: style.infoLineTitle
              }}
            />
          ))}
        </div>

        <Text variant={FontsEnum.MEDIUM} className={style.vacansiesTitle}>
          Актуальные вакансии
        </Text>

        <Vacancies className={style.vacansiesContent} />

        <div>
          <Text variant={FontsEnum.MEDIUM} className={style.vacansiesTitle}>
            Не нашли подходящую вакансию?
          </Text>

          <Text variant={FontsEnum.LIGHT} className={style.vacansiesSubTitle}>
            РнД МГТУ регулярно расширяет штат сотрудников. Отправьте контакты,чтобы обсудить условия
            сотрудничества, мы открыты к новым лицам компании.
          </Text>

          <SendResumeForm />
        </div>
      </div>
    </Container>
  );
};
