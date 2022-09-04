import styled from '@emotion/styled';

const GalleryItemImageStyled = styled.img`
  width: ${p => p.theme.sizes.all};
  height: ${p => p.theme.sizes.m};
  object-fit: cover;
  transition: transform ${p => p.theme.transition.cubic};

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export default GalleryItemImageStyled;