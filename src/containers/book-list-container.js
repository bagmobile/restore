import React, {Component} from 'react';
import Loader from "../components/loader";
import ErrorIndicator from "../components/error-indicator";
import {fetchBooks} from "../actions";
import {compose} from "../utils";
import {withBookstoreServiceContext} from "../components/hoc";
import {connect} from "react-redux";
import BookList from "../components/book-list";

class BookListContainer extends Component {

    componentDidMount() {
        /*const {bookStoreService, booksLoaded, dataLoad, errorLoaded} = this.props;
        dataLoad();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((error) => errorLoaded(error));*/
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) {
            return <Loader/>
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <BookList books={books}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch);
}*/

/*const mapDispatchToProps = {
    booksLoaded,
    dataLoad,
    errorLoaded
}*/

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookStoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch)
    }
    /*return {
        fetchBooks: () => {
            dispatch(dataLoad());
            bookStoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(errorLoaded(error)));
        }
    }*/
}

export default compose(
    withBookstoreServiceContext,
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
