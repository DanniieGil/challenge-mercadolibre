import { HistorySearchContext } from '@context/historySearchContext/historySearchContext';
import { useContext } from 'react';

export const useHistorySearch = () => useContext(HistorySearchContext);
