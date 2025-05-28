import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="portfolio-root text-gray-800">
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
            <a href="mailto:manvitha2325@gmail.com" className="button-like">
              Email
            </a>
            <a
              href="http://linkedin.com/in/manvitha-vutukuri-8425a2365"
              target="_blank"
              rel="noopener noreferrer"
              className="button-like"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <motion.section className="section-overlay experience-bg" {...sectionAnimation}>
        <h2 className="section-title text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[{ company: "Tria Health", role: "Full Stack .NET Developer Intern", period: "2025–Present", bullets: ["Optimized APIs with ASP.NET Core & C# to reduce latency by 40%.", "Built SPAs with Angular 17 and React improving UI responsiveness.", "Implemented secure API Management with OAuth 2.0 and JWT via Azure APIM."] }, { company: "Cognizant", role: "Dot Net Developer", period: "2021–2022", bullets: ["Deployed scalable .NET Core APIs with JWT and RBAC authorization.", "Created Dockerized microservices deployed via CI/CD on Azure.", "Enhanced backend with serverless functions on AWS & Azure Functions."] }, { company: "Zaggle", role: "Dot Net Developer Intern", period: "2020–2021", bullets: ["Developed React UI for reward redemption system and theme customization.", "Secured APIs using ASP.NET Identity and integrated payment services.", "Utilized Entity Framework and SQL Server for high-performance data access."] }].map((exp, idx) => (
            <motion.div key={idx} className="card-overlay" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
              <h3 className="text-2xl font-bold text-teal-700">{exp.company}</h3>
              <p className="italic text-sm text-gray-600 mb-3">{exp.role} | {exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="section-overlay projects-bg" {...sectionAnimation}>
        <h2 className="section-title text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[{ title: "Healthcare Appointment Scheduling", tech: ["React", ".NET Core", "Azure Functions", "SQL"], description: "Built a HIPAA-compliant portal with secure role-based access, real-time scheduling, and Azure integration." }, { title: "E-Library Management System", tech: ["Vue.js", "Django REST", "Heroku"], description: "Created an OAuth-secured digital library with dynamic cataloging and automated CI/CD deployment." }, { title: "Hostel Room Allocation System", tech: ["Spring Boot", "PostgreSQL", "Azure"], description: "Designed a secure room booking app with real-time tracking and CI/CD via Jenkins + Azure." }].map((proj, idx) => (
            <motion.div key={idx} className="card-overlay" whileHover={{ y: -8, scale: 1.03 }} transition={{ duration: 0.4 }}>
              <h3 className="text-xl font-bold text-teal-800 mb-2">{proj.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section className="section-overlay education-bg text-center" {...sectionAnimation}>
        <h2 className="section-title text-3xl font-bold mb-10">Education</h2>
        <div className="space-y-8">
          <motion.div whileHover={{ scale: 1.02 }} className="card-overlay">
            <h3 className="text-xl font-semibold text-teal-800">University of Central Missouri</h3>
            <p className="text-gray-600 italic">Masters in Computer Science – Dec 2024</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="card-overlay">
            <h3 className="text-xl font-semibold text-teal-800">SNIST, Hyderabad</h3>
            <p className="text-gray-600 italic">Bachelor of Technology in Computer Science – May 2022</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer>&copy; {new Date().getFullYear()} Manvitha Vutukuri. Built with ❤ using React, Tailwind & Framer Motion.</footer>
    </div>
  );
};

export default Portfolio;

    <div className="portfolio-root text-gray-800">
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
              className="button-like"
            >
              Email
            </a>
            <a
              href="http://linkedin.com/in/manvitha-vutukuri-8425a2365"
              target="_blank"
              rel="noopener noreferrer"
              className="button-like"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-overlay max-w-6xl mx-auto">
        <h2 className="section-title text-3xl font-bold text-center mb-10">Experience</h2>
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
              className="card-overlay"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-teal-700">{exp.company}</h3>
              <p className="italic text-sm text-gray-600 mb-3">
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
      <section className="section-overlay max-w-6xl mx-auto">
        <h2 className="section-title text-3xl font-bold text-center mb-10">Projects</h2>
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
              className="card-overlay"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-teal-800 mb-2">{proj.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
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
      <section className="section-overlay max-w-4xl mx-auto text-center">
        <h2 className="section-title text-3xl font-bold mb-10">Education</h2>
        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-overlay"
          >
            <h3 className="text-xl font-semibold text-teal-800">
              University of Central Missouri
            </h3>
            <p className="text-gray-600 italic">
              Masters in Computer Science – Dec 2024
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-overlay"
          >
            <h3 className="text-xl font-semibold text-teal-800">
              SNIST, Hyderabad
            </h3>
            <p className="text-gray-600 italic">
              Bachelor of Technology in Computer Science – May 2022
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Manvitha Vutukuri. Built with ❤ using React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
};

export default Portfolio;
