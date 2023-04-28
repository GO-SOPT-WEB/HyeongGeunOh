import styled from 'styled-components';

import ResetButton from './ResetButton';

const Modal = () => {
  return (
    <StyledSuccessModal>
      <article>
        <h1>성공!!!</h1>
        <ResetButton />
      </article>
    </StyledSuccessModal>
  );
};

export default Modal;

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
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.BoxShadow};
    background-color: ${({ theme }) => theme.Background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3rem;
      color: ${({ theme }) => theme.Text};
    }
    button {
      width: 80px;
      border: none;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
      box-shadow: ${({ theme }) => theme.BoxShadow};
      background-color: ${({ theme }) => theme.SubBackground};
      transition-duration: 0.3s;
      :hover {
        color: white;
        background-color: ${({ theme }) => theme.Text};
      }
    }
  }
`;
