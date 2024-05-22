import { type ChangeEventHandler, memo, useRef } from 'react';

import { Search as SearchLogo } from '@/shared/assets/icons/Search';
import { clsx } from '@/shared/lib/classNames';
import { debounce } from '@/shared/lib/debonce';
import { Input, SizeEnum, VariantEnum } from '@/shared/ui/input';

import styles from './search.module.scss';

const updateSearchDebounce = debounce((value: string, setValue: (newValue: string) => void) => {
  setValue(value);
}, 800);

interface SearchProps {
  value: string;
  setValue: (newValue: string) => void;
  className?: string;
  placeholder?: string;
}

export const Search = memo(({ className, placeholder, value, setValue }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickSearch = () => {
    inputRef?.current.focus();
  };

  const updateValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateSearchDebounce(event.currentTarget.value, setValue);
  };

  return (
    <div className={clsx(styles.search, className)} onClick={onClickSearch}>
      <SearchLogo className={styles.logo} />

      <Input
        onChange={updateValue}
        ref={inputRef}
        type='search'
        placeholder={placeholder}
        className={styles.input}
        sizeVariant={SizeEnum.NO_SIZE}
        variant={VariantEnum.CLEAR}
      />
    </div>
  );
});
