import { useRecoilState } from "recoil";
import { getRandomIndexArray } from "../../utils/getRandomIndexArray";
import ButtonView from "../atom/ButtonView";
import RootState from "../../recoil/atom";

const SuccessModalButton = () => {
  const [atomState, setAtomState] = useRecoilState(RootState);
  const { difficulty } = atomState;

  return (
    <ButtonView
      type="SUCCESSMODAL"
      onClick={() => {
        setAtomState((prev) => ({
          ...prev,
          correctCard: [],
          openCard: [],
          randomArray: getRandomIndexArray(difficulty),
          successModalOpen: !prev.successModalOpen,
        }));
      }}
      innerText="게임으로 돌아가기"
    />
  );
};

export default SuccessModalButton;
