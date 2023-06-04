import GameSection from '../components/GameSection';
import Header from '../components/Header';
import ResetButton from '../components/organism/ResetButton';
import SuccessModal from '../components/SuccessModal';

const MainPage = () => {
  return (
    <>
      <Header />
      <GameSection />
      <ResetButton />
      <SuccessModal />
    </>
  );
};

export default MainPage;
