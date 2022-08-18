import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreatePost({ createPost }) {
  const [post, setPost] = useState({})

  function onChange(event) {
    setPost(prev => ({...prev, [event.target.name]: event.target.value}));
  }

  function onSubmit(e){
    e.preventDefault()
    createPost(post)
  }

  return (
    <div>
      <form action="" className="bg-slate-100 p-4 mx-auto max-w-sm" onSubmit={onSubmit}>
        <h2 className="font-bold text-lg my-2">Create New Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 text-sm rounded mb-2 block w-full"
          onChange={onChange}
        />
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Write Content"
          className="px-2 py-1 text-sm rounded mb-2 block w-full"
          onChange={onChange}
        ></textarea>
        <div className="flex gap-3">
          <button className="bg-indigo-600 rounded px-3 py-1 text-white cursor-pointer">
            Create
          </button>
          <Link to='/' className="bg-red-600 rounded px-3 py-1 text-white">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
