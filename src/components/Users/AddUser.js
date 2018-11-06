import React, {Component} from 'react';
import UserMockAPI from '../../API/UserMockAPI';

class AddUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            isAdmin: false,
            hasError: false
        }
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

        UserMockAPI.register(this.state)
          .then(() => {
            this.props.history.push("/Login");
          })
          .catch(() => {
            this.setState({
              hasError: true
            });
          });
      }

    render(){

        const style = {
            color:'white'
        }

        return(
            <div className="container" style={style}>
                <form className="input-form" onSubmit={this.onSubmit.bind(this)}>
                    <label>Username: </label>
                    <input type="text" className="form-control" name="username" onChange={this.onPropChange.bind(this)}/> 
                    <br/>
                    <label>Password: </label>
                    <input type="password" className="form-control" name="password" onChange={this.onPropChange.bind(this)}/>
                    <label>Email: </label>
                    <input type="email" className="form-control" name="email" onChange={this.onPropChange.bind(this)}/> 
                    <br/>
                    <button type="submit" className="btn btn-primary"> Register</button> 
                </form>
            </div>
        );
    };
}
export default AddUser;