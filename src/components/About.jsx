import { motion } from 'framer-motion'
import MagneticAvatar from './MagneticAvatar'
import {
    FaAws,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
    FaDatabase,
} from 'react-icons/fa'
import {
    SiDotnet,
    SiKubernetes,
    SiTailwindcss,
} from 'react-icons/si'
import { useEffect, useState } from 'react'

const skills = [
    { icon: <SiDotnet />, label: '.NET Core / C#' },
    { icon: <SiDotnet className="rotate-45" />, label: 'ASP.NET Core' },
    { icon: <FaDatabase />, label: 'SQL Server' },
    { icon: <FaDatabase className="-rotate-45" />, label: 'NoSQL Databases' },
    { icon: <FaAws />, label: 'AWS Cloud' },
    { icon: <FaDocker />, label: 'Docker' },
    { icon: <SiKubernetes />, label: 'Kubernetes' },
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <FaReact className="animate-spin-slow" />, label: 'React.js' },
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
    { icon: <FaGitAlt className="rotate-90" />, label: 'CI/CD' },
    { icon: <SiKubernetes className="rotate-180" />, label: 'Cloud Native' },
    { icon: <FaAws className="scale-x-[-1]" />, label: 'Infrastructure' },
    { icon: <FaDocker className="rotate-45" />, label: 'Containerization' }
]

// 💬 Typing bio text line by line
const bioLines = [
    "I'm a dedicated .NET Full-Stack Engineer with a passion for clean code.",
    'With over 10 years of experience crafting secure, scalable cloud-native systems.',
    'Expert in ASP.NET Core, React, Node.js, and cloud technologies.',
    'Proficient in containerization with Docker and Kubernetes orchestration.',
    'Extensive experience with AWS cloud services and infrastructure.',
    'Strong background in both SQL and NoSQL database architectures.',
    'Committed to delivering high-performance, production-ready solutions.',
    'Advocate for modern development practices using Git and CI/CD.',
]

export default function About() {
    const [displayedLines, setDisplayedLines] = useState([])

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i < bioLines.length) {
                setDisplayedLines((prev) => [...prev, bioLines[i]])
                i++
            } else {
                clearInterval(interval)
            }
        }, 1200)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="about" className="py-20 px-6 bg-gray-900 text-white relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* 🌟 Hologram Profile Image */}
                <MagneticAvatar />

                {/* ✍️ Bio and Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
                        About Me
                    </h2>

                    {/* Typewriter-style intro */}
                    <div className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-6 font-mono">
                        {displayedLines.map((line, idx) => (
                            <div key={idx} className="animate-fadeIn">
                                {line}
                            </div>
                        ))}
                    </div>

                    {/* 🛠️ Tech Stack Grid */}
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 text-green-400 text-3xl mt-4">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                className="relative group cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.15 }}
                            >
                                {skill.icon}
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-white bg-green-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                                    {skill.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
