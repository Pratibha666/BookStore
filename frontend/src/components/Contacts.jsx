import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import contact from '../../public/Contact.jpg'
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

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted! \nName: ${formData.name} \nEmail: ${formData.email} \nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-[#008080]">Contact Us</h1>
        <Link to="/">
            <div className='flex justify-center mt-10'>
                <StyledButton>Back</StyledButton>
            </div>
        </Link>
      <div className='flex'>
      <div className='w-1/2'>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg mt-32 shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Write your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-[#008080] text-white font-bold text-[15px] py-2 px-4 rounded-md hover:bg-[#368a8a] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send 
        </button>
      </form>
      </div>
      <div className='w-1/2 mt-9'>
        <img src={contact} className='w-160 h-160 '/>
      </div>
      </div>
    </div>
  );
};

export default Contacts;
