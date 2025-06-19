import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center text-gray-400">
        <h4 className="text-teal-400 text-lg mb-4">Let us connect</h4>
        <div className="flex gap-6 text-2xl mb-4">
          <a href="mailto:oundogregory818@gmail.com" className="hover:text-teal-300" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/+254793789339" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/gregory_oundo" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="tel:+254793789339" className="hover:text-teal-300" aria-label="Phone">
            <FaPhone />
          </a>
        </div>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Gregory Oundo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
