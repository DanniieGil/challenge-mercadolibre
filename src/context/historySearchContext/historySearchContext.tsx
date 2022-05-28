import { createContext, useState } from 'react';

export const HistorySearchContext = createContext({} as any);

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
