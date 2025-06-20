'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiPhone } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import React from 'react';
import { useState } from 'react';
import Projects from '@/components/Projects';
import WhatsAppPop from '@/components/WhatsAppPop';


export default function Home() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const projects = [
    {
      title: "TradeGPT",
      description: "An AI-powered trading assistant using Next.js and Tailwind CSS.",
      image: "/images/gpt.PNG",
      demo: "https://github.com/Northmanj/",
      code: "https://github.com/Northmanj/TradeGPT",
    },
    {
      title: "Website",
      description: "My personal portfolio site to showcase skills and work.",
      image: "/images/featured.PNG",
      demo: "https://pinnacle-gamma.vercel.app/",
      code: "https://github.com/Northmanj/Clear-Drop-Tech",
    },
    {
      title: "School Management System",
      description: "A modern all in one School Management System that has several intergration for school admins, teachers and students.",
      image: "/images/school.png",
      demo: "https://github.com/Northmanj/",
      code: "https://github.com/Northmanj/",
    },
    
  ];
  
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppPop />
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
        <img
      src="/images/gregory.jpg" // actual logo pedding
      alt="Gregory Image"
      className="h-100 w-100 mb-4"
    />
        <motion.div className="text-center z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I am <span className="text-blue-400">Gregory John Oundo</span></h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer & Designer</p>
          <div className="flex space-x-4 justify-center">
            <motion.a href="https://github.com/Northmanj" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-white/10 rounded-full backdrop-blur-sm"><FiGithub size={24} /></motion.a>
            <motion.a href="https://www.linkedin.com/in/gregory-john-b48b45365" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-white/10 rounded-full backdrop-blur-sm"><FiLinkedin size={24} /></motion.a>
            <motion.a href="mailto:johngregory6400@gmail.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-white/10 rounded-full backdrop-blur-sm"><FiMail size={24} /></motion.a>
             <motion.a
        href="https://wa.me/254736765273"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-white/10 rounded-full backdrop-blur-sm"
      >
        <FiPhone size={24} />
      </motion.a>
       <motion.a
        href="https://www.instagram.com/gregory_oundo"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-white/10 rounded-full backdrop-blur-sm"
      >
        <FiInstagram size={24} />
      </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 bg-black/90">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">I am a passionate developer with expertise in modern web technologies. My journey in software development started with a curiosity for creating beautiful and functional applications.</p>
                <p className="text-lg">I specialize in full-stack development using technologies like React, Next.js, Node.js, and various modern tools and frameworks.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python(Flask)', 'MySQL', 'SQLite', 'HTML, CSS and JavaScript'].map(skill => (
                    <motion.div key={skill} className="bg-white/5 p-3 rounded-lg" whileHover={{ scale: 1.05 }}>{skill}</motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Projects/>
      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-black/80">
      
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} className="bg-white/5 rounded-xl overflow-hidden" whileHover={{ y: -10 }}>
                  <div className="h-48 bg-gray-700 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <a href={project.demo} target="_blank" className="text-blue-400 hover:text-blue-300">Demo</a>
                      <a href={project.code} target="_blank" className="text-blue-400 hover:text-blue-300">Code</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-black/90">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
              <form 
   action="https://formspree.io/f/xyzwazqb" 
  method="POST" 
  className="space-y-6 text-white"
>
  <div>
    <label className="block mb-2">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <div>
    <label className="block mb-2">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <div>
    <label className="block mb-2">Message</label>
    <textarea
      name="message"
      rows={4}
      required
      className="w-full p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    ></textarea>
  </div>

  {/* Optional: redirect after submit */}
  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
  >
    Send Message
  </motion.button>
</form>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/95 text-center text-gray-400 py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
          <p>&copy; {new Date().getFullYear()} Gregory John Oundo</p>
          <div className="flex space-x-4">
            <a href="mailto:johngregory6400@gmail.com" className="hover:text-white">Email</a>
            <a href="https://github.com/Northmanj" target="_blank" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/gregory-john-b48b45365" target="_blank" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
