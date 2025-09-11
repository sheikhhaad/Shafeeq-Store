"use client"

import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { 
  FaHome, FaInfoCircle, FaProjectDiagram, FaPhone, 
  FaBars, FaTimes, FaSignOutAlt, FaUser, FaCog 
} from "react-icons/fa"

const Sidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome className="text-lg" /> },
    { name: "Users", path: "/users", icon: <FaUser className="text-lg" /> },
    { 
      name: "Products", 
      path: "/products", 
      icon: <FaProjectDiagram className="text-lg" />,
    },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out")
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transition-all hover:scale-105"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        h-screen w-65 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col fixed
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        shadow-2xl
      `}>
      
        
        {/* User profile section */}
        <div className="p-5 border-b border-gray-700 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 flex items-center justify-center">
            <span className="font-bold text-white">JD</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>
        
        {/* Navigation menu */}
        <nav className="flex flex-col p-4 space-y-1 flex-grow overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`w-full flex items-center justify-between gap-3 p-3 rounded-md transition-all duration-200
                      ${location.pathname.startsWith(item.path) && !activeSubmenu
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`${location.pathname.startsWith(item.path) ? "text-white" : "text-blue-400"}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeSubmenu === item.name && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block p-2 pl-4 rounded-md transition-all duration-200 text-sm
                            ${location.pathname === subItem.path
                              ? "bg-blue-800 text-white"
                              : "text-gray-400 hover:bg-gray-700 hover:text-white"
                            }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-md transition-all duration-200
                    ${location.pathname === item.path
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  <span className={`${location.pathname === item.path ? "text-white" : "text-blue-400"}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Footer with logout button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-md text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="font-medium">Logout</span>
          </button>
          
          <div className="text-center text-xs text-gray-500 mt-4">
            © 2023 ModernApp v1.0
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar