import React from 'react'
import "animate.css";

import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, 
  FaGitAlt, FaGithub, FaJs, 
} from "react-icons/fa";

import { SiMongodb, SiExpress, SiRedux } from "react-icons/si";

export const Skills = () => {
  return (
    <section 
      id='Skills' 
      className='bg-gray-800 p-14 text-white'
    >
      
    
     

 
      <h2 className="text-5xl font-bold text-center text-yellow-500 animate__animated animate__fadeInDown">
        My Skills
      </h2>
      <h3 className='text-center mb-16 text-yellow-500'>
        What I’m Good At
      </h3>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

       
        <div className="bg-gray-200 text-black p-8 rounded-xl shadow-xl hover:scale-105 hover:bg-black hover:text-white transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaReact /> MERN Stack
          </h3>
          <p className="mb-3 text-lg">Building full-stack responsive web apps.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="flex items-center gap-2"><FaReact /> React & <SiRedux /> Redux</li>
            <li className="flex items-center gap-2"><FaNodeJs /> Node.js</li>
            <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
            <li className="flex items-center gap-2"><SiMongodb /> MongoDB & Mongoose</li>
          </ul>
        </div>
        <div className="bg-gray-200 text-black p-8 rounded-xl shadow-xl hover:scale-105 hover:bg-black hover:text-white transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaHtml5 /> Frontend Development
          </h3>
          <p className="mb-3 text-lg">Expert in creating beautiful user interfaces.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="flex items-center gap-2"><FaHtml5 /> HTML5</li>
            <li className="flex items-center gap-2"><FaCss3Alt /> CSS3</li>
            <li className="flex items-center gap-2"><FaJs /> JavaScript ES6+</li>
            <li className="flex items-center gap-2"><FaReact /> React.js</li>
          </ul>
        </div>

        <div className="bg-gray-200 text-black p-8 rounded-xl shadow-xl hover:scale-105 hover:bg-black hover:text-white transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaNodeJs /> Backend Development
          </h3>
          <p className="mb-3 text-lg">Building scalable server-side applications.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="flex items-center gap-2"><FaNodeJs /> Node.js</li>
            <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
            <li className="flex items-center gap-2"><FaDatabase /> REST APIs</li>
          </ul>
        </div>

        <div className="bg-gray-200 text-black p-8 rounded-xl shadow-xl hover:scale-105 hover:bg-black hover:text-white transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <SiMongodb /> Databases
          </h3>
          <p className="mb-3 text-lg">Storing and managing data efficiently.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
            <li className="flex items-center gap-2"><FaDatabase /> Mongoose</li>
          </ul>
        </div>

        <div className="bg-gray-200 text-black p-8 rounded-xl shadow-xl hover:scale-105 hover:bg-black hover:text-white transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaGitAlt /> Git & GitHub
          </h3>
          <p className="mb-3 text-lg">Managing code, teamwork & repositories.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="flex items-center gap-2"><FaGitAlt /> Git</li>
            <li className="flex items-center gap-2"><FaGithub /> GitHub</li>
          </ul>
        </div>

       
        <div className="bg-gray-200 text-black p-8 rounded-xl shadow-xl hover:scale-105 hover:bg-black hover:text-white transition-all duration-300">
          <h3 className="text-3xl font-bold mb-4">MS Excel</h3>
          <p className="mb-3 text-lg">Professional level data management skills.</p>
          <ul className="list-disc pl-5">
            <li>Formulas & Functions</li>
            <li>Pivot Tables</li>
            <li>Charts & Reports</li>
          </ul>
        </div>

      </div>
    </section>
  );
};
