import React from 'react';
import { useParams } from 'react-router-dom';
const SurveyDetail = () => {
  const {
    id
  } = useParams();
  return <div className="container mx-auto py-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Survey Details
        </h1>
        <p className="text-gray-600 mb-6">Viewing survey with ID: {id}</p>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h2 className="text-lg font-semibold mb-3">Survey Information</h2>
          <p className="text-gray-600 mb-2">This page is under construction.</p>
          <p className="text-gray-600">
            The full survey details will be displayed here.
          </p>
        </div>
      </div>
    </div>;
};
export default SurveyDetail;