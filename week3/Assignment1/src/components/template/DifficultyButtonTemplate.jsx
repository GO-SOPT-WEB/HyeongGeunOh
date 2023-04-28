import styled from 'styled-components';

import { useGlobalContext } from '../../context/reducer';
import ButtonView from '../atom/ButtonView';

const DifficultyButtonTemplate = () => {
  const { setDifficulty, clearOpenCard, clearCorrectCard } = useGlobalContext();

  const difficultyHandler = (e) => {
    setDifficulty(e.target.value);
    clearOpenCard();
    clearCorrectCard();
  };

  return (
    <StyledDifficulyButtonWrapper>
      <ButtonView type="DIFFICULTY" innerText="Easy" onClick={(e) => difficultyHandler(e)} />
      <ButtonView type="DIFFICULTY" innerText="Normal" onClick={(e) => difficultyHandler(e)} />
      <ButtonView type="DIFFICULTY" innerText="Hard" onClick={(e) => difficultyHandler(e)} />
    </StyledDifficulyButtonWrapper>
  );
};

const StyledDifficulyButtonWrapper = styled.div`
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export default DifficultyButtonTemplate;
