import React from 'react';
import {Route,IndexRoute} from 'react-router';
import {App,Home,Profile} from '../container';
export default (
<Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="profile/:username" component={Profile}/>
</Route>)
