import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from './SearchBar.module.scss';

type SearchBarProps = {
  searchPath?: string;
};

const SearchBar = ({ searchPath = '/items?search=' }: SearchBarProps) => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [focusInput, setfocusInput] = useState(false);

  useEffect(() => {
    if (searchPath.length === 0) router.push('/');
  }, [searchPath]);

  const handleSubmit = (e) => {
    e.target.blur();
    const query = searchInputRef?.current?.value;
    router.push(`${searchPath}${query}`);
  };

  const handleKeyDown = (event) => {
    if (event?.keyCode === 13) handleSubmit(event);
  };

  return (
    <div className={style.SearchBarContainer}>
      <input
        className={style.InputSearch}
        ref={searchInputRef}
        type={'text'}
        placeholder="Nunca dejes de buscar"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Go</button>
    </div>
  );
};

export default SearchBar;
