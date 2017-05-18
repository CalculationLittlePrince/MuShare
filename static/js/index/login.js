import React from 'react';
import logo from '../../image/logo.png';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: ''
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
    console.log(this.state.mail + ' ' + this.state.password);
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
                <input type="password" name="password" value={this.state.password}
                       placeholder="Password" onChange={this.handleChange}/>
              </div>
            </div>
            <button className="ui fluid button" type="submit" onClick={this.handleLogin}>登陆</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;