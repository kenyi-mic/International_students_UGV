import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post";
import { CircularProgress } from "@material-ui/core";

function Gallery() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return !posts.length ? (
    <CircularProgress className="relative top-2/4 right-2/4 " />
  ) : (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {posts.map((post) => (
        <div key={post._id} className="">
          <Post post={post} />
          <div>{post.image}</div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
