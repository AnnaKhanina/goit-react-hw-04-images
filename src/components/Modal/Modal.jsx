import OverlayStyled from './Overlay/Overlay.styled';
import ModalStyled from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ onClose, src }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleBackdropClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleBackdropClick);
    };
  });

  return (
    <OverlayStyled onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={src} alt="" />
      </ModalStyled>
    </OverlayStyled>
  );
};

export default Modal;

Modal.propType = {
  src: PropTypes.string.isRequired,
};