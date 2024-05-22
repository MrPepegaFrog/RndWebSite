import { type HTMLAttributes, type ReactNode, createElement } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /**
   * @description Внутренние компоненты
   */
  children: ReactNode;
  /**
   * @description Кастомные стили
   */
  className?: string;
  /**
   * @description Выключить отступы по бокам
   */
  isOffSidesPadding?: boolean;
  /**
   * @description Тег будет select, иначе div
   * @default true
   */
  isTagWillSelect?: boolean;
  /**
   * @description Отключить сетку
   */
  isOffLayout?: boolean;
}

export const Container = ({
  children,
  className,
  isOffSidesPadding,
  isTagWillSelect = true,
  isOffLayout,
  ...props
}: ContainerProps) => {
  const classNames = clsx(className, styles.container, {
    [styles.padding_container]: !isOffSidesPadding,
    [styles.layout]: !isOffLayout
  });

  const Wrapper = createElement(
    isTagWillSelect ? 'section' : 'div',
    { className: classNames, ...props },
    children
  );

  return Wrapper;
};
