import React from "react";
import moment from "moment";

function Post({ post }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={post.image} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-700 text-xl mb-2 underline">
          {post.title}
        </div>
        <div className="text-gray-700 font-bold ">
          <p>{post.description}</p>
        </div>
        <ul>
          <li>
            <strong>Created: {moment(post.createdAt).fromNow()}</strong>
          </li>
          <li>
            <strong>By: {post.creator}</strong>
          </li>
        </ul>
        <button className="button bg-blue-800 p-2 my-3 font-bold rounded hover:bg-blue-500">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Post;
