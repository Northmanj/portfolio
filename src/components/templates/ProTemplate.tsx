// components/templates/ProTemplate.tsx
import React from 'react';

export default function ProTemplate({ data }: { data: any }) {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg font-sans space-y-6">
      {/* Header */}
      <div className="border-b-2 border-blue-500 pb-4">
        <h1 className="text-3xl font-bold text-blue-700">{data.name}</h1>
        <p className="text-sm">{data.email} | {data.phone}</p>
      </div>

      {/* Summary */}
      <section>
        <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-300 mb-1">Professional Summary</h2>
        <p className="text-sm">{data.summary}</p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-300 mb-1">Experience</h2>
        <p className="text-sm whitespace-pre-wrap">{data.experience}</p>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-300 mb-1">Education</h2>
        <p className="text-sm whitespace-pre-wrap">{data.education}</p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg font-semibold text-blue-600 border-b border-gray-300 mb-1">Skills</h2>
        <ul className="list-disc list-inside text-sm">
          {data.skills?.split(',').map((skill: string, index: number) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
