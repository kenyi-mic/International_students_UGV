import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";

function Form() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    description: "",
    image: "",
  });
  const clear = (e) => {
    setPostData({
      creator: "",
      title: "",
      description: "",
      image: {},
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <div className="container mx-auto">
      <form
        className="bg-gray-400 w-3/5 mx-auto my-10 p-5"
        onSubmit={handleSubmit}
        method="POST"
      >
        <fieldset>
          <legend className="text-black text-xl text-center font-bold font-font-head">
            Add new post
          </legend>
          <legend className="font-font-head">Creator:</legend>
          <input
            className="outline-none bg-gray-500 w-full  "
            type="text"
            name="creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <br />
          <legend className="font-font-head">Title:</legend>
          <input
            className="outline-none bg-gray-500 w-full "
            type="text"
            name="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <br />
          <legend className="font-font-head">Description</legend>
          <textarea
            className="outline-none bg-gray-500 w-full h-2/4  "
            type="text"
            name="description"
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </fieldset>
        <div className="flex justify-space-around md:space-x-10 ">
          <input
            className=" text-gray-800 bg-pink-800 hover:bg-red-500 font-font-head p-2 my-2 "
            type="submit"
            value="Submit"
          />
          <input
            className=" cursor-pointer text-gray-800 bg-green-800 hover:bg-yellow-500  font-font-head p-2 my-2 "
            type="button"
            onClick={clear}
            value="Clear"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
