import React from "react";

const Contact = () => {
  return (
    <section className="mt-16 px-6 md:px-10">
      <div className="flex flex-col-reverse justify-center gap-x-6 items-center w-full md:flex-row">
        <div className="mt-4 md:mt-0 w-full md:w-1/2">
          <h1 className="font-script text-6xl">Ready to glow?</h1>
          <h2 className="font-medium">Book your appointment today!</h2>
          <form action="" className="flex flex-col mt-8 gap-y-2">
            <h1 className="font-bold text-xl">Contact Us Via Email</h1>
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Name:"
            />
            <hr className="h-1 border-slate-400" />
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Email:"
            />
            <hr className="h-1 border-slate-400" />
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Subject:"
            />
            <hr className="h-1 border-slate-400" />
            <textarea
              className="bg-slate-200 p-6 outline-none"
              name=""
              placeholder="Message"
              id=""
            ></textarea>
            <button className="bg-gradient-to-tr from-pink-400 to-purple-500 px-6 py-4 rounded-full mt-4 text-primary">
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
