import Button from './atom/Button';
import Card from './Card';

const GameSection = () => {
  return (
    <section className="gameSection_wrapper" style={gameSectionStyle}>
      <div className="difficultyButton_wrapper" style={difficultyButtonWrapperStyle}>
        <Button type="difficulty" innerText="Easy" onClick={(e) => console.log(e.target)} />
        <Button type="difficulty" innerText="Normal" onClick={(e) => console.log(e.target)} />
        <Button type="difficulty" innerText="Hard" onClick={(e) => console.log(e.target)} />
      </div>
      <main style={{ perspective: '500px' }}>
        <Card />
      </main>
    </section>
  );
};

const gameSectionStyle = {
  width: '100vw',
  height: 'auto',
  minHeight: 'calc(100vh - 200px)',
  backgroundColor: '#F1C85E',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const difficultyButtonWrapperStyle = {
  width: '60%',
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
};

export default GameSection;
