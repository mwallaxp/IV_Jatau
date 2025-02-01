import React from 'react';

const Procurement = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Global Procurement Expertise
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We specialize in sourcing and delivering high-quality geological machines and equipment
          to meet your project needs. Our commitment to excellence ensures reliable and efficient
          procurement solutions.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wide Range of Machines</h3>
            <p className="text-gray-600">
              From drilling rigs to seismic equipment, we source the best geological machines
              for your projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Network</h3>
            <p className="text-gray-600">
              Our extensive network ensures access to top-tier suppliers and manufacturers
              worldwide.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Safe & Timely Delivery</h3>
            <p className="text-gray-600">
              We guarantee safe and on-time delivery, ensuring your projects stay on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Geological Machines Section */}
      <section className="max-w-7xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Geological Machines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Machine 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/image/drilling-rig.jpg" // Replace with your image path
              alt="Drilling Rig"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Drilling Rigs</h3>
            <p className="text-gray-600">
              High-performance drilling rigs for geological exploration and mining.
            </p>
          </div>

          {/* Machine 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/image/seismic-equipment.jpg" // Replace with your image path
              alt="Seismic Equipment"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Seismic Equipment</h3>
            <p className="text-gray-600">
              Advanced seismic equipment for accurate subsurface imaging.
            </p>
          </div>

          {/* Machine 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/image/core-sampling.jpg" // Replace with your image path
              alt="Core Sampling Machines"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Core Sampling Machines</h3>
            <p className="text-gray-600">
              Precision core sampling machines for detailed geological analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Safe Delivery Promise Section */}
      <section className="max-w-7xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Safe Delivery Promise
        </h2>
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
          <p className="text-xl text-gray-700 mb-6">
            We understand the importance of timely and safe delivery for your projects.
            That's why we:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            <li>Use certified and reliable logistics partners.</li>
            <li>Ensure proper packaging and handling of all equipment.</li>
            <li>Provide real-time tracking for all shipments.</li>
            <li>Offer insurance coverage for high-value items.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="max-w-7xl mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Procure Geological Machines?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us today to discuss your requirements and get a customized solution.
        </p>
        <a
          href="/contact" // Replace with your contact page link
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold
          hover:bg-blue-600 transition-all duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Procurement;