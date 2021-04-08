import {getCountCartItem, getUpdatedCartItems} from "./selectors";
import {getBook} from "../books/selectors";

const initialState = {
    items: [],
    total: 0
}

const ActionType = {
    ADD: 'ADD',
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    DELETE: 'DELETE'
}

const ActionCreator = {
    increaseCartItem: (book) => ({
        type: ActionType.INCREASE,
        payload: book
    }),
    decreaseCartItem: (book) => ({
        type: ActionType.DECREASE,
        payload: book
    }),
    deleteCartItem: (book) => ({
        type: ActionType.DELETE,
        payload: book
    })
}

const Operation = {
    increaseCartItem: (id) => (dispatch, getState) => {
        const book = getBook(getState(), id);
        dispatch(ActionCreator.increaseCartItem(book));
    },
    decreaseCartItem: (id) => (dispatch, getState) => {
        const book = getBook(getState(), id);
        dispatch(ActionCreator.decreaseCartItem(book));
    },
    deleteCartItem: (id) => (dispatch, getState) => {
        const book = getBook(getState(), id);
        dispatch(ActionCreator.deleteCartItem(book));
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.ADD:
        case ActionType.INCREASE:
            return {
                ...state,
                items: getUpdatedCartItems(state, action.payload, 1)
            }
        case ActionType.DECREASE:
            return {
                ...state,
                items: getUpdatedCartItems(state, action.payload, -1)
            }
        case ActionType.DELETE:
            const quantity = -getCountCartItem(state, action.payload);
            return {
                ...state,
                items: getUpdatedCartItems(state, action.payload, quantity)
            }
        default:
            return state;
    }
}

export {reducer as cart, ActionCreator, Operation};
