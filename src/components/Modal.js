import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Modal({ clearForm }) {
  // Inspired in https://dev.to/ayushdev_24/building-a-modal-using-reactjs-and-tailwindcss-38d0
  const [showModal, setShowModal] = useState(false);

  const continueAssigning = () => {
    setShowModal(false);
    clearForm();
  };
  return (
    <>
      <button
        className="bg-purple-700 text-white font-bold px-12 py-3 rounded mb-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Asignar
      </button>
      {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">
                    Nota de crédito asignada correctamente
                  </p>
                </div>
                <div className="flex items-center justify-center p-6">
                  <button
                    className="bg-purple-700 text-white font-bold px-12 py-3 rounded mb-2"
                    type="button"
                    onClick={() => continueAssigning()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </>
  );
}

Modal.propTypes = {
  clearForm: PropTypes.func,
};

Modal.defaultProps = {
  clearForm: () => {},
};

export default Modal;
