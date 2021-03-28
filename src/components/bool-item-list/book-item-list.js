import React from 'react';
import './bool-list-item.css'

const BookItemList = ({book}) => {
    const {title, author, price, coverImg} = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImg} alt="cover"/>
            </div>
            <div className="book-detail">
                <a href="#" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-chart">Add to chart</button>
            </div>
        </div>
    );
};

export default BookItemList;
