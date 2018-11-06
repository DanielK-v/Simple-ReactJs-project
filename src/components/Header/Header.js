import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export default class Header extends Component {

  render() {
    return (
      <nav >
        <Link to="/AddUser"> Sign up </Link>
        <Link to="/AddTask"> Add Task </Link>
        <Link to="/TasksList">Tasks</Link>
        <Link to="/Login">Login</Link>
      </nav>
    );
  }
}