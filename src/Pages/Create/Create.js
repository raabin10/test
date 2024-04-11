import React, { useState } from "react";

import "./styles.css";
import { Link } from "react-router-dom";

const Create = () => {
  // Placeholder state and logic for creating an account
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
 
    const [answer, setAnswer] = useState('yes'); // Initial state is 'yes'
  
    const handleAnswerChange = (e) => {
      setAnswer(e.target.value);
    };
  

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Placeholder logic for creating an account
    console.log("Creating account with:", {
      firstName,
      phoneNumber,
      newEmail,
      newPassword,
      companyName,
      companyType,
    });
    // You can add further logic here, like sending data to a server for account creation
  };

  return (
    <div>
    <div className="mainy">
      <h2>Create Your Pop Account</h2>
      <form onSubmit={handleCreateAccount}>
        <div className="input">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Email Address:</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Company Type:</label>
          <input
            type="text"
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
          />
        </div>
        <div>
          <p>Are you an agency</p>
          <div className="radio">
            
              <label> Yes
              </label>
                <input
                  type="radio"
                  value="yes"
                  checked={answer === "yes"}
                  onChange={handleAnswerChange}
                />            
              <label>  No
              </label>
                <input
                  type="radio"
                  value="no"
                  checked={answer === "no"}
                  onChange={handleAnswerChange}
                />
                                   
          </div>
        </div>
        <Link to ='/AccountSetting'>
        <button className="btn" type="submit">
     Create Account
   </button>
        </Link>
     
      </form>
    </div>
     
   </div>
  );
};

export default Create;