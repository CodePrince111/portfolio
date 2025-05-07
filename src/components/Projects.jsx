import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'AI-Powered Payment Reconciliation',
    description:
      'Real-time financial transaction system built with .NET 7, AWS Lambda, and DynamoDB. Processes multi-currency payment flows and fraud detection.',
    image: 'https://plus.unsplash.com/premium_photo-1728735030984-fef628ee1929',
    tags: ['.NET 7', 'AWS', 'Lambda', 'DynamoDB'],
  },
  {
    title: 'Healthcare Patient Portal',
    description:
      'HIPAA-compliant web portal for secure patient record access. React frontend, Azure Functions backend, integrated with SQL Server + B2C auth.',
    image: 'https://plus.unsplash.com/premium_photo-1682130171029-49261a5ba80a',
    tags: ['React', 'Azure', 'SQL Server'],
  },
  {
    title: '3D Dev Portfolio',
    description:
      'Interactive developer portfolio using Three.js, React, Tailwind, and Framer Motion. Full SPA with AI-styled animations.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    tags: ['Three.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Enterprise Order Management System',
    description: 'High-scale microservices architecture handling millions of orders daily. Built with .NET Core, Event Sourcing, and Kubernetes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    tags: ['.NET Core', 'Microservices', 'Kubernetes', 'Event Sourcing'],
    github: 'https://github.com/yourusername/order-management',
  },
  {
    title: 'Tax Calculation Engine',
    description: 'Real-time tax computation engine processing complex tax scenarios across multiple jurisdictions using .NET 6 and Redis.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    tags: ['.NET 6', 'Redis', 'REST API', 'Microservices'],
  },
  {
    title: 'Inventory Management Platform',
    description: 'Real-time inventory tracking system with predictive analytics. Uses SignalR for live updates and ML.NET for demand forecasting.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    tags: ['.NET', 'SignalR', 'ML.NET', 'Azure'],
  },
  {
    title: 'E-commerce Analytics Dashboard',
    description: 'Real-time analytics platform built with Blazor WebAssembly and gRPC, processing millions of data points for business insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['Blazor', 'gRPC', 'WebAssembly', 'Charts.js'],
  },
  {
    title: 'Athletic Performance Tracker',
    description: 'Athlete monitoring system using .NET MAUI for cross-platform mobile apps with real-time sensor data integration.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    tags: ['.NET MAUI', 'Xamarin', 'Azure', 'IoT'],
  },
  {
    title: 'Supply Chain Optimization Tool',
    description: 'ML-powered supply chain optimization using Azure Functions and Power BI for predictive analytics and reporting.',
    image: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26',
    tags: ['Azure Functions', 'Power BI', 'ML.NET', 'React'],
  },
  {
    title: 'Financial Reporting System',
    description: 'Enterprise-grade financial reporting platform with .NET Core backend and Angular frontend, supporting multiple accounting standards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['.NET Core', 'Angular', 'SQL Server', 'RabbitMQ'],
  },
  {
    title: 'Cloud-Native POS System',
    description: 'Microservices-based point of sale system using .NET 7, containers, and event-driven architecture for high availability.',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
    tags: ['.NET 7', 'Docker', 'Kafka', 'MongoDB'],
  },
  {
    title: 'Automated Testing Framework',
    description: 'Enterprise testing framework with .NET Core, Selenium, and Azure DevOps for continuous testing and quality assurance.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    tags: ['.NET Core', 'Selenium', 'Azure DevOps', 'xUnit'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* 🧬 AI mesh background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-green-700/5 to-black blur-2xl opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Terminal-style header */}
        <motion.h2
          className="text-3xl md:text-4xl font-mono text-green-400 text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &gt; Fetching projects...
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          Systems. Tools. Engines. Secure cloud-native solutions engineered for scale, clarity, and performance.
        </p>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-green-700 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-green-400/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-green-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-500/10 text-green-300 text-xs font-mono px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-white transition"
                    >
                      <FaGithub className="inline-block mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-white transition"
                    >
                      <FaExternalLinkAlt className="inline-block mr-1" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
