import { clsx } from '@/shared/lib/classNames';

import { type HeadingVariantProps } from '../../heading';

import styles from './h3.module.scss';

export const H3 = ({ children, className }: HeadingVariantProps) => {
  return <h3 className={clsx(className, styles.heading3)}>{children}</h3>;
};
