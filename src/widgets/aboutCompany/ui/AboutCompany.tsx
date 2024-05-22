import { CompanyStats } from '@/widgets/companyStats';

import { Arrow } from '@/shared/assets/icons/Arrow';
import { Container } from '@/shared/ui/container';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './aboutCompany.module.scss';

export const AboutCompany = () => {
  return (
    <Container>
      <div>
        <Arrow className={style.icon} />

        <Text variant={FontsEnum.MEDIUM}>о&nbsp;компании</Text>
      </div>

      <div className={style.content}>
        <Text variant={FontsEnum.MEDIUM} className={style.contentTitle}>
          РнД МГТУ — лидер в сфере промышленных разработок и высокотехнологичных продуктов
        </Text>

        <Text variant={FontsEnum.MEDIUM} className={style.nameList}>
          Направления деятельности:
        </Text>

        <ul className={style.list}>
          <li className={style.listItem}>
            <Text variant={FontsEnum.LIGHT}>
              Научно-исследовательские и опытно-конструкторские работы (НИОКР)
            </Text>
          </li>

          <li className={style.listItem}>
            <Text variant={FontsEnum.LIGHT}>Инновации в черной и цветной металлургии</Text>
          </li>

          <li className={style.listItem}>
            <Text variant={FontsEnum.LIGHT}>
              Реверс инжиниринг зарубежных технологий и деталей машин
            </Text>
          </li>

          <li className={style.listItem}>
            <Text variant={FontsEnum.LIGHT}>Цифровые и комплексные решения</Text>
          </li>

          <li className={style.listItem}>
            <Text variant={FontsEnum.LIGHT}>Промышленная безопасность и экология</Text>
          </li>

          <li className={style.listItem}>
            <Text variant={FontsEnum.LIGHT}>Решения в области индустрии 4.0</Text>
          </li>
        </ul>

        <CompanyStats />
      </div>
    </Container>
  );
};
