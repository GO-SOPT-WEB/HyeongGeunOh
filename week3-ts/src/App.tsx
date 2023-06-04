import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <MainPage />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
