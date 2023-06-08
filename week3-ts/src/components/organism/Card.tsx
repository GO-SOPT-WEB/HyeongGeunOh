import { useRecoilState } from "recoil";
import CardView from "../atom/CardView";
import RootState from "../../recoil/atom";

const Card = ({ imgURL, index }: { imgURL: string; index: number }) => {
  const url = imgURL.split("_")[1];
  const [atomState, setAtomState] = useRecoilState(RootState);
  const { openCard, correctCard } = atomState;
  const format = { url, index };
  const buttonOnclick = () => {
    if (
      correctCard.includes(url) ||
      openCard.some((x) => x.index === index) ||
      openCard.length === 2
    )
      return;
    setAtomState((prev) => ({ ...prev, openCard: [...prev.openCard, format] }));
  };
  const rotate =
    correctCard.includes(url) || openCard.some((x) => x.index === index);

  return (
    <CardView
      rotate={rotate ? "rotateY(0deg)" : "rotateY(180deg)"}
      onClick={buttonOnclick}
      imgURL={imgURL}
    />
  );
};

export default Card;
