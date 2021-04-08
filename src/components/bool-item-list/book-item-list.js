import React from 'react';
import './bool-item-list.css'
import {connect} from "react-redux";
import {Operation} from "../../reducers/cart/cart";

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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToCart: (id) => dispatch(Operation.increaseCartItem(id))
    }
}

export default connect(null, mapDispatchToProps)(BookItemList);
