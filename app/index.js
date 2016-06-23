import React from 'react';
import { render } from 'react-dom';
import { App,Home,User,Profile } from './containers';
import {Router,Route,hashHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render( <Router history={hashHistory} >
    <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}/>
        <Route path="profile" component={Profile}/>
    </Route>
</Router>, root );
/**
 * /home App>Home
 * /user App>User
 * /profile App>Profile
 **/