import styled from 'styled-components';

const StyledDifficulfyButton = styled.button`
  ${({ theme }) => theme.CommonButtonStyle}
  height: 60px;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: #6b2019;
  background-color: #d37e75;
  transition-duration: 0.3s;
`;

const StyledResetButton = styled.button`
  ${({ theme }) => theme.CommonButtonStyle}
  top: 60px;
  right: 40px;
  height: 90px;
  padding: 10px 20px;
  font-size: 2rem;
  color: #f1c4c0;
  background-color: #6b2019;
  position: fixed;
`;

const StyledSuccessModalButton = styled.button`
  ${({ theme }) => theme.CommonButtonStyle}
  width: 80px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.SubBackground};
`;

const buttonTypes = {
  DIFFICULTY: StyledDifficulfyButton,
  RESET: StyledResetButton,
  SUCCESSMODAL: StyledSuccessModalButton,
};

const ButtonView = ({ type, innerText, onClick }) => {
  const ButtonType = buttonTypes[type];
  return (
    <ButtonType type="button" onClick={onClick} value={innerText}>
      {innerText}
    </ButtonType>
  );
};
export default ButtonView;
