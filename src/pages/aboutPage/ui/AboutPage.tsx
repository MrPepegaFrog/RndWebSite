import { DescriptionCompany } from '@/widgets/descriptionCompany';
import { Histories } from '@/widgets/histories';
import { Partners } from '@/widgets/partners/ui/Partners';

const About = () => {
  return (
    <section>
      <DescriptionCompany />
      <Histories />
      <Partners />
    </section>
  );
};

export default About;
