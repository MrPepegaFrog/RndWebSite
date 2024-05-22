import { type ElementType } from 'react';

import { useDevice } from '@/shared/hooks/useDevice';
import { clsx } from '@/shared/lib/classNames';

import Text, { FontsEnum } from '../typography';

import styles from './infoLine.module.scss';

interface InfoLineProps {
  /**
   * @description  Название новости
   */
  title: string;
  /**
   * @description  Доп. контетн
   */
  subTitle: string;
  /**
   * @description  Иконка
   */
  Icon?: ElementType;
  /**
   * @description  Кастомные стили
   */
  className?: string;
  /**
   * @description  Кастомные стили content
   */
  classNameContent?: string;
  /**
   * @description Настройки title
   */
  innerPropsTextTitle?: {
    variant?: FontsEnum;
    className?: string;
  };
  /**
   * @description Настройки subTitle
   */
  innerPropsTextSubtitle?: {
    variant?: FontsEnum;
    className?: string;
  };
}

export const InfoLine = ({
  className,
  Icon,
  subTitle,
  title,
  innerPropsTextSubtitle,
  innerPropsTextTitle,
  classNameContent
}: InfoLineProps) => {
  const { isLargeTablet } = useDevice();

  const { variant: variantTitle, className: classNameTitle } = innerPropsTextTitle ?? {};
  const { variant: variantSubtitle, className: classNameSubtitle } = innerPropsTextSubtitle ?? {};

  return (
    <div className={clsx(styles.infoLine, className)}>
      {Icon && !isLargeTablet && <Icon className={styles.icon} />}

      <div className={clsx(classNameContent, styles.content)}>
        <div className={clsx(styles.titleWrapper)}>
          {Icon && isLargeTablet && <Icon className={styles.icon} />}

          <Text className={clsx(styles.title, classNameTitle)} variant={variantTitle}>
            {title}
          </Text>
        </div>

        <Text
          variant={variantSubtitle ?? FontsEnum.LIGHT}
          className={clsx(styles.subTitle, classNameSubtitle)}
        >
          {subTitle}
        </Text>
      </div>
    </div>
  );
};
