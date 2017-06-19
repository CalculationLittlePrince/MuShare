import MuComponent from '../util/mushare-react-component';
import React from 'react';
import logo from '../../image/logo.png';


class RegisterMessage extends MuComponent {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.message == 0) {
      return (
        <div className="ui success message">
          注册成功，正在为您跳转...
        </div>
      );
    } else if (this.props.message == 1) {
      return (
        <div className="ui error message">
          注册失败
        </div>
      );
    } else {
      return null;
    }
  }
}

class LoginButton extends MuComponent {
  render() {
    if (this.props.buttonLoading == 0) {
      return (
        <button className="ui fluid button" onClick={this.props.handleLogin}>
          注册
        </button>
      );
    } else if (this.props.buttonLoading == 1) {
      return (
        <button className="ui fluid button" onClick={this.props.handleLogin}>
          <i className="spinner loading icon"></i>注册
        </button>
      );
    }
  }
}

class Register extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      username: '',
      password: '',
      checkpassword: '',
      registerMessage: -1,
      buttonLoading: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRegister() {
    var self = this;
    if(this.state.password !== this.state.checkpassword) {
      alert("两次密码输入不同");
      return;
    }
    this.setState({
      buttonLoading: 1
    });
    fetch('/api/user/account/register', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: self.state.username,
        mail: self.state.mail,
        password: self.state.password,
      })
    }).then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        self.setState({
          registerMessage: 0
        });
        setInterval(function () {
          window.location.href = "/app";
        }, 500);
      })
      .catch(function (error) {
        self.setState({
          buttonLoading: 0,
          registerMessage: 1
        });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui small register modal" id="register">
        <div className="ui container">
          <div className="ui items">
            <div className="item">
              <div className="ui image">
                <img src={logo} alt=""/>
              </div>
              <div className="middle aligned content">
                <h3>注册</h3>
              </div>
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>邮箱</label>
              <div className="ui input">
                <input type="text" name="mail" value={this.state.mail}
                       placeholder="邮箱" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="field">
              <label>用户名</label>
              <div className="ui input">
                <input type="text" name="username" value={this.state.username}
                       placeholder="用户名" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="field">
              <label>密码</label>
              <div className="ui input">
                <input type="password" name="password"
                       value={this.state.password}
                       placeholder="密码" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="field">
              <label>确认密码</label>
              <div className="ui input">
                <input type="password" name="checkpassword"
                       value={this.state.checkpassword}
                       placeholder="确认密码" onChange={this.handleChange}/>
              </div>
            </div>
            <LoginButton
              buttonLoading={this.state.buttonLoading}
              handleLogin={this.handleRegister}/>
          </div>
          <RegisterMessage message={this.state.registerMessage}/>
        </div>
      </div>
    );
  }
}

export default Register;