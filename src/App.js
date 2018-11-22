import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Body from 'Body';
import Test from 'Test';

import Footer from 'Footer';
import MenuItem from 'MenuItem';
import ShoppingItemCollection from './ShoppingItemCollection';

import { getUsers, addUser } from '../src/services/getInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      users: []
    };
  }

  async componentWillMount() {
    await addUser({ firstName: 'ram', lastName: 'sth' });
    const result = await getUsers();
    this.setState({ users: result });

    // setInterval(()=>{
    //   this.setState({isLoggedIn: true})
    // }, 10000)
  }

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
                  <Link className="nav-link" to="/">
                    {/* <a class="nav-link" href="/"> */}
                    Menu 1 <span class="sr-only">(current)</span>
                    {/* </a> */}
                  </Link>
                </li>
                <Link to="/items" target="_blank">
                  <MenuItem menuName="Menu 2" />
                </Link>
                <MenuItem menuName="Menu 3" />
                <a href="/items">
                  <MenuItem menuName="Menu 4" />
                </a>
              </ul>
            </div>
          </nav>
          <Route render={() => <Body app="Homepage" />} exact path="/" />
          <Route render={() => <ShoppingItemCollection />} path="/items" />
          <Test />
          {/* {this.state.users.map(user => (
            <div>{user.firstName}</div>
          ))} */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


/dashboaderrouter => componentWillMount