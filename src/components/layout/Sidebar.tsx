import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, FolderIcon, BarChartIcon, PlusIcon } from 'lucide-react';
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-green-50 text-green-600 border-l-4 border-green-500' : 'text-gray-600 hover:bg-gray-100';
  };
  return <aside className="w-64 border-r border-gray-200 bg-white">
      <div className="h-full flex flex-col">
        <nav className="flex-1 py-4">
          <Link to="/" className={`flex items-center px-4 py-2 ${isActive('/')}`}>
            <HomeIcon className="h-5 w-5 mr-3" />
            <span>Dashboard</span>
          </Link>
          <div className="mt-6">
            <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Programs
            </div>
            <Link to="/programs" className={`flex items-center px-4 py-2 ${isActive('/programs')}`}>
              <FolderIcon className="h-5 w-5 mr-3" />
              <span>All Programs</span>
            </Link>
            <Link to="/programs/create" className={`flex items-center px-4 py-2 ${isActive('/programs/create')}`}>
              <PlusIcon className="h-5 w-5 mr-3" />
              <span>Create Program</span>
            </Link>
          </div>
          <div className="mt-6">
            <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Surveys
            </div>
            <Link to="/surveys" className={`flex items-center px-4 py-2 ${isActive('/surveys')}`}>
              <FolderIcon className="h-5 w-5 mr-3" />
              <span>All Surveys</span>
            </Link>
            <Link to="/surveys/create" className={`flex items-center px-4 py-2 ${isActive('/surveys/create')}`}>
              <PlusIcon className="h-5 w-5 mr-3" />
              <span>Create Survey</span>
            </Link>
          </div>
          <div className="mt-6">
            <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Insights
            </div>
            <Link to="/insights" className={`flex items-center px-4 py-2 ${isActive('/insights')}`}>
              <BarChartIcon className="h-5 w-5 mr-3" />
              <span>Analytics</span>
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-100 p-3 rounded-lg">
            <h4 className="font-medium text-sm">Need help?</h4>
            <p className="text-xs text-gray-600 mt-1">
              Get started with program creation
            </p>
            <button className="mt-2 text-sm text-green-600 font-medium">
              View guide
            </button>
          </div>
        </div>
      </div>
    </aside>;
};
export default Sidebar;