import styled from 'styled-components';

const StyledDifficulfyButton = styled.button`
  height: 60px;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: #6b2019;
  background-color: #d37e75;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledResetButton = styled.button`
  top: 60px;
  right: 40px;
  height: 90px;
  padding: 10px 20px;
  font-size: 2rem;
  border: none;
  border-radius: 5px;
  color: #f1c4c0;
  background-color: #6b2019;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSuccessModalButton = styled.button`
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
