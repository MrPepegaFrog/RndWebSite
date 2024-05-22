import { clsx } from '@/shared/lib/classNames';

import Text, { FontsEnum } from '../../typography';

import { type AccordionType } from './AccordionItems';

import style from './accordion.module.scss';
export interface IAccordionListType {
  type: AccordionType.LIST;
  subTitle: string;
  text: string;
  isShow: boolean;
}

const AccordionList = ({ subTitle, text, isShow }: IAccordionListType) => {
  return (
    <div className={clsx(style.accordion_content, { [style.accordion_content_active]: isShow })}>
      <div
        className={clsx(style['accordionText-title'], {
          [style['accordionText-title_active']]: isShow
        })}
      >
        <Text variant={FontsEnum.BOLD}>{subTitle}</Text>
      </div>

      {text.split('@').map((data, index) => (
        <ul key={index} className={style.accordionList}>
          <li className={style['accordionList-item']}>
            <div className={style.marker}></div>
            <Text variant={FontsEnum.REGULAR} className={style['accordionList-content']}>
              {data}
            </Text>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AccordionList;
