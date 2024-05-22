import { type ComponentProps } from 'react';

export const Search = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='11' cy='11' r='7' stroke='#FCFCFC' strokeWidth='2' />
      <path d='M20 20L17 17' stroke='#FCFCFC' strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
};