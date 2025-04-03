import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [loading, setLoading] = useState(false);
  const element = document.documentElement;
  
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const StyledWrapper = styled.div`
    .switch-container {
      position: relative;
      width: 90px;
      height: 30px;
      background: #d6d6d6;
      border-radius: 50px;
      box-shadow: inset -8px -8px 16px #ffffff, inset 8px 8px 16px #b0b0b0;
    }

    .toggle-checkbox {
      display: none;
    }

    .switch {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateY(-50%);
      border-radius: 50px;
      overflow: hidden;
      cursor: pointer;
    }

    .toggle {
      position: absolute;
      width: 30px;
      height: 20px;
      background: linear-gradient(145deg, #d9d9d9, #bfbfbf);
      border-radius: 50px;
      top: 5px;
      left: 5px;
      box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px #b0b0b0;
      transition: all 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 10px;
    }

    .led {
      width: 10px;
      height: 10px;
      background: grey;
      border-radius: 50%;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }

    .toggle-checkbox:checked + .switch .toggle {
      left: 55px;
      background: linear-gradient(145deg, #cfcfcf, #a9a9a9);
      box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px #8a8a8a;
    }

    .toggle-checkbox:checked + .switch .led {
      background: yellow;
      box-shadow: 0 0 15px 4px yellow;
    }

    .switch:hover .toggle {
      box-shadow: -4px -4px 12px #ffffff, 4px 4px 12px #9b9b9b;
    }
  `;

  // Style for Login button based on theme
  const loginButtonStyle = {
    backgroundColor: theme === 'dark' ? 'white' : 'black',
    color: theme === 'dark' ? 'black' : 'white',
    textTransform: 'none',
    fontWeight: 'bold',
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="default" sx={{ background: 'white' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}>
              BookStore
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button color="inherit" sx={{ textTransform: 'none', fontWeight: 'bold' }} component={Link} to="/">Home</Button>
              <Button
                color="inherit"
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
                component={Link}
                to="/course"
                onClick={handleClick} 
              >
                Course
              </Button>
              <Button
               color="inherit" 
               sx={{ textTransform: 'none', fontWeight: 'bold' }}
                component={Link}
                to="/contact"
                onClick={handleClick}
               >
                Contact
                </Button>
              <Button
               color="inherit" 
               sx={{ textTransform: 'none', fontWeight: 'bold' }}
               component={Link}
               to="/about"
               onClick={handleClick}
               >
                About
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TextField
                id="standard-search"
                label="Search"
                type="search"
                variant="standard"
                sx={{
                  input: {
                    color: theme === "dark" ? "white" : "black", 
                  },
                  label: {
                    color: theme === "dark" ? "white" : "black", 
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: theme === "dark" ? "white" : "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: theme === "dark" ? "yellow" : "blue",
                  },
                }}
              />
            </Box>
            <Box sx={{ marginRight: 7 }}>
              <StyledWrapper>
                <div className="switch-container">
                  <input
                    className="toggle-checkbox"
                    id="toggle-switch"
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={handleThemeToggle}
                  />
                  <label className="switch" htmlFor="toggle-switch">
                    <div className="toggle">
                      <div className="led" />
                    </div>
                  </label>
                </div>
              </StyledWrapper>
            </Box>
            <Button 
            sx={loginButtonStyle}
            component={Link}
            to="/login"
            onClick={handleClick}
            >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <Bars size={60} color="#000000" loading={loading} />
        </Box>
      )}

      <Box sx={{ paddingTop: '80px' }}>
      </Box>
    </>
  );
};

export default Navbar;
