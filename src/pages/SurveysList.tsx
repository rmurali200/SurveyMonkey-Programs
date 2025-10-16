import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SearchIcon,
  FilterIcon,
  PlusIcon,
  BarChart2Icon,
  FolderIcon,
  CalendarIcon,
  ExternalLinkIcon,
  CheckIcon,
  ClockIcon,
} from 'lucide-react'
const mockSurveys = [
  {
    id: '1',
    name: 'Employee Onboarding Survey',
    status: 'Open',
    responses: 1777,
    lastUpdated: '10/16/2025',
    program: {
      id: '1',
      name: 'Employee Experience Program',
      color: 'purple',
    },
    type: 'Satisfaction',
  },
  {
    id: '2',
    name: 'Customer Satisfaction Q4 2025',
    status: 'Open',
    responses: 3428,
    lastUpdated: '10/15/2025',
    program: {
      id: '2',
      name: 'Customer Journey Program',
      color: 'blue',
    },
    type: 'CSAT',
  },
  {
    id: '3',
    name: 'Product Feedback Survey',
    status: 'Draft',
    responses: 0,
    lastUpdated: '10/14/2025',
    program: {
      id: '3',
      name: 'Product Feedback Program',
      color: 'green',
    },
    type: 'Feedback',
  },
  {
    id: '4',
    name: 'Website Usability Test',
    status: 'Open',
    responses: 512,
    lastUpdated: '10/13/2025',
    program: null,
    type: 'Usability',
  },
  {
    id: '5',
    name: 'Marketing Campaign Effectiveness',
    status: 'Closed',
    responses: 1204,
    lastUpdated: '10/10/2025',
    program: null,
    type: 'Feedback',
  },
]
const SurveysList = () => {
  const [showBanner, setShowBanner] = useState(true)
  const [surveys, setSurveys] = useState(mockSurveys)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [programFilter, setProgramFilter] = useState('All')
  const [sortBy, setSortBy] = useState('lastUpdated')
  const filteredSurveys = surveys
    .filter((survey) => {
      // Search term filter
      if (
        searchTerm &&
        !survey.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }
      // Status filter
      if (statusFilter !== 'All' && survey.status !== statusFilter) {
        return false
      }
      // Program filter
      if (
        programFilter !== 'All' &&
        (programFilter === 'With Program'
          ? !survey.program
          : programFilter === 'Without Program'
            ? survey.program
            : survey.program?.name !== programFilter)
      ) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      // Sorting
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'responses':
          return b.responses - a.responses
        case 'lastUpdated':
        default:
          // Simple string comparison for dates in MM/DD/YYYY format
          return b.lastUpdated.localeCompare(a.lastUpdated)
      }
    })
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Surveys</h1>
          <p className="text-gray-600 mt-1">
            Manage your individual survey projects
          </p>
        </div>
        <Link
          to="/surveys/create"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Survey
        </Link>
      </div>
      {showBanner && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
              <FolderIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-blue-800">
                Pro Tip: Organize with Programs
              </h3>
              <div className="mt-1 text-sm text-blue-700">
                <p>
                  Add your surveys to programs to organize related surveys,
                  track insights over time, and get deeper analytics.
                </p>
              </div>
              <div className="mt-2">
                <Link
                  to="/programs"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View programs
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="flex-shrink-0 ml-3"
              onClick={() => setShowBanner(false)}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5 text-blue-400 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search surveys"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Open">Open</option>
                <option value="Draft">Draft</option>
                <option value="Closed">Closed</option>
              </select>
              <FilterIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
              >
                <option value="All">All Programs</option>
                <option value="With Program">With Program</option>
                <option value="Without Program">Without Program</option>
                <option value="Employee Experience Program">
                  Employee Experience Program
                </option>
                <option value="Customer Journey Program">
                  Customer Journey Program
                </option>
                <option value="Product Feedback Program">
                  Product Feedback Program
                </option>
              </select>
              <FilterIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="lastUpdated">Last Updated</option>
                <option value="name">Name A-Z</option>
                <option value="responses">Most Responses</option>
              </select>
              <FilterIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Survey
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Program
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Responses
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Updated
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSurveys.map((survey) => (
                <tr key={survey.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          <Link
                            to={`/surveys/${survey.id}`}
                            className="hover:text-green-600"
                          >
                            {survey.name}
                          </Link>
                        </div>
                        <div className="text-xs text-gray-500">
                          {survey.type}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        survey.status === 'Open'
                          ? 'bg-green-100 text-green-800'
                          : survey.status === 'Draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {survey.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {survey.program ? (
                      <Link
                        to={`/programs/${survey.program.id}`}
                        className="flex items-center text-sm"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            survey.program.color === 'purple'
                              ? 'bg-purple-500'
                              : survey.program.color === 'blue'
                                ? 'bg-blue-500'
                                : 'bg-green-500'
                          }`}
                        ></div>
                        <span className="hover:text-green-600">
                          {survey.program.name}
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500">
                          Not assigned
                        </span>
                        <Link
                          to={`/surveys/${survey.id}`}
                          className="ml-2 text-xs text-green-600 hover:text-green-700"
                        >
                          Add to program
                        </Link>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <BarChart2Icon className="h-4 w-4 text-gray-400 mr-1" />
                      {survey.responses.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                      {survey.lastUpdated}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <Link
                        to={`/surveys/${survey.id}`}
                        className="text-green-600 hover:text-green-900"
                      >
                        View
                      </Link>
                      {survey.status === 'Open' && (
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900 flex items-center"
                        >
                          <ExternalLinkIcon className="h-3 w-3 mr-1" />
                          Share
                        </a>
                      )}
                      <button className="text-gray-600 hover:text-gray-900">
                        •••
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredSurveys.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <SearchIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No surveys found
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <Link
              to="/surveys/create"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <PlusIcon className="-ml-1 mr-2 h-4 w-4" />
              Create a new survey
            </Link>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Survey Analytics Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Responses
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">6,921</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-md">
                <BarChart2Icon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">+12.5%</span>
                <span className="text-gray-500 ml-1">vs. previous month</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Completion Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">76%</p>
              </div>
              <div className="p-2 bg-green-100 rounded-md">
                <CheckIcon className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">+3.2%</span>
                <span className="text-gray-500 ml-1">vs. previous month</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Average Time to Complete
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">4:32</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-md">
                <ClockIcon className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm">
                <span className="text-red-600 font-medium">+0:18</span>
                <span className="text-gray-500 ml-1">vs. previous month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SurveysList
// Helper components
const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
)
const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)
