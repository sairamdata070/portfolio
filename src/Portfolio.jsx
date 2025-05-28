import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="portfolio-root font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-20 text-center">
        <div className="container mx-auto">
          <motion.img
            src="/black-dress.jpg"
            alt="Manvitha Vutukuri"
            className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-white mb-6 mx-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1 className="text-4xl font-bold mb-2" {...fadeInUp}>
            Manvitha Vutukuri
          </motion.h1>
          <motion.p className="text-lg font-medium mb-4" {...fadeInUp}>
            Full Stack .NET Developer | Software Developer
          </motion.p>
          <motion.div className="mt-5 flex justify-center gap-6" {...fadeInUp}>
            <a
              href="mailto:manvitha2325@gmail.com"
              className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-100 transition"
            >
              Email
            </a>
            <a
              href="http://linkedin.com/in/manvitha-vutukuri-8425a2365"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-100 transition"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[...].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 p-8 rounded-2xl shadow-xl border-l-8 border-indigo-600 hover:bg-indigo-50"
            >
              <h3 className="text-2xl font-bold text-indigo-700">{exp.company}</h3>
              <p className="italic text-sm text-gray-500 mb-3">
                {exp.role} | {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...].map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl border-t-4 border-indigo-500"
            >
              <h3 className="text-xl font-bold text-indigo-800 mb-2">{proj.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 text-xs rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center bg-white">
        <h2 className="text-3xl font-bold mb-10 text-indigo-800">Education</h2>
        <div className="space-y-8">
          {[...].map((edu, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 shadow-lg rounded-xl border-l-4 border-pink-500"
            >
              <h3 className="text-xl font-semibold text-indigo-700">{edu.title}</h3>
              <p className="text-gray-600 italic">{edu.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 border-t bg-gray-100">
        &copy; {new Date().getFullYear()} Manvitha Vutukuri. Built with ❤ using React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
};

export default Portfolio;
