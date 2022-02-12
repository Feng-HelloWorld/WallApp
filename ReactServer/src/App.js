import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Redirect, Routes } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import {useNavigate } from 'react-router-dom'


import Wall from './Wall/Wall'
import Register from './Register/Register'
import Login from './Login/Login'

function App() {

  

  return (
    // navigate('/')

    <Routes>
      <Route path='/' element={<Wall />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>


  );
}

export default App;
