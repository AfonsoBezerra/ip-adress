import 'styled-components';
import theme from './global/theme/default';

type ITheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}
