'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: 'https://cleardroptech.blogspot.com', external: true },
    { label: 'Contact', href: '#contact' },
  ];

  if (!isMounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-white">
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ label, href, external }) => (
              <motion.div key={label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href} className="text-white hover:text-blue-400 transition">
                    {label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black/80 backdrop-blur-md rounded-b-md">
          {navItems.map(({ label, href, external }) => (
            <div key={label} onClick={() => setIsOpen(false)}>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-white rounded-md hover:bg-white/10 transition"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className="block px-3 py-2 text-white rounded-md hover:bg-white/10 transition"
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
