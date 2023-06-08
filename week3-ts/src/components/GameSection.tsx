import styled from 'styled-components';

import CardTemplate from './template/CardTemplate';
import DifficultyButtonTemplate from './template/DifficultyButtonTemplate';

const GameSection = () => {
  return (
    <StyledGameSection>
      <DifficultyButtonTemplate />
      <CardTemplate />
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

export default GameSection;
