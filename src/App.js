import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Link } from 'react-router';
import { MenuLink } from './components/MenuLink';
import NavBar from './components/NavBar';

class App extends Component {
  componentDidMount() {
    this.getGames();
  }
  getGames = () => {
    fetch('./api/games');
  }
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <NavBar />
            <MenuLink />
            {this.props.children}
          </div>
      </Provider>
    );
  }
}

export default App;
