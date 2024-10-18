
import React from 'react';
import Navbar from '../../componets/Navbar';
import Footer from '../../componets/Footer';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-center transform transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url('/images/hh.jpeg')` }}
      >
        <div className="bg-black bg-opacity-75 p-11 rounded-lg mt-11">
          <h1 className="text-5xl md:text-7xl text-yellow-200 font-mono">
            "YOUR PLOT, YOUR FUTURE"
          </h1>
          <p className="md:text-3xl text-yellow-200 mt-4 font-thin">
            Secure your dreams with Diners Avenue where vision meets reality.
            Your journey toward a better tomorrow starts here.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 px-8 md:px-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-yellow-200 underline bg-gray-900 py-2 px-3 rounded-full">
          PLAN YOUR FUTURE WITH DINERS AVENUE
        </h2>

        <p className="text-2xl text-center mb-8 text-yellow-200 font-thin">
          At Diners Avenue, we specialize in offering premium residential and commercial plots
          that meet the needs of today’s investors and homeowners. Our projects provide a balance
          of luxury and practicality to ensure your dreams flourish.
        </p>
{/* Cards Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {/* Project 2 - Centered with max width */}
  <div className="col-span-1 md:col-span-2 bg-gray-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl max-w-lg mx-auto">
    <img
      src="/images/project2.jpg"
      alt="120 sq. yds Plots"
      className="w-full object-cover rounded-lg mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-yellow-200">120 sq. yds Residential Plots Available Now!</h3>
    <p className="text-sm text-yellow-200 font-thin">
      Build your dream home on our spacious plots designed for modern families, offering
      space and functionality with nearby amenities.
    </p>
    <div className="flex justify-center mt-4">
      <button className="bg-black text-yellow-400 hover:text-black hover:bg-yellow-300 font-bold py-2 px-4 rounded-lg">
        View Plans
      </button>
    </div>
  </div>

  {/* Project 3 */}
  <div className="bg-gray-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl">
    <img
      src="/images/yard.jpg"
      alt="Invest in Land"
      className="w-full object-cover rounded-lg mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-yellow-200">Invest in Land, Invest in the Future</h3>
    <p className="text-sm text-yellow-200 font-thin">
      Choose from our 120 sq. yds and 1000 sq. yds commercial plots in prime locations.
      Perfect for individuals and businesses seeking future growth.
    </p>
    <div className="flex justify-center mt-4">
      <button className="bg-black text-yellow-400 hover:text-black hover:bg-yellow-300 font-bold py-2 px-4 rounded-lg">
        View Plans
      </button>
    </div>
  </div>

  {/* Project 4 */}
  <div className="bg-gray-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl">
    <img
      src="/images/card4.jpeg"
      alt="Luxury Plots"
      className="w-full object-cover rounded-lg mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-yellow-200">Luxury Plots for Discerning Buyers</h3>
    <p className="text-sm text-yellow-200 font-thin">
      Discover our exclusive range of luxury plots designed for the discerning buyer seeking
      elegance and sophistication.
    </p>
    <div className="flex justify-center mt-4">
      <button className="bg-black text-yellow-400 hover:text-black hover:bg-yellow-300 font-bold py-2 px-4 rounded-lg">
        View Plans
      </button>
    </div>
  </div>
</div>

{/* Location Statement */}
<div className="flex flex-col-reverse md:flex-row mt-8 bg-gray-900 p-4 md:p-6 mx-2 md:mx-16 mb-8 md:mb-16 rounded-lg shadow-md">
  {/* Left Section: Text */}
  <div className="flex-1 md:mr-6">
    <h1 className="text-lg md:text-xl font-semibold mb-2 text-yellow-200">
      Our Location is Prime!
    </h1>
    <p className="text-sm md:text-base leading-snug text-yellow-200">
      Nestled in a vibrant community, Diners Avenue offers unbeatable convenience:
    </p>
    <ul className="list-disc ml-4 mt-2 text-yellow-200 space-y-1 text-sm md:text-base">
      <li>15-minute drive from Shahrah-e-Faisal Airport</li>
      <li>10-minute drive from Model Colony</li>
      <li>10-minute drive from Saudabad</li>
      <li>Close to top-tier schools, hospitals, and shopping centers</li>
      <li>Quick access to major highways connecting to the city center</li>
      <li>Ideal for families and investors seeking a modern lifestyle</li>
    </ul>
  </div>

  {/* Right Section: Video */}
  <div className="flex-1 mt-3 md:mt-0">
    <video 
      className="rounded-lg w-full h-auto md:w-[500px] md:h-[300px] object-cover" 
      autoPlay loop muted preload="auto"
    >
      <source src="/video/location.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


        {/* Video Section */}
        {/* Video Section */}
<div className="mt-12 bg-gray-900 p-4 md:p-8 rounded-lg text-center shadow-md mx-2 md:mx-16 mb-8">
  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-yellow-200">
    Opening Ceremony - 14th August 2024
  </h3>
  <p className="text-sm md:text-lg mb-3 md:mb-4 text-yellow-200 leading-snug">
    Our grand opening event marked the beginning of a new journey at Diners Avenue, 
    where we worked tirelessly to create an incredible community. We are proud of 
    our team and the love that brought this vision to life!
  </p>

  {/* Video Embed */}
  <video
    src="/videos/opening.mp4"
    autoPlay
    loop
    muted
    className="w-full h-64 md:h-96 object-cover rounded-lg"
  ></video>
</div>

      </div>
      

      <Footer />
    </div>
  );
};

export default ProjectsPage;
