import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Header/Main';
import TaskMockAPI from './API/TaskMockAPI';
import UserMockAPI from './API/UserMockAPI';


class App extends Component {
  render() {
    UserMockAPI.seedAdmin();
    TaskMockAPI.seed();
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
