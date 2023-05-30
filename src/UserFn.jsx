import React, {useState, useEffect}  from 'react';
import axios from 'axios';

const UserFn = () => {

  let myUsers =[];
  const [users, setUsers]= useState(myUsers);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{console.log(res);
    setUsers(res.data)
    })

    .catch(err=>console.log(err))})

  return (
    <div style={{marginLeft:"30px"}}>
      <h1>All users</h1>
      <hr/>
      <div>
          {users.map((user) => <div>
            <p>{user.name}</p>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <hr/>
          </div>
          )}
        </div>
    </div>
  )
}

export default UserFn