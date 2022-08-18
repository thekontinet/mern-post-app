import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

function Posts({posts, deletePost}) {
  console.log(posts.reverse());
  return (
    <div>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold my-4'>Blog Posts</h2>
          <Link to='/create' className='py-2 px-3 text-sm font-bold bg-blue-900 text-white rounded-md'>Create</Link>
        </div>
        {posts.map(post => <Post key={post.id} post={post} deletePost={deletePost}/>)}
        {!posts.length && <h1 className='text-lg font-bold text-slate-400'>No Posts Available</h1>}
    </div>
  )
}

export default Posts