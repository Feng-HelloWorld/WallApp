import './App.css';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Wall from './Wall/Wall'
import Register from './Register/Register'
import Login from './Login/Login'

function App() {
    // Remember to change axios base url to your actual backend address when deployed.
    // axios.defaults.baseURL = 'http://localhost:8000/api/';
    axios.defaults.baseURL = 'http://35.239.212.171:8000/api/';

    

    return (
        <Routes>
            <Route path='/' element={<Wall />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    );
}

export default App;
