import React from 'react';
import { ArrowRight, CheckCircle2, Users2, BarChart2, Target, Brain, Map, Drill, Globe, Shield, TrendingUp, Cpu } from 'lucide-react';

const ConsultingService = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <Icon className="w-12 h-12 text-gray-700 mb-4" />
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Consulting = () => {
  const services = [
    {
      icon: Map,
      title: "Resource Exploration & Optimization",
      description: "Advanced geological assessments to identify and evaluate mineral resources with data-driven strategies."
    },
    {
      icon: Drill,
      title: "Operational Excellence in Mining & Drilling",
      description: "Streamline mining and drilling operations for improved productivity and cost-effectiveness."
    },
    {
      icon: Globe,
      title: "Sustainable Practices & Compliance",
      description: "Develop sustainable mining practices to meet regulatory requirements and community expectations."
    },
    {
      icon: TrendingUp,
      title: "Market Analysis & Strategic Planning",
      description: "Identify market trends and opportunities in the mineral resource sector."
    },
    {
      icon: Shield,
      title: "Risk Management & Mitigation",
      description: "Proactively address geological, operational, and financial risks with robust contingency plans."
    },
    {
      icon: Cpu,
      title: "Technology & Innovation Integration",
      description: "Leverage AI, IoT, and automation to transform exploration, extraction, and processing."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20 mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Your Organization's Full Potential
            </h1>
            <p className="text-xl mb-8">
              Our strategic consulting services are tailored to help businesses in the geological, mining, drilling, and mineral resource industries navigate complex challenges, seize emerging opportunities, and achieve sustainable growth.
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center mx-auto">
              Contact Us Today
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">
            With decades of experience in geology, mining, drilling, and mineral resources, we provide tailored strategies to meet your unique business needs and drive measurable success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ConsultingService key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-150 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Consulting Process</h2>
          <div className="max-w-4xl mx-auto">
            {[
              "Initial Assessment and Discovery",
              "Strategic Planning and Solution Design",
              "Implementation and Change Management",
              "Monitoring and Optimization",
              "Continuous Support and Evolution"
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-6">
                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to unlock the full potential of your organization and lead the way in the geological, mining, drilling, and mineral resource industries. Let’s build a sustainable future together.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;