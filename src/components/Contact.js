import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
const Contact = () => {
    return (
      <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-teal-400 mb-4">Contact</h3>
        <p className="text-gray-300 mb-6">
          Want to work together or have a question? You can contack we discuss how to improve each other:
        </p>
        <div className="flex-center text-center gap-6 text-2xl mb-4">
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
      </section>
    );
  };
  
  export default Contact;
  