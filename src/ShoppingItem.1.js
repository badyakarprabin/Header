import React, { Component } from 'react';
import './App.css';
import Body from 'Body';
import Footer from 'Footer';
import MenuItem from 'MenuItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ShoppingItemCollection from './ShoppingItemCollection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  // componentDidMount(){
  //   setInterval(()=>{
  //     this.setState({isLoggedIn: true})
  //   }, 10000)
  // }

  render() {
    return (
      <Router>
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
                  <Link to="/" class="nav-link">
                    Menu 1 <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <Link to="/items">
                  <MenuItem menuName="Menu 2" />
                </Link>
                <MenuItem menuName="Menu 3" />
                <MenuItem menuName="Menu 4" />
              </ul>
            </div>
          </nav>
          <Route path="/" exact render={() => <Body app="Homepage" />} />
          <Route path="/items" component={ShoppingItemCollection} />
          {/* <Body app="Homepage" /> */}
          {/* <ShoppingItemCollection /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
