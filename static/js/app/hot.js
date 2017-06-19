import React from 'react';
import ReactDOM from 'react-dom';
import MuComponent from '../util/mushare-react-component';
import {Link} from 'react-router-dom';
import {getURL} from '../oss/oss'


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
      <div className="hot">
        <div className="ui container">
          <div className="ui medium header">
            本周热门
          </div>
          <div className="ui four link cards">
            {sheets}
          </div>
        </div>
      </div>
    );
  }
}

export default Hot;