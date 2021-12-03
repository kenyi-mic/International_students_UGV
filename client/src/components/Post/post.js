import React from "react";
import moment from "moment";

function Post({ post }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-grsy-400">
        {post.creator}
      </p>
      <img src={post.image} width={200} height={200} className="w-100 m-auto" />
      <h4 className="my-3">{post.title}</h4>
      <p className="text-xs my-2 line-clamp-2">{post.description}</p>
      <div className="mb-5">{moment(post.createdAt).fromNow()}</div>
      <button className="button">Learn More</button>
    </div>
  );
}

export default Post;
