import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "text-yellow-400 font-black" : undefined);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className='max-w-8 mx-2' src="/pokeball.svg" alt="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokeAPI
          </Typography>
          <NavLink className={ setActiveClass } to="/">
            <Button color='inherit'>
              Home
            </Button>
          </NavLink>
          <NavLink  className={ setActiveClass } to="/pokemon">
            <Button color='inherit'>
              Pokemon
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
