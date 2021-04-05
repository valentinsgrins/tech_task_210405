import React, { Component } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          firstname: '',
          lastname: '',
          email: ''
        };
      }

      onChangeFirstname(e) {
        this.setState({
          firstname: e.target.value
        });
      }
      onChangeLastname(e) {
        this.setState({
          lastname: e.target.value
        });
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      onSubmit(e) {
        e.preventDefault();
        const newUser = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email
        };
        console.log(newUser);
        axios.post('http://localhost:5000/users/add', newUser)
          .then(res => {
            console.log(res.data);
            window.location = '/';
          })
          .catch((error) => {
            if(error.response){
            if(error.response.status === 400){
              this.setState({errorMessage: "Please check entered data"});}
              console.log(error);
            } else {
              this.setState({errorMessage: "Server is not available"});
              console.log(error);
            }
          })
      }

  render() {
    return (
        <div>
        <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                maxLength="100"
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                maxLength="100"
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                />
          </div>
          <div className="form-group"> 
            <label>Email Name: </label>
            <input  type="email"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                input/>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
          {this.state.errorMessage && <div><Alert variant="warning">{ this.state.errorMessage }</Alert></div>}
        </form>
      </div>
    );
  }
}