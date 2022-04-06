import { createGlobalStyle } from 'styled-components';

export const ColorsStyles = createGlobalStyle`
  :root {
    --bg-page: ${(props) => props.theme.colors.white};
    --text: ${(props) => props.theme.colors.black};
  }
`;
export const MediaQueryStyles = createGlobalStyle`
  :root {
    --sm: 320px;
    --md: 720px;
    --xl: 1040px;
  }
`;
export const FontSizeStyles = createGlobalStyle`
  :root {
    --title: 2rem;
    --sub-title: 1.5rem;
    --font-size: 1rem;
  }
`;

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--bg-page);
    color: var(--text);
    font-size: var(--font-size);
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;
