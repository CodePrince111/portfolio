import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl font-bold">Jakrarin Srimakut</h1>
        <p className="mt-4 text-xl text-gray-300">
          Senior Full-Stack Developer | .NET • Angular • AWS • Remote-Ready
        </p>
        <a href="#projects" className="inline-block mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition">
          View My Work
        </a>
      </motion.div>
    </section>
  )
}
