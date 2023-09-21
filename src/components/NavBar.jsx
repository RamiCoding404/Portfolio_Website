import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  const handleLinkClick = () => {
    setNav(false); // Close the mobile navigation when a link is clicked
  };
  return (
    <div className=" rotate-portrait flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
      <div>
        <h1 className="text-5xl font-signature ml-2">Rami</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col rounded-md justify-center items-center absolute top-5 right-0 w-100 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-8 cursor-pointer capitalize py-2 text-xl "
            >
              <Link to={link} smooth duration={500} onClick={handleLinkClick}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
