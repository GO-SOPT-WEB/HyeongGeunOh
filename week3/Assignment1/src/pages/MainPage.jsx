import Button from '../components/atom/Button';
import GameSection from '../components/GameSection';
import Header from '../components/Header';
import Modal from '../components/Modal';
import SuccessModal from '../components/organism/SuccessModal';
import { useGlobalContext } from '../context/reducer';
import { getRandomIndexArray } from '../utils/getRandomIndexArray';

const MainPage = () => {
  const { difficulty, successModalOpen, clearCorrectCard, clearOpenCard, setRandomArray } = useGlobalContext();

  return (
    <>
      <Header />
      <GameSection />
      <Button
        type="reset"
        onClick={() => {
          clearCorrectCard();
          clearOpenCard();
          setRandomArray(getRandomIndexArray(difficulty));
        }}
        innerText="RESET"
      />
      {successModalOpen && (
        <Modal>
          <SuccessModal />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
