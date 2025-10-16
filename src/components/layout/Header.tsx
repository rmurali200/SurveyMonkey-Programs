import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, HelpCircleIcon, UserCircle } from 'lucide-react';
const Header = () => {
  return <header className="bg-gray-800 text-white py-2 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <img src="/Goldie_Logo_Color_for_digital.png" alt="Goldie Logo" className="h-8 w-auto" />
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-green-300 px-2 py-1">
              Home
            </Link>
            <Link to="/programs" className="hover:text-green-300 px-2 py-1">
              Programs
            </Link>
            <Link to="/surveys" className="hover:text-green-300 px-2 py-1">
              Surveys
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/surveys/create" className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium">
            Create survey
          </Link>
          <button className="text-white hover:text-green-300">
            <BellIcon className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-green-300">
            <HelpCircleIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center justify-center bg-white text-gray-800 rounded-full h-8 w-8">
            <span className="font-semibold text-sm">MR</span>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;