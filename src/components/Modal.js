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
              Delete
            </button>
          </div>
        </div>
        <GlobalModal {...{ modal, setModal }}>
          <div className='deleteConsentDialog'>Delete?</div>
        </GlobalModal>
      </section>
    </GlobalContentSectionStyle>
  );
}

export default Modal;
