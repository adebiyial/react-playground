import React, { useState } from 'react';
import GlobalContentSectionStyle from '../styles/GlobalContentSectionStyle';
import { modalEnums, modalPositionEnums } from '../Enums';
import GlobalModal from './GlobalModal';

function Modal() {
  const [modal, setModal] = useState({
    showModal: false,
    modalType: undefined,
    modalItemId: undefined,
    modalPosition: undefined
  });

  return (
    <GlobalContentSectionStyle data-sc-for='GlobalContentSection'>
      <section id='globalContentSection'>
        <header className='heading'>
          <h1 className='header'>Modals</h1>
        </header>
        <div className='content'>
          <p className='intro'>
            modals are ubiquitous on the web, they're used for many reasons, as dialog boxes, or as forms container...
            <hr />
            This uses React Portals but there're two issues inherent with this implementation:
            <ul>
              <li>
                1. Modals can only be animated (not transitioned) in, not out. This is because the components are either
                in the DOM or not. One possible way to fix this is make the Modal in the DOM at all time, and only tweak
                the visibilty .
              </li>
              <li>2. We can only have one modal open at a time. For example, the right modal can not be stacked.</li>
            </ul>
          </p>
          <div className='CTABlock'>
            <button
              type='button'
              className='deleteModalButton'
              onClick={() => {
                setModal({
                  ...modal,
                  showModal: true,
                  modalType: modalEnums.deleteModal,
                  modalPosition: modalPositionEnums.center
                });
              }}
            >
              Center
            </button>
            <button
              type='button'
              className='deleteModalButton'
              onClick={() => {
                setModal({
                  ...modal,
                  showModal: true,
                  modalType: modalEnums.createModal,
                  modalPosition: modalPositionEnums.right
                });
              }}
            >
              Right
            </button>
          </div>
        </div>
        <GlobalModal {...{ modal, setModal }}>
          <div
            className={
              (modal.modalPosition === modalPositionEnums.center && 'deleteConsentDialog') ||
              (modal.modalPosition === modalPositionEnums.right && 'createConsentDialog')
            }
          >
            {modal.modalType}
          </div>
        </GlobalModal>
      </section>
    </GlobalContentSectionStyle>
  );
}

export default Modal;
