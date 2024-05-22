import { type ReactNode, memo } from 'react';

interface AnchorProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Anchor = memo(({ href, children, className }: AnchorProps) => {
  return (
    <a href={href} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
});
