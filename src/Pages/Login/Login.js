
import React, { useState } from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
 


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Placeholder login logic
     
    };
  
  return (
   
    <div className="mainx">
    <h1 className="heading">Sign to your PopX Account
   </h1>
   
    <p className="para">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,     
    </p>
    <form className="form"onSubmit={handleLogin}>
        <div className='email' >
  
          <label>Email Address:</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='email' >
          <label>Password:</label>
          <input className='password'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to ='/AccountSetting'>
        <button className='btn' type="submit">Login In</button>
        </Link>
      </form>
    </div>
  )
}

export default Login
