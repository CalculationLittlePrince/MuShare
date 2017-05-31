import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import {getURL} from '../../oss/oss'
import {guid} from '../../util/utils';
import {uploadAvatar} from '../../oss/upload';
import co from 'co';
import '../../vendor/cropper.min.js';
import '../../../scss/cropper.min.css'


class AvatarCropperModal extends MuComponent {
  constructor(props) {
    super(props);
    this.receiveInputCover = this.receiveInputCover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.props.eventEmitter.addListener('receive-input-cover', this.receiveInputCover);
    this.imgcut = '';
    this.state = {
      url: ''
    }
  }

  receiveInputCover(avatar) {
    var url = URL.createObjectURL(avatar);
    $('#avatar-cropper-modal img').cropper('destroy');
    this.setState({
      url: url
    });
  }

  handleClick() {
    this.props.eventEmitter.emit('receive-img-cut', this.imgcut);
  }

  componentDidUpdate() {
    var self = this;
    $('#avatar-cropper-modal img').cropper({
      aspectRatio: 1,
      crop: function (e) {
        self.imgcut = `x_${e.x < 0 ? 0 : Math.floor(e.x)},` +
          `y_${e.y < 0 ? 0 : Math.floor(e.y)},` +
          `w_${Math.floor(e.width)},` +
          `h_${Math.floor(e.height)}`;
      }
    });
  }

  render() {
    return (
      <div className="ui small modal" id="avatar-cropper-modal">
        <div className="ui container">
          <div className="avatar-wrapper">
            <img src={this.state.url} alt=""/>
          </div>
          <button className="ui fluid button" onClick={this.handleClick}>确定
          </button>
        </div>
      </div>
    );
  }
}


class AvatarUploadModal extends MuComponent {

  constructor(props) {
    super(props);
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount() {
    console.log('did mount');
    $('#avatar-upload-modal .progress').progress({
      percent: 0
    });
    this.props.eventEmitter.addListener('update-progress', this.updateProgress);
  }

  componentDidUpdate() {
  }

  updateProgress(percent) {
    console.log(percent);
    $('#avatar-upload-modal .progress').progress('set percent', percent);
  }

  render() {
    return (
      <div className="ui small login modal" id="avatar-upload-modal">
        <div className="ui container">
          <div className="ui progress">
            <div className="bar">
              <div className="progress"></div>
            </div>
            <div className="label">正在上传...</div>
          </div>
        </div>
      </div>
    );
  }
}

class UpdateButton extends MuComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.disabled) {
      return (
        <button
          className="ui button disabled"
          onClick={this.props.updateProfile}>
          更新
        </button>
      );
    } else {
      return (
        <button
          className="ui primary button"
          onClick={this.props.updateProfile}>
          更新
        </button>
      );
    }
  }
}

