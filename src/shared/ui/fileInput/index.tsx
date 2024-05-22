import { type ChangeEventHandler, type ComponentProps, forwardRef, useState } from 'react';

import { LinkIco } from '@/shared/assets/icons/linkIco';
import { clsx } from '@/shared/lib/classNames';

import { Input } from '../input';
import Text, { FontsEnum } from '../typography';

import styles from './fileInput.module.scss';

export enum FileInputSize {
  SIZE_M = 'size_m'
}

interface FileInputProps extends ComponentProps<'input'> {
  /**
   * @description текст рядом с иконой
   */
  title: string;
  /**
   * @description Кастомные стили
   */
  className?: string;
  /**
   * @description Размер fileInput
   * @default FileInputSize.SIZE_M
   */
  sizeVariant?: FileInputSize;
  /**
   * @description Размер в байтах
   */
  maxSize?: number;
  /**
   *  @description Ошибка поля ввода
   */
  error?: boolean;
  /**
   *  @description Обработчик ошибок
   */
  onError?: () => void;
  /**
   *  @description Обработка очистки ошибки
   */
  onErrorClear?: () => void;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      title,
      sizeVariant = FileInputSize.SIZE_M,
      error,
      maxSize,
      onError,
      onErrorClear,
      ...props
    },
    ref
  ) => {
    const [nameFile, setNameFile] = useState('');

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const file = event.currentTarget.files[0];

      onErrorClear?.();

      if (maxSize && file.size > maxSize) {
        onError?.();
      }

      setNameFile(file.name);
    };

    return (
      <label
        className={clsx(className, styles[sizeVariant], styles.fileInput, {
          [styles.error]: Boolean(error)
        })}
      >
        <LinkIco />

        <Text variant={FontsEnum.LIGHT} className={styles.text}>
          {nameFile || title}
        </Text>

        <Input {...props} className={styles.inputFile} type='file' onChange={onChange} ref={ref} />
      </label>
    );
  }
);
