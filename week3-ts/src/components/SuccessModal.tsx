import { useRecoilValue } from "recoil";
import RootState from "../recoil/atom";
import Modal from "./organism/Modal";
import ModalRenderer from "./organism/ModalRenderer";

const SuccessModal = () => {
  const { successModalOpen } = useRecoilValue(RootState);
  return (
    <>
      {successModalOpen && (
        <ModalRenderer>
          <Modal />
        </ModalRenderer>
      )}
    </>
  );
};

export default SuccessModal;
