import React, {useState} from 'react'
import Posts from './Pages/Posts'
import {Routes, Route, useNavigate} from 'react-router-dom'
import EditPost from './Pages/EditPost'
import PostData from "../postdata"
import CreatePost from './Pages/CreatePost'

function App() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([...PostData])

  function deletePost(id){
      setPosts(prev => prev.filter(post => post.id != id))
  }

  function updatePost(post){
    setPosts(function(prevPosts){
        return prevPosts.map(p => {
            if(p.id == post.id){
                return {
                    ...post
                }
            }
            return p
        })
    })
    alert('Post Updated')
    navigate('/',{replace: true})
  }

  function createPost(post){
    post.id = posts.length + 1
    setPosts(prevPost => [...prevPost, post])
    alert('Post Created')
    navigate('/',{replace: true})
  }


  return (
    <>
    <header className='bg-indigo-500 p-2 px-10'>
      <h1 className='text-xl font-bold text-white'>Logo</h1>
    </header>
    <main className='px-10'>
      <Routes>
        <Route path='/' element={<Posts posts={posts} deletePost={deletePost}/>}/>
        <Route path='/create' element={<CreatePost createPost={createPost}/>}/>
        <Route path='/edit/:id' element={<EditPost posts={posts} updatePost={updatePost}/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App