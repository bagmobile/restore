import React from 'react';
import ShoppingCartTable from "../shopping-cart-table";
import {BookListContainer} from "../../containers";


const HomePage = () => {
    return (
        <>
            <BookListContainer/>
            <ShoppingCartTable/>
        </>
    );
};

export default HomePage;
