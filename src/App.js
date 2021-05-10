import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './shared/Modal/Modal';
import Button from './shared/Button/Button';
import ImageLoader from './shared/Loader/Loader';

import imagesApi from './services/imagesApi';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    largeImg: '',
    error: null,
    loading: false,
    found: true,
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page > 2) {
      const { scrollTop, clientHeight } = document.documentElement;
      window.scrollTo({
        top: scrollTop + clientHeight - 165,
        behavior: 'smooth',
      });
    }
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images => {
        if (images.length === 0) {
          this.setState({ found: false });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            page: prevState.page + 1,
            found: true,
          }));
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
    if (page > 1) {
      const { scrollHeight } = document.documentElement;
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  };
  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  handleBigImg = largeImg => {
    this.setState({ largeImg });
    document.body.classList.add('modal-isOpen');
  };

  closeModal = () => {
    this.setState({
      largeImg: '',
    });
    document.body.classList.remove('modal-isOpen');
  };
  render() {
    const { images, loading, error, found, largeImg } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {(error || !found) && !images.length && (
          <h2 style={{ textAlign: 'center' }}>
            Oops, something went wrong. Enter a correct query
          </h2>
        )}
        <ImageGallery images={images} handleBigImg={this.handleBigImg} />
        {loading && <ImageLoader />}
        {images.length > 0 && !loading && found && (
          <Button onClick={this.fetchImages} />
        )}
        {largeImg && <Modal largeImg={largeImg} closeModal={this.closeModal} />}
      </>
    );
  }
}
export default App;
