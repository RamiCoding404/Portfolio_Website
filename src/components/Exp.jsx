import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import php from "../assets/php.png";
import nodejs from "../assets/node.png";
import laravel from "../assets/laravel.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import boostrap from "../assets/bootsrap.png";
import mysql from "../assets/mysql.png";
import TypeScript from "../assets/typescript.png";

const Exp = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: TypeScript,
      title: "TS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: boostrap,
      title: "Bootstrap",
      style: "shadow-indigo-500",
    },
    {
      id: 6,
      src: react,
      title: "REACT",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: php,
      title: "PHP",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-green-500",
    },

    {
      id: 12,
      src: github,
      title: "github",
      style: "shadow-gray-200",
    },
  ];
  return (
    <div
      name="experience"
      className=" rotate-portrait w-full bg-gradient-to-b from-gray-800 to-black  "
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 ">these are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;
