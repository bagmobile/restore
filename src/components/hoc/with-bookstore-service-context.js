import React from 'react';
import {BookStoreConsumer} from "../bookstore-service-context";

const withBookstoreServiceContext = (Component) => {

    return (props) => {
        return <BookStoreConsumer>
            {
                (bookStoreService) => {
                    return <Component {...props} bookStoreService={bookStoreService}/>;
                }
            }
        </BookStoreConsumer>;
    }
};

export default withBookstoreServiceContext;
