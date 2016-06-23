import React from 'react';
export default class SearchGithub extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="row">
                    <div style={{padding:'10px'}} className="col-xs-offset-4 col-xs-3">
                        <input className="form-control" type="text"/>
                    </div>
                    <div  style={{padding:'10px'}} className="col-xs-5">
                        <button className="btn btn-primary" >搜索</button>
                    </div>
                </div>
            </nav>
        )
    }
}