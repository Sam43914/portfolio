import './ProjectSection.css'
import './shared.css'
import { motion } from 'framer-motion';


export function ProjectSection() {
  const projects = [
    { id: 1, title: "Sanskrit Platform", img: "/images/sanskrit-website.png", desc: "A digital sanctuary bridging ancient Sanskrit wisdom with modern web technology. Features admin-controlled study materials, quizzes, and announcements for immersive language learning." },

    { id: 2, title: "ProQuant AI", img: "/images/proQuantAI.png", desc: "Intelligent investment analysis powered by neutrosophic algorithms and AI. Scrapes real-time financial data, computes risk factors, and generates personalized portfolio strategies via Gemini API." },

    { id: 3, title: "Safari", img: "/images/safari.png", desc: "Sleek Java-based tourism platform for seamless package booking and tracking. Streamlines the entire travel experience from browsing destinations to processing payments." },
    // ... add more
  ];
  return (
    <>
      <div className="project-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <img src={project.img} alt={project.title} className="image" />
            <div className="description">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="section-divider"
        initial={{ width: "0%" }}
        whileInView={{ width: "90%" }}
        viewport={{ once: false }} // Animates every time you scroll back to it
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1] // Apple-style custom cubic-bezier for smooth expansion
        }}
      />
    </>
  )
}