import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Links */} 
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
         <li> <Link href="/about" className="hover:text-yellow-300 text-yellow-200">About Us</Link></li> 
         <li> <Link href="/projects/Diners-avenue" className="hover:text-yellow-300 text-yellow-200">Projects</Link></li>
          
         
        </div>
        

        {/* Contact Details */}
        <div className="flex flex-col space-y-2 mb-6 md:mb-0">
          <h3 className="font-bold text-lg text-yellow-200">Contact Us</h3>
          <p className='text-yellow-200'>Email: <a href="mailto:info@gfsbuilders.com" className="hover:text-yellow-300 text-yellow-200">info@gfsbuilders.com</a></p>
          <p className='text-yellow-200'>Phone: <a href="tel:+1234567890" className="hover:text-yellow-300 text-yellow-200">0339-1505000</a></p>
          <p className='text-yellow-200'>Location: Karachi, Pakistan</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-yellow-200">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-yellow-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-yellow-200">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-6 text-yellow-200">
        <p className="text-sm">© {new Date().getFullYear()} Diners Builders and Developers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
