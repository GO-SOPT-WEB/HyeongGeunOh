const Button = ({ type, innerText, onClick }) => {
  switch (type) {
    case 'difficulty':
      return (
        <button type="button" onClick={onClick} style={difficultyButtonStyle}>
          {innerText}
        </button>
      );
    case 'reset':
      return (
        <button type="button" onClick={onClick} style={resetButtonStyle}>
          {innerText}
        </button>
      );
  }
};

const difficultyButtonStyle = {
  height: '60px',
  padding: '10px 20px',
  fontSize: '1.5rem',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#D37E75',
  color: '#6B2019',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const resetButtonStyle = {
  top: '60px',
  right: '40px',
  height: '90px',
  fontSize: '2rem',
  color: '#F1C4C0',
  backgroundColor: '#6B2019',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Button;
