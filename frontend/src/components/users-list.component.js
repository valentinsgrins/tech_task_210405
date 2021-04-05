import React, { Component } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const User = props => (
    <tr>
      <td>{props.user.firstname}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.email}</td>
    </tr>
  )
export default class UsersList extends Component{
    constructor(props) {
        super(props);
        this.state = {users: []};
      }
      componentDidMount() {
        axios.get('http://localhost:5000/users/')
         .then(response => {
           this.setState({ users: response.data });
         })
         .catch((error) => {
          if(error.response){
          console.log(error);
          } else {
            this.setState({errorMessage: "Server is not available"});
          }
        })
      }

      usersList() {
        return this.state.users.map(user => {
          return <User user={user} key={user._id}/>;
        })
      }
  render() {
    return (
        <div>
        <h3>Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            { this.usersList() }
          </tbody>
        </table>
        {this.state.errorMessage &&
            <div>
            <Alert variant="warning">{ this.state.errorMessage }</Alert>
            </div>
          }
      </div>
    )
  }
}