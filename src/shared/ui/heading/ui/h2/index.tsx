import { clsx } from '@/shared/lib/classNames';

import { type HeadingVariantProps } from '../../heading';

import styles from './h2.module.scss';

export const H2 = ({ children, className }: HeadingVariantProps) => {
  return <h2 className={clsx(styles.heading2, className)}>{children}</h2>;
};
