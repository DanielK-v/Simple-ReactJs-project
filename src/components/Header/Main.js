import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddTask from "../Tasks/AddTask";
import AddUser from "../Users/AddUser";
import Login from "../Users/Login";
import TaskList from "../Tasks/TaskList";



export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Switch>
          
          <Route exact path="/AddTask" component={AddTask} />
          <Route exact path="/AddUser" component={AddUser} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/TasksList" component={TaskList} />
          <Route exact path="/AddTask/:id" component={AddTask} />
        </Switch>
      </div>
    );
  }
}