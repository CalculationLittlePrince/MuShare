import React from 'react';
import MuComponent from '../util/mushare-react-component';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {getURL} from '../oss/oss'
import '../vendor/jquery.roundabout.min';


class Hot extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      sheets: []
    }
    this.loadHot = this.loadHot.bind(this);
  }

  loadHot() {
    var self = this;
    fetch('/api/admin/hot/get', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        var sheets = result.body.map(function (sheet) {
          return {
            id: sheet.id,
            cover: sheet.cover,
            name: sheet.name
          };
        });
        self.setState({
          sheets: sheets
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadHot();
  }

  render() {
    var sheets = this.state.sheets.map(function (sheet) {
      return (
        <Link
          to={`/sheet/${sheet.id}`}
          className="card"
          data-id={sheet.id}>
          <div className="image">
            <img
              src={sheet.cover === '' ? "/image/avatar.png" : getURL(sheet.cover)}/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="ui four link cards">
        {sheets}
      </div>
    );
  }
}

class Recommend extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      sheets: []
    }
    this.loadRecommend = this.loadRecommend.bind(this);
  }

  loadRecommend() {
    var self = this;
    fetch('/api/admin/recommend/get', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        var sheets = result.body.map(function (sheet) {
          return {
            id: sheet.id,
            cover: sheet.cover,
            name: sheet.name
          };
        });
        self.setState({
          sheets: sheets
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadRecommend();
  }

  render() {
    var sheets = this.state.sheets.map(function (sheet) {
      return (
        <Link
          to={`/sheet/${sheet.id}`}
          className="card"
          data-id={sheet.id}>
          <div className="image">
            <img
              src={sheet.cover === '' ? "/image/avatar.png" : getURL(sheet.cover)}/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="ui four link cards">
        {sheets}
      </div>
    );
  }
}

class Original extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      sheets: []
    }
    this.loadOriginal = this.loadOriginal.bind(this);
  }

  loadOriginal() {
    var self = this;
    fetch('/api/admin/original/get', {
      method: 'GET',
      credentials: 'same-origin',
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        var sheets = result.body.map(function (sheet) {
          return {
            id: sheet.id,
            cover: sheet.cover,
            name: sheet.name
          };
        });
        self.setState({
          sheets: sheets
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadOriginal();
  }

  render() {
    var sheets = this.state.sheets.map(function (sheet) {
      return (
        <Link
          to={`/sheet/${sheet.id}`}
          className="card"
          data-id={sheet.id}>
          <div className="image">
            <img
              src={sheet.cover === '' ? "/image/avatar.png" : getURL(sheet.cover)}/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="ui four link cards">
        {sheets}
      </div>
    );
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.roundabout_box ul').roundabout({
      duration: 1000,
      minScale: 0.6,
      autoplay: true,
      autoplayDuration: 5000,
      minOpacity: 0,
      maxOpacity: 1,
      reflect: true,
      startingChild: 3,
      autoplayInitialDelay: 5000,
      autoplayPauseOnHover: true,
      enableDrag: true
    });
  }

  render() {
    return (
      <div className="home">
        <div className="carousel exhibition_hall">
          <div className="ui container roundabout_box">
            <ul>
              <li>
                <img src="/image/bg1.jpg" alt=""/>
              </li>
              <li>
                <img src="/image/bg2.jpg" alt=""/>
              </li>
              <li>
                <img src="/image/bg3.jpg" alt=""/>
              </li>
              <li>
                <img src="/image/bg4.jpg" alt=""/>
              </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
        <div className="ui container hot">
          <div className="ui medium header">
            本周热门
          </div>
          <Hot/>
        </div>
        <div className="ui container recommend">
          <div className="ui medium header">
            木屑推荐
          </div>
          <Recommend/>
        </div>
        <div className="ui container original">
          <div className="ui medium header">
            最新原创
          </div>
          <Original/>
        </div>
      </div>
    );
  }
}

export default Home;