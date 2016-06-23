import React from 'react';
import { render } from 'react-dom';
import { App,Home,User,Profile } from './containers';
import {UserAdd,UserList,UserDetail} from './components';
import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render( <Router history={hashHistory} >
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}>
            <IndexRoute component={UserList}/>
            <Route path="/list" component={UserList}/>
            <Redirect from="list" to="/list" />
            <Route path="add" component={UserAdd}/>
            <Route path="detail/:id" component={UserDetail}/>
        </Route>
        <Route path="profile" component={Profile}/>
    </Route>
</Router>, root );
/**
 * /home App>Home
 * /user App>User
 * /profile App>Profile
 **/