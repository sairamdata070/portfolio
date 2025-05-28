import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Portfolio.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Portfolio = () => {
  return (
    <div className="portfolio-root font-sans text-gray-800">
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-content">
          <motion.img
            src="/black-dress.jpg"
            alt="Manvitha Vutukuri"
            className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-white mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1 className="hero-title" {...fadeInUp}>
            Manvitha Vutukuri
          </motion.h1>
          <motion.p className="hero-subtitle" {...fadeInUp}>
            Full Stack .NET Developer | Software Developer
          </motion.p>
          <motion.div className="mt-5 flex justify-center gap-6" {...fadeInUp}>
            <a
              href="mailto:manvitha2325@gmail.com"
              className="contact-btn"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a
              href="http://linkedin.com/in/manvitha-vutukuri-8425a2365"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[.../* experience array same as before */].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="card"
            >
              <h3 className="card-title">{exp.company}</h3>
              <p className="card-subtitle">
                {exp.role} | {exp.period}
              </p>
              <ul className="card-list">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[.../* project array same as before */].map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", damping: 20 }}
              className="card"
            >
              <h3 className="card-title">{proj.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-100">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <h2 className="section-title">Education</h2>
        <div className="space-y-8">
          {[.../* education array same as before */].map((edu, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="card"
            >
              <h3 className="card-title">{edu.institution}</h3>
              <p className="card-subtitle">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Manvitha Vutukuri. Built with ❤ using React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
};

export default Portfolio;
