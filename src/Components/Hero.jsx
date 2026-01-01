import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Hero = () => {
  return (  
    
    <section
      id="Hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white text-black"
    >
   
      <div className="lg:w-1/2 w-full text-center lg:text-left mt-10 lg:mt-0">
        
        <p className="text-gray-600">welcome to my world</p>

        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-600">Mobeen Shahid</span>
        </p>

        <p className="text-base sm:text-lg italic text-gray-600">
          I Craft Clean & Interactive Web Experiences — Let's Build Something Amazing Together
        </p>

        <p className="pt-10 text-gray-700 text-base leading-relaxed">
          I’m a passionate MERN stack developer who loves building clean and modern web applications. <br />
          Software engineering has improved my problem-solving skills and technical thinking. <br />
          I enjoy learning new tools, creating projects, and turning ideas into real products. <br />
          My goal is to build fast, reliable, and user-friendly digital experiences.
        </p>

        <p className="text-black mt-10"><strong>Email:</strong> mianmobeen13200@gmail.com</p>
        <p className="text-black mb-10"><strong>Phone:</strong> 0341-4809132</p>

        <div className="flex justify-center lg:justify-start gap-6 text-3xl text-black">
          <a href="https://www.facebook.com/" className="border-2 rounded-md p-2 hover:text-blue-500 hover:scale-110 duration-150">
            <FaFacebook />
          </a>

          <a href="https://www.whatsapp.com/" className="border-2 rounded-md p-2 hover:text-green-500 hover:scale-110 duration-150">
            <FaWhatsapp />
          </a>

          <a href="https://www.instagram.com/" className="border-2 rounded-md p-2 hover:text-pink-500 hover:scale-110 duration-150">
            <FaInstagram />
          </a>
        </div>
      </div>
      
 
      <div className="lg:w-1/2 w-full flex justify-center">
        <div className="shadow-2xl rounded-full overflow-hidden bg-gray-50">
          <img
            src="Pic.jpg"
            alt="mypic"
            className="w-48 sm:w-64 lg:w-100 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
