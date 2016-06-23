import React from 'react';
import {UserProfile,UserRepos,Notes} from '../../components';
export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile:{
                "name": "zhufengnodejs",
                "avatar_url": "https://avatars.githubusercontent.com/u/11471150?v=3"
            },
            repos:[
                '201503jsnode','201503jsnode','201504jsnode'
            ],
            notes:[
                '写的真好','好棒','太垃圾了吧'
            ]
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-xs-4">
                    <UserProfile profile={this.state.profile}/>
                </div>
                <div className="col-xs-4">
                    <UserRepos  repos={this.state.repos}/>
                </div>
                <div className="col-xs-4">
                    <Notes   notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}