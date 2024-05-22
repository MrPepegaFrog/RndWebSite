import { clsx } from '@/shared/lib/classNames';

import Text, { FontsEnum } from '../../typography';

import { type AccordionType } from './AccordionItems';

import style from './accordion.module.scss';
export interface IAccordionTextType {
  type: AccordionType.TEXT;
  subTitle: string;
  text: string;
  isShow: boolean;
}

const AccordionText = ({ subTitle, text, isShow }: IAccordionTextType) => {
  return (
    <div className={clsx(style.accordion_content, { [style.accordion_content_active]: isShow })}>
      <div
        className={clsx(style['accordionText-title'], {
          [style['accordionText-title_active']]: isShow
        })}
      >
        <Text variant={FontsEnum.BOLD}>{subTitle}</Text>
      </div>

      <div>
        <Text variant={FontsEnum.REGULAR} className={style['accordionText-content']}>
          {text}
        </Text>
      </div>
    </div>
  );
};

export default AccordionText;
