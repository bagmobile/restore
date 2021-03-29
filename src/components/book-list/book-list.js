import React, {Component} from 'react';
import './book-list.css'
import BookItemList from "../bool-item-list";
import {connect} from "react-redux";
import {withBookstoreServiceContext} from "../hoc";
import {booksLoaded, dataLoad, errorLoaded} from "../../actions";
import {compose} from "../../utils";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

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
        if (loading){
            return <Loader/>
        }
        if (error) {
            return <ErrorIndicator/>;
        }
        return (
            <div className="book-list">
                <ul>
                    {books.map(book => <li key={book.id}><BookItemList book={book}/></li>)}
                </ul>
            </div>
        );
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
    console.log(ownProps);
    return {
        fetchBooks: () => {
            dispatch(dataLoad());
            bookStoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(errorLoaded(error)));
        }
    }
}

export default compose(
    withBookstoreServiceContext,
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
