import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleSubmit = (e) => {
    const query = searchInputRef?.current?.value;
    router.push(`/items?search=${query}`);
  };

  return (
    <div>
      <input ref={searchInputRef} type={'text'} placeholder="Nunca dejes de buscar" />
      <button onClick={handleSubmit}>Go</button>
    </div>
  );
};

export default SearchBar;
