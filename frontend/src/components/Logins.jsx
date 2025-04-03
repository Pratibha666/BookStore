import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 60px;
  margin-top:100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 90%;
`;

const InputField = styled.input`
  width: 400px;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #008080;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.5);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Logins = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Simulating a login process
    console.log('Logging in with:', { email, password });

    setError('');
  };

  return (
    <>
    <h2 className="text-4xl mt-4 flex justify-center font-extrabold text-[#008080]">Login</h2>
    <Link to="/">
        <div className="flex justify-center mt-10">
          <StyledButton>Back</StyledButton>
        </div>
      </Link>
      <Container>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email" className="sr-only">
            Email:
          </label>
          <InputField
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="sr-only">
            Password:
          </label>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <StyledButton type="submit">Login</StyledButton>
      </form>
    </Container>
    </>
  );
};

export default Logins;
