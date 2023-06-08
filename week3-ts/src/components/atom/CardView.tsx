import styled from "styled-components";

interface CardViewProps {
  rotate: "rotateY(0deg)" | "rotateY(180deg)";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  imgURL: string;
}

const CardView = ({ rotate, onClick, imgURL }: CardViewProps) => {
  return (
    <StyledCardArticle rotate={rotate} onClick={onClick}>
      <div className="card_frontface">
        <img src={imgURL} alt={`찌호이미지: ${imgURL}`} />
      </div>
      <div className="card_backface"></div>
    </StyledCardArticle>
  );
};

const StyledCardArticle = styled.article<{
  rotate: "rotateY(0deg)" | "rotateY(180deg)";
}>`
  position: relative;
  transform: ${({ rotate }) => rotate};
  transition-duration: 1s;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
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
      -webkit-backface-visibility: hidden;
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
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

export default CardView;
