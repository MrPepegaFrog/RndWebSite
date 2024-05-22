import { type ComponentProps, type ReactNode } from 'react';

import { clsx } from '@/shared/lib/classNames';

import style from './button.module.scss';

export enum ButtonVariantsEnum {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  CORPORATIVE = 'corporative'
}

export enum ButtonFontsEnum {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  LIGHT = 'light',
  BOLD = 'bold'
}

interface ButtonPropsType extends ComponentProps<'button'> {
  /**
   * @description Внутренние компоненты
   */
  children?: ReactNode;
  /**
   * @description Кастомные стили
   */
  className?: string;
  /**
   * @description тип кнопки
   * @default ButtonVariantsEnum.PRIMARY
   */
  variant?: ButtonVariantsEnum;
  /**
   * @description тип шрифта
   * @default ButtonFontsEnum.REGULAR
   */
  font?: ButtonFontsEnum;
  /**
   * @description Ошибка
   */
  error?: boolean;
}

const Button = ({
  children,
  variant = ButtonVariantsEnum.PRIMARY,
  font = ButtonFontsEnum.REGULAR,
  className,
  error,
  disabled,
  ...props
}: ButtonPropsType) => {
  return (
    <button
      type='button'
      className={clsx(style[variant], style[font], style.button, className, {
        [style.error]: error,
        [style.disabled]: disabled
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
