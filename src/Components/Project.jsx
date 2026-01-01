export default function Project() {
  return (
    <section
      id="Project"
      className="min-h-screen bg-gray-900 px-6 md:px-24 py-24"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-20 text-center tracking-widest drop-shadow-lg">
        My Projects
      </h2>

      {/* ================= PROJECT 1 ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-32">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl group relative">
            <img
              src="/Projectpic.jpg"
              alt="Appointments Booking Website"
              className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] duration-700"></div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-2xl flex flex-col space-y-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Appointments Booking Website
            </h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A fully functional <span className="font-semibold">MERN stack</span>{" "}
              application for managing client appointments efficiently.
            </p>

            <div>
              <h4 className="text-xl font-bold mb-3">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Secure client data collection</li>
                <li>Real-time appointment scheduling</li>
                <li>Visa workflow automation</li>
                <li>Admin dashboard</li>
                <li>Fully responsive UI</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <a
              href="https://frountend-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-gray-700 hover:text-white transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* ================= PROJECT 2 ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl group relative">
            <img
              src="/blog.png"
              alt="Blogging Website"
              className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] duration-700"></div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-2xl flex flex-col space-y-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Blogging Website
            </h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              A modern <span className="font-semibold">Blogging platform</span>{" "}
              where users can register, login, create blogs, and upload images.
            </p>

            <div>
              <h4 className="text-xl font-bold mb-3">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>User authentication</li>
                <li>Blog CRUD operations</li>
                <li>Image upload support</li>
                <li>Protected routes</li>
                <li>Responsive design</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <a
              href="https://blogs-six-wine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-gray-700 hover:text-white transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
