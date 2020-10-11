import React from 'react';

const JobBoard = ({
  handleTagClick,
  job: {
    company,
    position,
    postedAt,
    contract,
    location,
    logo,
    languages,
    tools,
    isNew,
    featured,
    role,
    level,
  },
}) => {
  const langAndTools = [role, level, ...languages, ...tools];
  return (
    <div
      className={`flex flex-col md:flex-row bg-white shadow-md p-6 my-16 mx-2 md:m-4 rounded ${
        featured && 'border-l-4 border-solid border-teal-500'
      }`}
    >
      <div>
        <img
          className='w-20 h-20 -mt-16 mb-4 md:w-full md:h-full md:mt-0 md:mb-0'
          src={logo}
          alt={company}
        />
      </div>
      <div className='ml-4 flex flex-col mr-auto'>
        <h3 className='font-bold text-teal-500 flex'>
          <div className='mr-auto md:mr-4'>{company}</div>

          {isNew && (
            <div className='bg-teal-500 text-teal-100 font-bold py-1 px-2 mr-2 rounded-full text-md uppercase'>
              New
            </div>
          )}
          {featured && (
            <div className='bg-gray-800 text-white font-bold py-1 px-2 rounded-full text-md uppercase'>
              Featured
            </div>
          )}
        </h3>
        <h2 className='font-semibold text-xl my-2 md:m-0'>{position}</h2>
        <p className='text-gray-700 tracking-tighter'>
          {postedAt} &middot; {contract} &middot; {location}{' '}
        </p>
      </div>
      <div className='flex flex-wrap items-center m-4 md:mt-4 pt-4 border-t border-solid border-gray-500 md:m-0 md:p-0 md:border-none'>
        {langAndTools.map((item, i) => (
          <span
            onClick={() => handleTagClick(item)}
            className='bg-teal-100 text-teal-500 font-bold mr-4 mb-4 p-2 rounded cursor-pointer hover:text-teal-600'
            key={i}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
