import React, { useEffect, useState } from 'react';

const NotesForm = ({ setNoteInfo,NoteInfo }) => {
  const [formData, setFormData] = useState({
   topic:'',
   description:''
  });
  useEffect(()=>{
    setFormData(NoteInfo);
   
  },[NoteInfo])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setNoteInfo({ ...formData, [e.target.name]: e.target.value });
  };

  return (
<div className="bg-white shadow-md rounded-lg p-6 mb-6">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Notes Form</h2>
  <form>
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Topic</label>
      <input
        type="text"
        name="topic"
        value={formData?.topic}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Description</label>
      <textarea
        name="description"
        value={formData?.description}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
      />
    </div>
  </form>
</div>


  
  );
};

export default NotesForm;
