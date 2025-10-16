import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2Icon, ExternalLinkIcon, SettingsIcon } from 'lucide-react';
interface SurveyProps {
  id: string;
  name: string;
  status: 'Open' | 'Draft' | 'Closed';
  responses: number;
  lastUpdated: string;
  isNew?: boolean;
}
const ProgramSurveyCard: React.FC<SurveyProps> = ({
  id,
  name,
  status,
  responses,
  lastUpdated,
  isNew = false
}) => {
  return <div className={`border rounded-lg ${isNew ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <h3 className="text-md font-medium text-gray-800">
                <Link to={`/surveys/${id}`} className="hover:text-green-600">
                  {name}
                </Link>
              </h3>
            </div>
            <div className="flex items-center mt-1 space-x-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'Open' ? 'bg-green-100 text-green-800' : status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                {status}
              </span>
              <span className="text-xs text-gray-500">
                Updated: {lastUpdated}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <ExternalLinkIcon className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <SettingsIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-3 flex items-center">
          <div className="flex items-center mr-4">
            <BarChart2Icon className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-600">
              {responses.toLocaleString()} responses
            </span>
          </div>
          <Link to={`/surveys/${id}`} className="text-sm text-green-600 hover:text-green-700">
            View details
          </Link>
        </div>
      </div>
    </div>;
};
export default ProgramSurveyCard;