import styled from 'styled-components';

import { useGlobalContext } from '../context/reducer';

const Header = () => {
  const { correctCard, difficulty } = useGlobalContext();

  return (
    <StyleHeader>
      <h1>!찌호를 맞춰주세요!</h1>
      <span>
        {correctCard.length} / {difficulty === 'Easy' ? 5 : difficulty === 'Normal' ? 7 : 9}
      </span>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  width: 100vw;
  height: 200px;
  background-color: #ebccb0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #815854;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  span {
    color: #6b3a35;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export default Header;
