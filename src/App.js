import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Logo</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-md-0">
              <li class="nav-item nav-menu active ">
                <a class="nav-link" href="#">Menu 1 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item nav-menu">
                <a class="nav-link" href="#">Menu 2</a>
              </li>
              <li class="nav-item nav-menu">
                <a class="nav-link" href="#">Menu 3</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
