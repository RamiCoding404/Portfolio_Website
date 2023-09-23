import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/rami-ibrahim-2446aa221", //profile linked in
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/RamiCoding404", //profile github
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:ramiibrahim404@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Rami-ibrahim CV.pdf", //hana cv
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black  ">
      <div className="  flex flex-col items-center justify-center p-8  text-white">
        <div className="lg:hidden">
          <ul className="flex flex-row">
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center  px-4 hover:scale-105  duration-300" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white "
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="py-6 ">CopyRight for Ramiibrahim</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
