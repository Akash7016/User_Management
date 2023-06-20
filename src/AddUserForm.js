
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const AddUserForm = ({ addUser, users}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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

    if (emailAlreadyExists(email)) {
      alert('Email address already exists.');
      return;
    }


    if (!isValidPhoneNumber(phone) || (phone.length != 10)) {
      alert('Please enter a valid phone number.');
      return;
    }
    // Add new user
    addUser({ name, email, phone });
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
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

  const handleData = ()=>{
    setIsSuccess(!isSuccess);
  };

  const emailAlreadyExists = (email) => {
    return users.some((user) => user.email === email);
  };

  return (
    <div style={{display:'flex',
                 justifyContent:'center',
                 alignItems:"center",
                 marginTop:20}}>
    <form
    onSubmit={handleSubmit}>
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

      <button style={{marginLeft:100,backgroundColor:'blue',
      border:'none',padding:10,borderRadius:10,color:'white'}}
      onClick={handleData}
      type="submit">Add User</button>
    </form>
    
    
    </div>
  );
};

export default AddUserForm;
