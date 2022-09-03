import AppStyled from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import apiKey from '../api/api';
import { useState, useEffect } from 'react';

  export const App = () => {
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [total, setTotal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState(null);
  
    const handleSubmit = query => {
      if (query.trim().length === 0) {
        return;
      }
      setGallery([]);
      setQuery(query);
      setPage(1);
      setLoading(true);
    };
  
    const handleLoadMoreBtn = () => {
      setPage(prevState => prevState + 1);
      setLoading(true);
    };
  
    const onClickGalleryImage = imageURL => {
      setImageURL(imageURL);
    };
  
    useEffect(() => {
      if (query.trim().length === 0) {
        return;
      }
      apiKey(query, page).then(data => {
        setGallery(prevState => [...prevState, ...data.hits]);
        setTotal(data.totalHits);
        setLoading(false);
      });
    }, [query, page]);
  
    return (
      <AppStyled>
        <SearchBar>
          <SearchForm onSubmit={handleSubmit} />
        </SearchBar>
        {gallery.length > 0 && (
          <>
            <ImageGallery
              galleryList={gallery}
              onClick={onClickGalleryImage}
              imageURL={imageURL}
            />
            {total !== gallery.length && (
              <Button text="Load more" onClick={handleLoadMoreBtn} />
            )}
          </>
        )}
        {loading && <Loader />}
      </AppStyled>
    );
  };