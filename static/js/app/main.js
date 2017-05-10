import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Hello extends React.Component {
  render() {
    return (
      <div
        className="container">
        <h1>Hello React</h1>
        <p>Guangzhou, China <br/> chenbin92</p>
      </div>
    );
  }
}


ReactDOM.render(
  <Hello
  />,
  $('#root')[0]
);
