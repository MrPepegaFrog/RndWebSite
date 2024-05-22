import { type ReactNode } from 'react';

import { clsx } from '@/shared/lib/classNames';

import style from './card.module.scss';

export enum ColorEnum {
  CORP_BLUE_CARD = 'corp',
  CARD = 'card'
}

interface BlockPropsType {
  children?: ReactNode;
  variant?: ColorEnum;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, variant, className, onClick }: BlockPropsType) => {
  return (
    <div className={clsx(style[variant], className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
