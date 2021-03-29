import React from 'react';
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
    return (
        <>
            <BookList ggg={5}/>
            <ShoppingCartTable/>
        </>
    );
};

export default HomePage;
