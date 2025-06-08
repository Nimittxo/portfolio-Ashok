import React, { useRef } from 'react';
import { motion } from 'framer-motion';1
import solanImg from './assets/solan.jpg';
import firstImg from './assets/first.jpg';
import tunnelImg from './assets/tunnel.jpg';
import profileImg from './assets/profile.png';


function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

 const projects = [
  {
    title: 'Integrated Road Improvement Project',
    description: 'Performance-based maintenance and improvement of Jhalawar to Ujjain Road connecting Rajasthan border.',
    image: firstImg,
  },
  {
    title: 'Four-Lane Highway Expansion',
    description: 'Upgrading a major national highway stretch to four lanes with modern bridges and culverts.',
    image: solanImg,
  },
  {
    title: 'Tunnel Construction Project',
    description: 'Design and construction of reinforced concrete Tunnel with modern engineering standards.',
    image: tunnelImg,
  },
];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
        <motion.div
          className="flex-1 text-center lg:text-left mb-8 lg:mb-0 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
  className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black tracking-wider mb-4 lg:mb-6 text-[#ffffff] drop-shadow-[0_4px_24px_rgba(0,0,0,0)]"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  ASHOK SHARMA
</motion.h1>

          <motion.p
            className="quote text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Building roads that connect destinies.
          </motion.p>

          <motion.div
            className="button-group flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button 
              onClick={scrollToProjects}
              className="px-6 lg:px-8 py-3 text-sm lg:text-base w-full sm:w-auto"
            >
              View Projects
            </button>
            <button
  onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=ashok.akki27@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Ashok%2C%0AI%20would%20like%20to%20connect%20with%20you%20regarding...'}
  className="px-6 lg:px-8 py-3 text-sm lg:text-base bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black w-full sm:w-auto"
>
  Contact Me
</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="relative">
            <motion.img
              src={profileImg}
              alt="Ashok Sharma"
              className="hero-image w-64 h-80 sm:w-80 sm:h-96 lg:w-[350px] lg:h-[400px] rounded-2xl shadow-2xl border-2 border-gray-700 object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-16 lg:h-16 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Projects Section */}
      <section ref={projectsRef} className="px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-8 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`card project-grid grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-2 lg:order-none`}>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                  {project.description}
                </p>
                <motion.button
                  className="px-4 lg:px-6 py-2 text-sm lg:text-base w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} project-image order-1 lg:order-none`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 lg:h-auto rounded-xl shadow-lg object-cover"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 lg:py-8 border-t border-gray-800 text-gray-400 px-4">
        <p className="text-sm lg:text-base">&copy; 2025 Ashok Sharma. All rights reserved.</p>
        <p className="mt-2 text-xs lg:text-sm">Deputy General Manager - Civil Engineering Projects</p>
      </footer>
    </div>
  );
}

export default App;
