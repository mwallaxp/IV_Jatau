import React from 'react';
import { 
  Building2, 
  Factory, 
  Target, 
  Heart, 
  GraduationCap, 
  Users, 
  TrendingUp,
  LineChart,
  BarChart 
} from 'lucide-react';

const CompanyStats = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Construction Expertise */}
        <div className="group relative bg-gradient-to-br from-blue-600 to-blue-900 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-white">Construction Expertise</h2>
            
            <div className="space-y-6">
              <div className="flex items-center group/item transition-transform hover:translate-x-2">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <Building2 size={28} className="text-white" />
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">+600</span>
                  <p className="text-blue-100">Borehole</p>
                </div>
              </div>
              
              <div className="flex items-center group/item transition-transform hover:translate-x-2">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <Factory size={28} className="text-white" />
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">+20</span>
                  <p className="text-blue-100">Buildings</p>
                </div>
              </div>
              
              <div className="flex items-center group/item transition-transform hover:translate-x-2">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="28" 
                    height="28" 
                    className="text-white"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <path d="M4 19L8 5L16 19L20 5" />
                    <path d="M12 12L12 13" />
                    <path d="M12 5L12 6" />
                    <path d="M12 19L12 20" />
                  </svg>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">+18</span>
                  <p className="text-blue-100">Infrastructure projects</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center text-white">
                <Target size={24} className="mr-2" /> Mission
              </h3>
              <p className="text-blue-100">Transform challenges into tangible opportunities</p>
            </div>
          </div>
        </div>

        {/* Group Products & Services */}
        <div className="group relative bg-gradient-to-br from-teal-400 to-teal-600 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-white">Group Products & Services</h2>
            
            <div className="flex items-center justify-center mb-8">
              <div className="relative group-hover:rotate-12 transition-transform duration-300">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center border-4 border-white/30">
                  <span className="text-6xl font-bold text-white">7</span>
                </div>
                <div className="absolute -bottom-2 left-0 right-0 text-center">
                  <p className="text-sm text-teal-100">
                    Subsidiaries
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <Factory size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">FURNITURE PRODUCTION</h3>
                  <p className="text-sm text-teal-100">Production facilities include furniture production</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Sustainability */}
        <div className="group relative bg-gradient-to-br from-teal-600 to-teal-800 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-white">Safety & Sustainability</h2>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Heart size={32} className="mx-auto mb-2 text-white" />
                <p className="text-sm text-teal-100">Health</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <GraduationCap size={32} className="mx-auto mb-2 text-white" />
                <p className="text-sm text-teal-100">Education</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Users size={32} className="mx-auto mb-2 text-white" />
                <p className="text-sm text-teal-100">Youth Sports</p>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm text-teal-100">
                The foundation of global growth 
              </p>
            </div>
          </div>
        </div>

        {/* Investor Relations */}
        <div className="group relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Investor Relations</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg group/item hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <TrendingUp size={32} className="mr-4 text-blue-600" />
                  <p className="text-sm text-blue-900">Not yet Publicly traded on Nigerian stock exchange</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg group/item hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <BarChart size={32} className="mr-4 text-blue-600" />
                  <div>
                    <span className="text-4xl font-bold text-blue-900">43</span>
                    <p className="text-sm text-blue-700">Group turnover (Million Naira)*</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg group/item hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <Users size={32} className="mr-4 text-blue-600" />
                  <div>
                    <span className="text-4xl font-bold text-blue-900">76</span>
                    <p className="text-sm text-blue-700">employees group-wide*</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs mt-4 text-gray-600 italic">
              *2023 Annual Reports & Consolidated Financial Statements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;