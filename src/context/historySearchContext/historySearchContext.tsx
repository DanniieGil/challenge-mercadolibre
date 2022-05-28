import { createContext, useState } from 'react';

export const HistorySearchContext = createContext();

export const HistorySearchProvider = ({ children }) => {
  const [historySearch, setHistorySearch] = useState(["hola"]);

  const newHistorySearch = (newQuery) => {
    setHistorySearch([...historySearch, newQuery]);
  };

  return (
    <HistorySearchContext.Provider value={{ historySearch, newHistorySearch }}>
      {children}
    </HistorySearchContext.Provider>
  );
};
