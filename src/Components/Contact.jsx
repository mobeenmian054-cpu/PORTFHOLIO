import React from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "animate.css";

export const Contact = () => {
  return (
   <section
      id="Contact"
      className="min-h-screen bg-black text-gray-100 px-6 md:px-32 py-24"
    >
     
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-wide text-yellow-400">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16">

        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-base md:text-lg text-gray-300">
            I’m always open to discussing new projects, freelance opportunities, or any exciting ideas. 
            Feel free to reach out via the methods below.
          </p>

         
          <div className="space-y-3 text-sm md:text-base text-gray-300">
            <p><span className="font-medium text-gray-100">Phone:</span> 0341-4809132</p>
            <p><span className="font-medium text-gray-100">Email:</span> mianmobeen13200@gmail.com</p>
            <p><span className="font-medium text-gray-100">Location:</span> Pakistan</p>
          </div>

        
          <div className="flex gap-4 mt-4 text-xl md:text-2xl">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">🐦</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">💼</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">📸</a>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 text-gray-900 p-8 md:p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 md:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 md:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 md:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-28 md:h-32"
            ></textarea>
            <button
              type="submit"
              className="px-5 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        

      </div>
      
    </section>
  );
};
