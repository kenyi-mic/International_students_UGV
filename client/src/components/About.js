import React from "react";

function About() {
  return (
    <div className="">
      <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 py-5 lg:grid-cols-2">
        {/*photos */}
        <div className="m-4">
          <img
            className="img-responsive rounded-xl h-72"
            src="https://buff.ly/3moluYK"
            alt="UGV international students"
          />
        </div>
        {/*About statement */}
        <div className="m-4">
          <h1 className="text-5xl  border-black overflow-none ">About US</h1>
          <p className="bg-gray-500 bg-opacity-5 my-4 p-2 border  hover:bg-gray-0">
            We are students from four different countries, &#38; with this great
            diversity we thought it's a good Idea to share our life and
            experience experience with others outside there. Though from
            different countries we have much in common, so we embrance anyones
            culture and their origin. We have Students from Sudan, Palestine,
            Combodia and Nigeria. And so far we're doing great and persuing our
            distinct careers, with great hope and wonderful look to the future.
          </p>
          <button
            className="bg-blue-700 hover:bg-yellow-500 text-white text-bold p-2"
            type="button"
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
