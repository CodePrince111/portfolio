import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="bg-gray-900 py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg transform transition duration-300 hover:scale-105 grayscale hover:grayscale-0 hover:ring hover:ring-indigo-400 hover:ring-offset-2"
                >
                    <img
                        src="/jakrarin.jpg"
                        alt="Jakrarin Srimakut"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        I'm <strong>Jakrarin Srimakut</strong>, a Senior Full-Stack Developer with 10+ years of experience building secure, scalable software systems.
                        <br /><br />
                        I specialize in .NET, Angular, AWS, Azure, and DevOps. From healthcare to insurance, I’ve led full-stack projects that power mission-critical platforms. Remote-ready, solution-oriented, and always shipping clean, testable code.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
