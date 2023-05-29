import styled from "styled-components";
import ButtonView from "../atom/ButtonView";
import RootState from "../../recoil/atom";
import { useRecoilState } from "recoil";

const DifficultyButtonTemplate = () => {
  const [atomState, setAtomState] = useRecoilState(RootState);

  const difficultyHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAtomState((prev) => {
      return {
        ...prev,
        difficulty: (e.target as HTMLButtonElement).value as
          | "Easy"
          | "Normal"
          | "Hard",
        openCard: [],
        correctCard: [],
      };
    });
  };

  return (
    <StyledDifficulyButtonWrapper>
      <ButtonView
        type="DIFFICULTY"
        innerText="Easy"
        onClick={(e) => difficultyHandler(e)}
      />
      <ButtonView
        type="DIFFICULTY"
        innerText="Normal"
        onClick={(e) => difficultyHandler(e)}
      />
      <ButtonView
        type="DIFFICULTY"
        innerText="Hard"
        onClick={(e) => difficultyHandler(e)}
      />
    </StyledDifficulyButtonWrapper>
  );
};

const StyledDifficulyButtonWrapper = styled.div`
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export default DifficultyButtonTemplate;
