import {BooksFetchType, CartType} from "../actions/types";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cart: {
        items: [],
        total: 0
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case BooksFetchType.FETCH_BOOKS_REQUEST:
            return {
                ...state, books: [], loading: true
            };
        case BooksFetchType.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        case BooksFetchType.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case CartType.ADD:
        case CartType.INCREASE:
            return {
                ...state,
                cart: {
                    items: getUpdatedCartItems(state, action.payload, 1)
                }
            }
        case CartType.DECREASE:
            return {
                ...state,
                cart: {
                    items: getUpdatedCartItems(state, action.payload, -1)
                }
            }
        case CartType.DELETE:
            const quantity = -getCountCartItem(state, action.payload);
            return {
                ...state,
                cart: {
                    items: getUpdatedCartItems(state, action.payload, quantity)
                }
            }
        default:
            return state;
    }
}

const getCountCartItem = (state, id) => {
    return state.cart.items.find(item => item.id === id).count;
}


const getUpdatedCartItems = (state, id, quantity) => {
    const book = state.books.find(book => book.id === id)
    const cartBookIndex = state.cart.items.findIndex(item => item.id === id);
    const cartBook = state.cart.items[cartBookIndex];
    const isDeleteItem = cartBook && ((cartBook.count + quantity) === 0);
    let newItems = [...state.cart.items];
    let newItem;

    if (cartBook) {
        newItem = {...cartBook, count: cartBook.count + quantity, total: cartBook.total + quantity * book.price};
        newItems.splice(cartBookIndex, 1, newItem);
    } else {
        newItem = {id: book.id, name: book.title, count: 1, total: book.price};
        newItems.push(newItem);
    }

    if (isDeleteItem) {
        newItems.splice(cartBookIndex, 1);
    }

    return newItems;
}

export default reducer;
