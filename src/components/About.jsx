import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-md font-bold ">
          Front-End Expertise: On the front-end, I'm proficient in the latest
          web technologies such as HTML5, CSS3, JavaScript, and modern
          JavaScript libraries and frameworks like React. I prioritize
          responsive design and exceptional user experiences, ensuring that the
          applications I build are accessible and visually engaging.
        </p>
        <br />

        <p className="text-md font-bold  my-20 ">
          Back-End Expertise : In the realm of back-end development, I have
          honed my skills primarily using the Laravel PHP framework, renowned
          for its elegance and versatility. With a deep understanding of
          Laravel's architecture and features
        </p>
      </div>
    </div>
  );
};

export default About;
