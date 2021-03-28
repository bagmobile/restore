import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {BookStoreProvider} from "./components/bookstore-service-context";
import BookStoreService from "./services/book-store-service";
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import {BrowserRouter} from "react-router-dom";

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BookStoreProvider value={bookStoreService}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </BookStoreProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

