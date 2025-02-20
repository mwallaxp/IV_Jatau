import React, { useState, useEffect } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    businesses: false,
    products: false,
  });

  // Toggle dropdowns
  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen({ businesses: false, products: false });
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  // Close dropdowns when closing mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setDropdownOpen({ businesses: false, products: false });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-600 text-white p-2">
        <div className="flex justify-between items-center text-sm px-4">
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Mon - Fri: 8 AM - 6 PM</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-gradient-to-b from-slate-900/90 to-slate-800/80 text-white">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
            <img src='https://res.cloudinary.com/dt7iegu3q/image/upload/v1739568229/iv-jatau-logo.jpg' width={50} ></img>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-400">I.V JATAU</span>
              <span className=" font-bold text-blue-300">
                GLOBAL RESOURCES LTD
              </span>
              {/* <img src="/image/logo-iv.jpg" width={50} ></img> */}
              
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              <NavLink to="/" className="hover:text-blue-400">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-blue-400">
                About Us
              </NavLink>
              <NavLink to="/services" className="hover:text-blue-400">
                Services
              </NavLink>

              {/* Our Businesses Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={() => toggleDropdown("businesses")}
                  className="flex items-center hover:text-blue-400"
                >
                  Our Businesses <ChevronDown size={16} className="ml-1" />
                </button>
                {dropdownOpen.businesses && (
                  <div className="absolute top-full left-0 min-w-[150px] bg-slate-800 text-white py-2 rounded shadow-lg z-50">
                    <Link
                      to="/businesses/consulting"
                      className="block px-4 py-2 hover:bg-blue-500"
                    >
                      Consulting
                    </Link>
                    <Link
                      to="/businesses/drilling"
                      className="block px-4 py-2 hover:bg-blue-500"
                    >
                      Drilling
                    </Link>
                    <Link
                      to="/businesses/fencing"
                      className="block px-4 py-2 hover:bg-blue-500"
                    >
                      Fencing syst
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex items-center hover:text-blue-400"
                >
                  Ultimate <ChevronDown size={16} className="ml-1" />
                </button>
                {dropdownOpen.products && (
                  <div className="absolute top-full left-0 min-w-[150px] bg-slate-800 text-white py-2 rounded shadow-lg z-50">
                    <Link
                      to="/precurement"
                      className="block px-4 py-2 hover:bg-blue-500"
                    >
                      Precurement
                    </Link>
                    <Link
                      to="/equipment"
                      className="block px-4 py-2 hover:bg-blue-500"
                    >
                      Equipment
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/projects" className="hover:text-blue-400">
                Projects
              </NavLink>
          
              <NavLink to="/terms-and-conditions" className="hover:text-blue-400">
                Terms and Condition
              </NavLink>
              <NavLink
                to="/contact"
                className="bg-blue-400 text-slate-900 px-6 py-2 rounded hover:bg-slate-600"
              >
                CONTACT US
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-slate-700"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "block" : "hidden"} lg:hidden bg-slate-800`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-slate-700 rounded">
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 hover:bg-slate-700 rounded"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 hover:bg-slate-700 rounded"
            >
              Services
            </Link>

            {/* Mobile Dropdown - Our Businesses */}
            <div>
              <button
                onClick={() => toggleDropdown("businesses")}
                className="flex justify-between w-full px-3 py-2 hover:bg-slate-700 rounded"
              >
                Our Businesses <ChevronDown size={16} />
              </button>
              {dropdownOpen.businesses && (
                <div className="pl-4">
                  <Link
                    to="/businesses/consulting"
                    className="block px-3 py-2 hover:bg-blue-500 rounded"
                  >
                    Consulting
                  </Link>
                  <Link
                    to="/businesses/drilling"
                    className="block px-3 py-2 hover:bg-blue-500 rounded"
                  >
                    Drilling
                  </Link>
                  <Link
                    to="/businesses/fencing"
                    className="block px-3 py-2 hover:bg-blue-500 rounded"
                  >
                    Fencing 
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Dropdown - Products */}
            <div>
              <button
                onClick={() => toggleDropdown("products")}
                className="flex justify-between w-full px-3 py-2 hover:bg-slate-700 rounded"
              >
                Ultimate <ChevronDown size={16} />
              </button>
              {dropdownOpen.products && (
                <div className="pl-4">
                  <Link
                    to="/precurement"
                    className="block px-3 py-2 hover:bg-blue-500 rounded"
                  >
                    Preurement
                  </Link>
                  <Link
                    to="/products/equipment"
                    className="block px-3 py-2 hover:bg-blue-500 rounded"
                  >
                    Equipment
                  </Link>
                  <Link
                    to="/products/tools"
                    className="block px-3 py-2 hover:bg-blue-500 rounded"
                  >
                    Equipment
                  </Link>
                 
                  
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className="block px-3 py-2 hover:bg-slate-700 rounded"
            >
              Projects
            </Link>
            {/* "News & Events" Link removed */}
            <Link
              to="/terms-and-conditions"
              className="block px-3 py-2 hover:bg-slate-700 rounded"
            >
              Terms and Condition
            </Link>
            <Link
              to="/contact"
              className="bg-blue-400 text-slate-900 px-6 py-2 rounded hover:bg-slate-600 cursor-pointer"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
