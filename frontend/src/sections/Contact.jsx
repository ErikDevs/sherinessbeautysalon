import React from "react";

const Contact = () => {
  return (
    <section className="bg-purple-600 mt-8 rounded-2xl overflow-hidden">
      <div className="flex flex-col-reverse justify-end gap-4 items-center md:flex-row">
        <div className="mx-4 mb-4 md:w-full text-primary">
          <h1 className="font-script text-5xl">Ready to glow?</h1>
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
              className="bg-slate-200 rounded-md p-6 outline-none"
              name=""
              placeholder="Message"
              id=""
            ></textarea>
            <button className="bg-gradient-to-tr from-purple-400 to-purple-500 drop-shadow-md px-6 py-4 rounded-full mt-4 text-primary">
              Send
            </button>
          </form>
        </div>
        <div className="w-full">
          <img src="/model2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
