import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import {Link} from 'react-router-dom';
import {getURL} from '../../oss/oss'


class SheetCards extends MuComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var cards = this.props.sheets.map(function (sheet) {
      return (
        <Link to={`/sheet/${sheet.id}`}
              className="card">
          <div className="image">
            <img src={sheet.cover === '' ? '/image/cover.jpg' : getURL(sheet.cover)}/>
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
        {cards}
      </div>
    );
  }
}

class Subscription extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      sheets: [],
    };
  }

  loadSheet() {
    var self = this;
    fetch('/api/music/sheet/list/subscription', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      },
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        var sheets = data.body;
        console.log(sheets);
        self.setState({
          sheets: sheets,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadSheet();
  }

  render() {
    return (
      <div className="subscription">
        <div className="ui medium header">
          歌单
        </div>
        <div className="ui divider"></div>
        <div className="subs-sheet">
          <SheetCards
            sheets={this.state.sheets}/>
        </div>
      </div>
    );
  }
}

export default Subscription;