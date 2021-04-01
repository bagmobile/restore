import {BooksFetchType} from "./types";

const dataLoad = () => {
    return {
        type: BooksFetchType.FETCH_BOOKS_REQUEST
    }
}

const errorLoaded = (error) => {
    return {
        type: BooksFetchType.FETCH_BOOKS_FAILURE,
        payload: error.toString()
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: BooksFetchType.FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
}

const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(dataLoad());
    bookStoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(errorLoaded(error)));
}

export {
    fetchBooks
}
