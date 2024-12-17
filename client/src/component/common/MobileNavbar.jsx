import React, { useState } from 'react'
import { FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoIosAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const MobileNavbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Contact Us', link: '/contact' }
  ]

  const socialIcons = [
    { Icon: FaFacebookF, link: '#' },
    { Icon: FaInstagram, link: '#' },
    { Icon: FaTwitter, link: '#' },
    { Icon: FaLinkedinIn, link: '#' },
    { Icon: FaYoutube, link: '#' }
  ]

  return (
    <div className="lg:hidden">
      {/* Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <Link to="/">
          <img 
            src="/path-to-your-logo.png" 
            alt="Digiency" 
            className="h-8"
          />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-800 focus:outline-none"
        >
          <HiMenuAlt3 size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute right-0 h-full w-[280px] bg-white p-6 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <Link to="/">
              <img 
                src="/path-to-your-logo.png" 
                alt="Digiency" 
                className="h-8"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="text-[15px] font-medium text-gray-900 hover:text-pink-600"
                    onClick={() => !item.hasSubmenu && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasSubmenu && (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="p-1 hover:bg-gray-100 rounded-md"
                    >
                      <IoIosAdd 
                        size={24}
                        className={`transform transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center justify-start space-x-6">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
