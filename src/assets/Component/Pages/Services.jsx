import React from 'react';
import { motion } from 'framer-motion';

// Service data with image placeholders (replace with actual image paths)
const services = [
  {
    title: 'HYDRO SURVEY',
    description:
      'Our hydrogeological surveys utilize cutting-edge technology to identify the most optimal locations for borehole drilling. We ensure accurate data collection and analysis, minimizing risks and maximizing water yield.',
    image: 'https://th.bing.com/th/id/OIP.o_GOK8uQfjKMOIRHzN1kSgHaFj?w=242&h=182&c=7&r=0&o=5&pid=1.7', // Replace with actual image path
  },
  {
    title: 'WATER ANALYSIS',
    description:
      'We provide comprehensive water quality testing to ensure your water is safe for consumption. Our advanced laboratory techniques detect contaminants and provide actionable insights for water treatment.',
    image: 'https://www.tiendamicroscopios.com/c/68-category_default/water-analysis.jpg', // Replace with actual image path
  },
  {
    title: 'WATER TREATMENT',
    description:
      'From filtration to chemical treatment, we offer state-of-the-art solutions to purify water. Our systems are designed to remove impurities, ensuring clean and safe water for domestic and industrial use.',
    image: 'https://th.bing.com/th/id/OIP.b5bOT0KixukHdT-SnbCRMgHaE0?rs=1&pid=ImgDetMain', // Replace with actual image path
  },
  {
    title: 'HEAD WORK UPGRADE',
    description:
      'We specialize in upgrading and maintaining headworks to improve the efficiency of water distribution systems. Our solutions ensure reliable water flow and reduce operational costs.',
    image: '/image/project3.jpg', // Replace with actual image path
  },
  {
    title: 'BOREHOLE SERVICES',
    description:
      'Our professional borehole drilling and installation services are tailored to meet your specific needs. We also provide maintenance to ensure long-term performance and reliability.',
    image: '/image/project.jpg', // Replace with actual image path
  },
  {
    title: 'OVERHEAD TANK TREATMENT',
    description:
      'We clean, maintain, and treat overhead water storage tanks to prevent contamination and ensure the longevity of your water storage systems. Our services guarantee clean and safe water storage.',
    image: '/image/project2.jpg', // Replace with actual image path
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-700/50 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Image Section */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;