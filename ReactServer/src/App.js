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

    // axios.defaults.baseURL = 'http://35.239.212.171:8000/api/';

    const [token, setToken] = useState('')

    axios.defaults.baseURL = 'http://localhost:8000/api/';
    // axios.defaults.headers.common['Authorization'] = "Bearer "+token;

    

    return (
        <Routes>
            <Route path='/' element={<Wall />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    );
}

export default App;
