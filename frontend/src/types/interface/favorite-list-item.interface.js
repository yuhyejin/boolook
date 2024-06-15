import PropTypes from 'prop-types';

// PropTypes 정의
const FavoriteListItem = {
    favoriteNumber: PropTypes.number.isRequired,
    libraryNumber: PropTypes.number.isRequired,
    favoriteName: PropTypes.string.isRequired,
    libraryUrl: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
};

export default FavoriteListItem;
