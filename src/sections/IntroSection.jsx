import './IntroSection.css'
import './shared.css'
import { motion } from 'framer-motion';

export function IntroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70, // Slightly softer for that "Apple" drift
        damping: 15
      }
    }
  };

  return (
    <>
      <motion.div
        className="intro"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Changed from animate to whileInView
        viewport={{ once: false, amount: 0.3 }} // Triggers when 30% of section is visible
      >
        <motion.div className="name-intro" variants={itemVariants}>
          Hi! I'm Samyuktha Sriram
        </motion.div>

        <motion.p className="description-intro" variants={itemVariants}>
          Code. Innovate. Secure. Full-stack web developer specializing in React and modern JavaScript.
          Exploring the intersection of AI/ML, DevOps, and cybersecurity.
          I don't just build websites—I craft digital experiences and
          engineer solutions for tomorrow's challenges.
        </motion.p>

        <motion.button
          className="buttons"
          variants={itemVariants}
          whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.button>
      </motion.div>

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