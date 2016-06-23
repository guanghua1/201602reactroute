import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
export default  class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {users:[]};
        this.init();
    }
    init(){
        axios.get('/users.json').then((res)=>{
            var users = res.data;
            var query = this.props.location.query;
            var field = query.sortBy;
            var order = query.order=='desc'?-1:1;
            users = users.sort((a,b)=>{
                return (a[field]-b[field])*order;
            });
            this.setState({users:users});
        });
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.users.map((item,index)=>{
                            return <li key={index} className="list-group-item">
                  <Link to={"/user/detail/"+item.id}>{item.name}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
