import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav className="bg-pink-500 text-xl py-4 text-white px-10 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-extrabold text-xl"style={{backgroundColor:"pink"}}>App Logo</h1>
        <ul className="flex space-x-2">
          {Object.entries(links).map(([key, value]) => (
            <li key={key}>
              <Link to={`/${value.toLowerCase()}`} className="hover:text-pink-200 transition-colors duration-200">
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;