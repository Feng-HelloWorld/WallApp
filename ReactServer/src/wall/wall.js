import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Wall.css'
import Post from './Post'

export const Wall = () => {
  const token = localStorage.getItem('token')
  const isLogged = !!token


  // post message list
  const [data, setData] = useState([
    {
      name: 'System',
      time: 'From the end of the time',
      text: "There's no posts on this wall yet. Would you like to post one?",
    },
  ])

  // new post message
  const [newPost, setNewPost] = useState('')

  useEffect(() => {
    
    getPosts()
  }, [])

  // get data from server
  const getPosts = () => {
    axios.get('posts/').then((response) => {
      setData(response.data.reverse())
    })
  }

  // input message
  const changePost = (e) => {
    setNewPost(e.target.value)
  }

  // logout
  const loggout = () => {
    localStorage.removeItem('token')

    setData([])
    getPosts()
  }

  // post a new message
  const postMessage = () => {
    if (newPost !== '') {
      axios
        .post(
          'posts/',
          { text: newPost },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setNewPost('')
          getPosts()
        })
        .catch((error) => {
          const status = error.response.status
          if (status === 401) {
            window.alert('Session expired. Please login again.')
            loggout()
          }
        })
    }
  }

  return (
    <div className='wall'>
      <header className='header'>
        <div className='headerHolder'>
          {isLogged ? (
            <label className='navButton' onClick={loggout}>
              Log Out
            </label>
          ) : (
            <>
              <Link to='/login' className='navButton'>
                Login
              </Link>
              <Link to='/register' className='navButton'>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </header>

      <div className='wallBody'>
        {isLogged && (
          <>
            <textarea
              className='newPost'
              rows={5}
              onChange={changePost}
              value={newPost}
            />
            <button className='submitPost' onClick={postMessage}>
              Post
            </button>
          </>
        )}

        {data.map((item, index) => {
          return <Post key={index} item={item} />
        })}
      </div>
    </div>
  )
}

export default Wall
