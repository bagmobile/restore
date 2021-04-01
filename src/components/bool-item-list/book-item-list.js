import React from 'react';
import './bool-item-list.css'
import {connect} from "react-redux";
import {addToCart} from "../../actions";

const BookItemList = ({book, onAddedToCart}) => {
    const {id, title, author, price, coverImg} = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImg} alt="cover"/>
            </div>
            <div className="book-detail">
                <span className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-chart" onClick={() => onAddedToCart(id)}>Add to chart</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    onAddedToCart: addToCart
}

export default connect(null, mapDispatchToProps)(BookItemList);
