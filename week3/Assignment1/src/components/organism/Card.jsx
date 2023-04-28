import { useGlobalContext } from '../../context/reducer';
import CardView from '../atom/CardView';

const Card = ({ imgURL, index }) => {
  const url = imgURL.split('_')[1];
  const { openCard, correctCard, addOpenCard } = useGlobalContext();
  const format = { url, index };
  const buttonOnclick = () => {
    if (correctCard.includes(url) || openCard.some((x) => x.index === index) || openCard.length === 2) return;
    addOpenCard(format);
  };
  const rotate = correctCard.includes(url) || openCard.some((x) => x.index === index);

  return <CardView rotate={rotate ? 'rotateY(0deg)' : 'rotateY(180deg)'} onClick={buttonOnclick} imgURL={imgURL} />;
};

export default Card;
