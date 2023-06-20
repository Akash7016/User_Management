import React, { useState, useEffect } from 'react';

const EditUserForm = ({ currentUser, updateUser, closeModal,users }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPhone(currentUser.phone);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (emailAlreadyExists(email, currentUser.id)) {
      alert('Email address already exists.');
      return;
    }

    if (!isValidPhoneNumber(phone) || (phone.length !== 10)) {
      alert('Please enter a valid phone number.');
      return;
    }

    // Update user
    updateUser(currentUser.id, { name, email, phone });
    closeModal();
  };

  const isValidEmail = (value) => {
    // Use a regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPhoneNumber = (value) => {
    // Use a regular expression for basic phone format validation
    const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    return phoneRegex.test(value);
  };

  const emailAlreadyExists = (email, currentUserId) => {
    return users.some((user) => user.email === email && user.id !== currentUserId);
  };

  return (
    <div style={{display:'flex',
    justifyContent:'center',
    alignItems:"center",
    marginTop:20}}>

    
    <form onSubmit={handleSubmit}>
      <label style={{marginRight:30}} name="name">Name:</label>
      <input
      style={{marginBottom:30}}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/>

      <label style={{marginRight:35}} name="email">Email:</label>
      <input
      style={{marginBottom:30}}
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>

      <label style={{marginRight:30}} name="phone">Phone:</label>
      <input
      style={{marginBottom:30}}
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br/>

      <button
      style={{marginLeft:70,backgroundColor:'blue',
      border:'none',padding:10,borderRadius:10,color:'white'}}
      type="submit"
      
      >Update User</button>

      <button
      style={{marginLeft:10,
      border:'2px solid red',padding:10,borderRadius:10,color:'red'}}
      onClick={closeModal}>Cancel</button>
    </form>
    </div>
  );
};

export default EditUserForm;
