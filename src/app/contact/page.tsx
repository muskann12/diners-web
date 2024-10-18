import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center p-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 ml-5 text-yellow-300 bg-gray-900 rounded py-3 px-3">FOR BOOKING & DETAILS</h2>
        <div className="text-center mb-6">
          <p className="text-lg md:text-xl mt-2 mr-2">
            Email: <a href="mailto:info@gfsbuilders.com" className="text-yellow-300 hover:underline">Mail: info@gfsbuilders.com</a>
          </p>
          <p className="text-lg md:text-xl mr-2">
            Phone: <a href="tel:03391505000" className="text-yellow-300 hover:underline">Phone: 0339-1505000</a>
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 bg-gray-900 rounded py-3 px-3 ml-5 text-yellow-200">FOLLOW US ON</h3>
        <div className="flex space-x-6 ml-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-2 text-yellow-300 bg-gray-900 rounded py-3 px-3 ml-3">Our Location</h1>
        <p className="text-lg md:text-xl mb-2 text-center text-yellow-200">
          Experience the convenience of our location! Nestled in a vibrant community, our site offers easy access to major highways, schools, and shopping centers.
        </p>
        <video
          src="/video/location.mp4" // Update the path to your video file
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover rounded" // Adjust the height here
        ></video>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;