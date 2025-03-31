import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-6">Open to remote roles, freelance contracts, and tech collaborations.</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="mailto:srimakutj@gmail.com" className="hover:text-indigo-400"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/jacksrimakut" target="_blank" rel="noreferrer" className="hover:text-indigo-400"><FaLinkedin /></a>
          <a href="https://github.com/CODEMAX666" target="_blank" rel="noreferrer" className="hover:text-indigo-400"><FaGithub /></a>
        </div>
      </motion.div>
    </section>
  )
}
