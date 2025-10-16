import React from 'react';
import { Link } from 'react-router-dom';
import { BarChartIcon, FolderIcon, PlusIcon, CheckCircleIcon } from 'lucide-react';
const Dashboard = () => {
  return <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your survey platform</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Programs</h2>
              <p className="text-gray-600 mt-1">Manage your survey programs</p>
            </div>
            <FolderIcon className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl font-bold">3</span>
            <Link to="/programs" className="text-green-600 hover:text-green-700 text-sm font-medium">
              View all
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Surveys</h2>
              <p className="text-gray-600 mt-1">
                Manage your individual surveys
              </p>
            </div>
            <FolderIcon className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl font-bold">12</span>
            <Link to="/surveys" className="text-green-600 hover:text-green-700 text-sm font-medium">
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium">
                New survey "Customer Satisfaction Q4" created
              </p>
              <p className="text-xs text-gray-500 mt-1">Just now</p>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <FolderIcon className="h-4 w-4 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium">
                Employee Experience Program updated
              </p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <BarChartIcon className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium">
                New insights available for Customer Journey Program
              </p>
              <p className="text-xs text-gray-500 mt-1">Yesterday</p>
            </div>
          </div>
          <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <PlusIcon className="h-4 w-4 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium">
                New survey added to Product Feedback Program
              </p>
              <p className="text-xs text-gray-500 mt-1">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2">
            <Link to="/programs/create" className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <PlusIcon className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Create a new program</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Set up a collection of related surveys
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/surveys/create" className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <PlusIcon className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Create a new survey</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Design an individual survey
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Program Insights
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Employee Experience</p>
              <span className="text-sm font-medium text-green-600">+12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
              width: '72%'
            }}></div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-medium">Customer Journey</p>
              <span className="text-sm font-medium text-yellow-600">-3%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{
              width: '58%'
            }}></div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-medium">Product Feedback</p>
              <span className="text-sm font-medium text-green-600">+8%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
              width: '65%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;