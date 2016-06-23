import React from 'react';
import {hashHistory} from 'react-router';
export default class SearchGithub extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        var username = this.refs.username.value;
        // /profile/username
        var path = `/profile/${username}`;
        hashHistory.push(path);//用于切换路径
    }

    render(){
        return (
            <nav className="navbar navbar-default">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div style={{padding:'10px'}} className="col-xs-offset-4 col-xs-3">
                            <input ref="username" className="form-control" type="text"/>
                        </div>
                        <div  style={{padding:'10px'}} className="col-xs-5">
                            <button type="submit" className="btn btn-primary" >搜索</button>
                        </div>
                    </div>
                </form>

            </nav>
        )
    }
}