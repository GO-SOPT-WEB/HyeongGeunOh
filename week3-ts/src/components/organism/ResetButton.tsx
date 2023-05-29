import { useRecoilState } from "recoil";
import RootState from "../../recoil/atom";
import { getRandomIndexArray } from "../../utils/getRandomIndexArray";
import ButtonView from "../atom/ButtonView";

const ResetButton = () => {
  const [atomState, setAtomState] = useRecoilState(RootState);
  const { difficulty } = atomState;

  return (
    <ButtonView
      type="RESET"
      onClick={() => {
        setAtomState((prev) => ({
          ...prev,
          correctCard: [],
          openCard: [],
          randomArray: getRandomIndexArray(difficulty),
        }));
      }}
      innerText="RESET"
    />
  );
};

export default ResetButton;
