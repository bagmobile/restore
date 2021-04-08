import NameSpace from "../name-space";


export const getBooks = (state) => state[NameSpace.BOOKS].books;

export const getLoading = (state) => state[NameSpace.BOOKS].loading;

export const getError = (state) => state[NameSpace.BOOKS].error;

export const getBook = (state, id) => state[NameSpace.BOOKS].books.find(book => book.id === id)
