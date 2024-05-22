import AccordionItems, { type AccordionItemProps } from './AccordionItems';

import style from './accordion.module.scss';

interface AccordionProps {
  data: {
    title: string;
    text?: string;
    items: AccordionItemProps[];
  };
}

const Accordion = ({ data }: AccordionProps) => {
  return (
    <div>
      {data.text && <div className={style['accordionBlock-subtitle']}>{data.text}</div>}

      <div>
        {data.items.map((item, index) => (
          <AccordionItems key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

/* 
  <>
      <div className={style.label}>
        <Text variant={FontsEnum.BOLD}>{title}</Text>
      </div>
      <div>{text}</div>
      <div className={style.accordionBlock}>
        {items.map((item) => (
          <AccordionItems key={item.title} {...item} />
        ))}
      </div>
    </>
*/
