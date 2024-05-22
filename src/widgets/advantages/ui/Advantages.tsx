import { AdvantagesIco } from '@/shared/assets/icons/adventsBlock_Icons/AdvantagesIco';
import { ImportSubIco } from '@/shared/assets/icons/adventsBlock_Icons/ImportSubIco';
import { IndividualApproachIco } from '@/shared/assets/icons/adventsBlock_Icons/IndividualApproachIco';
import { PartnershipIco } from '@/shared/assets/icons/adventsBlock_Icons/PartnershipIco';
import { ScientificPotential } from '@/shared/assets/icons/adventsBlock_Icons/ScientificPotential';
import { Slash } from '@/shared/assets/icons/Slash';
import { Container } from '@/shared/ui/container';
import { InfoLine } from '@/shared/ui/infoLine';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './advantages.module.scss';

const CONTENT = [
  {
    Icon: AdvantagesIco,
    title: 'комплексный подход к\u00A0реализации проектов',
    subTitle:
      'Наш подход предполагает не\u00A0только вовлечение высококвалифицированных кадров и научных специалистов, но\u00A0и учитывает все возможные взаимосвязи и внешние факторы для\u00A0поиска оптимального решения для заказчика на\u00A0балансе цена/качество/лучшие технологии с\u00A0учетом стандартов заказчика'
  },
  {
    Icon: IndividualApproachIco,
    title: 'Индивидуальный подход',
    subTitle:
      'Четко и\u00A0точно определяем потребность заказчика, чтобы найти наиболее эффективный способ достижения его целей. Проффесионально подстраиваем наши решения под\u00A0специфику вашего бизнеса'
  },
  {
    Icon: ScientificPotential,
    title: 'научный потенциал',
    subTitle:
      'Мы обладаем всей полнотой знаний, опыта и\u00A0навыков, необходимых для проведения научных исследований  и\u00A0реализации научных достижений в\u00A0вашей деятельности'
  },
  {
    Icon: ImportSubIco,
    title: 'импортозамещение',
    subTitle:
      'Мы не боимся западных санкций, поэтому, мы готовы предоставить всю полноту собственных услуг, соответствующих направлениям промышленности 4.0, а\u00A0также импортозаместить ключевые западные технологии, поставить необходимое оборудование'
  },
  {
    Icon: PartnershipIco,
    title: 'Надежность и\u00A0долгосрочное партнерство',
    subTitle:
      'Поддерживаем длительное и\u00A0стабильное сотрудничество со\u00A0всеми партнерами, обеспечивая эффективное развитие вашего производства. Разрабатываем конкурентные и\u00A0качественные продукты в\u00A0согласованные сроки'
  }
];

export const Advantages = () => {
  return (
    <Container isOffLayout>
      <div className={style.titleBlock}>
        <Slash />

        <Text variant={FontsEnum.MEDIUM}>ПРЕИМУЩЕСТВА</Text>
      </div>

      <div className={style.contentBlock}>
        {CONTENT.map((data) => (
          <InfoLine {...data} key={data.title} />
        ))}
      </div>
    </Container>
  );
};
