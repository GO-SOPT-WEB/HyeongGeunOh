import Button from './atom/Button';
import CardTemplate from './organism/CardTemplate';

const GameSection = ({ difficulty }) => {
  const hardArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
  const normalArr = hardArr.slice(0, 13);
  const easyArr = hardArr.slice(0, 10);

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  const getArray = () => {
    switch (difficulty) {
      case 'Easy':
        return shuffle(easyArr);
      case 'Normal':
        return shuffle(normalArr);
      case 'Hard':
        return shuffle(hardArr);
      default:
        return [];
    }
  };

  return (
    <section className="gameSection_wrapper" style={gameSectionStyle}>
      <div className="difficultyButton_wrapper" style={difficultyButtonWrapperStyle}>
        <Button type="difficulty" innerText="Easy" onClick={(e) => console.log(e.target)} />
        <Button type="difficulty" innerText="Normal" onClick={(e) => console.log(e.target)} />
        <Button type="difficulty" innerText="Hard" onClick={(e) => console.log(e.target)} />
      </div>
      <main style={cardWrapperStyle}>
        <CardTemplate array={getArray()} />
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
