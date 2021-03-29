
const dataLoad = () => {
    return {
        type: 'DATA_LOAD'
    }
}

const errorLoaded = (error) => {
    return {
        type: 'ERROR_LOADED',
        payload: error.toString()
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

export {
    booksLoaded,
    dataLoad,
    errorLoaded
}
