'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black ">
      <div className="container mx-auto flex justify-between items-center text-xl ">
  {/* Logo on the left */}
  <Link href="/" className="flex items-center">
    <img
      src="/images/logo.jpg" // Replace with your logo path
      alt="Logo"
      className="h-32 w-32 ml-8" // Adjust height and width as needed
    />
    <span className="ml-3 text-gray-300 font-semibold"></span> {/* Add your text here */}
  </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 mr-8 py-8">
  <Link
    href="/"
    className="border-2 border-yellow-300 text-yellow-300 bg-transparent px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-300 hover:text-black font-thin relative group"
  >
    Home
    <span className="absolute inset-0 border-2 border-yellow-300 rounded transition-all duration-300 transform scale-100 group-hover:scale-125 group-hover:shadow-lg"></span>
  </Link>

  <Link
    href="/about"
    className="border-2 border-yellow-300 text-yellow-300 bg-transparent px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-300 hover:text-black font-thin relative group"
  >
    About Us
    <span className="absolute inset-0 border-2 border-yellow-300 rounded transition-all duration-300 transform scale-100 group-hover:scale-125 group-hover:shadow-lg"></span>
  </Link>


  <Link
    href="/projects/Diners-avenue"
    className="border-2 border-yellow-300 text-yellow-300 bg-transparent px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-300 hover:text-black font-thin relative group"
  >
    Projects
    <span className="absolute inset-0 border-2 border-yellow-300 rounded transition-all duration-300 transform scale-100 group-hover:scale-125 group-hover:shadow-lg"></span>
  </Link>

  <Link
    href="/contact"
    className="border-2 border-yellow-300 text-yellow-300 bg-transparent px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-300 hover:text-black font-thin relative group"
  >
    Contact
    <span className="absolute inset-0 border-2 border-yellow-300 rounded transition-all duration-300 transform scale-100 group-hover:scale-125 group-hover:shadow-lg"></span>
  </Link>
</div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-300">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link href="/" className="border  border-yellow-600 text-yellow-600 bg-transparent px-4 py-2  rounded transition-colors duration-300 hover:bg-yellow-600 hover:text-black mb-2">Home</Link> 
          <Link href="/about" className="border border-yellow-600 text-yellow-600 bg-transparent px-4 py-2 rounded transition-colors duration-300 hover:bg-yellow-600 hover:text-black mb-2">About</Link>
          <Link href="/contact" className="border border-yellow-600 text-yellow-600 bg-transparent px-4 py-2 rounded transition-colors duration-300 hover:bg-yellow-600 hover:text-black mb-2">Contact</Link>
          <Link href="/projects/Diners-avenue" className="border border-yellow-600 text-yellow-600 bg-transparent px-4 py-2 rounded transition-colors duration-300 hover:bg-yellow-600 hover:text-black mb-2">Projects</Link>
        </div>
      )}

      {/* Horizontal Line */}
      <div className="border-t-2 border-yellow-300  ml-12 mr-12 rounded-lg shadow-lg"></div>

    </nav>
  );
};

export default Navbar;
