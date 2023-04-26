import { useEffect } from 'react';

import ImgChunks from '../../assets';
import { useGlobalContext } from '../../context/reducer';
import Card from '../Card';

const CardTemplate = ({ array }) => {
  const { openCard, addCorrectCard, clearOpenCard } = useGlobalContext();

  useEffect(() => {
    console.log(openCard);
    if (openCard.length === 2) {
      if (openCard[0].url === openCard[1].url) {
        addCorrectCard(openCard[0].url);
        clearOpenCard();
      }
    }
  }, [openCard]);

  return (
    <>
      {array.map((x, index) => {
        return <Card imgURL={ImgChunks[`IMG_${x}`]} key={index} index={index} />;
      })}
    </>
  );
};

export default CardTemplate;
