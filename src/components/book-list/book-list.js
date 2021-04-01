import React from 'react';
import './book-list.css'
import BookItemList from "../bool-item-list";


const BookList = ({books}) => {
    return (
        <div className="book-list">
            <ul>
                {books.map(book => <li key={book.id}>
                    <BookItemList book={book}/>
                </li>)}
            </ul>
        </div>
    );
}

export default BookList;
