import { RandomArrayType } from "../recoil/atom";

export const getRandomIndexArray = (difficulty: "Easy" | "Normal" | "Hard") => {
  const hardArr = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
  ] as RandomArrayType;
  const normalArr = hardArr.slice(0, 14) as RandomArrayType;
  const easyArr = hardArr.slice(0, 10) as RandomArrayType;

  const shuffle = (array: RandomArrayType) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  const getArray = () => {
    switch (difficulty) {
      case "Easy":
        return shuffle(easyArr);
      case "Normal":
        return shuffle(normalArr);
      case "Hard":
        return shuffle(hardArr);
      default:
        return [];
    }
  };
  return getArray();
};
