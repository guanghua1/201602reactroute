import React from 'react';
import {Link} from 'react-router';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">珠峰培训</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/home">首页</Link></li>
                <li><Link to="/user">用户管理</Link></li>
                <li><Link to="/profile">个人设置</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
