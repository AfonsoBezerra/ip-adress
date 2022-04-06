import { useContext } from 'react';
import LocateDataContext from '../contexts/LocateDataContext';

export const useLocateData = () => useContext(LocateDataContext);
