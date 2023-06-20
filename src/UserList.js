import React from 'react';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div style={{marginTop : 20}}>
        <Table striped bordered hover>
        <thead>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        

        {users.map((user) => (
           
                <tr>
          
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td><button
          style={{marginRight:50,marginLeft:20,
          border:'none',padding:'5px 10px',borderRadius:10,color:'blue'}}
          onClick={() => editUser(user)}>Edit</button>
          <button
          style={{marginRight:50,marginLeft:20,backgroundColor:'red',
            border:'none',padding:'5px 10px',borderRadius:10,color:'white'}}
          onClick={() => deleteUser(user.id)}>Delete</button></td>
        </tr>
            )
         
      )}
          
        
      </tbody>
        </Table>
     
    </div>
  );
};

export default UserList;
