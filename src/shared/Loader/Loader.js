import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

class ImageLoader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
      </div>
    );
  }
}

export default ImageLoader;
