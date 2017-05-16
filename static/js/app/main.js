import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Home from './home';
import Footer from './footer';
import _ from '../../semantic/dist/semantic.min.js';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="app">
        <Header
        />
        <Home
        />
        <Footer
        />
      </div>
    );
  }
}


ReactDOM.render(
  <App
  />,
  $('#react-root')[0]
)
;
