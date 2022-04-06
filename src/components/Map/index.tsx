import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLocateData } from '../../hooks/useLocateData';
import { Container } from './styles';

const MapDiv: React.FC = () => {
  const {
    lat, lng
  } = useLocateData();
  const [from, setFrom] = useState<number[]>([28.385233, -81.563873]);
  const [to, setTo] = useState<number[]>([28.385233, -81.563873]);

  useEffect(() => {
    if (lat && lng) {
      setTo([lat, lng]);
      setFrom(to);
    }
  }, [lat, lng]);
  const MapWithNoSSR = dynamic(() => import('./map'), {
    ssr: false
  });
  return (
    <Container>
      <MapWithNoSSR from={from} to={to} />
    </Container>
  );
};

export default MapDiv;
