import React, { Component } from 'react';
import './App.css';
import Body from 'Body';
import Footer from 'Footer';
import MenuItem from 'MenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  // componentDidMount(){
  //   setInterval(()=>{
  //     this.setState({isLoggedIn: true})
  //   }, 10000)
  // }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <a class="navbar-brand" href="#">
            Logo
          </a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-md-0">
              <li class="nav-item nav-menu active ">
                <a class="nav-link" href="#">
                  Menu 1 <span class="sr-only">(current)</span>
                </a>
              </li>
              <MenuItem menuName="Menu 2" />
              <MenuItem menuName="Menu 3" />
              <MenuItem menuName="Menu 4" />
            </ul>
          </div>
        </nav>
        {!this.state.isLoggedIn && <Body app="Homepage" />}
        <Footer />
      </div>
    );
  }
}

export default App;
