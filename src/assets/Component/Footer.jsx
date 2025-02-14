import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Info</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-blue-400 transition-colors duration-300">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Products</h3>
          <ul className="space-y-2">
            
            <li>
              <a href="/products/megadeck" className="hover:text-blue-400 transition-colors duration-300">
                Megadeck and Duradeck
              </a>
            </li>
            <li>
              <a href="/products/drainage-pipes" className="hover:text-blue-400 transition-colors duration-300">
                Drainage and Water Supply Pipes
              </a>
            </li>
            <li>
              <a href="/products/ducting-pipes" className="hover:text-blue-400 transition-colors duration-300">
                Ducting Pipes and Cable Management
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog" className="hover:text-blue-400 transition-colors duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-blue-400 transition-colors duration-300">
                Careers
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-blue-400 transition-colors duration-300">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1" />
              <p className="text-sm">
                No. 09, Floor 2B Close, Off Julius Nyerere Street, By, FHA, Headquarters <br />
                Asokoro Abuja FCT, Nigeria
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="w-5 h-5 text-blue-400" />
              <a href="tel:+2347061002325" className="text-sm hover:text-blue-400 transition-colors duration-300">
                +2347061002325
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-blue-400" />
              <a href="mailto:jataudollar@gmail.com" className="text-sm hover:text-blue-400 transition-colors duration-300">
                jataudollar@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4 text-white">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} I.V JATAU. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;