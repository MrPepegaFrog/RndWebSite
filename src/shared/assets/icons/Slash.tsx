import { type ComponentProps } from 'react';

export const Slash = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_2405_7699)'>
        <rect
          x='21.9863'
          y='6'
          width='3'
          height='24'
          transform='rotate(29.9647 21.9863 6)'
          fill='#FCFCFC'
        />
      </g>
      <defs>
        <clipPath id='clip0_2405_7699'>
          <rect width='33' height='33' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
