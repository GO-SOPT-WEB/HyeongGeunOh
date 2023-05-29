import { useGlobalContext } from '../../context/reducer';
import { getRandomIndexArray } from '../../utils/getRandomIndexArray';
import ButtonView from '../atom/ButtonView';

const ResetButton = () => {
  const { difficulty, clearCorrectCard, clearOpenCard, setRandomArray } = useGlobalContext();

  return (
    <ButtonView
      type="RESET"
      onClick={() => {
        clearCorrectCard();
        clearOpenCard();
        setRandomArray(getRandomIndexArray(difficulty));
      }}
      innerText="RESET"
    />
  );
};

export default ResetButton;
