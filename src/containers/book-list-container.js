import React, {Component} from 'react';
import Loader from "../components/loader";
import ErrorIndicator from "../components/error-indicator";
import {compose} from "../utils";
import {withBookstoreServiceContext} from "../components/hoc";
import {connect} from "react-redux";
import BookList from "../components/book-list";
import {Operation} from "../reducers/books/books";
import {getBooks, getError, getLoading} from "../reducers/books/selectors";

class BookListContainer extends Component {

    componentDidMount() {
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

const mapStateToProps = (state) => {
    return {
        books: getBooks(state),
        loading: getLoading(state),
        error: getError(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookStoreService} = ownProps;
    return {
        fetchBooks: (params) => {
            dispatch(Operation.fetchBooks(bookStoreService)(params))
        }
    }
}

export default compose(
    withBookstoreServiceContext,
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
