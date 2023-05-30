import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(users => {
        console.log("users:", users);
        this.setState({ users: users })
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div style={{marginLeft:"30px"}}>
        <h1>USERS</h1>
        <hr />
        <div>
          {this.state.users.map((user) => <div>
            <p>{user.name}</p>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <hr/>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default Users;
