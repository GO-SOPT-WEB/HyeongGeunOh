import styled from 'styled-components';

const CardView = ({ rotate, onClick, imgURL }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <StyledCardArticle rotate={rotate} onClick={onClick}>
      <div className="card_frontface">
        <img src={imgURL} alt={`찌호이미지: ${imgURL}`} />
      </div>
      <div className="card_backface"></div>
    </StyledCardArticle>
  );
};

const StyledCardArticle = styled.article`
  position: relative;
  transform: ${({ rotate }) => rotate};
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

export default CardView;
