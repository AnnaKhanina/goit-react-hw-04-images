import styled from '@emotion/styled';

const SearchFormButtonStyled = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.xs};
  height: 48px;${p => p.theme.sizes.xs};
  border: ${p => p.theme.borders.none};
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity ${p => p.theme.transition.cubic};  
  cursor: ${p => p.theme.cursor.pointer};
  outline: ${p => p.theme.outlines.none};

  &:hover {
    opacity: 1;
  }
`;

export default SearchFormButtonStyled;