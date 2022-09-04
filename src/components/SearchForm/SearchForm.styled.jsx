import styled from '@emotion/styled';

const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  width: ${p => p.theme.sizes.all};
  max-width: ${p => p.theme.sizes.max};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;

export default SearchFormStyled;