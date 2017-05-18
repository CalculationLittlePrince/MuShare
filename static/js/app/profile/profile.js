import React from 'react';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.profile .avatar .card .image').dimmer({
      on: 'hover'
    });
    $('.profile .form .ui.radio.checkbox')
      .checkbox()
    ;
  }

  render() {
    return (
      <div className="profile">
        <div className="ui medium header">
          公开信息
        </div>
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="ui form">
              <div className="field name">
                <label>昵称 : </label>
                <div className="ui input">
                  <input type="text"/>
                </div>
              </div>
              <div className="inline fields">
                <label>性别: </label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="gender" tabindex="0"
                           className="hidden"/>
                    <label>男</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="gender" tabindex="0"
                           className="hidden"/>
                    <label>女</label>
                  </div>
                </div>
              </div>
              <div className="field mail">
                <label>邮箱: </label>
                <div className="input">
                  <input type="text" readonly="" value="geeklyf@hotmail.com"/>
                </div>
              </div>
              <div className="field description">
                <label>简介: </label>
                <div class="">
                  <textarea placeholder="写点什么关于你自己"></textarea>
                </div>
              </div>
              <button className="ui button" type="submit">更新</button>
            </div>
          </div>
          <div className="four wide column">
            <div className="avatar">
              <div className="ui raised card">
                <div className="blurring small dimmable image">
                  <div className="ui dimmer">
                    <div className="content">
                      <div className="center">
                        <div className="ui inverted button">更换头像</div>
                      </div>
                    </div>
                  </div>
                  <img src="/image/avatar.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;