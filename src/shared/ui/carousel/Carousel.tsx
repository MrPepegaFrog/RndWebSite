import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking, { type FlickingOptions, type FlickingProps } from '@egjs/react-flicking';

import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import '@egjs/react-flicking/dist/flicking.css';

interface CarouselPropsType extends Omit<FlickingProps, 'plugins'>, Partial<FlickingOptions> {
  /**
   * @description Внутренние компоненты
   */
  children: JSX.Element[];
  /**
   * @description Настройеи автоплея
   */
  autoPlayOption?: ConstructorParameters<typeof AutoPlay>[0];
  /**
   * @description Флаг включения автоплея
   */
  isAutoPlay?: boolean;
}

const Carousel = ({
  children,
  autoPlayOption,
  isAutoPlay,
  ...flickingProps
}: CarouselPropsType) => {
  const plugins = [];

  if (isAutoPlay) {
    plugins.push(
      new AutoPlay({
        duration: 0,
        direction: 'NEXT',
        stopOnHover: true,
        animationDuration: 2000,

        ...autoPlayOption
      })
    );
  }

  return (
    <Flicking plugins={plugins} circular {...flickingProps}>
      {children}
    </Flicking>
  );
};

export default Carousel;
