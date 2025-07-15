import React from 'react';

export default function CleanTemplate({ data }: { data: any }) {
  return (
    <div className="bg-white text-black p-6 space-y-2 rounded-md font-sans">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>{data.email} | {data.phone}</p>
      <h2 className="font-semibold mt-4">Summary</h2>
      <p>{data.summary}</p>
      <h2 className="font-semibold mt-4">Experience</h2>
      <p>{data.experience}</p>
      <h2 className="font-semibold mt-4">Education</h2>
      <p>{data.education}</p>
      <h2 className="font-semibold mt-4">Skills</h2>
      <p>{data.skills}</p>
    </div>
  );
}
