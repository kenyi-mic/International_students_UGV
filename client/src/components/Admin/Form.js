import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";

function Form() {
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleCreatorChange(e) {
    setCreator(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <form className="flex  bg-gray-400 w-3/5 mx-auto my-10 p-5">
        <fieldset>
          <legend className="text-black text-xl text-center font-bold font-font-head">
            Add new post
          </legend>
          <legend className="font-font-head">Creator:</legend>
          <input
            className="outline-none bg-gray-500 w-full  "
            type="text"
            name={creator}
            value={creator}
            onchange={handleCreatorChange}
          />
          <br />
          <legend className="font-font-head">Title:</legend>
          <input
            className="outline-none bg-gray-500 w-full "
            type="text"
            name={title}
            value={title}
            onchange={handleTitleChange}
          />
          <br />
          <legend className="font-font-head">Description</legend>
          <textarea
            className="outline-none bg-gray-500 w-full h-2/4  "
            type="text"
            name={description}
            value={description}
            onChange={handleDescriptionChange}
          />
          <FileBase
            type="file"
            multiple="false"
            onDone={({ base64 }) => setData({ ...data, image: base64 })}
          />
          <input
            className="block text-grey-500 bg-pink-800 hover:bg-red-500 font-font-head p-2 my-2 "
            type="submit"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
