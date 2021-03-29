
const initialState = {
    books: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOAD': return {
            ...state, books: [], loading: true
        };
        case 'BOOKS_LOADED': return {
            ...state,
            books: action.payload,
            loading: false
        };
        case 'ERROR_LOADED': return {
            books: [],
            loading: false,
            error: action.payload
        };
        default: return state;
    }
}

export default reducer;
