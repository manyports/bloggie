"use client"

import { useState } from 'react';
import Link from 'next/link';
import datas from './data.json';

export default function Discover() {
  const [search, setSearch] = useState('');

  const filteredData = datas.filter(data =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center flex-col items-center">
      <p className="text-[24px] font-bold ">Discover page</p>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-4 border rounded"
      />
      {filteredData.map(data => (
        <div key={data.id} className="p-4 border rounded mt-4 w-full max-w-md mb-[2vw]">
          <Link href={`/discover/${data.id}`}>
            <h2 className="font-bold text-xl">{data.title}</h2>
          </Link>
          <p className="text-gray-600">{data.description}</p>
          <p className="text-gray-400">{data.author}</p>
          <p className="text-gray-400">{data.date}</p>
        </div>
      ))}
    </div>
  );
}