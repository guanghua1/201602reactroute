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
                                return <li key={index} className="list-group-item"><a href={item.html_url}>{item.name}</a><br/>{item.description}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }
}