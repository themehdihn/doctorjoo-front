import React from 'react'
import "./ConfirmDelete.css"


function ConfirmDelete({ resourceName, onClose, onConfirm, disabled }) {
  return (
    <div className="confirm-delete">
      <h2 className="confirm-delete__title">
        آیا از لغو نوبت کاربر "{resourceName}" مطمئن هستید؟
      </h2>

      <div className="confirm-delete__actions">
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--primary confirm-delete__btn"
        >
          بستن
        </button>

        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--danger confirm-delete__btn"
        >
          لغو نوبت
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete