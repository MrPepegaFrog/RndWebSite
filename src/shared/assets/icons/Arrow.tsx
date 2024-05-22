import { type ComponentProps } from 'react';

export const Arrow = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1525_1357)'>
        <path
          d='M16.5 5.5L14.5613 7.43875L22.2337 15.125H5.5V17.875H22.2337L14.5613 25.5613L16.5 27.5L27.5 16.5L16.5 5.5Z'
          fill='#1D55A6'
        />
      </g>
      <defs>
        <clipPath id='clip0_1525_1357'>
          <rect width='33' height='33' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
