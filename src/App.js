import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import EditUserForm from "./EditUserForm";


import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [isedit, setIsEdit] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  
  
  

  const addUser = (user) => {
    // Generate a unique ID for the user
     setId(id + 1);
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
    
  };

  const handleComp = () => {
    setIsAdd(!isAdd);
  }

  const editUser = (user) => {
    setIsEdit(true);
    setIsAdd(false);
    setEditingUser(user);
  };

  const updateUser = (userId, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const closeModal = () => {
    setEditingUser(null);
    setIsEdit(false);
  };

  
  return (
    <div>
      
      <div>

        
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
          <Navbar.Brand >User Management</Navbar.Brand>

            {
           isAdd ? 
          <Button onClick={handleComp} className="justify-content-end" variant="outline-light">Done</Button>
          : 
           <Button onClick={handleComp} className="justify-content-end" variant="outline-light">Add User</Button>
          }
          
          </Container>
        </Navbar>
      
        
      </div>

      {
        isAdd ? 
        <AddUserForm addUser={addUser} users={users} /> 
        : null
        
      }

      
      

      { 
        isedit ?
        (editingUser && (
          <EditUserForm
            currentUser={editingUser}
            updateUser={updateUser}
            closeModal={closeModal}
            users={users}
          />
        ))
         : null
      }

      {
        (!users || users.length === 0) ?
         <h2 style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginTop:400,
          color:'grey'
        }}>No Data Found !</h2> :
        <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
      }

     
  
     

     
      
      
    </div>
  );
};

export default App;
