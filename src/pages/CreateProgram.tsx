import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon, LineChartIcon, BoxIcon, CheckCircleIcon, PlusIcon } from 'lucide-react';
const programTemplates = [{
  id: 'hr',
  name: 'Employee Experience Program',
  icon: <UserIcon className="h-8 w-8 text-purple-500" />,
  description: 'Track employee sentiment across the entire lifecycle',
  surveys: ['Employee Onboarding Survey', 'Employee Engagement Survey', 'Employee Pulse Survey', 'Exit Interview Survey'],
  color: 'bg-purple-100 text-purple-800'
}, {
  id: 'cx',
  name: 'Customer Journey Program',
  icon: <LineChartIcon className="h-8 w-8 text-blue-500" />,
  description: 'Understand customer experience at each touchpoint',
  surveys: ['Post-Purchase Survey', 'Customer Satisfaction (CSAT) Survey', 'Net Promoter Score (NPS) Survey', 'Customer Churn Survey', 'Customer Exit Survey'],
  color: 'bg-blue-100 text-blue-800'
}, {
  id: 'product',
  name: 'Product Feedback Program',
  icon: <BoxIcon className="h-8 w-8 text-green-500" />,
  description: 'Collect user feedback on product features and usability',
  surveys: ['Product Usability Survey', 'Feature Satisfaction Survey', 'User Experience (UX) Survey'],
  color: 'bg-green-100 text-green-800'
}];
const CreateProgram = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [programName, setProgramName] = useState('');
  const [programDesc, setProgramDesc] = useState('');
  const [selectedSurveys, setSelectedSurveys] = useState<string[]>([]);
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = programTemplates.find(t => t.id === templateId);
    if (template) {
      setProgramName(template.name);
      setProgramDesc(template.description);
      setSelectedSurveys(template.surveys);
    }
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  return <div>
      <div className="flex items-center mb-6">
        <Link to="/programs" className="text-gray-500 hover:text-gray-700 mr-3">
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Create Program</h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`h-1 w-16 mx-2 ${step >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <div className={`h-1 w-16 mx-2 ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                3
              </div>
            </div>
            <div className="flex mt-2 text-sm">
              <div className="w-8 text-center">Template</div>
              <div className="w-16 mx-2"></div>
              <div className="w-8 text-center">Details</div>
              <div className="w-16 mx-2"></div>
              <div className="w-8 text-center">Surveys</div>
            </div>
          </div>
        </div>
        <div className="p-6">
          {step === 1 && <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Choose a Program Template
              </h2>
              <p className="text-gray-600 mb-6">
                Start with a template designed for your use case or create a
                custom program from scratch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {programTemplates.map(template => <div key={template.id} className={`border rounded-lg p-5 cursor-pointer transition-all hover:shadow-md ${selectedTemplate === template.id ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`} onClick={() => handleTemplateSelect(template.id)}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-gray-100">
                        {template.icon}
                      </div>
                      {selectedTemplate === template.id && <CheckCircleIcon className="h-6 w-6 text-green-500" />}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {template.description}
                    </p>
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Includes:
                      </span>
                      <ul className="mt-2 space-y-1">
                        {template.surveys.map((survey, idx) => <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-2 ${template.color.split(' ')[0]}`}></span>
                            {survey}
                          </li>)}
                      </ul>
                    </div>
                  </div>)}
                <div className={`border rounded-lg p-5 cursor-pointer transition-all hover:shadow-md ${selectedTemplate === 'custom' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`} onClick={() => handleTemplateSelect('custom')}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <PlusIcon className="h-8 w-8 text-gray-500" />
                    </div>
                    {selectedTemplate === 'custom' && <CheckCircleIcon className="h-6 w-6 text-green-500" />}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Custom Program
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Start from scratch and build a program tailored to your
                    specific needs.
                  </p>
                  <div>
                    <span className="text-xs font-medium text-gray-500">
                      You'll be able to:
                    </span>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2 bg-gray-300"></span>
                        Name your program
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2 bg-gray-300"></span>
                        Add surveys manually
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2 bg-gray-300"></span>
                        Customize all settings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button onClick={handleNext} disabled={!selectedTemplate} className={`px-4 py-2 rounded-md text-white font-medium ${!selectedTemplate ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                  Next
                </button>
              </div>
            </div>}
          {step === 2 && <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Program Details
              </h2>
              <p className="text-gray-600 mb-6">
                Customize your program name and description to help your team
                understand its purpose.
              </p>
              <div className="space-y-6">
                <div>
                  <label htmlFor="programName" className="block text-sm font-medium text-gray-700 mb-1">
                    Program Name *
                  </label>
                  <input type="text" id="programName" value={programName} onChange={e => setProgramName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="e.g., Employee Experience Program 2025" />
                </div>
                <div>
                  <label htmlFor="programDesc" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea id="programDesc" value={programDesc} onChange={e => setProgramDesc(e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Describe the purpose and goals of this program..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program Type
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="hr" checked={selectedTemplate === 'hr'} onChange={() => {}} />
                      <span className="ml-2 text-sm text-gray-700">HR</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="cx" checked={selectedTemplate === 'cx'} onChange={() => {}} />
                      <span className="ml-2 text-sm text-gray-700">CX</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="product" checked={selectedTemplate === 'product'} onChange={() => {}} />
                      <span className="ml-2 text-sm text-gray-700">
                        Product
                      </span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="custom" checked={selectedTemplate === 'custom'} onChange={() => {}} />
                      <span className="ml-2 text-sm text-gray-700">Custom</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags (Optional)
                  </label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Add tags separated by commas..." />
                  <p className="mt-1 text-xs text-gray-500">
                    Tags help you organize and filter your programs
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                  Back
                </button>
                <button onClick={handleNext} disabled={!programName} className={`px-4 py-2 rounded-md text-white font-medium ${!programName ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                  Next
                </button>
              </div>
            </div>}
          {step === 3 && <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Program Surveys
              </h2>
              <p className="text-gray-600 mb-6">
                Select the surveys to include in your program. You can add
                existing surveys or create new ones.
              </p>
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-700 mb-3">
                  Included Surveys
                </h3>
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {selectedSurveys.map((survey, idx) => <li key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50">
                        <div className="flex items-center">
                          <input type="checkbox" checked={true} onChange={() => {
                      const newSurveys = [...selectedSurveys];
                      newSurveys.splice(idx, 1);
                      setSelectedSurveys(newSurveys);
                    }} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                          <span className="ml-3 text-sm text-gray-700">
                            {survey}
                          </span>
                        </div>
                        <div>
                          <span className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800">
                            Template
                          </span>
                        </div>
                      </li>)}
                  </ul>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-md font-medium text-gray-700">
                    Add Existing Surveys
                  </h3>
                  <button className="text-sm text-green-600 font-medium hover:text-green-700">
                    Browse All
                  </button>
                </div>
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <input type="text" placeholder="Search your surveys..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div className="p-8 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <SearchIcon className="h-8 w-8 text-gray-400" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      No matching surveys found
                    </h4>
                    <p className="text-xs text-gray-500">
                      Try a different search term or browse all surveys
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/surveys/create" className="flex items-center justify-center w-full p-4 border border-dashed border-gray-300 rounded-md hover:bg-gray-50">
                  <PlusIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-600">
                    Create a New Survey
                  </span>
                </Link>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                  Back
                </button>
                <Link to="/programs" className="px-4 py-2 rounded-md text-white font-medium bg-green-600 hover:bg-green-700">
                  Create Program
                </Link>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default CreateProgram;
// Helper component
const SearchIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>;