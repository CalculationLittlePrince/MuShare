import React from 'react';


class Sheets extends React.Component {
  render() {
    return (
      <div className="sheets">
        <div className="ui medium header">
          公开歌单
        </div>
        <div className="ui divider"></div>
        <div className="public-sheet">
          <div className="ui four link cards">
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui medium header">
          私有歌单
        </div>
        <div className="ui divider"></div>
        <div className="private-sheet">
          <div className="ui four link cards">
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  The Name of Sheet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sheets;