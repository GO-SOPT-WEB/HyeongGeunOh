import GameSection from '../components/GameSection';
import Header from '../components/Header';

const MainPage = () => {
  return (
    <>
      <Header correct={0} difficulty={9} />
      <GameSection />
    </>
  );
};

export default MainPage;
