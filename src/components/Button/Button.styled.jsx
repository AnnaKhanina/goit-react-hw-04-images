import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  display: inline-block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  cursor: pointer;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.primary};
  transition: all ${p => p.theme.transition.cubic};  
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  font-family: inherit;
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.button};
  font-weight: ${p => p.theme.fontWeights.medium};
  width: ${p => p.theme.sizes.s};

  box-shadow: ${p => p.theme.boxShadow.button};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export default ButtonStyled;