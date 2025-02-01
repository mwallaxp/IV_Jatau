import React from 'react';
import { Droplet, Drill, Shield, Globe, Heart, CheckCircle } from 'lucide-react';

const Drilling = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image/project.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Borehole Drilling Reimagined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto bg-black bg-opacity-50 p-4 rounded-lg">
            Revolutionizing access to clean water with cutting-edge drilling technology and sustainable practices.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105">
            Explore Solutions
          </button>
        </div>
      </div>

      {/* Why Bore Drilling Matters */}
      <div className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Why Borehole Drilling?
          </h2>
          <p className="text-xl text-gray-300">
            Bore drilling is more than just a technique—it’s a lifeline for communities, industries, and ecosystems. It unlocks clean water, fosters sustainability, and drives growth.
          </p>
        </div>

        {/* Benefits Section - Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Droplet,
              title: "Clean Water Access",
              description: "Reliable, safe water for drinking, agriculture, and industry.",
              color: "from-blue-400 to-teal-400"
            },
            {
              icon: Drill,
              title: "Sustainable Drilling",
              description: "Eco-friendly techniques to protect groundwater reserves.",
              color: "from-purple-400 to-pink-400"
            },
            {
              icon: Shield,
              title: "Risk Reduction",
              description: "Minimize contamination and ensure water security.",
              color: "from-yellow-400 to-orange-400"
            },
            {
              icon: Globe,
              title: "Environmental Care",
              description: "Preserve ecosystems while meeting water needs.",
              color: "from-green-400 to-cyan-400"
            },
            {
              icon: Heart,
              title: "Community Impact",
              description: "Improve health, education, and livelihoods.",
              color: "from-red-400 to-pink-400"
            },
            {
              icon: CheckCircle,
              title: "Proven Expertise",
              description: "Decades of experience delivering results.",
              color: "from-indigo-400 to-blue-400"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${item.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image/project2.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Join the Water Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to bring sustainable bore drilling and clean water solutions to your community or project. Together, we can create a brighter, healthier future.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drilling;