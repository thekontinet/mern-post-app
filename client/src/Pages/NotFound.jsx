import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex justify-center items-center h-screen bg-red-500 text-white absolute right-0 bottom-0 left-0 top-0'>
        <div>
            <h1 className='text-4xl text-center font-bold'>Not Found</h1>
            <p className='text-sm'>The page you are trying to access was not found</p>
            <Link className='p-2 bg-white text-red-500 block rounded text-center my-3 font-bold' to='/'>Go Back Home</Link>
        </div>
    </div>
  )
}

export default NotFound