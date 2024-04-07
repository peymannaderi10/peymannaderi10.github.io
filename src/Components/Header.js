import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkedin, github} = socialMediaUrl; // Correcting variable name for consistency
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between items-center py-2 md:py-10">
      <div className="flex justify-between items-center w-full">
      <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-6 lg:space-x-8">
        <li className="mr-20"></li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-700 dark:text-black dark:hover:text-gray-500" size="2x" />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600 dark:text-black dark:hover:text-gray-500" size="2x" />
            </a>
          </li>
        </ul>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <svg
            className="stroke-dark-heading dark:stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={`${!isOpen ? "hidden" : ""} md:flex justify-between items-center w-full`}>
        {/* Navigation Links */}
        <ul className="text-lg md:text-xl font-semibold dark:text-light-content md:flex items-center md:space-x-8 lg:space-x-10">
          {["/", "/about", "/technologies", "/projects", "/contact"].map((path, index) => (
            <li key={index} className="py-2 md:py-0">
              <NavLink to={path} onClick={toggleClass} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>
        
        
      </nav>
    </header>
  );
}

export default Header;

