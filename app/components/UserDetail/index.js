import React from 'react';
var axios = require('axios');
/**
 * 1. 从路径中得到路径参数ID
 * 2. 查询接口读取用户列表
 * 3. 从用户列表中读取ID对应的用户对象
 * 5. 把此用户对象赋值给 this.state.user
 */
export default  class UserDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {user:{}};
        this.init();
    }
    init(){
        //读取接口数据，并按URL中的路径参数进行过滤，过滤后取第1个元素
        axios.get('/users.json').then((res)=>{
            var user = res.data.filter(user => user.id == this.props.params.id)[0];
            this.setState({user:user?user:{}});//修改状态一般写在单独的方法中
        });
    }
    render() {
        return (
            <div>
                姓名:{this.state.user.name}<br/>
                年龄:{this.state.user.age}
            </div>
        );
    }
}
