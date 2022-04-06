import React from 'react';
import { MainStyle } from './styles';

const Layout: React.FC = ({ children }) => (
  <>
    <header />
    <MainStyle>{children}</MainStyle>
    <footer />
  </>
);

export default Layout;
