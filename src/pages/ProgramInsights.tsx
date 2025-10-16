import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, BarChartIcon, TrendingUpIcon, TrendingDownIcon, InfoIcon, DownloadIcon, ShareIcon, PresentationIcon } from 'lucide-react';
const ProgramInsights = () => {
  const {
    programId
  } = useParams<{
    programId: string;
  }>();
  return <div>
      <div className="flex items-center mb-6">
        <Link to={`/programs/${programId}`} className="text-gray-500 hover:text-gray-700 mr-3">
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Employee Experience Program Insights
          </h1>
          <p className="text-gray-600 mt-1">
            Cross-survey analytics and insights
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <DownloadIcon className="h-4 w-4 mr-2" />
          Export Report
        </button>
        <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <ShareIcon className="h-4 w-4 mr-2" />
          Share Insights
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <PresentationIcon className="h-4 w-4 mr-2" />
          Start Google Slides Presentation
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <BarChartIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Executive Summary
            </h2>
            <p className="text-gray-600 mt-2">
              Based on data from 4 surveys with 4,450 total responses, your
              Employee Experience Program shows overall positive sentiment with
              key areas for improvement.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <TrendingUpIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">Key Strengths</span>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm text-gray-600">
                    • Onboarding experience (84/100)
                  </li>
                  <li className="text-sm text-gray-600">
                    • Work-life balance (65/100)
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <TrendingDownIcon className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-sm font-medium">
                    Areas for Improvement
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm text-gray-600">
                    • Management trust (68/100)
                  </li>
                  <li className="text-sm text-gray-600">
                    • Career development (61/100)
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <InfoIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium">
                    Recommended Actions
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm text-gray-600">
                    • Manager communication training
                  </li>
                  <li className="text-sm text-gray-600">
                    • Career path transparency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Overall Sentiment Trend
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg">
            <div className="w-full px-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Onboarding
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      84%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '84%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Engagement
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      72%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '72%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Pulse
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      68%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '68%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Exit
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      61%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '61%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Key Insight
            </h3>
            <p className="text-sm text-gray-600">
              Employee sentiment decreases significantly between onboarding and
              exit, with the largest drop occurring between engagement and pulse
              surveys.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Key Drivers Analysis
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg">
            <div className="w-full px-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Management Communication
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      86%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '86%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Career Growth
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      74%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '74%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Compensation
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      65%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '65%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      Work-Life Balance
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      58%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{
                  width: '58%'
                }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Key Insight
            </h3>
            <p className="text-sm text-gray-600">
              Management communication is the strongest driver of overall
              employee satisfaction, with an 86% correlation across all surveys.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Detailed Insights
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="p-6">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                <TrendingUpIcon className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Remote workers report 15% higher satisfaction
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Across all surveys, remote workers consistently report higher
                  satisfaction scores than on-site employees, particularly in
                  the areas of work-life balance (+22%) and productivity (+18%).
                </p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Cross-survey
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    High confidence
                  </span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="text-sm text-blue-600 font-medium">
                    View data
                  </button>
                  <button className="text-sm text-green-600 font-medium">
                    Create action
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                <TrendingDownIcon className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Employee satisfaction decreases after 6 months
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Comparing onboarding survey results with pulse surveys shows a
                  consistent 16% drop in overall satisfaction after 6 months of
                  employment, primarily driven by unmet expectations around
                  career growth.
                </p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Correlation
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    High confidence
                  </span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="text-sm text-blue-600 font-medium">
                    View data
                  </button>
                  <button className="text-sm text-green-600 font-medium">
                    Create action
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                <InfoIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Management communication is the top driver of engagement
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  AI analysis of open-ended responses across all surveys
                  identifies "communication from management" as the most
                  frequently mentioned factor in both positive and negative
                  feedback.
                </p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    AI generated
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Medium confidence
                  </span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="text-sm text-blue-600 font-medium">
                    View data
                  </button>
                  <button className="text-sm text-green-600 font-medium">
                    Create action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recommended Actions
        </h2>
        <div className="space-y-6">
          <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-md font-medium text-gray-900">
                Implement manager communication training
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Based on the strong correlation between management communication
                and employee engagement, we recommend implementing a structured
                communication training program for all managers.
              </p>
              <div className="mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  High impact
                </span>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 border border-green-500 text-green-600 rounded-md text-sm font-medium hover:bg-green-50">
                  Create action plan
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-md font-medium text-gray-900">
                Develop clearer career progression frameworks
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                To address the drop in satisfaction after 6 months, create and
                communicate clearer career progression paths to set realistic
                expectations and provide visible growth opportunities.
              </p>
              <div className="mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Medium impact
                </span>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 border border-green-500 text-green-600 rounded-md text-sm font-medium hover:bg-green-50">
                  Create action plan
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <CheckIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-md font-medium text-gray-900">
                Expand remote work options
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Given the higher satisfaction among remote workers, consider
                expanding flexible and remote work options where possible to
                improve overall employee experience.
              </p>
              <div className="mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Medium impact
                </span>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 border border-green-500 text-green-600 rounded-md text-sm font-medium hover:bg-green-50">
                  Create action plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProgramInsights;
// Helper component
const CheckIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>;