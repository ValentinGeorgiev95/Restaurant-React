import React from 'react';

const Modal = ({ title, content, closeModal }) => {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
                <div className="modal-head">
                    <h4>{title}</h4>
                </div>{/* modal-head */}
                <div className="modal-body">
                    <p>{content}</p>
                </div>{/* modal-body */}
                <div className="modal-footer">
                    <button type="button" onClick={closeModal}>close</button>
                </div>{/* modal-footer */}
            </div>{/* modal */}
        </div>
    );
}

export default Modal;