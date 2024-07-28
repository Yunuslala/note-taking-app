import React from 'react';

const NotePreview = ({ NoteInfo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Note Preview</h2>
    <div className="mb-4">
      <p className="text-lg break-words"><strong className="font-semibold text-gray-700">Topic:</strong> {NoteInfo?.topic}</p>
      <p className="text-lg mt-2 break-words"><strong className="font-semibold text-gray-700">Description:</strong> {NoteInfo?.description}</p>
    </div>
  </div>
  
  
  );
};

export default NotePreview;
