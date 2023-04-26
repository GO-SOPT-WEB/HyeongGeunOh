import '../styles/cardStyle.css';

import { useGlobalContext } from '../context/reducer';

const Card = ({ imgURL, index }) => {
  const url = imgURL.split('_')[1];
  const { openCard, addOpenCard } = useGlobalContext();
  const format = { url, index };
  console.log({ url, index }, openCard.includes(format));

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <article
      className={`card ${openCard.some((x) => x.index === index) ? '' : 'rotate'}`}
      onClick={() => addOpenCard(format)}
      style={{ transformStyle: 'preserve-3d' }}>
      <div className="card_frontface">
        <img src={imgURL} alt={`찌호이미지: ${imgURL}`} />
      </div>
      <div className="card_backface"></div>
    </article>
  );
};

export default Card;
