import styled from 'styled-components';

const Button = ({ type, innerText, onClick }) => {
  switch (type) {
    case 'difficulty':
      return (
        <DifficulfyButton type="button" onClick={onClick} value={innerText}>
          {innerText}
        </DifficulfyButton>
      );
    case 'reset':
      return (
        <ResetButton type="button" onClick={onClick}>
          {innerText}
        </ResetButton>
      );
  }
};

const DifficulfyButton = styled.button`
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

const ResetButton = styled.button`
  top: 60px;
  right: 40px;
  height: 90px;
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

export default Button;
