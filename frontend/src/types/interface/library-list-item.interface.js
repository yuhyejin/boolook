import PropTypes from 'prop-types';

// PropTypes 정의
const LibraryListItem = {
    libraryNumber: PropTypes.number.isRequired,
    libraryName: PropTypes.string.isRequired,
    libraryUrl: PropTypes.string.isRequired,
};

export default LibraryListItem;
