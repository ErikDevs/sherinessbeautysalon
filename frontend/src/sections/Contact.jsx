import React from "react";

const Contact = () => {
  return (
    <section className="bg-accent px-6 md:px-0">
      <div className="flex flex-col-reverse justify-between items-center w-full md:flex-row">
        <div className="mt-4 md:mt-0 w-full ml-0  md:ml-20  md:w-1/2">
          <h1 className="font-script text-6xl">Ready to glow?</h1>
          <h2 className="font-medium">Book your appointment today!</h2>
          <form action="" className="flex flex-col mt-10 gap-y-2">
            <h1 className="font-bold text-4xl">Contact Us via Email</h1>
            <input
              type="text"
              className="bg-purple-200 p-3 rounded-md outline-none"
              placeholder="Name:"
            />

            <input
              className="bg-purple-200 p-3 rounded-md outline-none"
              type="text"
              placeholder="Email:"
            />

            <input
              type="text"
              className="bg-purple-200 p-3 rounded-md outline-none"
              placeholder="Subject:"
            />

            <textarea
              className="bg-slate-200 p-6 outline-none"
              name=""
              placeholder="Message"
              id=""
            ></textarea>
            <button className="bg-gradient-to-tr from-purple-400 to-purple-500 px-6 py-4 rounded-full drop-shadow-lg mt-4 text-primary">
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:max-w-lg">
          <img src="/model2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
