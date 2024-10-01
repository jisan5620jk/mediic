import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-full z-50 transition-transform duration-500 ${
        isActive ? 'translate-y-0' : '-translate-y-full'
      } bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm`}
    >
      <button
        className='absolute left-0 right-0 top-1/4 transform -translate-y-1/2 mx-auto bg-gradient-to-r from-red-500 to-gray-300 rounded-full w-16 h-16 shadow-lg focus:outline-none'
        onClick={toggleSearch}
      >
        <span className='text-white text-2xl'>
          <FaArrowUp />
        </span>
      </button>
      <button
        className='absolute right-6 top-6 text-white focus:outline-none'
        onClick={toggleSearch}
      >
        <LiaTimesSolid size='24' />
      </button>
      <form
        method='post'
        action='https://formspree.io/f/myyleorq'
        className='absolute max-w-xl top-1/2 left-4 right-4 transform -translate-y-1/2 transition-transform duration-300'
      >
        <div className='relative'>
          <input
            type='search'
            name='search-field'
            placeholder='Search Here'
            required
            className='block w-full h-16 px-4 text-lg text-black border-2 border-red-500 rounded-md focus:outline-none'
          />
          <button
            type='submit'
            className='absolute right-4 top-0 h-full flex items-center text-red-500 text-2xl focus:outline-none'
          >
            <RiSearchLine />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
