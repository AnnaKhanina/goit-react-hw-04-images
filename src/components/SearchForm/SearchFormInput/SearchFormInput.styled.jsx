import styled from '@emotion/styled';

const SearchFormInputStyled = styled.input`
  display: inline-block;
  width: 100%;${p => p.theme.sizes.all};
  font: inherit;
  font-size: ${p => p.theme.fontSizes.sm};
  border: ${p => p.theme.borders.none};
  outline: ${p => p.theme.outlines.none};
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.sm};
  }
`;

export default SearchFormInputStyled;