import { type ComponentProps, forwardRef } from 'react';

import { clsx } from '@/shared/lib/classNames';

import Button, { ButtonVariantsEnum } from '../button/Button';
import Text, { FontsEnum } from '../typography';

import styles from './checkbox.module.scss';

export enum CheckboxSizeEnum {
  SIZE_M = 'size_m'
}

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  /**
   * @descriptions Кастомные стили
   */
  className?: string;
  /**
   * @descriptions Размер checkbox
   * @default CheckboxSizeEnum.SIZE_M
   */
  sizeVariant?: CheckboxSizeEnum;
  /**
   * @descriptions Сообщение для чекбокса
   */
  text?: string;
  /**
   *  @description Ошибка поля ввода
   */
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, sizeVariant = CheckboxSizeEnum.SIZE_M, error, text, ...props }, ref) => {
    return (
      <div className={clsx(className, styles.checkboxWrapper)}>
        <Button variant={ButtonVariantsEnum.CLEAR} className={styles.checkboxButton}>
          <input
            className={clsx(styles[sizeVariant], styles.checkbox, {
              [styles.error_border]: error
            })}
            ref={ref}
            {...props}
            type='checkbox'
          />

          <span className={styles.checkmark} />
        </Button>

        {text && (
          <Text variant={FontsEnum.LIGHT} className={styles.checkboxText}>
            {text}
          </Text>
        )}
      </div>
    );
  }
);
