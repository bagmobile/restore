import React, {Component} from 'react';
import './book-list.css'
import BookItemList from "../bool-item-list";
import {connect} from "react-redux";
import {withBookstoreServiceContext} from "../hoc";
import {booksLoaded} from "../../actions";
import {compose} from "../../utils";

class BookList extends Component {

    componentDidMount() {
        const {bookStoreService, booksLoaded} = this.props;
        const books = bookStoreService.getBooks();
        booksLoaded(books);
    }

    render() {
        const {books} = this.props;
        return (
            <div className="book-list">
                <ul>
                    {books.map(book => <li key={book.id}><BookItemList book={book}/></li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {books: state.books}
}

/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({booksLoaded}, dispatch);
}*/

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookstoreServiceContext,
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
