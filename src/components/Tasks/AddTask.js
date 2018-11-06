import React, {Component} from 'react';
import TaskModel from './TaskModel';
import TaskMockAPI from '../../API/TaskMockAPI';
import UsersMockAPI from '../../API/UserMockAPI';


export default class AddTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            task: new TaskModel("", "", null, false,null,  UsersMockAPI.getLoggedUserID()),
            ready: true
          };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
    
        if (id) {
          this.setState({
            ready: false
          });
    
          TaskMockAPI.getById(id).then(dbTask => {
            console.log(dbTask)
            this.setState({
              task: dbTask,
              ready: true
            });
          });
        }
      }
    
      onPropChange(event) {
        event.persist();
        this.setState({
          task: { ...this.state.task, [event.target.name]: event.target.value }
        });
      }
    
      onCheckChanged(event) {
        event.persist();
        this.setState({
          task: { ...this.state.task, [event.target.name]: event.target.checked }
        });
      }

      onSave(event) {
        event.preventDefault();
        if (this.state.task.title === "" || this.state.task.description === "") {
          return;
        }
        console.log(this.state.task);
        this.setState({
          ready: false
        });
        TaskMockAPI.save(this.state.task).then(() => {
          this.setState({
            ready: true
          });
    
          this.props.history.push("/TasksList");
        });
      }

    render(){
        const style = {
            color:'white'
        }
        
        return(
             <div className="container" style={style}>
                <h1> Add a task! </h1>
                    <form onSubmit={this.onSave.bind(this)}> 
                        <div className="form-group">
                            <label>Task Title:</label>
                            <input
                            type="text" 
                            className="form-control" 
                            name="title" 
                            value={this.state.task.title}
                            onChange={this.onPropChange.bind(this)}/>
                            <br/>
                            <label >Task Description:</label>
                            <textarea 
                            className="form-control" 
                            name="description"
                            value={this.state.task.description}
                            onChange={this.onPropChange.bind(this)}/>
                            <br/>
                            Done: <input type="checkbox"
                             name="isDone" 
                             checked={this.state.task.isDone}
                             onChange={this.onCheckChanged.bind(this)} />
                            <br/>
                        </div>
                        <button className="btn btn-primary">Add </button>
                    </form>
            </div>
        );
    }

}
