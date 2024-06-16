import PropTypes from 'prop-types';

// PropTypes 정의
const BookListItemPropTypes = {
    bookTitle: PropTypes.string.isRequired,
    bookImg: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    collLibrary: PropTypes.string.isRequired,
    isBookLoan: PropTypes.string.isRequired,
    returnDate: PropTypes.string.isRequired,
};

export default BookListItemPropTypes;
