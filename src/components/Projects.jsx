import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Chatbot',
    description: 'Built using NestJS and PostgreSQL. Handles 30% of customer inquiries autonomously.',
    img: 'https://plus.unsplash.com/premium_photo-1682023585957-f191203ab239',
  },
  {
    title: 'Healthcare System',
    description: 'HIPAA-compliant .NET + Angular app for patient data, reducing retrieval times by 20%.',
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d',
  },
  {
    title: 'Fraud Detection Engine',
    description: 'Flask-based real-time fraud detection reducing financial risk by 18%.',
    img: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800 rounded overflow-hidden shadow-md"
          >
            <img src={proj.img} alt={proj.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="text-sm text-gray-300">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
