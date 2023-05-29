import { useEffect } from "react";
import styled from "styled-components";

import ImgChunks from "../../assets";
import { getRandomIndexArray } from "../../utils/getRandomIndexArray";
import Card from "../organism/Card";
import { useRecoilState } from "recoil";
import RootState from "../../recoil/atom";

const CardTemplate = () => {
  const [atomState, setAtomState] = useRecoilState(RootState);
  const { difficulty, openCard, correctCard, randomArray } = atomState;
  const perfectScore =
    difficulty === "Easy" ? 5 : difficulty === "Normal" ? 7 : 9;

  useEffect(() => {
    if (correctCard.length === perfectScore) {
      setAtomState((prev) => ({
        ...prev,
        successModalOpen: !prev.successModalOpen,
      }));
      return;
    }
    if (openCard.length === 2) {
      if (openCard[0].url === openCard[1].url) {
        setAtomState((prev) => ({
          ...prev,
          correctCard: [...prev.correctCard, openCard[0].url],
        }));
      }
      setTimeout(() => {
        setAtomState((prev) => ({ ...prev, openCard: [] }));
      }, 1000);
    }
  }, [openCard]);

  useEffect(() => {
    setAtomState((prev) => ({
      ...prev,
      randomArray: getRandomIndexArray(difficulty),
    }));
  }, [difficulty]);

  return (
    <StyledCardWrapper>
      {randomArray.map(
        (x: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, index: number) => {
          return (
            <Card imgURL={ImgChunks[`IMG_${x}`]} key={index} index={index} />
          );
        }
      )}
    </StyledCardWrapper>
  );
};

export default CardTemplate;

const StyledCardWrapper = styled.main`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  gap: 20px;
`;
