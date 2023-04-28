import { useEffect } from 'react';
import styled from 'styled-components';

import ImgChunks from '../../assets';
import { useGlobalContext } from '../../context/reducer';
import { getRandomIndexArray } from '../../utils/getRandomIndexArray';
import Card from '../organism/Card';

const CardTemplate = () => {
  const {
    difficulty,
    openCard,
    correctCard,
    randomArray,
    addCorrectCard,
    clearOpenCard,
    setRandomArray,
    setSuccessModalOpen,
  } = useGlobalContext();
  const perfectScore = difficulty === 'Easy' ? 5 : difficulty === 'Normal' ? 7 : 9;

  useEffect(() => {
    if (correctCard.length === perfectScore) {
      setSuccessModalOpen();
      return;
    }
    if (openCard.length === 2) {
      if (openCard[0].url === openCard[1].url) {
        addCorrectCard(openCard[0].url);
      }
      setTimeout(() => {
        clearOpenCard();
      }, 1000);
    }
  }, [openCard]);

  useEffect(() => {
    setRandomArray(getRandomIndexArray(difficulty));
  }, [difficulty]);

  return (
    <StyledCardWrapper>
      {randomArray.map((x, index) => {
        return <Card imgURL={ImgChunks[`IMG_${x}`]} key={index} index={index} />;
      })}
    </StyledCardWrapper>
  );
};

export default CardTemplate;

const StyledCardWrapper = styled.main`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  gap: 20px;
`;
