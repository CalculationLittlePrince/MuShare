import React from 'react';
import ReactDOM from 'react-dom';


class Hot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="hot">
        <div className="ui container">
          <div className="ui medium header">
            本周热门
          </div>
          <div className="ui four link cards">
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src="/image/avatar.png"/>
              </div>
              <div className="content">
                <div className="description">
                  test
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hot;