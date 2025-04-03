import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

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

const AboutUs = () => {
  return (
    <>
    <div>
      <header className='font-extrabold text-4xl flex justify-center mt-8 text-[#008080]' >
        <h1>About Us</h1>
      </header>
        <Link to="/">
            <div className='flex justify-center mt-10'>
                <StyledButton>Back</StyledButton>
            </div>
        </Link>
      <section >
        <h2 className='flex justify-center mt-7 text-2xl font-bold'>Welcome to<span className='text-[#008080] ml-2'>BookStore</span></h2>
        <p className=' mt-5 text-2xl ml-4 mr-4'>
          Welcome to<strong> Bookstore</strong> your ultimate destination for books of every genre, all in one place!
          Whether you're a casual reader, a book enthusiast, or someone looking to discover their next great read, we've got something for you.
        </p>
        <p className='mt-5 text-2xl ml-4 mr-4'>
          At <strong>Bookstore</strong>, we believe that books are a gateway to knowledge, entertainment, and personal growth. 
          Our mission is to provide an easy, accessible platform where readers can explore, purchase, and enjoy a wide variety of books. 
          From timeless classics to the latest bestsellers, educational resources to niche genres, we offer an extensive collection for every taste and interest.
        </p>
      </section>

      <section >
        <h3 className='text-2xl flex justify-center font-bold mt-5'>What We Offer ?</h3>
        <ul className='ml-4 mr-4 text-2xl'>
          <li>We offer a curated selection of <strong>free books</strong> across various categories, so you can expand your library without spending any amount.</li>
          <li>Explore a diverse range of <strong>premium books</strong>, from the latest releases to exclusive collections.</li>
        </ul>
      </section>
      <section >
        <h3 className='flex justify-center mt-4 text-2xl font-bold'>Our Vision</h3>
        <p className='ml-4 mr-4 text-2xl'>
          We envision a world where books are available to everyone, everywhere. Our platform is designed to make literature accessible in all its forms—whether it's a cherished classic, an emerging writer's first work, or educational materials that can change lives.
        </p>
      </section>

      <section >
        <h3 className='flex justify-center mt-5 text-2xl font-bold'>Why Choose<span className='text-[#008080] ml-2'>BookStore</span>?</h3>
        <ul className='ml-4 text-2xl mt-4'>
          <li><strong>Diverse Selection</strong>: Thousands of books across multiple genres and subjects.</li>
          <li><strong>Easy Access</strong>: Browse and purchase with ease on our user-friendly platform.</li>
          <li><strong>Affordable Prices</strong>: Competitive pricing with regular discounts and promotions.</li>
          <li><strong>Regular Updates</strong>: Our library is updated regularly with new releases.</li>
        </ul>
      </section>

      <section >
        <h3 className='flex justify-center text-2xl font-bold mt-4'>Join Our Community!!!</h3>
        <p className='ml-4 text-2xl mt-3'>
          We're more than just a bookstore. Join us today and become part of a community where stories come alive and learning never stops.
        </p>
      </section>

      <footer >
        <p className='flex justify-center mt-4 text-2xl mb-5'>Thank you for choosing <span className='text-[#008080] ml-2 font-bold'>BookStore</span>. Happy reading!</p>
      </footer>
    </div>
    </>
  );
};

export default AboutUs;
