import { type ElementType, type ReactNode } from 'react';

import { H1 } from './ui/h1';
import { H2 } from './ui/h2';
import { H3 } from './ui/h3';

export enum HeadingTagsEnum {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3'
}

const HEADINGS: Record<HeadingTagsEnum, ElementType> = {
  [HeadingTagsEnum.H1]: H1,
  [HeadingTagsEnum.H2]: H2,
  [HeadingTagsEnum.H3]: H3
};

export interface HeadingPropsType {
  /**
   * @description Внутренние компоненты
   */
  children?: ReactNode;
  /**
   * @description Тип Heading
   * @default HeadingTagsEnum.H1
   */
  variant?: HeadingTagsEnum;
  /**
   * @description Кастомные стили
   */
  className?: string;
}

export type HeadingVariantProps = Omit<HeadingPropsType, 'variant'>;

const Heading = ({ children, className, variant = HeadingTagsEnum.H1 }: HeadingPropsType) => {
  const HeadingComponent = HEADINGS[variant];

  return <HeadingComponent className={className}>{children}</HeadingComponent>;
};

export default Heading;
