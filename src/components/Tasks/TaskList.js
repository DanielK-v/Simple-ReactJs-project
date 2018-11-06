import React, { Component } from "react";
import Task from "./Task";
import TaskMockAPI from "../../API/TaskMockAPI";
import UserMockAPI from "../../API/UserMockAPI";
import "./Loader.css";


export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      ready: false,
      authorId: UserMockAPI.getLoggedUserID(),
      isDone: false
    };
  }

  componentDidMount() {
    TaskMockAPI.getByAuthorId(this.state.authorId).then(dbTasks => {
      this.setState({
        tasks: dbTasks,
        ready: true
      });
    });
  }

  deleteTask(id) {
    this.setState({
      ready: false
    });

    TaskMockAPI.delete(id).then(() => {
      TaskMockAPI.getByAuthorId(this.state.authorId).then(dbTasks => {
        this.setState({
          tasks: dbTasks,
          ready: true
        });
      });
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <div>
          <div>
            {this.state.tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  creationDate={task.creationDate}
                  deleteTaskFunc={this.deleteTask.bind(this)}
                  isDone={task.isDone}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className='loader'></div>
      );
    }
  }
}