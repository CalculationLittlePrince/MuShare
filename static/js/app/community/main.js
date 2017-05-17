'use strict';

import React from 'react';
import Moments from './moments';
import Articles from './articles';
import '../../../semantic/dist/semantic.min.js';

class Community extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.community .menu .item').tab();
  }

  render() {
    return (
      <div className="community">
        <div className="ui container">
          <div className="ui top attached tabular menu">
            <a className="item active" data-tab="moments">动态</a>
            <a className="item" data-tab="articles">文章</a>
          </div>
          <div className="ui bottom active attached tab segment" data-tab="moments">
            <Moments/>
          </div>
          <div className="ui bottom attached tab segment" data-tab="articles">
            <Articles/>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;