import React from "react";

function Profile() {
  //students data
  const students = {
    michael: {
      name: "Michael Henry",
      age: 23,
      img: "https://buff.ly/3vYZvuS",
      course: "Computer Science & Engineering",
      clasOf: "'23",
      country: "South Sudan",
    },
    duol: {
      name: "Duol Jock",
      age: 25,
      img: "https://buff.ly/3BoGNOk",
      course: "Computer Science & Engineering",
      clasOf: "'22",
      country: "South Sudan",
    },
    Baha: {
      name: "Bahaaeldin  Alhout",
      age: 21,
      img: "https://buff.ly/3vUMmCV",
      course: "Computer Science & Engineering",
      clasOf: "'22",
      country: "Palestine",
    },
    emma: {
      name: "Emmanuel Abbe",
      age: 22,
      img: "https://buff.ly/3vW3KqK",
      course: "Computer Science & Engineering",
      clasOf: "'23",
      country: "South Sudan",
    },
    luka: {
      name: "Luka Garang",
      age: 23,
      img: "https://int.ugv.edu.bd/images/student_images/1615219488.",
      course: "Business Adminstration",
      clasOf: "'24",
      country: "South Sudan",
    },
    hosam: {
      name: "Hosam Nafez",
      age: 22,
      img: "https://buff.ly/2Zry7cB",
      course: "Civil Engineering",
      clasOf: "'22",
      country: "Palestine",
    },
    tigo: {
      name: "Lawrence Hillary",
      age: 24,
      img: "https://buff.ly/3blX5wD",
      course: "Business Administration",
      clasOf: "'22",
      country: "South Sudan",
    },
    marline: {
      name: "Marilin Abuka",
      age: 21,
      img: "https://int.ugv.edu.bd/images/student_images/1582113411.jpg",
      course: "Business Administration",
      clasOf: "'24",
      country: "South Sudan",
    },
    ben: {
      name: "Agolbeny Malual",
      age: 24,
      img: "https://buff.ly/3nIpPp4",
      course: "Computer Science & Engineering",
      clasOf: "'22",
      country: "South Sudan",
    },
  };

  return (
    <div className="container mx-auto">
      <div className="w-full h-2/4 md:pb-40 bg-gray-400 border border-gray-500 border-t-0 mb-2">
        <h1 className="max-w-5xl mx-auto text-5xl py-5 text-cyan-500">
          Meet International students
        </h1>
      </div>

      {/*personal profile*/}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className=" max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.michael.img}
          alt=""
        />
        <div className=" ">
          <h2 className=" md:px-8 text-center md:text-left text-gray-900 text-3xl">
            {students.michael.name} {students.michael.clasOf}
          </h2>
          <p className="pt-6 md:px-8  space-y-4 text-bold ">
            Hi, I'm <strong>{students.michael.name}</strong> AKA Kenyi, I'm
            student of {students.michael.course} concerntrating on Wep
            Application &#38; Mobile App development. Extra-Curriculum in
            pragramming club, school football club and AI invention. I'm from{" "}
            {students.michael.country} by nationality, age{" "}
            {students.michael.age}.
          </p>
          <button className=" bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>
      {/*Second student profile */}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.duol.img}
          alt=""
        />
        <div className="">
          <h2 className=" md:px-8 text-center md:text-left space-y-4 text-gray-900 text-3xl">
            {students.duol.name} {students.duol.clasOf}
          </h2>
          <p className="pt-6 md:px-8  space-y-4 text-bold">
            Hi, I'm <strong>{students.duol.name}</strong> from{" "}
            {students.duol.country} currently student in UGV doing{" "}
            {students.duol.course}, concerntrating on building Web Applications
            and intrative 3D applications, Extra-curriculum in pragramming club
            and debate club. I'm {students.duol.age} years old, I love Soccer
            and spending time with friends.
          </p>
          <button className=" bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>

      {/*Third student profile */}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.marline.img}
          alt=""
        />
        <div className="">
          <h2 className=" md:px-8 text-center md:text-left space-y-4 text-gray-900 text-3xl ">
            {students.marline.name} {students.marline.clasOf}
          </h2>
          <p className="pt-6 md:px-8  space-y-4 text-bold">
            Hello, My name <strong>{students.marline.name}</strong> from{" "}
            {students.marline.country} I'm a senior studying{" "}
            {students.marline.course} here in University of global village
            (UGV), I'm concerntrating in Human resource management,
            Extra-curriculum in sales and marketing project and love doing
            accounting at free times. I'm {students.marline.age} years old.
          </p>
          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>

      {/* forth student profile*/}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.hosam.img}
          alt=""
        />
        <div className="">
          <h2 className=" md:p-8 text-center md:text-left space-y-4 text-gray-900 text-3xl">
            {students.hosam.name} {students.hosam.clasOf}
          </h2>
          <p className="pt-6 md:p-8  space-y-4 text-bold">
            Hi, <strong>{students.hosam.name}</strong> Here, I'm studying{" "}
            {students.hosam.course} concerntrating on modern architecturial
            construction. Extra-Curriculum on architecturial design and
            practical site projects. I'm {students.hosam.age} years old from{" "}
            {students.hosam.country} I love playing video games and music at my
            free time.
          </p>
          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>

      {/*fifth student profile*/}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.luka.img}
          alt=""
        />
        <div className="">
          <h2 className=" md:px-8 text-center md:text-left space-y-4 text-gray-900 text-3xl">
            {students.luka.name} {students.luka.clasOf}
          </h2>
          <p className="pt-6 md:px-8  space-y-4 text-bold">
            Hi, I'm <strong>{students.luka.name}</strong> from{" "}
            {students.luka.country}, studying {students.luka.course} in
            university of global village(UGV). Concerntrating on Financial
            Management, Extra-Curriculum on Financial literacy, marketing,
            sales, and banking. I'm {students.luka.age} years old, I love
            reading, Gyming and Soccer.
          </p>
          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>

      {/* sixth student profile*/}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.emma.img}
          alt=""
        />
        <div className="">
          <h2 className=" md:p-8 text-center md:text-left space-y-4 text-gray-900 text-3xl">
            {students.emma.name} {students.emma.clasOf}
          </h2>
          <p className="pt-6 md:p-8  space-y-4 text-bold">
            Hello, My name is <strong>{students.emma.name}</strong> student of{" "}
            {students.emma.course} in university of global village, I'm
            concerntrating on Graphic Design and video animations.
            Extra-curriculum in UGV design club and building automated machines.
            I'm {students.emma.age} years old, I love watching modern movies and
            trying to imitate the tech behind the creativity.
          </p>
          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>
      {/*Baha alhout */}
      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.Baha.img}
          alt=""
        />
        <div className="">
          <h2 className=" md:px-8 text-center md:text-left space-y-4 text-gray-900 text-3xl">
            {students.Baha.name} {students.Baha.clasOf}
          </h2>
          <p className="pt-6 md:px-8  space-y-4 text-bold">
            Hi, My name is <strong>{students.Baha.name}</strong> from{" "}
            {students.Baha.country}, studying {students.Baha.course} in
            university of global village(UGV). Concerntrating on Game
            development with Java. Extra-Curriculum in pragramming contest, and
            virtual game research. I'm {students.Baha.age} years old, I love
            video gaming and Soccer.
          </p>
          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>

      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.tigo.img}
          alt=""
        />
        <div className="">
          <h2 className="md:p-8 text-center md:text-left space-y-4 text-gray-900 text-3xl ">
            {students.tigo.name} {students.tigo.clasOf}
          </h2>
          <p className="pt-6 md:p-8  space-y-4 text-bold">
            Hi, My name is <strong>{students.tigo.name}</strong> from{" "}
            {students.tigo.country}, studying {students.luka.course} in
            university of global village(UGV). Concerntrating on Marketing and
            sales Management, Extra-Curriculum on Banking Management. I'm{" "}
            {students.tigo.age} years old, a good soccer player and love
            spanding time with friends.
          </p>
          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>

      <div className="m-auto md:flex rounded-xl p-8 md:p-0 max-w-5xl md:my-7">
        <img
          className="max-w-xl w-32 h-32 md:w-52 md:h-auto md:rounded-none rounded-full mx-auto"
          src={students.ben.img}
          alt=""
        />
        <div className="">
          <h2 className="md:px-8 text-center md:text-left space-y-4 text-gray-900 text-3xl">
            {students.ben.name} {students.ben.clasOf}
          </h2>
          <p className="pt-6 md:px-8  space-y-4 text-bold">
            Hello, <strong>{students.ben.name}</strong> Here, I'm from{" "}
            {students.ben.country}, studying {students.ben.course} in university
            of global village(UGV). Concerntrating on application development
            and software management. Extra-Curriculum in cooking contast, debate
            club and software testing. I'm {students.ben.age} years old, I'm a
            footballer and can take a hint on basket ball a times "Height
            advantage you know", anway thats it.
          </p>

          <button className="bg-gray-700 text-white hover:bg-gray-900 text-bold p-2 m-5">
            View Student Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
