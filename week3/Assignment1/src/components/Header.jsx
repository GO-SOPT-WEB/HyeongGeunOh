const Header = ({ correct, difficulty }) => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>!찌호를 맞춰주세요!</h1>
      <span style={title_spanStyle}>
        {correct} / {difficulty}
      </span>
    </header>
  );
};

const headerStyle = {
  width: '100vw',
  height: '200px',
  backgroundColor: '#EBCCB0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle = {
  color: '#815854',
  fontSize: '4rem',
  marginBottom: '1rem',
};

const title_spanStyle = {
  color: '#6B3A35',
  fontSize: '2rem',
  fontWeight: 700,
};

export default Header;
