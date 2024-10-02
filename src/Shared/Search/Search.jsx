import { useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
  const menuSearchRef = useRef(null);
  const searchContentRef = useRef(null);
  const bodyOverlay3Ref = useRef(null);
  const closeBtn3Ref = useRef(null);
  const searchInputRef = useRef(null); // Reference for the search input
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  useEffect(() => {
    const menuSearch = menuSearchRef.current;
    const searchContent = searchContentRef.current;
    const bodyOverlay3 = bodyOverlay3Ref.current;
    const closeBtn3 = closeBtn3Ref.current;
    const searchInput = searchInputRef.current;

    const addClasses = () => {
      if (searchContent && bodyOverlay3) {
        searchContent.classList.add('opened');
        bodyOverlay3.classList.add('apply');
        // Autofocus on the search input when the search is opened
        searchInput?.focus();
      }
    };

    const removeClasses = () => {
      if (searchContent && bodyOverlay3) {
        searchContent.classList.remove('opened');
        bodyOverlay3.classList.remove('apply');
      }
    };

    // Adding event listeners
    if (menuSearch && closeBtn3 && bodyOverlay3) {
      menuSearch.addEventListener('click', addClasses);
      closeBtn3.addEventListener('click', removeClasses);
      bodyOverlay3.addEventListener('click', removeClasses);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (menuSearch && closeBtn3 && bodyOverlay3) {
        menuSearch.removeEventListener('click', addClasses);
        closeBtn3.removeEventListener('click', removeClasses);
        bodyOverlay3.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set submitting state

    // Simulate a submission with a timeout (replace with your actual submission logic)
    setTimeout(() => {
      setIsSubmitting(false); // Reset submitting state
      // Optionally clear the input field or close the overlay
      if (searchInputRef.current) {
        searchInputRef.current.value = ''; // Clear the input
      }
      bodyOverlay3Ref.current.classList.remove('apply'); // Close overlay on submit (optional)
      searchContentRef.current.classList.remove('opened'); // Close search content (optional)
    }, 2000); // Simulate a delay of 2 seconds
  };

  return (
    <div className='fixed left-0 top-0 h-screen w-full z-50 transition-transform duration-500 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm'>
      <button
        className='absolute left-0 right-0 top-1/4 transform -translate-y-1/2 mx-auto bg-gradient-to-r from-red-500 to-gray-300 rounded-full w-16 h-16 shadow-lg focus:outline-none'
        ref={menuSearchRef}
      >
        <span className='text-white text-2xl'>
          <FaArrowUp />
        </span>
      </button>
      <button
        className='absolute right-6 top-6 text-white focus:outline-none'
        ref={closeBtn3Ref}
      >
        <LiaTimesSolid size='24' />
      </button>
      <div
        ref={searchContentRef}
        className='absolute max-w-xl top-1/2 left-4 right-4 transform -translate-y-1/2 transition-transform duration-300'
      >
        <form onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              type='search'
              name='search-field'
              placeholder='Search Here'
              required
              ref={searchInputRef} // Attach ref to input
              className='block w-full h-16 px-4 text-lg text-black border-2 border-red-500 rounded-md focus:outline-none'
            />
            <button
              type='submit'
              className='absolute right-4 top-0 h-full flex items-center text-red-500 text-2xl focus:outline-none'
              disabled={isSubmitting} // Disable button if submitting
            >
              {isSubmitting ? (
                <span>Loading...</span> // Show loading text
              ) : (
                <RiSearchLine />
              )}
            </button>
          </div>
        </form>
      </div>
      <div
        ref={bodyOverlay3Ref}
        className='fixed inset-0 bg-black opacity-50 hidden'
      ></div>
    </div>
  );
};

export default Search;
