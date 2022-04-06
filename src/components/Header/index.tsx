import React, { useEffect, useRef } from 'react';
import { Container } from './styles';
import { Search } from '../../styles/components/Icons';
import { useLocateData } from '../../hooks/useLocateData';

const Header: React.FC = () => {
  const {
    city, ip, isp, country, setIp, myIp, countryFlag
  } = useLocateData();
  const inputSearch = useRef<any>(undefined);
  function handleSubmit() {
    if (inputSearch.current) {
      if (inputSearch.current.value !== '') {
        return setIp(inputSearch.current.value);
      }
      alert('Type a Ip');
      return setIp(myIp);
    }
    return setIp(myIp);
  }
  useEffect(() => {
    const inputDocument: any = document.getElementById('input');
    inputDocument.onkeypress = function (e: any) {
      const chr = String.fromCharCode(e.which);
      if ('1234567890.'.indexOf(chr) < 0) { return false; }
      return '';
    };
  }, []);

  return (
    <Container>
      <h1>IP Address Tracker</h1>
      <div className="box">
        <input
          id="input"
          type="text"
          name="search"
          placeholder="Type a ip"
          maxLength={15}
          autoComplete="off"
          ref={inputSearch}

        />
        <button type="submit" className="button" onClick={handleSubmit}>
          <Search />
        </button>
      </div>
      <div className="results">
        <div className="flag">
          <img src={countryFlag} alt="Flag" />
        </div>
        <div className="container">
          <div className="ip">
            <h2>Ip Address</h2>
            <span>{ip}</span>
          </div>
          <div className="city">
            <h2>Location</h2>
            <div className="row">
              <span>
                {city}
              </span>
            </div>
          </div>
          <div className="country">
            <h2>Country</h2>
            <span>
              {country}
            </span>
          </div>

          <div className="isp">
            <h2>Provider</h2>
            <span>{isp}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
