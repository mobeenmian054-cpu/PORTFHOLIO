import React from 'react';

export const Education = () => {
  return (
    <section id="Education" className="bg-gray-100 py-20 px-6 md:px-24">

    
      <h2 className="text-center text-5xl font-extrabold text-yellow-500 mb-4 tracking-wide">
        Education & Institutes
      </h2>

      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
        My academic journey from school to university and professional skill development.
      </p>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.1] transition-all duration-300 border border-gray-200  ">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Government High School Salarwala
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I completed my Matric (Biology) in <strong>2021</strong> with 
            <strong> 843/1100 marks</strong> (≈76.6%).  
            This school is located in <strong>faisalabad</strong> under 
            <strong> BISE Faisalabad</strong>.
          </p>
        </div>

        
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.1] transition-all duration-200   border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Alflah College, Jummrah
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I completed my Intermediate (Pre-Engineering) in 
            <strong> 2023</strong> with <strong>60% marks</strong>.  
            This helped build strong analytical and problem-solving skills.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.1] transition-all duration-300 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Tuff University Faisalabad
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Currently pursuing <strong>Software Engineering</strong> (2023-2027).  
            Completed 2 semesters. Learning MERN stack, problem-solving, and 
            modern software development practices.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.1] transition-all duration-300 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Edify College of IT
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Completed a <strong>4-month MERN Stack</strong> course at Edify College 
            (Susah Road).  
            Currently doing internship and working on real projects to improve skills.
          </p>
        </div>

      </div>
    </section>
  );
};
