import React, { Component } from "react";
import UserMockAPI from "../../API/UserMockAPI";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hasError: false,
      errorText: ""
    };
  }

  onPropChange(event) {
    event.persist();

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    if (!this.state.username || !this.state.password) {
      return;
    }

    const { username, password } = this.state;

    UserMockAPI.login(username, password)
      .then(() => {
        this.props.history.push("/TasksList");
      })
      .catch(error => {
        this.setState({
          hasError: true,
          errorText: error
        });
      });
  }

  render() {

    const style = {
      color:'white'
  }

    return (
      <div className="container" style={style}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.onPropChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.onPropChange.bind(this)}
            />
            {this.state.hasError ? (
              <p className="text-danger">{this.state.errorText}</p>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}