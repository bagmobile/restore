import {combineReducers} from "redux";
import {books} from './books/books';
import {cart} from "./cart/cart";
import NameSpace from "./name-space";

export default combineReducers(
    {
        [NameSpace.BOOKS]: books,
        [NameSpace.CART]: cart
    }
)
