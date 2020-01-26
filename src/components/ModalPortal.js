import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modalRoot');

function ModalPortal({ children, modal, setModal }) {
  const modalElement = document.createElement('div');
  modalElement.classList.add('modalBlock');

  useEffect(() => {
    // cdm
    modalRoot.appendChild(modalElement);

    modalElement.addEventListener('click', e => {
      // @ts-ignore
      const isOutside = !e.target.closest('.modalBlock [class*="Dialog"]');
      isOutside &&
        setModal({ showModal: false, modalType: undefined, modalItemId: undefined, modalPosition: undefined });
    });
    // cwum
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modal, setModal, modalElement]);

  return ReactDOM.createPortal(children, modalElement);
}

export default ModalPortal;
