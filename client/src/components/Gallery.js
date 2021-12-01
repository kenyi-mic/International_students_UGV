import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post";
import { Grid, CircularProgress } from "@material-ui/core";

function Gallery() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {posts
        .slice(0, 4)
        .map(({ title, description, createdAt, image, creator }) => (
          <Post
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
            image={image}
            creator={creator}
          />
        ))}
      {/* <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        /> */}
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Post
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, posts.length)
        .map(({ id, title, description, createdAt, image, creator }) => (
          <Post
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
            image={image}
            creator={creator}
          />
        ))}
    </div>
  );
}

export default Gallery;
