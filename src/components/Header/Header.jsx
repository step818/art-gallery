import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My Art Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-sm text-gray-700 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="text-sm text-gray-700 hover:underline"
              >
                Admin Login
              </Link>
            </li>
            <li>
              {/* Make this a protected route. Only visible if authenticated */}
              <Link
                to="/admin"
                className="text-sm text-gray-700 hover:underline"
              >
                Admin Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
