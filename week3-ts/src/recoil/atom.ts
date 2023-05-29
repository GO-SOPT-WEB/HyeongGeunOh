import { atom } from "recoil";

export type RandomArrayType = Array<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>;

export interface initialAtomStateProps {
  openCard: Array<{ url: string; index: number }>;
  correctCard: string[];
  difficulty: "Easy" | "Normal" | "Hard";
  randomArray: RandomArrayType;
  successModalOpen: boolean;
}

const initialAtomState: initialAtomStateProps = {
  openCard: [],
  correctCard: [],
  difficulty: "Easy",
  randomArray: [],
  successModalOpen: false,
};

const RootState = atom({
  key: "RootAtom",
  default: initialAtomState,
});

export default RootState;
