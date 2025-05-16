import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <img
          src="/black-dress.jpg"
          alt="Manvitha Vutukuri"
          className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white mb-4"
        />
        <h1 className="text-4xl font-extrabold">Manvitha Vutukuri</h1>
        <p className="mt-2 text-lg font-medium">Full Stack .NET Developer | Software Developer </p>
        <div className="mt-4 space-x-4">
          <a href="mailto:manvitha2325@gmail.com" className="underline hover:text-gray-300">manvithav08@gmail.com </a>
          <a href="http://linkedin.com/in/manvitha-vutukuri-8425a2365" target="_blank" className="underline hover:text-gray-300">LinkedIn</a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Experience</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[{
            company: "Tria Health",
            role: "Full Stack .NET Developer Intern",
            period: "2025–Present",
            bullets: [
              "Optimized APIs with ASP.NET Core & C# to reduce latency by 40%.",
              "Built SPAs with Angular 17 and React improving UI responsiveness.",
              "Implemented secure API Management with OAuth 2.0 and JWT via Azure APIM."
            ]
          }, {
            company: "Cognizant",
            role: "Dot Net Developer",
            period: "2021–2022",
            bullets: [
              "Deployed scalable .NET Core APIs with JWT and RBAC authorization.",
              "Created Dockerized microservices deployed via CI/CD on Azure.",
              "Enhanced backend with serverless functions on AWS & Azure Functions."
            ]
          }, {
            company: "Zaggle",
            role: "Dot Net Developer Intern",
            period: "2020–2021",
            bullets: [
              "Developed React UI for reward redemption system and theme customization.",
              "Secured APIs using ASP.NET Identity and integrated payment services.",
              "Utilized Entity Framework and SQL Server for high-performance data access."
            ]
          }].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-indigo-600 hover:bg-indigo-50"
            >
              <h3 className="text-2xl font-bold text-indigo-700">{exp.company}</h3>
              <p className="italic text-sm text-gray-500">{exp.role} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[{
            title: "Healthcare Appointment Scheduling",
            tech: "React, .NET Core, Azure Functions, SQL",
            description: "Built a HIPAA-compliant portal with secure role-based access, real-time scheduling, and Azure integration."
          }, {
            title: "E-Library Management System",
            tech: "Vue.js, Django REST, Heroku",
            description: "Created an OAuth-secured digital library with dynamic cataloging and automated CI/CD deployment."
          }, {
            title: "Hostel Room Allocation System",
            tech: "Spring Boot, PostgreSQL, Azure",
            description: "Designed a secure room booking app with real-time tracking and CI/CD via Jenkins + Azure."
          }].map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-indigo-500 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-1">{proj.title}</h3>
              <p className="text-sm text-gray-500 italic mb-2">Tech Stack: {proj.tech}</p>
              <p className="text-gray-700">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-600">Education</h2>
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl p-6 rounded-lg border-l-4 border-pink-500"
          >
            <h3 className="text-xl font-semibold text-indigo-700">University of Central Missouri</h3>
            <p className="text-gray-600 italic">Masters in Computer Science – Dec 2024</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl p-6 rounded-lg border-l-4 border-pink-500"
          >
            <h3 className="text-xl font-semibold text-indigo-700">SNIST, Hyderabad</h3>
            <p className="text-gray-600 italic">Bachelor of Technology in Computer Science – May 2022</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        &copy; {new Date().getFullYear()} Manvitha Vutukuri. Built with ❤ using React & Tailwind.
      </footer>
    </div>
  );
};

export default Portfolio;