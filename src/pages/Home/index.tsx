import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <>
    <p>Home</p>
    <Link to="/login">Login</Link>
    </>
  )
}

export default Home;