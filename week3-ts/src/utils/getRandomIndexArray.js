export const getRandomIndexArray = (difficulty) => {
  const hardArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
  const normalArr = hardArr.slice(0, 14);
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
  return getArray();
};
