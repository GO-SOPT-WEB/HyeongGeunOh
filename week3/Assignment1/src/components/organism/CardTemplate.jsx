import { useEffect } from 'react';

import ImgChunks from '../../assets';
import { useGlobalContext } from '../../context/reducer';
import { getRandomIndexArray } from '../../utils/getRandomIndexArray';
import Card from '../Card';

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
    <>
      {randomArray.map((x, index) => {
        return <Card imgURL={ImgChunks[`IMG_${x}`]} key={index} index={index} />;
      })}
    </>
  );
};

export default CardTemplate;
