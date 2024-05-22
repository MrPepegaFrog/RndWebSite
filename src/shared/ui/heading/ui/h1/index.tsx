import { clsx } from '@/shared/lib/classNames';

import { type HeadingVariantProps } from '../../heading';

import styles from './h1.module.scss';

export const H1 = ({ children, className }: HeadingVariantProps) => {
  return <h1 className={clsx(styles.heading1, className)}>{children}</h1>;
};
