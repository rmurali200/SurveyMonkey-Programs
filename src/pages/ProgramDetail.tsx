import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, BarChart2Icon, PlusIcon, UsersIcon, SettingsIcon, TrashIcon, BarChartIcon, PencilIcon } from 'lucide-react';
import ProgramSurveyCard from '../components/ProgramSurveyCard';
const mockPrograms = {
  '1': {
    id: '1',
    name: 'Employee Experience Program',
    type: 'HR',
    description: 'Track employee sentiment across the entire lifecycle',
    surveys: [{
      id: '1',
      name: 'Employee Onboarding Survey',
      status: 'Open',
      responses: 1777,
      lastUpdated: '10/16/2025',
      shared: true
    }, {
      id: '7',
      name: 'Employee Engagement Survey',
      status: 'Open',
      responses: 2331,
      lastUpdated: '10/15/2025',
      shared: true
    }, {
      id: '8',
      name: 'Employee Pulse Survey',
      status: 'Draft',
      responses: 0,
      lastUpdated: '10/16/2025',
      shared: false
    }, {
      id: '9',
      name: 'Exit Interview Survey',
      status: 'Open',
      responses: 342,
      lastUpdated: '10/14/2025',
      shared: true
    }],
    insights: [{
      id: '1',
      title: 'Employee satisfaction decreases after 6 months',
      source: 'Correlation between Onboarding and Pulse surveys',
      impact: 'High',
      date: '10/15/2025'
    }, {
      id: '2',
      title: 'Management communication is the top driver of engagement',
      source: 'AI analysis of Engagement survey',
      impact: 'Medium',
      date: '10/14/2025'
    }, {
      id: '3',
      title: 'Remote workers report 15% higher satisfaction',
      source: 'Comparison across all surveys',
      impact: 'Medium',
      date: '10/12/2025'
    }],
    metrics: [{
      id: '1',
      name: 'Overall Engagement',
      value: 72,
      trend: '+2%',
      color: 'green'
    }, {
      id: '2',
      name: 'Onboarding Satisfaction',
      value: 84,
      trend: '+5%',
      color: 'green'
    }, {
      id: '3',
      name: 'Management Trust',
      value: 68,
      trend: '-3%',
      color: 'red'
    }, {
      id: '4',
      name: 'Work-Life Balance',
      value: 65,
      trend: '+1%',
      color: 'green'
    }]
  }
};
const ProgramDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const program = id ? mockPrograms[id as keyof typeof mockPrograms] : null;
  if (!program) {
    return <div>Program not found</div>;
  }
  return <div>
      <div className="flex items-center mb-6">
        <Link to="/programs" className="text-gray-500 hover:text-gray-700 mr-3">
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            {program.name}
            <button className="ml-2 text-gray-400 hover:text-green-600 transition-colors">
              <PencilIcon className="h-4 w-4" />
            </button>
          </h1>
          <p className="text-gray-600 mt-1">{program.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        <Link to="/surveys/create" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Survey
        </Link>
        <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <SettingsIcon className="h-4 w-4 mr-2" />
          Settings
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
        {program.metrics.map(metric => <div key={metric.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">
                {metric.name}
              </h3>
              <span className={`text-xs font-semibold ${metric.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                {metric.trend}
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">
                {metric.value}
              </span>
              <span className="ml-1 text-sm text-gray-500">/ 100</span>
            </div>
          </div>)}
      </div>
      <div className="flex justify-end mb-8">
        <Link to={`/programs/${program.id}/insights`} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
          <BarChart2Icon className="h-4 w-4 mr-2" />
          View More Insights
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Program Surveys
          </h2>
          <Link to="/surveys/create" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Survey
          </Link>
        </div>
        <div className="p-6 grid grid-cols-1 gap-4">
          {program.surveys.map(survey => <ProgramSurveyCard key={survey.id} id={survey.id} name={survey.name} status={survey.status as any} responses={survey.responses} lastUpdated={survey.lastUpdated} isNew={survey.id === '1'} />)}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Key Insights</h2>
          <Link to={`/programs/${program.id}/insights`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View all insights
          </Link>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {program.insights.map(insight => <div key={insight.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <BarChartIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-medium text-gray-900">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {insight.source}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${insight.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {insight.impact} Impact
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        {insight.date}
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>)}
          </div>
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <UsersIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Recommended Action
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Schedule manager communication training based on engagement
                  survey results
                </p>
                <button className="mt-2 text-sm text-blue-600 font-medium">
                  Create action plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProgramDetail;