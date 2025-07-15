'use client';
import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

import CleanTemplate from './templates/CleanTemplate';
import BoldTemplate from './templates/BoldTemplate';
import ProTemplate from './templates/ProTemplate';

export default function CvGenerator() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', summary: '',
    experience: '', education: '', skills: '',
  });
  const [template, setTemplate] = useState('clean');

  const previewRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadPDF = () => {
    const element = previewRef.current;
    if (element) {
      html2pdf().from(element).save(`${formData.name || 'cv'}.pdf`);
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case 'bold':
        return <BoldTemplate data={formData} />;
      case 'clean':
      default:
        return <CleanTemplate data={formData} />;
      case 'pro':
        return <ProTemplate data={formData}/>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">🧾 CV Generator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Choose a template:</label>
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="clean">🧼 Clean</option>
          <option value="bold">🦾 Bold</option>
          <option value="pro">💼 Pro</option>
          {/* More can be added here */}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 bg-gray-800 text-white rounded" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 bg-gray-800 text-white rounded" />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 bg-gray-800 text-white rounded" />
          <textarea name="summary" placeholder="Summary" onChange={handleChange} rows={2} className="w-full p-2 bg-gray-800 text-white rounded" />
          <textarea name="experience" placeholder="Work Experience" onChange={handleChange} rows={2} className="w-full p-2 bg-gray-800 text-white rounded" />
          <textarea name="education" placeholder="Education" onChange={handleChange} rows={2} className="w-full p-2 bg-gray-800 text-white rounded" />
          <textarea name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} rows={2} className="w-full p-2 bg-gray-800 text-white rounded" />
        </form>

        {/* CV Preview */}
        <div ref={previewRef} className="bg-white text-black p-6 rounded shadow space-y-2 overflow-auto max-h-[80vh]">
          {renderTemplate()}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button onClick={downloadPDF} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          📥 Download PDF
        </button>
      </div>
    </div>
  );
}
