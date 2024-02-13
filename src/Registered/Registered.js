import React, { useState } from 'react';
import './Registered.css'; 
import User from './User';
import {Link, useNavigate} from "react-router-dom";

const Registered = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(false);

    const navigate=useNavigate();

  const handleCreateAccount = (e) =>{
     
    console.log('Form submitted!');
    
    const userData={
         fullName,
         phoneNumber,
         email
    };
     
    navigate('/user',{state:{userData}});
  };

  return (
    <div className="registration-form">
    <Link to="/" className='back_button'>Back</Link>
      <h2>Create your PopX account</h2>
      <fieldset>
        <legend> Full Name*</legend>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend> Phone Number*</legend>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend> Email Address*</legend>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend> Password*</legend>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend> Company Name*</legend>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Enter your company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </fieldset>

         
        <legend className='radio_label'>Are you an agency?</legend>
         
        <div className='radio-container'>
        <label>
          <input
            className='radio-input'
            type="radio"
            name="isAgency"
            value="yes"
            checked={isAgency}
            onChange={() => setIsAgency(true)}
          />
          Yes
        </label>
        
        <label>
          <input
            className='radio-input'
            type="radio"
            name="isAgency"
            value="no"
            checked={!isAgency}
            onChange={() => setIsAgency(false)}
          />
          No
        </label>
        </div>
        

      

      <button className='btn' onClick={handleCreateAccount}  >Create Account</button>
    </div>
  );
};

export default Registered;
