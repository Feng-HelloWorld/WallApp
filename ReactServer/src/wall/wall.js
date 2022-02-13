import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import "./Wall.css"
import Post from './Post'


export const Wall = (props) => {
    // Posts from the database
    const [data, setData] = useState([])

    // const [token, setToken] = useState('')
    // const [logged, setLogged] = useState(false)

    const [newPost, setNewPost] = useState('')

    const changePost = (e) => {
        setNewPost(e.target.value)
        console.log("???")
    }

    const getPosts = () => {
        // Get posts form the server
        axios.get('posts/').then(
            (response) => {
                console.log("Response",response.data);
                const posts = response.data;
                // If we got data, set to useState and refresh
                if(posts.length>0){
                    setData(posts);
                    console.log("Posts pull successfuly",posts);
                }
            }
        )
    }

    useEffect(
        () => {
            setData ( [
                {
                    "name":"System",
                    "time":"From the end of the time",
                    "text":"There's no posts on this wall yet. Would you like to post one?"
                }
            ] )  

            getPosts()
            
            // Check if is logged in
            // console.log("33333")
            // if(localStorage.getItem('token')!=='') {
            //     console.log("22222")
            //     setLogged(true)
            //     console.log("11111")
            // }
        }, []
    )


    const logged = () => {
        return localStorage.getItem('token')!==''
    }

    const loggout = () => {
        localStorage.clear("token")
        // setLogged(false)
    }

    const postButton = () => {
        if(newPost!=='') {
            axios.post(
                "posts/",
                {'text':newPost},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ).then(
                (response) => {
                    // console.log("Post1",newPost)
                    setNewPost('')
                    // console.log("Post2",newPost)
                    getPosts()
                }
            ).catch(
                (error) => {
                    const status = error.response.status
                    if(status===401) {
                        window.alert('Session expired. Please login again.')
                        loggout()
                    }
                }
            )
        }
    }

    return(
    <div className="wall">
        <header className="header">
            <div className = "headerHolder">
                { !logged && <>
                    <Link to='/login' className='navButton' >Login</Link>
                    <Link to='/register' className='navButton' >Sign Up</Link></>
                }
                { logged &&
                <label className='navButton' hidden={!logged} onClick={loggout}>Log Out</label>}
            </div>
        </header>

        <div className='wallBody'>
            {logged && <>
        
                <textarea className='newPost' rows={5} onChange={changePost} value={newPost} />
                <button className='submitPost' onClick={postButton}>Post</button>
            
            </>}

        {
            data.map(
                (item, index) => {
                    return <Post key={index} item={item}/>
                }
            )
        }
        </div>
    </div>
    )
}

export default Wall