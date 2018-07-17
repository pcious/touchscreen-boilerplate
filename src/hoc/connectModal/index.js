import React from 'react';
import { createModal } from 'react-modal-es';

const customStyles = {
  body: {
    fontFamily: 'arial',
    background: '#222',
    color: '#eee',
    padding: '40px',
    textAlign: 'center'
  }
};

const customUIComponent = (title, children, onClose) => (
  <div style={customStyles.body}>
    <div style={customStyles.title}>{title}</div>
    <div style={customStyles.content}>{children}</div>
    <button style={customStyles.button} onClick={onClose}>
      close
    </button>
  </div>
);

const configs = {
  customUI: customUIComponent
};

const { openModal, closeModal, closeAllModal, connectModal } = createModal(configs);
export { openModal, closeModal, closeAllModal, connectModal };
