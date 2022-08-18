import { Link } from "react-router-dom";

export default function Post({ post, deletePost }) {
  return (
    <div className="bg-slate-50 p-2 max-w-sm mb-2">
      <h4 className="font-semibold text-lg">{post.title}</h4>
      <p className="py-2 text-sm">{post.content}</p>
      <div className="flex gap-2 items-center">
        <Link
          className="inline-block px-3 py-1 bg-indigo-700 text-white text-sm rounded"
          to={'edit/' + post.id}>
          Edit
        </Link>
        <button className="inline-block px-3 py-1 bg-red-700 text-white text-sm rounded" onClick={() => deletePost(post.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};