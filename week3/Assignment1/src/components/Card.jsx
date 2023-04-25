import '../styles/cardStyle.css';

import ImgChunks from '../assets/index';

const Card = () => {
  return (
    <article className="card">
      <div className="card_frontface">
        <img src={ImgChunks.IMG_1} alt="찌호이미지!" />
      </div>
      <div className="card_backface">hello</div>
    </article>
  );
};

export default Card;
