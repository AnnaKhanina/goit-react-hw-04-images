import GalleryItemImageStyled from './GalleryItemImage.styled';
import PropTypes from 'prop-types';

const GalleryItemImage = ({ src }) => (
  <GalleryItemImageStyled src={src} />
);

export default GalleryItemImage;

GalleryItemImage.propType = {
  src: PropTypes.string.isRequired,
};