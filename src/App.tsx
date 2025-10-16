import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ProgramsList from './pages/ProgramsList';
import ProgramDetail from './pages/ProgramDetail';
import SurveysList from './pages/SurveysList';
import SurveyDetail from './pages/SurveyDetail';
import CreateProgram from './pages/CreateProgram';
import CreateSurvey from './pages/CreateSurvey';
import ProgramInsights from './pages/ProgramInsights';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/programs" element={<ProgramsList />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/programs/create" element={<CreateProgram />} />
          <Route path="/programs/:programId/insights" element={<ProgramInsights />} />
          <Route path="/surveys" element={<SurveysList />} />
          <Route path="/surveys/:id" element={<SurveyDetail />} />
          <Route path="/surveys/create" element={<CreateSurvey />} />
        </Routes>
      </Layout>
    </Router>;
}