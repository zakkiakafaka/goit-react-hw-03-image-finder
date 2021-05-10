import axios from 'axios';
import PropTypes from 'prop-types';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=21560161-7fb1a88411020dba256d86926&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default { fetchImagesWithQuery };