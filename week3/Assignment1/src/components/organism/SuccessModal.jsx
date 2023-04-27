import styled from 'styled-components';

import { useGlobalContext } from '../../context/reducer';

const SuccessModal = () => {
  const { clearCorrectCard, clearOpenCard, setSuccessModalOpen } = useGlobalContext();

  return (
    <StyledSuccessModal>
      <article>
        <h1>성공!!!</h1>
        <button
          type="button"
          value="게임으로 돌아가기"
          onClick={() => {
            setSuccessModalOpen();
            clearCorrectCard();
            clearOpenCard();
          }}>
          게임으로 돌아가기!
        </button>
      </article>
    </StyledSuccessModal>
  );
};

export default SuccessModal;

const StyledSuccessModal = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff60;
  font-size: 100px;
  display: flex;
  position: fixed;
  z-index: 999;
  justify-content: center;
  align-items: center;
  article {
    width: 300px;
    height: 200px;
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3rem;
    }
    button {
      background-color: white;
    }
  }
`;
