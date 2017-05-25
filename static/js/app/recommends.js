import React from 'react';

class Recommend extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="recommend">
        <div className="ui container">
          <div className="ui medium header">
            木屑推荐
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

export default Recommend;