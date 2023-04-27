import styled from 'styled-components';

import { useGlobalContext } from '../context/reducer';
import Button from './atom/Button';
import CardTemplate from './organism/CardTemplate';

const GameSection = () => {
  const { setDifficulty, clearOpenCard, clearCorrectCard } = useGlobalContext();

  const difficultyHandler = (e) => {
    setDifficulty(e.target.value);
    clearOpenCard();
    clearCorrectCard();
  };

  return (
    <StyledGameSection className="gameSection_wrapper">
      <DifficulyButtonWrapper className="difficultyButton_wrapper">
        <Button type="difficulty" innerText="Easy" onClick={(e) => difficultyHandler(e)} />
        <Button type="difficulty" innerText="Normal" onClick={(e) => difficultyHandler(e)} />
        <Button type="difficulty" innerText="Hard" onClick={(e) => difficultyHandler(e)} />
      </DifficulyButtonWrapper>
      <CardWrapper>
        <CardTemplate />
      </CardWrapper>
    </StyledGameSection>
  );
};

const StyledGameSection = styled.section`
  width: 100vw;
  height: auto;
  min-height: calc(100vw - 200px);
  background-color: ${({ theme }) => theme.Background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DifficulyButtonWrapper = styled.div`
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const CardWrapper = styled.main`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  gap: 20px;
`;

export default GameSection;
