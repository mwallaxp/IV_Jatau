import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

const Products = () => {
  const features = [
    "Aesthetic appeal",
    "Easy and quick installation",
    "Long life due to good surface coating"
  ];

  const finishes = [
    "Polyester powder coated",
    "Dual coated (Epoxy and polyester powder)",
    "PVC coated"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-600 text-white py-16 mt-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl opacity-90">
            Discover our range of high-quality engineering and construction solutions
          </p>
        </div>
      </div>

      {/* Products Navigation */}
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center text-sm mb-8">
          <span className="text-gray-600">Products</span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-blue-600">Fencing Systems</span>
        </nav>

        {/* Featured Product Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Professional Fencing System</h2>
            
            {/* Main Product Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-gray-700 text-lg mb-8">
                  Our Unico series is an innovative weldmesh/wire mesh fencing system that requires no nuts, bolts, 
                  or clamps for installation. It merely comprises of three components-weldmesh panels, profiled post, 
                  and post cap, its aesthetic appeal makes it an ideal fencing solution for residential complexes, 
                  school perimeters, commercial complexes, parks and gardens, walking pavements, etc.
                </p>

                {/* Finishes Section */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Available Finishes
                  </h3>
                  <div className="space-y-3">
                    {finishes.map((finish, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                        <span className="text-gray-700">{finish}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="https://www.schwartzkristoffel.com/wp-content/uploads/2021/04/fence1.jpg"
                  alt="Fencing System Installation" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://www.schwartzkristoffel.com/wp-content/uploads/2021/04/fence3.jpg"
                  alt="Fencing System Detail" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://www.schwartzkristoffel.com/wp-content/uploads/2021/04/fence2.jpg"
                  alt="Fencing System Application" 
                  className="w-full h-64 object-cover rounded-lg shadow-md md:col-span-2"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                    <Check className="text-blue-600 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex justify-center space-x-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Request a Quote
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors">
                Download Specifications
              </button>
            </div>
          </div>
        </div>

        {/* Other Products Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add more product cards here */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Security Systems</h3>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Construction Materials</h3>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Engineering Solutions</h3>
            <p className="text-gray-600 mb-4">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;