import React from "react";
import me from "../assets/me2.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className=" rotate-portrait h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4    md:flex-row sm:flex-row ">
        <div className="flex flex-col justify-center h-full w-full  ">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4  max-w-md text-md sm:text-sm md:text-lg">
            I graduated from the Faculty of Computer Science at the Arab Academy
            for Science and Technology in 2021. Since then, I have been on a
            software development journey, starting with the development of
            websites. As a developer, I am constantly seeking to improve my
            skills and knowledge, and I have a strong passion for using
            technology to create innovative solutions.
          </p>

          <div className="py-6">
            <Link
              to={"portfolio"}
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={me}
            alt="my profile"
            className="rounded-md mx-auto mt-4 w-2/3  lg:w-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
