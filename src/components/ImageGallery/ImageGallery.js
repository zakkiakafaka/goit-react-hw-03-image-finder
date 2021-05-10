import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, handleBigImg }) => {
  const items = images.map(el => (
    <ImageGalleryItem
      key={el.id}
      webformatURL={el.webformatURL}
      largeImageURL={el.largeImageURL}
      tags={el.tags}
      handleBigImg={handleBigImg}
    />
  ));
  return <ul className={styles.ImageGallery}>{items}</ul>;
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleBigImg: PropTypes.func.isRequired,
};
export default ImageGallery;
