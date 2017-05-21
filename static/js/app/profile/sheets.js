import React from 'react';
import MuComponent from '../../util/mushare-react-component';


class SheetCards extends MuComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var cards = this.props.sheets.map(function (sheet) {
      return (
        <div className="card">
          <div className="image">
            <img src="/image/avatar.png"/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="ui four link cards">
        {cards}
      </div>
    );
  }
}

class Sheets extends MuComponent {
  constructor(props) {
    super(props);
    this.state = {
      privateSheet: [],
      publicSheet: []
    };
  }

  loadSheet() {
    var self = this;
    fetch('/api/music/sheet/list', {
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
        var privateSheet = sheets.filter(function (sheet) {
          return sheet.privilege === 'private';
        });
        var publicSheet = sheets.filter(function (sheet) {
          return sheet.privilege === 'public' || sheet.privilege === 'friend';
        });
        console.log(privateSheet);
        console.log(publicSheet);
        self.setState({
          privateSheet: privateSheet,
          publicSheet: publicSheet
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
      <div className="sheets">
        <div className="ui medium header">
          公开歌单
        </div>
        <div className="ui divider"></div>
        <div className="public-sheet">
          <SheetCards
            sheets={this.state.publicSheet}/>
        </div>
        <div className="ui medium header">
          私有歌单
        </div>
        <div className="ui divider"></div>
        <div className="private-sheet">
          <SheetCards
            sheets={this.state.privateSheet}/>
        </div>
      </div>
    );
  }
}

export default Sheets;