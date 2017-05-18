import React from 'react';
import logo from '../../image/logo.png';

class Register extends React.Component {

  constructor(props) {
    super(props);
  }

  component

  render() {
    return (
      <div className="ui modal register">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <img src={logo} className="image"/>
              <div className="content">
                用户注册
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="email"
                           placeholder="E-mail address"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password"
                           placeholder="Password"/>
                  </div>
                </div>
                <div className="ui fluid large teal submit button">Login</div>
              </div>
              <div className="ui error message"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;