import React, {
  createContext, useEffect, useMemo, useState
} from 'react';
import { ILocateApi } from '../interfaces/ILocateApi';
import { getDataApi } from '../services/getDataApi';

interface ILocateData {
  ip: string,
  country: string,
  city: string,
  lat: number,
  lng: number,
  setIp: React.Dispatch<React.SetStateAction<string>>,
  myIp: string,
  isp: string,
  countryFlag: string,
  currentTime: string
}
const INICIAL_DATA_FETCH_URL = (ip: string) => (`
https://api.ipgeolocation.io/ipgeo?apiKey=a1e88024c36e4596be96be439f10c9c8&ip=${ip}`);
const INICIAL_IP_FETCH_URL = () => ('https://api.ipify.org?format=json');
const LocateDataContext = createContext<ILocateData>({} as ILocateData);
export const LocateDataProvider: React.FC = ({ children }) => {
  const [dataLocate, setDataLocate] = useState<ILocateApi | null>(null);
  const [values, setValues] = useState<ILocateData>({} as ILocateData);
  const [myIp, setMyIp] = useState('');
  const [ipSearch, setIp] = useState(myIp);
  async function fetchData() {
    try {
      const data = await getDataApi<ILocateApi>(INICIAL_DATA_FETCH_URL(ipSearch));
      const MyIpFetch = await getDataApi<ILocateApi>(INICIAL_IP_FETCH_URL());
      setMyIp(MyIpFetch.ip);
      setDataLocate(data);
    } catch {
      alert('Type a valid Ip');
    }
  }

  useEffect(() => {
    fetchData();
  }, [ipSearch]);
  useEffect(() => {
    if (dataLocate) {
      const {
        ip,
        country_name: country,
        city,
        latitude: lat,
        longitude: lng,
        isp,
        country_flag: countryFlag,
        time_zone: {
          current_time: currentTime
        }
      } = dataLocate;
      setValues({
        ip,
        country,
        city,
        lat,
        lng,
        isp,
        setIp,
        myIp,
        countryFlag,
        currentTime
      });
    }
  }, [dataLocate]);

  const contextValues = useMemo(() => (values), [values]);
  return (
    <LocateDataContext.Provider value={contextValues}>
      {children}
    </LocateDataContext.Provider>
  );
};

export default LocateDataContext;
