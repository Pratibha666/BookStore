import React from 'react'
import list from '../../public/list.json'
import styled from 'styled-components';
import Cards from './Cards'
import {Link} from 'react-router-dom'
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

const Course = () => {


  return (
    <>
    <div className='ml-14'>
        <div className='flex justify-center mt-10'>
            <h1 className='text-4xl font-bold'>We're delighted to have you<span className='text-[#008080]'> Here!  :)</span></h1>
        </div>
            <p className='mt-10 text-[20px]'>
            Unlock new opportunities with our free and paid courses! Explore a variety of subjects, learn at your own pace, and enhance your skills. Start your journey today and make learning a part of your everyday life.
            </p>
            <Link to="/">
            <div className='flex justify-center mt-10'>
                <StyledButton>Back</StyledButton>
            </div>
            </Link>
            
            <div className='mt-12 grid grid-cols-3 gap-y-9 mb-12'>
              {
                
                list.map((item)=>(
                  <Cards key={item.id} item={item} />
                ))
              }
            </div>
    </div>
    </>
  )
}

export default Course