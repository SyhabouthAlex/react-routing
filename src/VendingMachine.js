import React from 'react';
import Home from './Home';
import HomeLinks from './HomeLinks'
import Soda from './Soda';
import Chips from './Chips';
import Water from './Water';
import {BrowserRouter, Route} from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/soda">
                    <Soda/>
                </Route>
                <Route exact path="/chips">
                    <Chips/>
                </Route>
                <Route exact path="/water">
                    <Water/>
                </Route>
                <Route exact path="/">
                    <Home/>
                    <HomeLinks/>
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;