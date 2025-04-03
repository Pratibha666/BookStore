import React from 'react';
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

const Cards = ({ item }) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className='flex justify-between'>
            <h2 className="card-title font-extrabold text-[20px]">
              {item.name}
            </h2>
            <StyledButton>{item.category}</StyledButton>
          </div>
          <div>
            <p className='ml-30 font-bold'>{item.title}</p>
            <div className="card-actions flex justify-between">
              <StyledButton>Rs. {item.price}</StyledButton>
              <StyledButton>Buy</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
