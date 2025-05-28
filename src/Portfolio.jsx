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
    <div className="portfolio-root min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 hero-overlay">
        <motion.img
          src="/black-dress.jpg"
          alt="Manvitha Vutukuri"
          className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-white mb-6 z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-5xl font-extrabold z-10 text-white hero-title-shadow"
          {...fadeInUp}
        >
          Manvitha Vutukuri
        </motion.h1>
        <motion.p
          className="mt-3 text-xl font-medium z-10 text-white hero-title-shadow"
          {...fadeInUp}
        >
          Full Stack .NET Developer | Software Developer
        </motion.p>
        <motion.div className="mt-5 flex space-x-6 z-10" {...fadeInUp}>
          <a
            href="mailto:manvitha2325@gmail.com"
            className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-50 transition"
          >
            Email
          </a>
          <a
            href="http://linkedin.com/in/manvitha-vutukuri-8425a2365"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-50 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section-overlay px-6 py-20 max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              company: "Tria Health",
              role: "Full Stack .NET Developer Intern",
              period: "2025–Present",
              bullets: [
                "Optimized APIs with ASP.NET Core & C# to reduce latency by 40%.",
                "Built SPAs with Angular 17 and React improving UI responsiveness.",
                "Implemented secure API Management with OAuth 2.0 and JWT via Azure APIM.",
              ],
            },
            {
              company: "Cognizant",
              role: "Dot Net Developer",
              period: "2021–2022",
              bullets: [
                "Deployed scalable .NET Core APIs with JWT and RBAC authorization.",
                "Created Dockerized microservices deployed via CI/CD on Azure.",
                "Enhanced backend with serverless functions on AWS & Azure Functions.",
              ],
            },
            {
              company: "Zaggle",
              role: "Dot Net Developer Intern",
              period: "2020–2021",
              bullets: [
                "Developed React UI for reward redemption system and theme customization.",
                "Secured APIs using ASP.NET Identity and integrated payment services.",
                "Utilized Entity Framework and SQL Server for high-performance data access.",
              ],
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="card-overlay p-8 rounded-2xl shadow-2xl border-l-8 border-indigo-600 hover:bg-indigo-50"
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
      <section className="section-overlay px-6 py-20 max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Healthcare Appointment Scheduling",
              tech: ["React", ".NET Core", "Azure Functions", "SQL"],
              description:
                "Built a HIPAA-compliant portal with secure role-based access, real-time scheduling, and Azure integration.",
            },
            {
              title: "E-Library Management System",
              tech: ["Vue.js", "Django REST", "Heroku"],
              description:
                "Created an OAuth-secured digital library with dynamic cataloging and automated CI/CD deployment.",
            },
            {
              title: "Hostel Room Allocation System",
              tech: ["Spring Boot", "PostgreSQL", "Azure"],
              description:
                "Designed a secure room booking app with real-time tracking and CI/CD via Jenkins + Azure.",
            },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", damping: 20 }}
              className="card-overlay rounded-2xl p-6 shadow-xl hover:shadow-2xl border-t-4 border-indigo-500"
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
      <section className="section-overlay px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="section-title">Education</h2>
        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-overlay p-6 shadow-lg rounded-xl border-l-4 border-pink-500"
          >
            <h3 className="text-xl font-semibold text-indigo-700">
              University of Central Missouri
            </h3>
            <p className="text-gray-600 italic">
              Masters in Computer Science – Dec 2024
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-overlay p-6 shadow-lg rounded-xl border-l-4 border-pink-500"
          >
            <h3 className="text-xl font-semibold text-indigo-700">
              SNIST, Hyderabad
            </h3>
            <p className="text-gray-600 italic">
              Bachelor of Technology in Computer Science – May 2022
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-overlay text-center text-sm text-gray-200 py-6 border-t border-gray-700 bg-opacity-70">
        &copy; {new Date().getFullYear()} Manvitha Vutukuri. Built with ❤ using React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
};

export default Portfolio;
