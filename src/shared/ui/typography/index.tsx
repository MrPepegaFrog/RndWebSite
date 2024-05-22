import { type ReactNode } from 'react';

import { clsx } from '@/shared/lib/classNames';

import style from './typography.module.scss';

export enum FontsEnum {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  LIGHT = 'light',
  BOLD = 'bold'
}

interface TextPropsType {
  /**
   * @description Внутренние компоненты
   */
  children?: ReactNode;
  /**
   * @description Вид текста (шрифт)
   * @default FontsEnum.REGULAR
   */
  variant?: FontsEnum;
  /**
   * @description Кастомные стили
   */
  className?: string;
}

const Text = ({ children, variant = FontsEnum.REGULAR, className }: TextPropsType) => {
  return <p className={clsx(style[variant], className)}>{children}</p>;
};

export default Text;
