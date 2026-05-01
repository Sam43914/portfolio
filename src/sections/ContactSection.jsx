import './ContactSection.css'
import './shared.css'
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <>
      <div className="contact-container">
        <h2 className="headers">Contact Me!</h2>
        <div>Got ideas to share or just want to talk music and code? Drop your details below and let's connect!</div>
        <form>
          <div className="form-entry">
            <div>Name</div>
            <input className="form-input" placeholder="Name" />
          </div>
          <div className="form-entry">
            <div>Email Address</div>
            <input className="form-input" placeholder="Email" />
          </div>
          <div className="form-entry">
            <div>LinkedIn</div>
            <input className="form-input" placeholder="Linkedin link" />
          </div>
        </form>
        <button type="submit" className="buttons submit-button">Let's Go!</button>
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