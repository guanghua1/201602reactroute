import React from 'react';
import {UserProfile,UserRepos,Notes} from '../../components';
import axios from 'axios';
import Wilddog from 'wilddog';
import WildReactMixin from 'wildreact';
import { mixin } from 'core-decorators';
@mixin(WildReactMixin)
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            repos: [],
            notes: []
        }
        this.init();
    }
    handleClick(msg){
        this.setState({notes:this.state.notes.concat(msg)});
    }

    componentDidMount() {
        var ref = new Wilddog("https://jsnode.wilddogio.com/notes");
        this.bindAsArray(ref, "notes");
    }

    componentWillUnMount() {
        this.unbind('notes');
    }


    init() {
        var username = this.props.params.username;
        axios.all([
            axios.get(`https://api.github.com/users/${username}`),
            axios.get(`https://api.github.com/users/${username}/repos`)
        ]).then(responses=> {
            this.setState({
                profile: responses[0].data,
                repos: responses[1].data
            });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-4">
                    <UserProfile profile={this.state.profile}/>
                </div>
                <div className="col-xs-4">
                    <UserRepos repos={this.state.repos}/>
                </div>
                <div className="col-xs-4">
                    <Notes handleClick={this.handleClick.bind(this)} notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}