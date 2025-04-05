import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
const fetchBookDescription = async (workId) => {
  try {
    const response = await axios.get(`https://openlibrary.org/works/${workId}.json`);
    const description = response.data.description;

    if (typeof description === 'string') {
      return description;
    } else if (description && description.value) {
      return description.value;
    } else {
      return 'No description available for this book.';
    }
  } catch (error) {
    console.error("Error fetching book description:", error);
    return 'Failed to load description';
  }
};

const BookCard = ({ book }) => {
  const [description, setDescription] = useState(null);
  const [loadingDescription, setLoadingDescription] = useState(false);

  const handleMoreInfoClick = async () => {
    setLoadingDescription(true);

    
    const workId = book.key.replace('/works/', '');
    const bookDescription = await fetchBookDescription(workId);

    setDescription(bookDescription);
    setLoadingDescription(false);
  };

  return (
    <div className="border p-7 rounded-lg">
      <h3 className="font-semibold text-xl">{book.title}</h3>
      <p className="text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="mt-2 w-80 h-60"
        />
      ) : (
        <img
          src="path/to/placeholder-image.jpg"
          alt="No cover available"
          className="mt-2 w-80 h-60"
        />
      )}
      <p className="mt-2 text-sm">
        {book.first_publish_year ? `Published: ${book.first_publish_year}` : "No publish year available"}
      </p>
      <button 
      onClick={handleMoreInfoClick} 
      className="text-[#008080] text-2xl mt-2 inline-block cursor-pointer z-100 "
      >
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

export default BookCard;