import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, BarChart2Icon, CheckCircleIcon, ClipboardListIcon, PlusIcon, MessageSquareIcon, StarIcon, ThumbsUpIcon, ChevronRightIcon, CheckIcon, ArrowRightIcon } from 'lucide-react';
import SuccessConfetti from '../components/SuccessConfetti';
const surveyTemplates = [{
  id: 'satisfaction',
  name: 'Customer Satisfaction Survey',
  icon: <ThumbsUpIcon className="h-8 w-8 text-blue-500" />,
  description: 'Measure customer satisfaction with your product or service',
  questions: ['How satisfied are you with our service?', 'What aspects of our service do you like the most?', 'How likely are you to recommend us to others?', 'How can we improve your experience?'],
  color: 'bg-blue-100 text-blue-800'
}, {
  id: 'feedback',
  name: 'Product Feedback Survey',
  icon: <MessageSquareIcon className="h-8 w-8 text-green-500" />,
  description: 'Gather detailed feedback about your product features',
  questions: ['Which features do you use most frequently?', 'How would you rate the user interface?', 'What features would you like to see added?', 'How easy is our product to use?'],
  color: 'bg-green-100 text-green-800'
}, {
  id: 'nps',
  name: 'Net Promoter Score (NPS) Survey',
  icon: <StarIcon className="h-8 w-8 text-purple-500" />,
  description: 'Measure customer loyalty and likelihood to recommend',
  questions: ['How likely are you to recommend us to a friend or colleague?', 'What is the primary reason for your score?', 'What could we do to improve your experience?'],
  color: 'bg-purple-100 text-purple-800'
}];
const questionTypes = [{
  id: 'multiple_choice',
  name: 'Multiple Choice',
  description: 'Let respondents select one option from a list'
}, {
  id: 'checkbox',
  name: 'Checkbox',
  description: 'Let respondents select multiple options'
}, {
  id: 'rating',
  name: 'Rating Scale',
  description: 'Collect feedback on a numeric scale'
}, {
  id: 'text',
  name: 'Open Text',
  description: 'Allow respondents to enter free-form text'
}, {
  id: 'likert',
  name: 'Likert Scale',
  description: 'Measure agreement on a 5 or 7 point scale'
}];
const programOptions = [{
  id: '1',
  name: 'Employee Experience Program',
  description: 'Track employee sentiment across the entire lifecycle',
  type: 'HR',
  icon: <UserIcon className="h-8 w-8 text-purple-500" />
}, {
  id: '2',
  name: 'Customer Journey Program',
  description: 'Understand customer experience at each touchpoint',
  type: 'CX',
  icon: <LineChartIcon className="h-8 w-8 text-blue-500" />
}, {
  id: '3',
  name: 'Product Feedback Program',
  description: 'Collect user feedback on product features and usability',
  type: 'Product',
  icon: <BoxIcon className="h-8 w-8 text-green-500" />
}];
const CreateSurvey = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [surveyName, setSurveyName] = useState('');
  const [surveyDesc, setSurveyDesc] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newQuestionType, setNewQuestionType] = useState('multiple_choice');
  const [showConfetti, setShowConfetti] = useState(false);
  const [programAction, setProgramAction] = useState<'select' | 'create' | null>(null);
  const [newProgramName, setNewProgramName] = useState('');
  const [newProgramDesc, setNewProgramDesc] = useState('');
  const [newProgramType, setNewProgramType] = useState('HR');
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = surveyTemplates.find(t => t.id === templateId);
    if (template) {
      setSurveyName(template.name);
      setSurveyDesc(template.description);
      setQuestions(template.questions.map(q => ({
        text: q,
        type: 'multiple_choice',
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied']
      })));
    } else if (templateId === 'custom') {
      setSurveyName('');
      setSurveyDesc('');
      setQuestions([]);
    }
  };
  const handleNext = () => {
    if (step === 4) {
      // When moving from step 4 to 5 (success), trigger confetti
      setShowConfetti(true);
    }
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, {
        text: newQuestion,
        type: newQuestionType,
        options: newQuestionType === 'multiple_choice' || newQuestionType === 'checkbox' ? ['Option 1', 'Option 2', 'Option 3'] : []
      }]);
      setNewQuestion('');
      setNewQuestionType('multiple_choice');
    }
  };
  const removeQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };
  const handleProgramSelection = (programId: string) => {
    setSelectedProgram(programId);
  };
  // Add this effect to automatically set the program name when programAction changes
  useEffect(() => {
    if (programAction === 'create') {
      setNewProgramName(`${surveyName} Program`);
      setNewProgramDesc(`Program created from ${surveyName}`);
    }
  }, [programAction, surveyName]);
  const handleAddToProgram = () => {
    if (programAction === 'select' && selectedProgram) {
      // Navigate to the program detail page with the survey added
      navigate(`/programs/${selectedProgram}`);
    } else if (programAction === 'create' && newProgramName) {
      // For the prototype, we'll navigate to an existing program
      // Using program ID '1' (Employee Experience Program) for demonstration
      const existingProgramId = '1';
      // Navigate directly to the program detail page
      navigate(`/programs/${existingProgramId}`);
      // In a real app, we would create the program via API and get the ID back
      // Then navigate to the newly created program
    }
  };
  const handleSkip = () => {
    navigate('/surveys');
  };
  return <div>
      {showConfetti && <SuccessConfetti />}
      <div className="flex items-center mb-6">
        <Link to="/surveys" className="text-gray-500 hover:text-gray-700 mr-3">
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Create Survey</h1>
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
              <div className={`h-1 w-16 mx-2 ${step >= 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                4
              </div>
              <div className={`h-1 w-16 mx-2 ${step >= 5 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 5 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                5
              </div>
            </div>
            <div className="flex mt-2 text-sm">
              <div className="w-8 text-center">Template</div>
              <div className="w-16 mx-2"></div>
              <div className="w-8 text-center">Details</div>
              <div className="w-16 mx-2"></div>
              <div className="w-8 text-center">Questions</div>
              <div className="w-16 mx-2"></div>
              <div className="w-8 text-center">Settings</div>
              <div className="w-16 mx-2"></div>
              <div className="w-8 text-center">Success</div>
            </div>
          </div>
        </div>
        <div className="p-6">
          {step === 1 && <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Choose a Survey Template
              </h2>
              <p className="text-gray-600 mb-6">
                Start with a template designed for your use case or create a
                custom survey from scratch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {surveyTemplates.map(template => <div key={template.id} className={`border rounded-lg p-5 cursor-pointer transition-all hover:shadow-md ${selectedTemplate === template.id ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`} onClick={() => handleTemplateSelect(template.id)}>
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
                        Sample questions:
                      </span>
                      <ul className="mt-2 space-y-1">
                        {template.questions.slice(0, 3).map((question, idx) => <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-2 ${template.color.split(' ')[0]}`}></span>
                            {question.length > 40 ? `${question.substring(0, 40)}...` : question}
                          </li>)}
                        {template.questions.length > 3 && <li className="text-sm text-gray-600 flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-2 ${template.color.split(' ')[0]}`}></span>
                            And {template.questions.length - 3} more...
                          </li>}
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
                    Custom Survey
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Start from scratch and build a survey tailored to your
                    specific needs.
                  </p>
                  <div>
                    <span className="text-xs font-medium text-gray-500">
                      You'll be able to:
                    </span>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2 bg-gray-300"></span>
                        Create your own questions
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2 bg-gray-300"></span>
                        Choose from multiple question types
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
                Survey Details
              </h2>
              <p className="text-gray-600 mb-6">
                Provide basic information about your survey to help respondents
                understand its purpose.
              </p>
              <div className="space-y-6">
                <div>
                  <label htmlFor="surveyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Survey Name *
                  </label>
                  <input type="text" id="surveyName" value={surveyName} onChange={e => setSurveyName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="e.g., Customer Satisfaction Survey Q4 2025" />
                </div>
                <div>
                  <label htmlFor="surveyDesc" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea id="surveyDesc" value={surveyDesc} onChange={e => setSurveyDesc(e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Describe the purpose of this survey and what you hope to learn..." />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program
                  </label>
                  <select id="program" value={selectedProgram} onChange={e => setSelectedProgram(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Select a program (optional)</option>
                    <option value="1">Employee Experience Program</option>
                    <option value="2">Customer Journey Program</option>
                    <option value="3">Product Feedback Program</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Survey Settings
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">
                        Allow anonymous responses
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">
                        Show progress bar to respondents
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                      <span className="ml-2 text-sm text-gray-700">
                        Require all questions to be answered
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                  Back
                </button>
                <button onClick={handleNext} disabled={!surveyName} className={`px-4 py-2 rounded-md text-white font-medium ${!surveyName ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                  Next
                </button>
              </div>
            </div>}
          {step === 3 && <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Survey Questions
              </h2>
              <p className="text-gray-600 mb-6">
                Add and edit questions for your survey. You can reorder them by
                dragging.
              </p>
              <div className="mb-6">
                <div className="flex flex-col space-y-4">
                  {questions.map((question, index) => <div key={index} className="border border-gray-200 rounded-md p-4 hover:border-gray-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          <span className="font-medium text-gray-800">
                            {question.text}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2">
                            {question.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                          <button onClick={() => removeQuestion(index)} className="text-gray-400 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {(question.type === 'multiple_choice' || question.type === 'checkbox') && <div className="ml-9 mt-2">
                          <div className="text-sm text-gray-500 mb-1">
                            Options:
                          </div>
                          <div className="space-y-1">
                            {question.options.map((option: string, optIdx: number) => <div key={optIdx} className="flex items-center">
                                  <div className={`w-4 h-4 mr-2 border border-gray-300 rounded${question.type === 'checkbox' ? '' : '-full'}`}></div>
                                  <span className="text-sm text-gray-700">
                                    {option}
                                  </span>
                                </div>)}
                          </div>
                        </div>}
                      {question.type === 'rating' && <div className="ml-9 mt-2">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map(num => <div key={num} className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-sm text-gray-700">
                                {num}
                              </div>)}
                          </div>
                        </div>}
                    </div>)}
                </div>
                <div className="mt-6">
                  <h3 className="text-md font-medium text-gray-700 mb-3">
                    Add New Question
                  </h3>
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="mb-4">
                      <label htmlFor="questionText" className="block text-sm font-medium text-gray-700 mb-1">
                        Question Text
                      </label>
                      <input type="text" id="questionText" value={newQuestion} onChange={e => setNewQuestion(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter your question here" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="questionType" className="block text-sm font-medium text-gray-700 mb-1">
                        Question Type
                      </label>
                      <select id="questionType" value={newQuestionType} onChange={e => setNewQuestionType(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        {questionTypes.map(type => <option key={type.id} value={type.id}>
                            {type.name} - {type.description}
                          </option>)}
                      </select>
                    </div>
                    <button onClick={addQuestion} disabled={!newQuestion.trim()} className={`w-full px-4 py-2 rounded-md text-white font-medium ${!newQuestion.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                      Add Question
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                  Back
                </button>
                <button onClick={handleNext} disabled={questions.length === 0} className={`px-4 py-2 rounded-md text-white font-medium ${questions.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                  Next
                </button>
              </div>
            </div>}
          {step === 4 && <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Distribution Settings
              </h2>
              <p className="text-gray-600 mb-6">
                Configure how your survey will be distributed and accessed by
                respondents.
              </p>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-md p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Survey Link
                  </h3>
                  <div className="bg-gray-50 p-3 rounded-md flex items-center justify-between mb-3">
                    <div className="text-sm text-gray-500 truncate">
                      https://goldie.surveys.com/s/abc123xyz
                    </div>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Copy
                    </button>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="enablePassword" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                    <label htmlFor="enablePassword" className="ml-2 text-sm text-gray-700">
                      Password protect this survey
                    </label>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Collection Period
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center">
                    <input type="checkbox" id="noEndDate" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                    <label htmlFor="noEndDate" className="ml-2 text-sm text-gray-700">
                      No end date (collect responses indefinitely)
                    </label>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Distribution Methods
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:border-green-200 hover:bg-green-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-md mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">
                            Email Campaign
                          </h4>
                          <p className="text-xs text-gray-500">
                            Send survey invitations via email
                          </p>
                        </div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:border-green-200 hover:bg-green-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-2 rounded-md mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">
                            Web Embed
                          </h4>
                          <p className="text-xs text-gray-500">
                            Embed the survey on your website
                          </p>
                        </div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:border-green-200 hover:bg-green-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-md mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800">
                            SMS
                          </h4>
                          <p className="text-xs text-gray-500">
                            Send survey invitations via text message
                          </p>
                        </div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                  Back
                </button>
                <button onClick={handleNext} className="px-4 py-2 rounded-md text-white font-medium bg-green-600 hover:bg-green-700">
                  Publish Survey
                </button>
              </div>
            </div>}
          {step === 5 && <div>
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckIcon className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Survey Published Successfully!
                </h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Congratulations on creating your first survey! It's now ready
                  to collect responses.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-lg w-full text-left">
                    <h3 className="font-medium text-blue-800 mb-2">
                      Take it to the next level with Programs
                    </h3>
                    <p className="text-sm text-blue-700 mb-3">
                      Add this survey to a program to organize related surveys,
                      track insights over time, and get deeper analytics.
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <button onClick={() => setProgramAction('create')} className={`px-3 py-1.5 text-sm rounded-md ${programAction === 'create' ? 'bg-blue-600 text-white' : 'border border-blue-300 text-blue-600 hover:bg-blue-50'}`}>
                        Create my Program
                      </button>
                    </div>
                  </div>
                </div>
                {programAction === 'select' && <div className="border border-gray-200 rounded-lg p-4 mb-8">
                    <h3 className="font-medium text-gray-800 mb-4">
                      Select a Program
                    </h3>
                    <div className="space-y-3">
                      {programOptions.map(program => <div key={program.id} onClick={() => handleProgramSelection(program.id)} className={`flex items-start p-3 border rounded-md cursor-pointer ${selectedProgram === program.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                          <div className="p-2 rounded-lg bg-gray-100 mr-3">
                            {program.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {program.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {program.description}
                            </p>
                            <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {program.type}
                            </span>
                          </div>
                          {selectedProgram === program.id && <CheckCircleIcon className="h-5 w-5 text-green-500 ml-auto" />}
                        </div>)}
                    </div>
                    <div className="flex justify-end mt-4">
                      <button onClick={handleAddToProgram} disabled={!selectedProgram} className={`px-4 py-2 rounded-md text-white font-medium ${!selectedProgram ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                        Add to Program
                      </button>
                    </div>
                  </div>}
                {programAction === 'create' && <div className="border border-gray-200 rounded-lg p-4 mb-8">
                    <h3 className="font-medium text-gray-800 mb-4">
                      Create New Program
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="programName" className="block text-sm font-medium text-gray-700 mb-1">
                          Program Name (pre-filled, you can edit)
                        </label>
                        <input type="text" id="programName" value={newProgramName} onChange={e => setNewProgramName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="programDesc" className="block text-sm font-medium text-gray-700 mb-1">
                          Description (optional)
                        </label>
                        <textarea id="programDesc" value={newProgramDesc} onChange={e => setNewProgramDesc(e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Describe the purpose of this program..." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Program Type
                        </label>
                        <div className="flex items-center space-x-4">
                          <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="HR" checked={newProgramType === 'HR'} onChange={() => setNewProgramType('HR')} />
                            <span className="ml-2 text-sm text-gray-700">
                              HR
                            </span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="CX" checked={newProgramType === 'CX'} onChange={() => setNewProgramType('CX')} />
                            <span className="ml-2 text-sm text-gray-700">
                              CX
                            </span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-green-600" name="programType" value="Product" checked={newProgramType === 'Product'} onChange={() => setNewProgramType('Product')} />
                            <span className="ml-2 text-sm text-gray-700">
                              Product
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button onClick={handleAddToProgram} className="px-4 py-2 rounded-md text-white font-medium bg-green-600 hover:bg-green-700">
                        Create Program with Survey
                      </button>
                    </div>
                  </div>}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button onClick={() => navigate('/programs/1')} className="px-4 py-2 rounded-md text-white font-medium bg-green-600 hover:bg-green-700">
                    Add to Employee Experience Program
                  </button>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default CreateSurvey;
// Helper components
const UserIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>;
const LineChartIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>;
const BoxIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>;