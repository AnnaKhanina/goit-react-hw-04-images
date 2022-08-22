import LoaderStyled from './Loader.styled';
import { Hearts } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyled>
    <Hearts
      color="3f51b5"
      width="100"
      visible={true}
      ariaLabel="Hearts"
    />
  </LoaderStyled>
);

export default Loader;