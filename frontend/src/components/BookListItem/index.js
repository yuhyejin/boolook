import React from 'react';
import './style.css';

const BookItem = ({ rank, cover, title, author, publisher, location, availability }) => {
    return (
        <div className="book-item">
            <div className="book-rank">{1}</div>
            <img src={cover} alt={title} className="book-cover" />
            <div className="book-details">
                <h4 className="book-title">{ '파친코' }</h4>
                <p className="book-author"><strong>저자:</strong> {'이민진 지음'}</p>
                <p className="book-publisher"><strong>발행처:</strong> {'이민진 지음'}</p>
                <p className="book-location"><strong>소장처:</strong> {'인천광역시 교육청 서구도서관'}</p>
                <p className="book-availability"><strong>대출 가능 여부:</strong> {'예약 불가 (07/10이후 가능)'}</p>
            </div>
        </div>
    );
};

export default BookItem;
