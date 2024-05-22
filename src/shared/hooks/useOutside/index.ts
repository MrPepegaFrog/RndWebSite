import { useEffect, useRef, useState } from 'react';

export const useOutside = <T extends HTMLElement>(initialIsVisible: boolean) => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    // @ts-expect-error
    const path = event.path || event.composedPath?.();

    if (!(ref.current && path.includes(ref.current))) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
};
