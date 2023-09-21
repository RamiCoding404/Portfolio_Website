import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
  });

  return (
    <div
      name="Contact"
      className="rotate-portrait  w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className=" flex flex-col p-6 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bcd870b1-4b50-4f4b-92bf-ed8b32a5cdf0"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your Email"
              className=" my-4 p-2   bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <textarea
              name="massage"
              required
              type="text"
              rows="10"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your massage"
            ></textarea>

            {formik.touched.email && formik.errors.email ? (
              <span className="font-bold py-6 text-lg">
                {formik.errors.email}
              </span>
            ) : null}

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
