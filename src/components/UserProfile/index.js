import React from 'react';
export default class UserProfile extends React.Component{
    render(){
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.profile.name}
                    </div>
                    <div className="panel-body">
                        <img style={{width:'250px',height:'250px'}} className="img-rounded" src={this.props.profile.avatar_url} alt={this.props.profile.name}/>
                    </div>
                </div>
            </div>
        )
    }
}