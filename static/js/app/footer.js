import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/app.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div
            className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">关于</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">MuShare Group</a>
                <a href="#" className="item">App 下载</a>
                <a href="#" className="item">关于我们</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">服务</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">音乐咨询</a>
                <a href="#" className="item">联系合作</a>
                <a href="#" className="item">常用链接</a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">版权所有</h4>
              <p>&copy;2017 MuShare Group</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;