import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import BookListItemPropTypes from "../../types/interface/book-list-item.interface";

const BookItem = ({ bookListItem }) => {
    // properties
    const { bookTitle, bookImg, author, issuer, collLibrary, isBookLoan, returnDate } = bookListItem;

    // render: Book List Item 컴포넌트 렌더링
    return (
        <div className="book-item">
            <div className="book-rank">{1}</div>
            <img src={bookImg} alt={bookTitle} className="book-cover" />
            <div className="book-details">
                <h4 className="book-title">{bookTitle}</h4>
                <p className="book-author"><strong>저자:</strong> {author}</p>
                <p className="book-publisher"><strong>발행처:</strong> {issuer}</p>
                <p className="book-location"><strong>소장처:</strong> {collLibrary}</p>
                <p className="book-availability"><strong>대출 가능 여부:</strong> {isBookLoan}</p>
                <p className="book-availability"><strong>반납 예정일:</strong> {returnDate}</p>
            </div>
        </div>
    );
};

BookItem.propTypes= {
    bookListItem: PropTypes.shape(BookListItemPropTypes).isRequired,
};

export default BookItem;