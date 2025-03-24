import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-purple-500 mt-16 min-h-screen flex items-center overflow-hidden"
    >
      <div className="flex  max-w-7xl w-full mx-auto flex-col-reverse justify-end gap-4 items-center md:flex-row">
        <div className="mx-4 mb-4 px-3 w-full text-primary">
          <h1 className="font-script font-semibold text-5xl">Ready to glow?</h1>
          <h2 className="font-medium">Book your appointment today!</h2>
          <form action="" className="flex flex-col mt-10 gap-y-2">
            <h1 className="font-bold text-4xl my-4">Contact Us via Email</h1>
            <input
              type="text"
              className="bg-purple-100 p-3 rounded-md outline-none"
              placeholder="Name:"
            />

            <input
              className="bg-purple-100 p-3 rounded-md outline-none"
              type="text"
              placeholder="Email:"
            />

            <input
              type="text"
              className="bg-purple-100 p-3 rounded-md outline-none"
              placeholder="Subject:"
            />

            <textarea
              className="bg-slate-100 rounded-md p-6 outline-none"
              name=""
              placeholder="Message"
              id=""
            ></textarea>
            <button className="bg-black hover:bg-transparent hover:border drop-shadow-md px-6 py-4 rounded-full mt-4 text-primary">
              Send
            </button>
          </form>
        </div>
        <div className="w-[32rem] h-[32rem] overflow-hidden rounded-full">
          <img
            src="/model2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
