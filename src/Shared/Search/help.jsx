import { FaArrowUp } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';
import './style.css';

const Search = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var menuSearch = document.querySelector('.menu-search');
    var closeSearch = document.querySelector('.close-search');

    if (menuSearch) {
      menuSearch.addEventListener('click', function () {
        document.body.classList.add('search-active');
      });
    }

    if (closeSearch) {
      closeSearch.addEventListener('click', function () {
        document.body.classList.remove('search-active');
      });
    }
  });

  return (
    <div>
      <div className='search-popup'>
        <button className='close-search style-two'>
          <LiaTimesSolid />
        </button>
        <button className='close-search'>
          <FaArrowUp />
        </button>
        <form method='post'>
          <div className='form-group'>
            <input
              type='search'
              name='search-field'
              placeholder='Search Here'
              required
            />
            <button type='submit'>
              <IoSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
