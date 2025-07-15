'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiPhone,
} from 'react-icons/fi';

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import WhatsAppPop from '@/components/WhatsAppPop';
import React from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Python (Flask)',
    'MySQL',
    'SQLite',
    'HTML, CSS and JavaScript',
  ];

  const projects = [
    {
      title: 'TradeGPT',
      description: 'An AI-powered trading assistant using Next.js and Tailwind CSS.',
      image: '/images/gpt.PNG',
      demo: 'https://github.com/Northmanj/',
      code: 'https://github.com/Northmanj/TradeGPT',
    },
    {
      title: 'Website',
      description: 'My personal portfolio site to showcase skills and work.',
      image: '/images/featured.PNG',
      demo: 'https://pinnacle-gamma.vercel.app/',
      code: 'https://github.com/Northmanj/Clear-Drop-Tech',
    },
    {
      title: 'School Management System',
      description: 'All-in-one system for schools with admin, teacher, and student modules.',
      image: '/images/school.png',
      demo: 'https://github.com/Northmanj/',
      code: 'https://github.com/Northmanj/',
    },
  ];

  return (
    <main className="min-h-screen text-white bg-black">
      <Navbar />
      <WhatsAppPop />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-spin-slow rounded-full blur-3xl opacity-20" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I am <span className="text-blue-400">Gregory John Oundo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer & Designer</p>
          <div className="flex space-x-4 justify-center">
            <motion.a href="https://github.com/Northmanj" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full"><FiGithub size={24} /></motion.a>
            <motion.a href="https://linkedin.com/in/gregory-john-b48b45365" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full"><FiLinkedin size={24} /></motion.a>
            <motion.a href="mailto:johngregory6400@gmail.com" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full"><FiMail size={24} /></motion.a>
            <motion.a href="https://wa.me/254736765273" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full"><FiPhone size={24} /></motion.a>
            <motion.a href="https://instagram.com/gregory_oundo" target="_blank" whileHover={{ scale: 1.1 }} className="p-3 bg-white/10 rounded-full"><FiInstagram size={24} /></motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/90">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">I'm a passionate software developer building elegant and scalable solutions with modern tools.</p>
                <p className="text-lg">From frontend to backend, I craft experiences that deliver real value.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white/5 p-3 rounded-lg">
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/90">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <form id="contactForm" className="space-y-6">
  <div>
    <label className="block mb-2">Name</label>
    <input name="name" required className="w-full p-3 bg-white/10 rounded-lg" />
  </div>
  <div>
    <label className="block mb-2">Email</label>
    <input type="email" name="email" required className="w-full p-3 bg-white/10 rounded-lg" />
  </div>
  <div>
    <label className="block mb-2">Message</label>
    <textarea name="message" rows={4} required className="w-full p-3 bg-white/10 rounded-lg"></textarea>
  </div>

  <motion.button
    whileHover={{ scale: 1.05 }}
    type="submit"
    className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600"
  >
    Send Message
  </motion.button>

  <p id="formMessage" className="text-sm mt-4"></p>
</form>

          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/95 text-center text-gray-400 py-6 border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Gregory John Oundo</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:johngregory6400@gmail.com" className="hover:text-white">Email</a>
          <a href="https://github.com/Northmanj" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/gregory-john-b48b45365" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
