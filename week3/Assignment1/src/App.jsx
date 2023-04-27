import { ThemeProvider } from 'styled-components';

import { ContextProvider } from './context/provider';
import MainPage from './pages/MainPage';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <MainPage />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
