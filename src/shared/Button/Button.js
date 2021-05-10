import React, { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={styles.Button}
        onClick={this.props.onClick}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
