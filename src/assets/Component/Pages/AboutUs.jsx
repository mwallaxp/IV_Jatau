import React from 'react';
import { Building, Users, Wrench, Globe, CheckCircle, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

// Card data with improved descriptions
const cardData = [
  {
    icon: <Building className="w-8 h-8 text-blue-400 mr-4" />,
    title: 'Over View',
    description:
      'I.V JATAU GLOBAL RESOURCES LTD is a fast-growing company established to provide thorough and up-to-date contracting services in borehole construction. With a team that boasts considerable experience, extensive research, and a strong technological background, the company executes projects using an integrated scientific approach.Our professional capability is evident in every step of project execution—from borehole system design and construction to surveying, accounting, and management, as well as installation, commissioning, and maintenance. This commitment to excellence is perhaps why all our projects are executed with the highest level of quality which fully computerized and automated. it was established in the year 2015. it set revolutionized the industries of Contruction in Nigeria through the use of sophicated tools and best technology available ',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400 mr-4" />,
    title: 'Experienced Team',
    description:
      'Our team comprises highly skilled professionals with extensive experience in borehole construction and water resource management. We combine technical expertise with a commitment to excellence to ensure the success of every project. Our experiance include working with the Federal Goverment of Nigeria and exucute various successful projects in the country to both State and local Goverment. Our team is dedicated to delivering high-quality services that meet the needs of our clients. we have accomplish projects to different companies,communities,organizations, goverment Agencies, Ministries and also individual .',
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-400 mr-4" />,
    title: 'Professional Capability',
    description:
      'From system design to installation, commissioning, and management, our professional capability ensures seamless project execution. We utilize advanced technologies and best practices to deliver reliable and efficient solutions.',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400 mr-4" />,
    title: 'Global Reach',
    description:
      'We leverage cutting-edge technology and global best practices to provide high-quality borehole construction services worldwide. Our international expertise allows us to tackle complex projects in diverse environments.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-400 mr-4" />,
    title: 'Quality Assurance',
    description:
      'Quality is at the core of everything we do. Our rigorous quality assurance processes ensure that every project meets the highest standards, from initial surveying to final commissioning.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-blue-400 mr-4" />,
    title: 'Results-Driven',
    description:
      'We are committed to delivering measurable results that exceed client expectations. Our focus on efficiency, reliability, and client satisfaction ensures long-term project success.',
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-slate-400 to-slate-500 text-slate-950 py-16 px-4 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Our COMPANY
        </h2>
        <div className="space-y-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-slate-700/50 p-8 rounded-lg shadow-lg hover:scale-102 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex items-center mb-6">
                {card.icon}
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-gray-100 text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;