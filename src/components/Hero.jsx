import profileImage from '../assets/image2.jpg';
import {FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className=" min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-10   relative overflow-hidden">
      <motion.div className="container mx-auto md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >


        <h1 className="text-4xl font-bold text-darkblue-600 mt-8">I am Sumit</h1>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mt-6 mb-2">
          Full Stack Developer.
        </h1>

        <p className="mt-8 text-2xl text-black-600">
          I enjoy transforming ideas into full-fledged digital solutions—whether it’s websites, web apps, or mobile app.
        </p>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <a
            herf=""
          >
            <button className="rounded-full border-2 border-teal-500 px-8 py-3 text-base font-semibold text-purple-600 transition-transform duration-200 hover:scale-105 hover:bg-teal-500 hover:text-white">
              Download CV
            </button>
          </a>
          <div className="flex items-center gap-4 text-purple-600">
            <a href="https://www.linkedin.com/in/sumitjaiswal55" className="text-purple-600 hover:text-teal-600"><FaLinkedinIn size={20} /></a>
            <a href="https://github.com/sumitjaiswal55/" className="text-purple-600 hover:text-teal-600"><FaGithub size={20} /></a>
            <a href="https://www.instagram.com/sumit_jaiswal55/" className="text-purple-600 hover:text-teal-600"><FaInstagram size={20} /></a>
          </div>
        </div>
      </motion.div>
      {/* Right Side: Image */}
      <motion.div
        initial={{ rotate: 6 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:w-1/3 mb-8 mt-8 md:mb-0 flex justify-center"
      >
        <motion.img
          src={profileImage}
          alt="profile"
          className="w-full h-full object-cover rounded-4xl shadow-lg "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;