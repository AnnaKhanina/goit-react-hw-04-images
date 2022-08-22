import SearchFormButtonStyled from './SearchFormButtonStyled';
import { MdImageSearch } from 'react-icons/md';

const SearchFormButton = () => (
  <SearchFormButtonStyled type="submit">
    <MdImageSearch size="30" />
  </SearchFormButtonStyled>
);

export default SearchFormButton;