class Profile extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      mail: '',
      description: '',
      avatar: '/image/avatar.png',
      updateButtonDisabled: true,
    };
    this.avatarFile = null;
    this.eventEmitter = new EventEmitter();
    this.receiveImgCut = this.receiveImgCut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadUserProfile = this.loadUserProfile.bind(this);
    this.loadUserAvatar = this.loadUserAvatar.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.uploadAvatar = this.uploadAvatar.bind(this);
    this.openAvatarCropperModal = this.openAvatarCropperModal.bind(this);
    this.eventEmitter.addListener('receive-img-cut', this.receiveImgCut);
  }

  componentDidMount() {
    var self = this;
    $('.profile .avatar .card .image').dimmer({
      on: 'hover'
    });
    $('.profile .form .ui.radio.checkbox').checkbox({
      onChecked: function () {
        console.log($(this).attr('name'));
        console.log($(this).val());
        self.setState({
          updateButtonDisabled: false,
          [$(this).attr('name')]: $(this).val()
        });
      }
    });
    this.loadUserProfile();
  }

  handleChange(event) {
    this.setState({
      updateButtonDisabled: false,
      [event.target.name]: event.target.value
    });
  }

  loadUserProfile() {
    var self = this;
    var token = $('#token').val();
    fetch('/api/user/profile/get', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      },
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        self.setState({
          name: data.body.name,
          mail: data.body.mail,
          description: data.body.description,
          gender: data.body.gender,
        });
        self.loadUserAvatar(data.body.avatar);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  loadUserAvatar(objectId) {
    var self = this;
    if (objectId != '') {
      self.setState({
        avatar: getURL(objectId)
      });
    }
  }

  openAvatarCropperModal(event) {
    $('#avatar-cropper-modal')
      .modal({
        detachable: false
      })
      .modal('show');
    this.avatarFile = event.target.files[0];
    this.eventEmitter.emit('receive-input-cover', this.avatarFile);
  }

  receiveImgCut(imgcut) {
    console.log(imgcut);
    $('#avatar-cropper-modal').modal('hide');
    this.uploadAvatar(this.avatarFile, imgcut);
  }

  uploadAvatar(file, imgcut) {
    console.log('upload avatar');
    var self = this;
    var token = $('#token').val();
    $('#avatar-upload-modal')
      .modal({
        closable: false,
        detachable: false
      })
      .modal('show');
    co(function*() {
      var avatarName = 'avatar-' + guid();
      var avatar = yield uploadAvatar(avatarName, file, token,
        function*(progress) {
          self.eventEmitter.emit('update-progress', progress * 100);
        });
      var result = yield fetch('/api/user/profile/update', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {
          'Authorization': token
        },
        body: JSON.stringify({
          avatar: avatar.name + `?x-oss-process=image/crop,${imgcut}`,
        })
      })
        .then(self.checkStatus)
        .then(self.parseJSON)
      return result;
    }).then(function (result) {
      console.log(result);
      self.loadUserProfile();
      $('#avatar-upload-modal').modal('hide');
    }, function (error) {
      console.error(error);
    });
  }

  updateProfile() {
    var self = this;
    var token = $('#token').val();
    fetch('/api/user/profile/update', {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      },
      body: JSON.stringify({
        name: self.state.name,
        mail: self.state.mail,
        description: self.state.description,
        gender: self.state.gender
      })
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        console.log(result)
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  render() {
    return (
      <div className="profile">
        <AvatarCropperModal
          eventEmitter={this.eventEmitter}/>
        <AvatarUploadModal
          eventEmitter={this.eventEmitter}/>
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
                  <input type="text" name="name" value={this.state.name}
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="inline fields">
                <label>性别: </label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="gender" value="male"
                           checked={this.state.gender === 'male'}
                           className="hidden"/>
                    <label>男</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="gender" value="female"
                           checked={this.state.gender === 'female'}
                           className="hidden"/>
                    <label>女</label>
                  </div>
                </div>
              </div>
              <div className="field mail">
                <label>邮箱: </label>
                <div className="input">
                  <input type="text" readOnly="" name="mail"
                         value={this.state.mail}/>
                </div>
              </div>
              <div className="field description">
                <label>简介: </label>
                <div className="description">
        <textarea
          placeholder="写点什么关于你自己"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}>
        </textarea>
                </div>
              </div>
              <UpdateButton
                disabled={this.state.updateButtonDisabled}
                updateProfile={this.updateProfile}
              />
            </div>
          </div>
          <div className="four wide column">
            <div className="avatar">
              <div className="ui raised card">
                <div className="blurring small dimmable image">
                  <div className="ui dimmer">
                    <div className="content">
                      <div className="center">
                        <input type="file" name="avatar-file" id="avatar-file"
                               className="avatar-file"
                               onChange={this.openAvatarCropperModal}/>
                        <label htmlFor="avatar-file">更换头像</label>
                      </div>
                    </div>
                  </div>
                  <img src={this.state.avatar}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
      ;
  }
}

export default Profile;