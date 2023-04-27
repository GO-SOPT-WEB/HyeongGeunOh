import GameSection from '../components/GameSection';
import Header from '../components/Header';
import { ContextProvider } from '../context/provider';

const MainPage = () => {
  return (
    <ContextProvider>
      <Header />
      <GameSection />
    </ContextProvider>
  );
};

export default MainPage;
