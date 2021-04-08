const initialState = {
    books: [],
    loading: true,
    error: null,
}

const ActionType = {
    FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
    FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_FAILURE: 'FETCH_BOOKS_FAILURE'
}

const ActionCreator = {
    dataLoad: () => ({
        type: ActionType.FETCH_BOOKS_REQUEST
    }),
    errorLoaded: (error) => ({
        type: ActionType.FETCH_BOOKS_FAILURE,
        payload: error.toString()
    }),
    successLoaded: (newBooks) => ({
        type: ActionType.FETCH_BOOKS_SUCCESS,
        payload: newBooks
    })
}

const Operation = {
    fetchBooks: (bookStoreService) => () => (dispatch) => {

        dispatch(ActionCreator.dataLoad());

        bookStoreService.getBooks()
            .then((data) => dispatch(ActionCreator.successLoaded(data)))
            .catch((error) => dispatch(ActionCreator.errorLoaded(error)));
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.FETCH_BOOKS_REQUEST:
            return {
                ...state, books: [], loading: true
            };
        case ActionType.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        case ActionType.FETCH_BOOKS_FAILURE:
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export {reducer as books, Operation};
