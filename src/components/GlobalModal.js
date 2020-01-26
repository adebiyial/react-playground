import React from 'react';
import ModalPortal from './ModalPortal';

function GlobalModal({ children, modal, setModal }) {
  if (modal.showModal) {
    return (
      <ModalPortal {...{ modal, setModal }}>
        <div className={`${modal.modalType} ${modal.modalPosition}`}>{children}</div>
      </ModalPortal>
    );
  }

  return null;
}

export default GlobalModal;
