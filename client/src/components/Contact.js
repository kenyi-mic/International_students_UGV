import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    alert("Submitted successful.");
    e.preventDefault();
  }

  return (
    <div className="container mx-auto">
      <div className=" w-full h-2/3 md:pb-40 bg-gray-400 border border-gray-500 border-t-0 mb-2">
        <h1 className="text-4xl text-center font-bold font-font-head  pt-3 border-b-4 border-black border-opacity-10">
          Contact Information
        </h1>
      </div>
      <div>
        <p className="font-sans text-center text-bold">
          If you have an inequiry you can contact this contact information
          below, like if you're international student who need more
          infomationabout the life of international students in this university.
          And since we are all in ddifferent fields, if you have a project that
          you want any of us to work on. check{" "}
          <a href="http://localhost:3000/profile">Our profiles</a>. Feeel free
          to interact with us at anytime.
        </p>
      </div>
      <div className=" flex box-sizzing-border-box container my-7 divide-x-4 divide-black divide-opacity-25">
        <div className="flex-1">
          <h2 className="text-xl font-semibold font-sans">Map</h2>
          <p>Google Map comes here...</p>
        </div>
        {/* contact form */}
        <form onSubmit={handleSubmit} className="mx-4 flex-1 pl-7">
          <fieldset>
            <legend className="text-black text-xl font-bold font-font-head">
              Contact Us
            </legend>
            <legend className="font-font-head">Name:</legend>
            <input
              className="outline-none bg-gray-500 w-full rounded-lg "
              command
              type="text"
              name={name}
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <legend className="font-font-head">Email:</legend>
            <input
              className="outline-none bg-gray-500 w-full rounded-lg"
              type="text"
              name={email}
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <legend className="font-font-head">Message:</legend>
            <textarea
              className="outline-none bg-gray-500 w-full h-2/4 rounded-lg "
              type="text"
              name={message}
              value={message}
              onChange={handleMessageChange}
            />
          </fieldset>
          <input
            className="text-grey-500 bg-pink-800 font-font-head p-3 my-2 rounded-lg"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
