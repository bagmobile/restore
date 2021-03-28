import React from 'react';

import './app.css'
import {Redirect, Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";

const App = () => {
    return (
        <main role="main" className="container">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/cart" component={CartPage}/>
                {/* <Route render={() => <h2>Page not found</h2>}/>*/}
                <Redirect to="/"/>
            </Switch>
        </main>
    );
};

export default App;
