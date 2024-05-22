import { CompanyStats } from '@/widgets/companyStats';

import { EmployerLite } from '@/entities/employer';

import { Slash } from '@/shared/assets/icons/Slash';
import DirectorImage from '@/shared/assets/images/employerImage/HoziainImage.png';
import { Container } from '@/shared/ui/container';
import { Line } from '@/shared/ui/line';
import Text, { FontsEnum } from '@/shared/ui/typography';

import style from './descriptionCompany.module.scss';

export const DescriptionCompany = () => {
  return (
    <Container>
      <div>
        <Slash />

        <Text variant={FontsEnum.MEDIUM}>о&nbsp;компании</Text>
      </div>

      <div>
        <article className={style.description}>
          <Text variant={FontsEnum.MEDIUM} className={style.title}>
            Наша цель — обеспечить цифровую трансформацию процессов на промышленных предприятиях
            Российской Федерации, повысить эффективность и безопасность производства
          </Text>

          <EmployerLite
            className={style.employer}
            data={{
              photoSrc: DirectorImage,
              jobTitle: 'Директор РнД МГТУ',
              empName: 'Ложкин Игорь Александрович'
            }}
          />
        </article>

        <Line className={style.line} />

        <div className={style.mission}>
          <Text variant={FontsEnum.MEDIUM} className={style.missionTitle}>
            Наша миссия: Делаем производство эффективнее
          </Text>

          <Text variant={FontsEnum.LIGHT} className={style.missionDescription}>
            РнД МГТУ — компания, лидирующая в сфере разработок и реализации высокотехнологичных
            продуктов, решений индустрии 4.0, промышленной безопасности и экологии, на предприятиях
            черной и цветной металлургии. В область интересов компании входят направления: НИОКР,
            реализация цифровых решений, решений «под ключ», реверс инжиниринг зарубежных технологий
            и деталей машин
          </Text>
        </div>

        <CompanyStats />
      </div>
    </Container>
  );
};
