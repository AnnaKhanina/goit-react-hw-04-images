import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import GalleryItemImage from './GalleryItemImage/GalleryItemImage';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';



const ImageGalleryItem = ({ onClick, galleryList, imageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalonClick = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      {galleryList.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItemStyled
            key={id}
            onClick={() => {
              onClick(largeImageURL);
              showModalonClick();
            }}
          >
            <GalleryItemImage src={webformatURL} />
          </ImageGalleryItemStyled>
        );
      })}
      {showModal && <Modal src={imageURL} onClose={showModalonClick} />}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  galleryList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};