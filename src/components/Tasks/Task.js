import React, { Component } from "react";
import "./Task.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Task extends Component {
  deleteTask() {
    this.props.deleteTaskFunc(this.props.id);
  }

  editTask() {
    this.props.history.push("/AddTask/" + this.props.id);
  }

  render() {
    return (
      <div className="task-holder">
        <span className="delete-icon" onClick={this.editTask.bind(this)}>
          {" "}
          E{" "}
        </span>
        <span className="delete-icon" onClick={this.deleteTask.bind(this)}>
          {" "}
          X{" "}
        </span>
        <div className="task-title">
          <span className="key">Title: </span>
          {this.props.title}
        </div>
        <hr />
        <div className="task-description">
          <span className="key">Description: </span>
          {this.props.description}
        </div>
        <hr />
        <div className="task-creation-date">
          <span className="key">Creation Date:</span>
          {this.props.creationDate}
        </div>
        <hr />
        <div>
        <span className="key">Is this task completed?</span>{this.props.isDone ? "Yes": "No"}
        </div>
      </div>
    );
  }
}

export default withRouter(Task);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  deleteTaskFunc: PropTypes.func.isRequired
};
