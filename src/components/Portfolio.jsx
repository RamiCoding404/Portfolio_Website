import React from "react";
import gpt3 from "../assets/gpt3.png";
import food from "../assets/food.png";
import ecommerce from "../assets/ec.png";
import vscode from "../assets/vscode.png";
import productbuilder from "../assets/productbulider.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gpt3,
      demoHref: "https://gpt3-project-six.vercel.app/",
      codeHref: "https://github.com/RamiCoding404/gpt3_project",
    },
    {
      id: 2,
      src: food,
      demoHref: "https://food-website-neon.vercel.app/",
      codeHref: "https://github.com/RamiCoding404/Food_Website",
    },
    {
      id: 3,
      src: ecommerce,
      demoHref: "https://ecommerce-website-nine-zeta.vercel.app/",
      codeHref: "https://github.com/RamiCoding404/ecommerce_website",
    },
    {
      id: 4,
      src: vscode,
      demoHref: "https://vscode-app-project.vercel.app/",
      codeHref: "https://github.com/RamiCoding404/vscode-app-project",
    },
    {
      id: 5,
      src: productbuilder,
      demoHref: "https://product-builder-website.vercel.app/",
      codeHref: "https://github.com/RamiCoding404/Product_Builder_Website",
    },
  ];
  const handleDemoClick = (demoHref) => {
    window.open(demoHref, "_blank");
  };

  const handleCodeClick = (codeHref) => {
    window.open(codeHref, "_blank");
  };
  return (
    <div
      name="portfolio"
      className="rotate-portrait   bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoHref, codeHref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex item-center justify-center ">
                <button
                  onClick={() => handleDemoClick(demoHref)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(codeHref)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
