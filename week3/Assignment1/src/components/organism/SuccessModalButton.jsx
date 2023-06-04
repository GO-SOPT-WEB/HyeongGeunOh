import { useGlobalContext } from '../../context/reducer';
import { getRandomIndexArray } from '../../utils/getRandomIndexArray';
import ButtonView from '../atom/ButtonView';

const SuccessModalButton = () => {
  const { difficulty, clearCorrectCard, clearOpenCard, setRandomArray, setSuccessModalOpen } = useGlobalContext();

  return (
    <ButtonView
      type="SUCCESSMODAL"
      onClick={() => {
        clearCorrectCard();
        clearOpenCard();
        setRandomArray(getRandomIndexArray(difficulty));
        setSuccessModalOpen();
      }}
      innerText="게임으로 돌아가기"
    />
  );
};

export default SuccessModalButton;
