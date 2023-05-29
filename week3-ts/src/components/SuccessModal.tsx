import { useGlobalContext } from '../context/reducer';
import Modal from './organism/Modal';
import ModalRenderer from './organism/ModalRenderer';

const SuccessModal = () => {
  const { successModalOpen } = useGlobalContext();
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
