import GameSection from '../components/GameSection';
import Header from '../components/Header';
import { ContextProvider } from '../context/provider';

const MainPage = () => {
  return (
    <ContextProvider>
      <Header correct={0} difficulty={9} />
      <GameSection difficulty="Easy" />
    </ContextProvider>
  );
};

export default MainPage;
