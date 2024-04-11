import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="main">
      <h1 className="heading">Welcome to PopX</h1>
      <p className="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,     
      </p>
      <Link to ='/Create'>
      <button className="btn btn-first">Create Account</button>
      </Link>
      <Link to ='/Login'>
      <button className="btn btn-second">Already Registered?Login</button>
      </Link>
     

    </div>
  );
};

export default Home;