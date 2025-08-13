import React from 'react'
import { CloseCircle } from 'iconsax-reactjs';
import "./Modal.css"
import useOutSideClick from '../../hooks/useOutSideClick';

function Modal({ children, open, onClose, title }) {
  const ref = useOutSideClick(onClose);

  return (
    open && (
      <div className="modal">
        <div className="modal__content" ref={ref}>
          <div className="modal__header">
            <p className="modal__title">{title}</p>
            <button className="modal__close" onClick={onClose}>
              <CloseCircle className="modal__close-icon" />
            </button>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal