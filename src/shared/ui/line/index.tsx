import { type ComponentProps } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './line.module.scss';

interface LineProps extends ComponentProps<'div'> {}

export const Line = ({ className, ...props }: LineProps) => (
  <div className={clsx(className, styles.Line)} {...props} />
);
