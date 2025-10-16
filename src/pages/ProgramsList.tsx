import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, FilterIcon, PlusIcon, BarChartIcon, UsersIcon, LineChartIcon } from 'lucide-react';
const mockPrograms = [{
  id: '1',
  name: 'Employee Experience Program',
  type: 'HR',
  description: 'Track employee sentiment across the entire lifecycle',
  surveyCount: 4,
  lastUpdated: '2 days ago',
  status: 'Active',
  insights: 12,
  icon: <UsersIcon className="h-10 w-10 text-purple-500" />
}, {
  id: '2',
  name: 'Customer Journey Program',
  type: 'CX',
  description: 'Understand customer experience at each touchpoint',
  surveyCount: 5,
  lastUpdated: '1 week ago',
  status: 'Active',
  insights: 8,
  icon: <LineChartIcon className="h-10 w-10 text-blue-500" />
}, {
  id: '3',
  name: 'Product Feedback Program',
  type: 'Product',
  description: 'Collect user feedback on product features and usability',
  surveyCount: 3,
  lastUpdated: '3 days ago',
  status: 'Active',
  insights: 6,
  icon: <BarChartIcon className="h-10 w-10 text-green-500" />
}];
const ProgramsList = () => {
  return <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Programs</h1>
          <p className="text-gray-600 mt-1">Manage your survey programs</p>
        </div>
        <Link to="/programs/create" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Program
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4">
          <div className="relative flex-grow max-w-md">
            <input type="text" placeholder="Search programs" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                <option>All Types</option>
                <option>HR</option>
                <option>CX</option>
                <option>Product</option>
              </select>
              <FilterIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
              <FilterIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                <option>Last Updated</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
                <option>Most Surveys</option>
              </select>
              <FilterIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {mockPrograms.map(program => <div key={program.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">{program.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link to={`/programs/${program.id}`} className="text-lg font-semibold text-gray-900 hover:text-green-600">
                        {program.name}
                      </Link>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {program.type}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {program.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {program.surveyCount} surveys
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {program.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex space-x-2">
                        <Link to={`/programs/${program.id}`} className="text-sm font-medium text-green-600 hover:text-green-700">
                          Manage
                        </Link>
                        <Link to={`/programs/${program.id}/insights`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                          Insights
                        </Link>
                      </div>
                      <span className="text-xs text-gray-500 mt-2">
                        Updated {program.lastUpdated}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <BarChartIcon className="h-4 w-4 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {program.insights} Insights Generated
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            View insights dashboard
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <PlusIcon className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Add Survey to Program
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Expand your data collection
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default ProgramsList;