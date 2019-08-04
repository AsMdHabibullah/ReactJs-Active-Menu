import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BottomNavigation from './bottomNavigation';
import Body from './body/body';
import Me from './body/me';
import Discover from './body/discover';
import Contact from './body/contact';
import Chat from './body/chat';


const App = () => {

    return (
        <BrowserRouter>
            <div className="container text-center">
                <Switch>
                    <Route path="/" component={Body} exact />
                    <Route path="/me" component={Me} exact />
                    <Route path="/discover" component={Discover} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/chat" component={Chat} exact />
                </Switch>
            </div>
            <BottomNavigation />
        </BrowserRouter>
    );
}


export default App;

