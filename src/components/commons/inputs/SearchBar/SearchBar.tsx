import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './SearchBar.module.scss';
import { useHistorySearch } from '@hooks/useHistorySearch';

type SearchBarProps = {
  searchPath?: string;
};

const SearchBar = ({ searchPath = '/items?search=' }: SearchBarProps) => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const { newHistorySearch }: any = useHistorySearch();
  

  useEffect(() => {
    if (searchPath.length === 0) router.push('/');
  }, [searchPath]);

  const handleSubmit = (e) => {
    e.target.blur();
    const query = searchInputRef?.current?.value;
    newHistorySearch(query)
    router.push(`${searchPath}${query}`);
  };

  const handleKeyDown = (event) => {
    if (event?.keyCode === 13) handleSubmit(event);
  };

  const { SearchBarContainer, InputSearch, IconSearch } = style;

  return (
    <div className={SearchBarContainer}>
      <input
        className={InputSearch}
        ref={searchInputRef}
        type={'text'}
        placeholder="Nunca dejes de buscar"
        onKeyDown={handleKeyDown}
      />
      <div className={IconSearch}>
        <img
          src="http://localhost:3000/images/assets/ic_Search.png"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SearchBar;
