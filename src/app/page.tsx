'use client';

import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/navigation';
import Navbar from './componets/Navbar'; // Adjust the path if needed
import Image from 'next/image';
import Footer from './componets/Footer'; // Adjust the path if needed

const HomePage = () => {
  const router = useRouter();

  const handleViewProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutUsClick = () => {
    router.push('/about'); // Navigate to the about page
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col md:flex-row p-8">
        {/* Left Section: Greeting with Typewriter Effect */}
        <div className="flex-1 flex flex-col justify-center items-start md:mr-8">
          <h1 className="text-3xl ml-8 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-300">
            DINERS
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-2xl ml-4 md:text-4xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-400">
            <Typewriter
              options={{
                strings: ["BUILDERS AND DEVELOPERS!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* Description */}
          <p className="mt-4 ml-4 max-w-md font-semibold text-sm text-gray-200 leading-relaxed">
            Building on our legacy of excellence established by Diners, a renowned name in the clothing industry, we at Diners Builders and Developers bring forth the same unwavering commitment to quality and innovation in the realm of real estate. Our mission is to thoughtfully create housing societies that blend modern living with timeless elegance, offering state-of-the-art designs and luxurious amenities. Moreover, we prioritize eco-friendly environments that nurture our residents and the community. With a trusted name behind us and a relentless focus on delivering exceptional experiences, we don’t just build houses; we craft vibrant communities where comfort meets class. At Diners Builders and Developers, we strive to serve the best because excellence is not just our goal—it’s in our DNA.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleViewProjectsClick}
              className="bg-gradient-to-r ml-3 from-yellow-300  text-white py-2 px-11 rounded transition hover:opacity-90 font-semibold"
            >
              View projects
            </button>
            <button
              onClick={handleAboutUsClick}
              className="border ml-8 border-yellow-300 text-yellow-300 bg-transparent py-3 px-11 rounded transition duration-300 hover:bg-yellow-300 hover:text-black font-semibold"
            >
              About Us
            </button>
          </div>
        </div>

        {/* Right Section: Video */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
  <video className="rounded-lg w-full h-auto md:w-[600px] md:h-[350px] object-cover" autoPlay loop muted>
    <source src="/video/dd.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
      </main>
      
      <div className="border-t-4 border-yellow-300 ml-16 mr-16 mt-3 rounded-lg shadow-lg"></div>
      
      {/* Why Our Housing Societies Are the Best Section */}
      <div className="mt-16">
        <h2 className="text-5xl font-thin text-yellow-300 mb-4 text-center">Why Our Housing Societies Are the Best?</h2>
        <p className="text-yellow-100 max-w-3xl mx-auto leading-relaxed text-xl font-semibold text-center">
          At Diners Builders and Developers, we understand that a home is more than just a place to live; it's a sanctuary for you and your family. 
          Our housing societies are meticulously designed to offer the best in modern living, ensuring that you enjoy a comfortable and secure environment.
        </p>
        <ul className="mt-8 text-left max-w-3xl mx-auto text-yellow-100 md:ml-72 list-disc list-inside text-xl font-thin py-3 ml-11">          <li><strong className="text-yellow-500">24/7 Security:</strong> Your safety is our top priority. Our communities feature round-the-clock security personnel and surveillance systems.</li>
          <li><strong className="text-yellow-500">Ample Parking:</strong> Our housing societies come with spacious and well-planned parking facilities for residents and guests.</li>
          <li><strong className="text-yellow-500">Reliable Utility Supply:</strong> Enjoy uninterrupted utility services, including electricity, water, and gas connections.</li>
          <li><strong className="text-yellow-500">Green Spaces and Community Areas:</strong> Our developments include lush green parks and recreational areas for families to enjoy.</li>
          <li><strong className="text-yellow-500">Modern Amenities:</strong> State-of-the-art facilities, including gyms, swimming pools, and community centers.</li>
          <li><strong className="text-yellow-500">Proximity to Essentials:</strong> Conveniently located near schools, hospitals, shopping centers, and public transport.</li>
          <li><strong className="text-yellow-500">Commitment to Quality:</strong> We pride ourselves on creating spaces that reflect our residents' aspirations and lifestyles.</li>
        </ul>
        <p className="mt-4 text-yellow-100 font-extralight text-center ml-5">
          Choose Diners Builders and Developers for a home that offers not just shelter but a lifestyle enriched with comfort, security, and community.
        </p>
      </div>
      <div className="border-t-4 border-yellow-300 ml-16 mr-16 mt-6 rounded-lg shadow-lg"></div>
      
     {/* Projects Section */}
<div id="projects" className="mt-16 text-center ml-2">
  <h2 className="text-5xl font-thin text-yellow-200 mb-4">OUR PROJECTS</h2>
  <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0 ml-6">
    {/* Diners Avenue Card */}
    <div
      onClick={() => router.push('/projects/Diners-avenue')} // Navigate to projects page
      className="relative bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-6 md:p-8 lg:p-12 w-11/12 md:w-80 lg:w-[500px] mb-8 md:mb-0"
    >
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image 
          src="/images/d.jpeg" // Replace with your background image path
          alt="Diners Avenue"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <h3 className="text-2xl md:text-4xl font-light mb-2 md:mb-4 relative z-10">Diners Avenue</h3>
      <p className="text-gray-300 relative z-10 mb-4">Experience modern living with exceptional amenities in our flagship project.</p>
      <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black py-2 px-4 rounded transition hover:opacity-90 mt-4">
        View Project
      </button>
    </div>

    {/* Coming Soon Card */}
    <div className="relative bg-gray-700 text-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12 w-11/12 md:w-80 lg:w-[500px] mb-8 md:mb-0">
      <h3 className="text-2xl md:text-4xl mb-2 relative z-10 font-thin">Coming Soon..</h3>
      <p className="text-gray-300 relative z-10">Stay tuned for our upcoming projects that will redefine luxury living.</p>
    </div>
    
  </div>
</div>

<div className="border-t-4 border-yellow-300 ml-16 mr-16 mt-3 rounded-lg shadow-lg"></div>

<div className="container mx-auto p-6">
  {/* More About Section */}
  <div className="bg-gray-900 text-yellow-200 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 mb-8">
    <h3 className="text-2xl md:text-5xl mb-2 font-thin">Our Services: Your Satisfaction, Our Commitment</h3> <br />
    <p className="text-gray-300 mb-4">
      At Diners, we transform visions into reality—whether it’s a single unit, an expansive structure, or valuable land. Our dedicated team ensures that you can relax while we take care of everything.
    </p>
  </div>

  {/* Our Services Section */}
  <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
    <h3 className="text-2xl md:text-6xl mb-2 font-thin text-yellow-200">Our Services</h3> <br />
    <ul className="list-disc pl-6 text-gray-300">
      <li className="mb-2">Land Development: Crafting beautifully designed residential and commercial spaces.</li>
      <li className="mb-2">Residential & Commercial Spaces: Functional designs that meet your needs.</li>
      <li className="mb-2">Housing Communities: Safe, family-oriented homes with essential amenities.</li>
      <li className="mb-2">Industrial Developments: Tailored commercial spaces for business success.</li>
      <li className="mb-2">Commercial Land Opportunities: Ideal plots for establishing your business presence.</li>
      <li>Amenity Spaces: Community-focused environments built with quality materials.</li>
    </ul>
  </div>
</div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
