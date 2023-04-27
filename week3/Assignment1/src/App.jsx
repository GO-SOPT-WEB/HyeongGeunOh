import { ContextProvider } from './context/provider';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
};

export default App;
