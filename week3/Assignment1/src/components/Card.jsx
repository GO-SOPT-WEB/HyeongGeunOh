import styled from 'styled-components';

import { useGlobalContext } from '../context/reducer';

const Card = ({ imgURL, index }) => {
  const url = imgURL.split('_')[1];
  const { openCard, correctCard, addOpenCard } = useGlobalContext();
  const format = { url, index };
  const buttonOnclick = () => {
    if (correctCard.includes(url) || openCard.some((x) => x.index === index) || openCard.length === 2) return;
    addOpenCard(format);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <Article rotate={correctCard.includes(url) || openCard.some((x) => x.index === index)} onClick={buttonOnclick}>
      <div className="card_frontface">
        <img src={imgURL} alt={`찌호이미지: ${imgURL}`} />
      </div>
      <div className="card_backface"></div>
    </Article>
  );
};

export default Card;

const Article = styled.article`
  position: relative;
  transform: ${({ rotate }) => (rotate ? 'rotateY(0deg)' : 'rotateY(180deg)')};
  transition-duration: 1s;
  transform-style: preserve-3d;
  .card_frontface {
    width: 180px;
    height: 250px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      backface-visibility: hidden;
    }
  }
  .card_backface {
    top: 0;
    left: 0;
    width: 180px;
    height: 250px;
    border-radius: 20px;
    background-color: #a11818;
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
`;
