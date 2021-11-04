import React from "react";

function Main() {
  return (
    <div className="relative flex flex-col z-30 h-full">
      <div className="bg-home-bg bg-fixed bg-blend-darken bg-cover w-full text-center  p-10">
        <h1 className="text-5xl font-600  text-white">
          UGV International Students Official Site
        </h1>
        <p className="p-3 font-sans align-middle pt-10 pb-10 text-gray-200">
          Welcome to UGV international student site, here we showcase our life
          and exprence in university of global village,
          <br /> our details, semester, courses, and many more.
        </p>
        <button className="bg-blue-700 hover:bg-yellow-500 p-2 text-xl text-white text-bold ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Main;
