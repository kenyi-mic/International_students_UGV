import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post";

const Gallery = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <Post />
    </>
  );
};

export default Gallery;
