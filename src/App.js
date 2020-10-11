import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import JobBoard from './components/JobBoard';

function App() {
  const [{ data, loading }] = useAxios('http://localhost:7777');

  const [filters, setFilters] = useState([]);

  const handleFilterClick = (passed) => {
    const items = filters.filter((item) => item !== passed);
    setFilters(items);
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleClearFiltets = () => {
    setFilters([]);
  };

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const filteredJobs = !loading && data.jobs.filter(filterFunc);

  return (
    <div className='bg-blue-100'>
      <div className='w-full bg-teal-500 mb-12'>
        <img
          className='bg-cover w-full'
          src='/images/bg-header-desktop.svg'
          alt='background'
        />
      </div>

      {filters.length > 0 && (
        <div className={`flex flex-wrap bg-white shadow-md  mx-10 p-4 rounded`}>
          {filters.map((filter, i) => (
            <span
              onClick={() => handleFilterClick(filter)}
              className=' text-teal-500 font-bold mr-4  p-2 rounded cursor-pointer hover:text-teal-600 bg-teal-100'
              key={i}
            >
              {filter}
            </span>
          ))}

          <button
            onClick={handleClearFiltets}
            className='ml-auto font-bold text-gray-700'
          >
            Clear
          </button>
        </div>
      )}

      <div className='container mx-auto'>
        {loading ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.length > 0 &&
          filteredJobs.map((job) => (
            <JobBoard key={job.id} job={job} handleTagClick={handleTagClick} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;