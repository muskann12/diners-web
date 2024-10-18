'use client'

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../componets/Navbar'; // Adjust path based on your project structure
import Footer from '../componets/Footer'; // Adjust path based on your project structure

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className=" p-8 flex-1">
        <h1 className="text-5xl font-thin text-yellow-300 text-center mb-8">ABOUT US</h1>

        {/* About Our Clothing Brand Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-yellow-200 font-serif mb-4  ">About Our Clothing Brand</h2>
          <p className="text-gray-200 leading-relaxed">
            Diners Builders and Developers is an extension of a rich history of success in the fashion industry. Diners, a name synonymous with quality and style, has ventured into the real estate sector, establishing Diners Builders and Developers. Leveraging decades of trust and innovation, we are now dedicated to creating iconic housing societies that embody modern living at its finest.
          </p>
          <p className="text-gray-200 leading-relaxed">
            At Diners Builders and Developers, we bring our passion for craftsmanship and attention to detail into the construction of high-quality homes and communities. Our housing societies are thoughtfully designed to offer a perfect blend of luxury, functionality, and sustainability, ensuring that residents enjoy a harmonious lifestyle with access to top-tier amenities and green spaces.
          </p>
          <p className="text-gray-200 leading-relaxed">
            Just as we have set the standard in the clothing industry, we are committed to leading in real estate development. From visionary planning to precise execution, we deliver homes that reflect sophistication and comfort, while providing a secure investment for the future.
          </p>
          <p className="text-gray-200 leading-relaxed">
            With every project, we uphold our tradition of excellence, guided by a customer-first approach. Our clients can trust that they are getting the best – from the quality of materials to the integrity of design and construction. We don’t just build homes; we create communities where people thrive and dreams are realized.
          </p>
          <p className="text-gray-200 leading-relaxed">
            At Diners Builders and Developers, our mission is simple: to redefine modern living with the same level of trust and excellence that has made Diners a household name in fashion. We build with the future in mind because we believe in serving only the best.
          </p>
        </section>

        {/* Terms and Conditions Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-yellow-200 mb-4 font-serif">Terms and Conditions</h2>
          <p className="text-gray-200 leading-relaxed">
            Installments for the plot must be paid on or before the 10th of each month, and any extra charges, such as utility connections (electricity, gas, water), taxes, and documentation fees, will be the responsibility of the allottee. These additional charges must be paid when demanded by the builder or before the final payment. The base cost of the plot does not include sales tax, government levies, ground rent, or any legal and miscellaneous expenses. The plot allocation remains provisional until all payments, including installments and extra charges, are fully settled.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-5xl font-semibold text-yellow-200 mb-4">WHY CHOOSE US?</h2>
          <ul className="text-gray-200 list-disc list-inside text-xl">
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
              <strong className="text-yellow-500">Unmatched Expertise:</strong> Our extensive experience in construction and design ensures quality results.
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
              <strong className="text-yellow-500">Eco-Friendly Practices:</strong> We incorporate sustainable methods to minimize our environmental footprint.
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
              <strong className="text-yellow-500">Client-Centric Focus:</strong> Your satisfaction is our priority; we tailor our services to meet your needs.
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}>
              <strong className="text-yellow-500">Innovative Designs:</strong> Our cutting-edge designs harmonize aesthetics with functionality for modern lifestyles.
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
              <strong className="text-yellow-500">Community Commitment:</strong> We actively engage in community development, supporting local initiatives and fostering a sense of belonging.
            </motion.li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
