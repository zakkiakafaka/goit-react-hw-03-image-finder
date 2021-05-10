import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
    window.addEventListener('click', this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
    window.removeEventListener('click', this.onCloseModal);
  }

  onCloseModal = event => {
    if (event.code === 'Escape' || event.target.nodeName !== 'IMG') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.largeImg} alt="" className={styles.Img} />
        </div>
      </div>
    );
  }
}

export default Modal;
