import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mongoose from 'mongoose';

const UserPage = () => {
   
  

   const [users, setUsers] = useState([])
   useEffect(()=>{
    axios.get('http://localhost:3000/user')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
   },[])




  return (
    <div>
      <h1>User</h1>
     <ul>
        {users.map(item => {
          // if(item.name == "nitin"){

            return <li key={item._id}>{item.name}</li>
          // }
              
     })}
      </ul>
    </div>
  );
}

export default UserPage;