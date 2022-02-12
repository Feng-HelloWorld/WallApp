import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import "./Wall.css"
import Post from './Post'


export const Wall = (props) => {
    // Posts from the database
    const [data, setData] = useState([])

    useEffect(
        () => {
        setData ( [
            {
                "name":"Jack",
                "time":"2022-02-01 19:37:12",
                "text":"ababababab"
            },
            {
                "name":"Tom",
                "time":"2022-02-02 19:37:12",
                "text":"876543876543"
            },
            {
                "name":"Jerry",
                "time":"2022-02-03 19:37:12",
                "text":"jhgfduytr"
            },
            {
                "name":"Nobody",
                "time":"2022-02-04 19:37:12",
                "text":"nbvc6543"
            }
        ] )      
        }, []
    )

    // {
    // setData ( [
    //     {
    //         "name":"aaa",
    //         "time":"2022-02-01 19:37:12",
    //         "text":"ababababab"
    //     },
    //     {
    //         "name":"bbb",
    //         "time":"2022-02-02 19:37:12",
    //         "text":"876543876543"
    //     },
    //     {
    //         "name":"ccc",
    //         "time":"2022-02-03 19:37:12",
    //         "text":"jhgfduytr"
    //     },
    //     {
    //         "name":"ddd",
    //         "time":"2022-02-04 19:37:12",
    //         "text":"nbvc6543"
    //     }
    // ] )
    // }

    return(
    <div className="wall">
        <header className="header">
            <div className = "headerHolder">
                <Link to='/login' className='navButton'>Login</Link>
                <Link to='/register' className='navButton'>Sign Up</Link>
            </div>
        </header>

        <body className='wallBody'>
            
        {
            data.map(
                (item, index) => {
                    return <Post key={index} item={item}/>
                }
            )
        }
        </body>
    </div>
    )
}

export default Wall