import React from 'react';


class Subscription extends React.Component {
  render() {
    return (
      <div className="subscription">
        <div className="ui medium header">
          歌单
        </div>
        <div className="ui divider"></div>
        <div className="subs-sheet">
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
      </div>
    );
  }
}

export default Subscription;