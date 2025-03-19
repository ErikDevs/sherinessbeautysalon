import React from "react";

const Footer = () => {
  return (
    <section className="mt-16 ">
      <h2 className="text-5xl text-center text-black font-semibold font-script my-4">
        We are located at
      </h2>
      <iframe
        title="Google Map of Ruiru, Kenya"
        width="600"
        height="450"
        className="w-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.997337589296!2d36.9500!3d-1.1500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f7c7e94e7db%3A0x9e5bb7e3a3a7b03b!2sRuiru%2C%20Kenya!5e0!3m2!1sen!2s!4v1709647601234"
      ></iframe>
      <div className="flex h-16 text-white bg-violet-600 items-center justify-center text-base">
        <p className="text-sm text-center text-white">
          © 2024 Shariness Beauty Salon. All Rights Reserved. | Follow us on{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
