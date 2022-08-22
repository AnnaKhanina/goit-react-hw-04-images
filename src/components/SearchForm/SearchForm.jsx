import SearchFormStyled from './SearchForm.styled';
import SearchFormInput from './SearchFormInput/SearchFormInput';
import SearchFormButton from './SearchFormButton/SearchFormButton';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';

class SearchForm extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({ searchText: e.currentTarget.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.searchText);
  // };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <SearchFormButton />
        <SearchFormInput
          onChange={this.handleChange}
          value={this.state.searchText}
        />
      </SearchFormStyled>
    );
  }
}

export default SearchForm;

SearchForm.propType = {
  searchText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};