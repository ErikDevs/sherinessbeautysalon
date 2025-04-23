import React from "react";
import { MdSend } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-16 min-h-screen flex items-center overflow-hidden"
    >
      <div className="flex  max-w-7xl w-full mx-auto flex-col-reverse justify-end gap-4 items-center md:flex-row">
        <div className="mb-4 px-3 w-full mx-auto flex justify-center text-secondary">
          <div className="flex gap-2 flex-col md:flex-row items-center">
            <div className="w-full">
              <h1 className="font-script font-semibold text-4xl my-4">
                Ready to glow?
              </h1>
              <h2 className="font-medium">Book your appointment today!</h2>
              <form action="" className="flex flex-col mt-10 gap-y-2">
                <h1 className="font-bold text-4xl my-4">
                  Contact Us via Email
                </h1>
                <input
                  type="text"
                  className="border p-3 rounded-md outline-none"
                  placeholder="Name:"
                />

                <input
                  className="border p-3 rounded-md outline-none"
                  type="text"
                  placeholder="Email:"
                />

                <input
                  type="text"
                  className="border p-3 rounded-md outline-none"
                  placeholder="Subject:"
                />

                <textarea
                  className="rounded-md border p-6 outline-none"
                  name=""
                  placeholder="Message"
                  id=""
                ></textarea>
                <button className="bg-black flex justify-center items-center gap-2 hover:bg-slate-900 px-6 py-3 rounded-lg mt-4 text-primary">
                  Send <MdSend />
                </button>
              </form>
            </div>
            <div className="rounded-md overflow-hidden">
              <img src="/model2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
