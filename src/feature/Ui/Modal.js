import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const ModalOverlay = (props) => {
  return (
    <div className="fixed z-50 w-4/5 md:w-3/5 lg:w-2/5 min-w-4/5 sm:min-w-3/4 xl:min-w-1/2  left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <div className="relative bg-gray-100 py-8 pl-10 pr-14">
        {props.children}
      </div>
    </div>
  );
};

const BackDrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="h-screen w-screen fixed top-0 left-0 z-30 bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-20"
    ></div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
