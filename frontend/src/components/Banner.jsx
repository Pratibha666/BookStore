import React from 'react';
import styled from 'styled-components';
import banner from '../../public/Banner.jpg';

const StyledWrapper = styled.div`
  .custom-btn {
    width: 130px;
    margin-top:20px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
    font-size: 15px;
  }

  .btn-2 {
    background: #008080;
    background: linear-gradient(0deg, #008080 0%, #008080 100%);
    border: none;
  }

  .btn-2:before {
    height: 0%;
    width: 2px;
  }

  .btn-2:hover {
    box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5), 
      inset -4px -4px 6px 0 rgba(255,255,255,.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }`;
const Banner = () => {
  return (
    <>
    <div className="flex flex-nowrap">
      <div className='ml-14 mt-24 w-1/2'>
        <h1 className='text-4xl font-bold'>
        Hello, welcome to 
        <span className='text-[#008080]'> BookStore</span><br/> A place to learn something new everyday!!!
        </h1>
        <p className='mt-20 font-bold text-[17px]'>
        Explore timeless classics, contemporary bestsellers, and niche genres—all at the click of a button. With a user-friendly interface and personalized recommendations, we make finding your next favorite read effortless. Dive into the world of stories, knowledge, and imagination with us today!
        </p>
        <input className="bg-white mt-5 px-4 py-3 outline-none w-[740px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-gray-500" name="text" placeholder="Enter email or username" type="text" />

        <StyledWrapper>
      <button className="custom-btn btn-2">Read More</button>
    </StyledWrapper>
      </div>
      <div className='w-1/2'>
        <img src={banner} className='w-160 h-160 ' />
      </div>
    </div>
    </>
  )
}

export default Banner
