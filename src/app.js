import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
class App extends React.Component {

  render() {
    return (
      <div className="main">
      <nav id="top">
        <div className="homeButton">
        <a href="#top"><p>Home</p></a>
        </div>
        <div className="navLinks">
          <ul>
            <a href="#cars"><li><p>Cars</p></li></a>
            <a href="#about"><li><p>About</p></li></a>
            <a href="#contact"><li><p>Contact</p></li></a>
          </ul>
        </div>
      </nav>
      <div className="jumbotron">
        <h1>Rick's Classic Cars</h1>
      </div>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
