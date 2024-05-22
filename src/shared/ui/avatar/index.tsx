import { type ComponentProps } from 'react';

import { clsx } from '@/shared/lib/classNames';

interface AvatarProps extends ComponentProps<'img'> {}

export const Avatar = ({ className, src }: AvatarProps) => {
  return <img src={src} className={clsx(className)} alt='Sorry image not found' />;
};
