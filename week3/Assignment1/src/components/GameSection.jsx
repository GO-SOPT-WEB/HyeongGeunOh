import { useGlobalContext } from '../context/reducer';
import Button from './atom/Button';
import CardTemplate from './organism/CardTemplate';

const GameSection = () => {
  const { setDifficulty, clearOpenCard, clearCorrectCard } = useGlobalContext();

  const difficultyHandler = (e) => {
    setDifficulty(e.target.value);
    clearOpenCard();
    clearCorrectCard();
  };

  return (
    <section className="gameSection_wrapper" style={gameSectionStyle}>
      <div className="difficultyButton_wrapper" style={difficultyButtonWrapperStyle}>
        <Button type="difficulty" innerText="Easy" onClick={(e) => difficultyHandler(e)} />
        <Button type="difficulty" innerText="Normal" onClick={(e) => difficultyHandler(e)} />
        <Button type="difficulty" innerText="Hard" onClick={(e) => difficultyHandler(e)} />
      </div>
      <main style={cardWrapperStyle}>
        <CardTemplate />
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

const cardWrapperStyle = {
  width: '60%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
  perspective: '1200px',
  gap: '20px',
};

export default GameSection;
