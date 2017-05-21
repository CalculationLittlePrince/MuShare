import MuComponent from '../util/mushare-react-component';
import React from 'react';
import logo from '../../image/logo.png';


class LoginMessage extends MuComponent {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.message == 0) {
      return (
        <div className="ui success message">
          登陆成功，正在为您跳转...
        </div>
      );
    } else if (this.props.message == 1) {
      return (
        <div className="ui error message">
          登陆失败
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
          登陆
        </button>
      );
    } else if (this.props.buttonLoading == 1) {
      return (
        <button className="ui fluid button" onClick={this.props.handleLogin}>
          <i className="spinner loading icon"></i>登陆
        </button>
      );
    }
  }
}

class Login extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
      loginMessage: -1,
      buttonLoading: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLogin() {
    var self = this;
    this.setState({
      buttonLoading: 1
    });
    fetch('/api/user/account/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mail: self.state.mail,
        password: self.state.password,
      })
    }).then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        self.setState({
          loginMessage: 0
        });
        setInterval(function () {
          window.location.href = "/app";
        }, 500);
      })
      .catch(function (error) {
        self.setState({
          buttonLoading: 0,
          loginMessage: 1
        });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui small login modal" id="login">
        <div className="ui container">
          <div className="ui items">
            <div className="item">
              <div className="ui image">
                <img src={logo} alt=""/>
              </div>
              <div className="middle aligned content">
                <h3>登陆</h3>
              </div>
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="mail" value={this.state.mail}
                       placeholder="Mail Address" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password"
                       value={this.state.password}
                       placeholder="Password" onChange={this.handleChange}/>
              </div>
            </div>
            <LoginButton
              buttonLoading={this.state.buttonLoading}
              handleLogin={this.handleLogin}/>
          </div>
          <LoginMessage message={this.state.loginMessage}/>
        </div>
      </div>
    );
  }
}

export default Login;