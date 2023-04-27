import styled from 'styled-components';

const SuccessModal = () => {
  return <StyledSuccessModal>hello~</StyledSuccessModal>;
};

export default SuccessModal;

const StyledSuccessModal = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.4;
  font-size: 100px;
  display: flex;
  position: fixed;
  z-index: 999;
  justify-content: center;
  align-items: center;
`;
