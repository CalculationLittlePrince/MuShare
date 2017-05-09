import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div
        className="container">
        <h1>Hello React</h1>
        <img src={logo}/>
        <p>Guangzhou, China <br/> chenbin92</p>
      </div>
    );
  }
}


ReactDOM.render(
  <Hello
  />,
  document.getElementById('root')
);
