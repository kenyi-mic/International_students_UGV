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
    // <div className="relative flex flex-col m-5 bg-white z-30 p-10">
    //   <p className="absolute top-2 right-2 text-xs italic text-grsy-400">
    //     {post.creator}
    //   </p>
    //   <img src={post.image} width={200} height={200} className="w-100 m-auto" />
    //   <h4 className="my-3">{post.title}</h4>
    //   <p className="text-xs my-2 line-clamp-2">{post.description}</p>
    //   <div className="mb-5">{moment(post.createdAt).fromNow()}</div>
    //
    // </div>
  );
}

export default Post;
