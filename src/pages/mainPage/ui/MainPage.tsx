import { AboutCompany } from '@/widgets/aboutCompany';
import { Advantages } from '@/widgets/advantages/ui/Advantages';
import { Cases } from '@/widgets/cases';
import { Implementations } from '@/widgets/implementations';
import { Partners } from '@/widgets/partners/ui/Partners';
import { PressCenter } from '@/widgets/pressCenter';
import { Services } from '@/widgets/services';

import VideoBox from '@/shared/ui/videobox/VideoBox';

const MainPage = () => {
  return (
    <section>
      <VideoBox source='intro.mp4' videoType='video/mp4' />
      <AboutCompany />
      <Partners />
      <Cases isColumn countVisibleItems={3} />
      <Implementations />
      <Services />
      <Advantages />
      <PressCenter />
    </section>
  );
};

export default MainPage;
