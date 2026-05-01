import './SkillsSection.css'
import './shared.css'
import { motion } from 'framer-motion';

export function SkillsSection() {
  const skillIcons = ["html.png", "css.png", "java-script.png", "python (1).png", "kotlin.png",
    "atom.png", "c-.png", "letter-c.png", "java.png"];
  return (
    <>
      <div className="headers">SKILLS</div>
      <div className="all-skills">
        {skillIcons.map((icon, i) => (
          <motion.img
            key={i}
            src={`/images/${icon}`}
            className="skill icons"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.05 }}
            whileHover={{
              rotate: 5,
              scale: 1.2,
              filter: "drop-shadow(0px 0px 8px #1cb8c6)"
            }}
          />
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