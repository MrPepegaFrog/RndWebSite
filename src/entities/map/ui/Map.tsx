import { type ComponentProps } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './map.module.scss';

interface MapProps extends ComponentProps<'iframe'> {}

export const Map = ({ className, ...props }: MapProps) => {
  return (
    <div className={clsx(className, styles.map)}>
      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A85b93f6cc7ff588e510471a68fe5d61e2e51aa29c3c63e62df7f5858a4b43236&amp;source=constructor'
        width='100%'
        height='100%'
        {...props}
      />
    </div>
  );
};
