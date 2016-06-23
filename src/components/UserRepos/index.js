import React from 'react';
export default class UserRepos extends React.Component{
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">用户的仓库</div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.props.repos.map((item,index)=>{
                                return <li key={index} className="list-group-item">{item}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }
}