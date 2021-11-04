import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Header() {
  return (
    <div className="sticky top-0 z-20">
      <p id="up"></p>
      {/*Navigations*/}
      <div className="flex border-b-2 border-gray-300  bg-gray-900 text-white justify-around w-full mx-auto">
        {/*Logo*/}

        <div className="bg-red-800 flex ">
          <Link to="/">
            <img
              src="https://cutt.ly/EE8VJcc"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <ul className="flex items-center justify-space-around  md:space-x-10 sm:space-x-10 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/profile"> Profile</Link>
          </li>
          <li>
            <Link to="/gallery"> Gallery</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
