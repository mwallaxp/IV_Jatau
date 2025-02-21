import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const project1 = 'https://res.cloudinary.com/dt7iegu3q/image/upload/v1739568322/IMG-20250114-WA0000_kqqpur.jpg'
const project2 = 'https://res.cloudinary.com/dt7iegu3q/image/upload/v1739568378/project2.jpg'
const project3 = 'https://res.cloudinary.com/dt7iegu3q/image/upload/v1739567631/overhead.jpg'
const project4 = 'https://res.cloudinary.com/dt7iegu3q/image/upload/v1740011047/ceo.jpg'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate(); // Initialize useNavigate

  const slides = [
    {
      image: project1,
      title: "Building Tomorrow's Infrastructure",
      subtitle: "Leading the way in construction excellence",
      cta: "View Our Projects",
      link: "/projects", // React Router link
      accent: "from-blue-500/30 to-purple-500/30"
    },
    {
      image: project2,
      title: "Engineering Excellence",
      subtitle: "Innovative solutions for complex challenges",
      cta: "Our Services",
      link: "/services", // React Router link
      accent: "from-emerald-500/30 to-blue-500/30"
    },
    {
      image: project3,
      title: "Global Procurement Expertise",
      subtitle: "Reliable supply chain management",
      cta: "Learn More",
      link: "/procurement", // React Router link
      accent: "from-purple-500/30 to-pink-500/30"
    },
    {
      image: project4,
      title: "Leadership Vision",
      subtitle: "Driving innovation and sustainable growth",
      cta: "Meet Our Team",
      link: "/about/leadership", // React Router link
      accent: "from-amber-500/30 to-red-500/30"
    },
  ];

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleCtaClick = (link) => {
    navigate(link); // Use navigate to handle routing
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-slate-900 mt-10"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-slate-800/20 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      {/* Carousel Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
              ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transform scale-110"
                style={{
                  transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, 
                             ${(mousePosition.y - window.innerHeight / 2) * 0.02}px) scale(1.1)`
                }}
              />
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/40`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-xl relative">
                {/* Decorative Line */}
                <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50" />
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 
                  [text-shadow:0_4px_8px_rgba(0,0,0,0.3)] opacity-0 animate-title"
                  style={{
                    animation: index === currentSlide ? 'titleIn 1s ease forwards' : 'none'
                  }}>
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8 opacity-0 animate-subtitle"
                  style={{
                    animation: index === currentSlide ? 'subtitleIn 1s ease forwards 0.3s' : 'none'
                  }}>
                  {slide.subtitle}
                </p>
                <button 
                  onClick={() => handleCtaClick(slide.link)} // Use handleCtaClick with navigate
                  className="group inline-flex items-center gap-2 bg-blue-400 text-slate-900 px-8 py-3 rounded-full font-semibold 
                    overflow-hidden transition-all duration-300 hover:bg-blue-300 hover:shadow-lg
                    opacity-0 animate-button relative"
                  style={{
                    animation: index === currentSlide ? 'buttonIn 1s ease forwards 0.6s' : 'none'
                  }}
                >
                  <span className="relative z-10">{slide.cta}</span>
                  <ExternalLink size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 
                    transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button
          onClick={prevSlide}
          className="group p-3 rounded-full bg-white/10 hover:bg-blue-400 text-white hover:text-slate-900 
            transition-all duration-300 backdrop-blur-md hover:shadow-lg"
        >
          <ChevronLeft size={24} className="transform group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="group p-3 rounded-full bg-white/10 hover:bg-blue-400 text-white hover:text-slate-900 
            transition-all duration-300 backdrop-blur-md hover:shadow-lg"
        >
          <ChevronRight size={24} className="transform group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-500 
              ${index === currentSlide 
                ? 'w-12 bg-blue-400' 
                : 'bg-white/30 hover:bg-white/50'}`}
            />
            <div className={`absolute inset-0 rounded-full transform scale-150 
              bg-blue-400/30 transition-transform duration-500 
              ${index === currentSlide ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`} 
            />
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes titleIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtitleIn {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes buttonIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .bg-grid-16 {
          background-size: 32px 32px;
          background-image: linear-gradient(to right, rgb(30 41 59 / 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgb(30 41 59 / 0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;