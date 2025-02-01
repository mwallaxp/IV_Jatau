import React, { useState } from 'react';
import { Award, Lightbulb, Users, Shield, Briefcase } from 'lucide-react'; // Import icons

const Leadership = () => {
  // State to manage the active leader
  const [activeLeader, setActiveLeader] = useState(null);

  // Leadership data
  const leaders = [
    {
      id: 1,
      name: 'Innocent V. Jatau',
      role: 'CEO',
      description: 'Visionary leader with over 20 years of experience in the industry.',
      icon: <Lightbulb size={24} className="text-blue-500" />, // Icon for CEO
    },
    {
      id: 2,
      name: 'Markus Vincent Gally',
      role: 'CTO',
      description: 'Innovator driving technological advancements and digital transformation.',
      icon: <Award size={24} className="text-purple-500" />, // Icon for CTO
    },
    {
      id: 3,
      name: 'Tizhe Drambi',
      role: 'COO',
      description: 'Operations expert ensuring seamless execution and efficiency.',
      icon: <Briefcase size={24} className="text-green-500" />, // Icon for COO
    },
    {
      id: 4,
      name: 'Lazarus Ahmadu Dams',
      role: 'CFO',
      description: 'Financial strategist with a proven track record of growth and stability.',
      icon: <Shield size={24} className="text-yellow-500" />, // Icon for CFO
    },
    {
      id: 5,
      name: 'Jatau Ismaiala',
      role: 'VP of HR',
      Twitter: 'Ismaila_Jatau_@Twitter.com',
      description: 'People-focused leader fostering a culture of collaboration and innovation.',
      icon: <Users size={24} className="text-red-500" />, // Icon for HR
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen mt-14">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership</h1>
        <p className="text-xl text-gray-600">
          Meet the visionary leaders driving our success and innovation.
        </p>
      </div>

      {/* Leadership Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onMouseEnter={() => setActiveLeader(leader.id)} // Set active leader on hover
            onMouseLeave={() => setActiveLeader(null)} // Reset active leader on mouse leave
          >
            {/* Leader Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gray-100 rounded-full">
                {leader.icon}
              </div>
            </div>

            {/* Leader Name and Role */}
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              {leader.name}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-4">
              {leader.role}
            </p>

            {/* Leader Description (Visible on Hover) */}
            <div
              className={`transition-opacity duration-300 ${
                activeLeader === leader.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-gray-600 text-center">{leader.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;