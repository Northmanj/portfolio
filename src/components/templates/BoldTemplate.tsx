import React from 'react';

export default function BoldTemplate({ data }: { data: any }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-md font-mono">
      <h1 className="text-3xl font-extrabold text-blue-400">{data.name}</h1>
      <p className="text-sm text-gray-300">{data.email} | {data.phone}</p>
      <section className="mt-4">
        <h2 className="text-xl font-bold border-b border-blue-400 mb-2">Summary</h2>
        <p>{data.summary}</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-bold border-b border-blue-400 mb-2">Experience</h2>
        <p>{data.experience}</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-bold border-b border-blue-400 mb-2">Education</h2>
        <p>{data.education}</p>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-bold border-b border-blue-400 mb-2">Skills</h2>
        <p>{data.skills}</p>
      </section>
    </div>
  );
}
