import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import list from '../../public/list.json';
import Cards from './Cards';
// Styled button using styled-components
const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: #008080;
  cursor: pointer;
  transition: box-shadow 0.5s ease, background 12.5s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
              7px 7px 20px 0px rgba(0, 0, 0, .1),
              4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
  font-size: 15px;
  margin-right: 10px;

  &:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
    background: linear-gradient(0deg, #008080 0%, #008080 100%);
  }
`;

const BookCard = ({ book }) => {
  const [description, setDescription] = useState(null);
  const [loadingDescription, setLoadingDescription] = useState(false);

  const fetchBookDescription = async (workId) => {
    setLoadingDescription(true);
    try {
      const response = await axios.get(`https://openlibrary.org/works/${workId}.json`);
      const description = response.data.description;

      if (typeof description === 'string') {
        setDescription(description);
      } else if (description && description.value) {
        setDescription(description.value);
      } else {
        setDescription('No description available');
      }
    } catch (error) {
      console.error('Error fetching book description:', error);
      setDescription('Failed to load description');
    }
    setLoadingDescription(false);
  };

  const handleMoreInfoClick = () => {
    const workId = book.key.replace('/works/', '');
    fetchBookDescription(workId);
  };

  return (
    <div className="border p-7 rounded-lg">
      <h3 className="font-semibold text-xl">{book.title}</h3>
      <p className="text-gray-600">
        {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
      </p>
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="mt-2 w-80 h-60"
        />
      )}
      <p className="mt-2 text-sm">
        {book.first_publish_year ? `Published: ${book.first_publish_year}` : 'No publish year available'}
      </p>
      <button onClick={handleMoreInfoClick} className="text-[#008080] text-sm mt-2 inline-block">
        More Info
      </button>
      {loadingDescription ? (
        <p className="mt-2 text-sm">Loading description...</p>
      ) : (
        description && <p className="mt-2 text-sm">{description}</p>
      )}
    </div>
  );
};

const Course = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('javascript');

  const fetchBooks = async (searchQuery) => {
    try {
      const response = await axios.get('https://openlibrary.org/search.json', {
        params: {
          q: searchQuery,
          limit: 6,
        },
      });
      setBooks(response.data.docs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Error fetching books, please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(searchQuery);
  }, [searchQuery]);

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    fetchBooks(searchQuery);
  };

  return (
    <div className="ml-14">
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl font-bold">
          We're delighted to have you
          <span className="text-[#008080]"> Here! :)</span>
        </h1>
      </div>

      <p className="mt-10 text-[20px]">
        Unlock new opportunities with our free and paid courses! Explore a variety of subjects, learn at your own pace, and enhance your skills. Start your journey today and make learning a part of your everyday life.
      </p>

      <Link to="/">
        <div className="flex justify-center mt-10">
          <StyledButton>Back</StyledButton>
        </div>
      </Link>
      <div className="mt-12 grid grid-cols-3 gap-y-9 mb-12">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-12 mb-32">
        <h2 className="text-3xl font-bold mb-10">Recommended Books</h2>

        {error && <div className="text-red-500">{error}</div>}

        <div className="flex justify-center mt-10">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInput}
            className="p-2 border border-gray-300 rounded"
            placeholder="Search for books..."
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 bg-[#008080] text-white rounded cursor-pointer"
          >
            Search
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center mt-4 text-2xl font-bold">Loading Books...</div>
        ) : (
          <div className="mt-4 grid grid-cols-3 gap-5 mr-24">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;