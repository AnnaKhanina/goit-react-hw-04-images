import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryList, onClick, imageURL }) => (
  <>
    <ImageGalleryStyled>
      <ImageGalleryItem galleryList={galleryList} onClick={onClick} imageURL={imageURL} />
    </ImageGalleryStyled>
  </>
);

export default ImageGallery;