import { useState } from 'react';

import { clsx } from '@/shared/lib/classNames';

import Text, { FontsEnum } from '../../typography';

import AccordionList, { type IAccordionListType } from './AccordionList';
import AccordionText, { type IAccordionTextType } from './AccordionText';

import style from './accordion.module.scss';

export enum AccordionType {
  TEXT = 'text',
  LIST = 'list'
}

export interface AccordionItemProps {
  title: string;
  content: Array<Omit<IAccordionListType, 'isShow'> | Omit<IAccordionTextType, 'isShow'>>;
}

const AccordionItems = ({ content, title }: AccordionItemProps) => {
  const [isShow, setIsShow] = useState(false);

  const showBlock = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <div className={style.border}>
        <div
          className={clsx(style['accordionItem-title'], {
            [style['accordionItem-title_active']]: isShow
          })}
          onClick={showBlock}
        >
          <Text variant={FontsEnum.REGULAR} className={style['accordionItem-title-text']}>
            {title}
          </Text>

          <div className={clsx(style.cross, { [style.crossAnim]: isShow })}>
            <div className={style.horCrossLine}></div>
            <div className={style.vertCrossLine}></div>
          </div>
        </div>

        {content?.map((data) =>
          data.type === AccordionType.LIST ? (
            <AccordionList key={data.subTitle} isShow={isShow} {...data} />
          ) : (
            <AccordionText key={data.subTitle} isShow={isShow} {...data} />
          )
        )}
      </div>
    </>
  );
};

export default AccordionItems;

/*

 <>
      <div>
        <Text>{title}</Text>
      </div>
      {content.map((data) =>
        data.type ? (
          <AccordionList key={data.subTitle} {...content} />
        ) : (
          <AccordionText key={data.subTitle} {...content} />
        )
      )}
    </>



     subData: {
    title: string;
    content: [
      {
        type: AccordionType;
        subTitle: string;
        text: Array<{ value: string; className?: string }>;
      }
    ];
  };
*/
