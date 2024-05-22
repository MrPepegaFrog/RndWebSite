import { type ComponentProps, forwardRef } from 'react';

import { clsx } from '@/shared/lib/classNames';

import Text from '../typography';

import styles from './input.module.scss';

export enum VariantEnum {
  PRIMARY = 'primary',
  CLEAR = 'clear'
}

export enum SizeEnum {
  NO_SIZE = 'no_size',
  SIZE_M = 'size_m'
}

interface InputProps extends ComponentProps<'input'> {
  /**
   *  @description Выбрать вариант input
   *  @default VariantEnum.PRIMARY
   */
  variant?: VariantEnum;
  /**
   *  @description Выбрать размер input
   *  @default SizeEnum.SIZE_M
   */
  sizeVariant?: SizeEnum;
  /**
   *  @description Ошибка поля ввода
   */
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = VariantEnum.PRIMARY, sizeVariant = SizeEnum.SIZE_M, className, error, ...props },
    ref
  ) => {
    const variantStyle = styles[variant];
    const sizeVariantStyle = styles[sizeVariant];

    return (
      <div className={className}>
        <input
          className={clsx(styles.input, sizeVariantStyle, variantStyle, {
            [styles.error_border]: Boolean(error)
          })}
          ref={ref}
          {...props}
        />

        {error && <Text className={styles.error}>{error}</Text>}
      </div>
    );
  }
);
