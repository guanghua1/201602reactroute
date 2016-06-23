import React from 'react';
import {SearchGithub} from '../../components';
export default class App extends React.Component{
    render(){
        return (
            <div>
                <SearchGithub/>
                {this.props.children}
            </div>
        )
    }
}