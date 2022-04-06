import GlobalStyles, { ColorsStyles, FontSizeStyles, MediaQueryStyles } from '@globalStyles';
import defaultTheme from '@theme/default';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'leaflet/dist/leaflet.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ColorsStyles />
      <FontSizeStyles />
      <MediaQueryStyles />
    </ThemeProvider>
    <Component {...pageProps} />
  </>
);

export default MyApp;
